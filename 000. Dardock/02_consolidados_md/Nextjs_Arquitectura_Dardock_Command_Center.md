# OBSOLETO — NO USAR COMO REFERENCIA ACTIVA

Este documento fue reemplazado por la arquitectura oficial basada en:

- `1 sola plataforma`
- `2 portales`
  - `Portal Cliente`
  - `Workspace Agencia`
- stack actual `Vite + React`
- `JSON por cliente` para V1
- migracion tecnologica a evaluar recien en `V3`

Documento vigente:

- `000. Dardock/02_consolidados_md/Plan_Oficial_Dardock_Command_Center.md`

Este archivo se conserva solo como referencia historica de una posible migracion futura a Next.js.

# Arquitectura Next.js para Dardock Command Center

## Objetivo

Migrar el `Dardock Command Center` actual desde una base Vite/React a una arquitectura escalable en `Next.js App Router`, capaz de:

- resolver rutas dinamicas por cliente en `/:clientId/dashboard`
- leer contenido desde `MDX` o desde un proveedor headless como `Notion API`
- renderizar paneles estrategicos reutilizables
- aceptar datos dinamicos via `API routes` para KPIs y senales de performance
- sostener un layout persistente con sidebar y cambio de panel sin recargar la pagina

## Decision tecnica

La mejor arquitectura para este proyecto es:

- `Next.js App Router`
- `React Server Components` para cargar contenido y metadata por cliente
- `Client Components` para sidebar, panel switching y widgets interactivos
- `Zustand` para estado global de UI
- `MDX` como fuente inicial
- `Notion API` como capa opcional de headless CMS
- `Route Handlers` en `app/api/*` para webhooks de `Make.com`, `Meta`, `Google Ads` y futuras integraciones

## Estructura de carpetas ideal

```text
dardock-command-center/
  app/
    (marketing)/
      page.tsx
      layout.tsx
    [clientId]/
      dashboard/
        page.tsx
        loading.tsx
        error.tsx
    api/
      kpis/
        route.ts
      webhooks/
        make/
          route.ts
        meta/
          route.ts
        google-ads/
          route.ts
    globals.css
    layout.tsx
    providers.tsx

  components/
    layout/
      app-shell.tsx
      sidebar.tsx
      sidebar-item.tsx
      panel-header.tsx
    dashboard/
      dashboard-page.tsx
      panel-switcher.tsx
      summary-panel.tsx
      products-panel.tsx
      audience-panel.tsx
      strategy-panel.tsx
      audit-panel.tsx
      kpi-card.tsx
    mdx/
      mdx-renderer.tsx
      mdx-components.tsx
    ui/
      ...

  content/
    clients/
      cosas-nuestras/
        meta.json
        resumen.mdx
        productos.mdx
        audiencia.mdx
        estrategia.mdx
        auditoria.mdx
      dany-caceres/
        meta.json
        resumen.mdx
        productos.mdx
        audiencia.mdx
        estrategia.mdx
        auditoria.mdx
      genera-industrial/
        meta.json
        resumen.mdx
        productos.mdx
        audiencia.mdx
        estrategia.mdx
        auditoria.mdx

  lib/
    content/
      client-content.ts
      mdx.ts
      notion.ts
    api/
      kpis.ts
      webhooks.ts
    dashboard/
      client-registry.ts
      panel-config.ts
      panel-mapper.ts
    validations/
      kpis.ts
      clients.ts
    utils/
      cn.ts

  store/
    dashboard-ui-store.ts

  types/
    client.ts
    panel.ts
    kpi.ts
    content.ts

  public/
    ...

  middleware.ts
  next.config.ts
  package.json
  mdx-components.tsx
```

## Logica de rutas

Ruta publica base:

```text
/[clientId]/dashboard
```

Ejemplos:

- `/cosas-nuestras/dashboard`
- `/dany-caceres/dashboard`
- `/genera-industrial/dashboard`

La pagina del cliente no deberia hardcodear el contenido. Debe:

1. resolver `clientId`
2. cargar metadata del cliente
3. cargar los 5 paneles desde MDX o Notion
4. hidratar el layout persistente con la data

## Paneles estandar

Cada cliente vive bajo la misma taxonomia:

1. `Resumen`
2. `Productos`
3. `Audiencia`
4. `Estrategia`
5. `Auditoria`

Eso permite:

- consistencia entre clientes
- navegacion estable
- componentes reutilizables
- lectura comparativa

## Estrategia de contenido

### Fase 1

Usar `MDX` como base.

Ventajas:

- facil de versionar en GitHub
- editable por IA y por equipo
- bueno para documentos estrategicos
- simple de desplegar en Vercel

### Fase 2

Agregar un adaptador para `Notion API`.

La interfaz de lectura debe ser una sola:

- `getClientPanels(clientId)`

Internamente esa funcion puede leer:

- archivos locales `MDX`
- o bloques de Notion

El layout no deberia saber de donde viene la data.

## Estado global recomendado

Usar `Zustand` para UI state.

Estado minimo:

- `activePanel`
- `sidebarOpen`
- `setActivePanel`
- `toggleSidebar`
- `setSidebarOpen`

No usar Context para esto como primera opcion. `Zustand` es mas simple y desacoplado para un shell persistente de paneles.

## Endpoint `/api/kpis`

Debe soportar:

- `POST` para recibir eventos/webhooks
- `GET` para consultar KPIs del cliente

Uso previsto:

- `Make.com` envia payload consolidado
- futuro: `Meta Ads API`, `Google Ads API`, `Shopify`, `Zoho`, etc.

## Componente principal del Layout

Archivo sugerido:

`components/layout/app-shell.tsx`

```tsx
'use client'

import { Menu, X, LayoutDashboard, Package, Users, Target, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'
import { useDashboardUIStore } from '@/store/dashboard-ui-store'

type PanelKey = 'summary' | 'products' | 'audience' | 'strategy' | 'audit'

interface SidebarItem {
  key: PanelKey
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const sidebarItems: SidebarItem[] = [
  { key: 'summary', label: 'Resumen', icon: LayoutDashboard },
  { key: 'products', label: 'Productos', icon: Package },
  { key: 'audience', label: 'Audiencia', icon: Users },
  { key: 'strategy', label: 'Estrategia', icon: Target },
  { key: 'audit', label: 'Auditoria', icon: ShieldAlert },
]

interface AppShellProps {
  clientId: string
  clientName: string
  children: React.ReactNode
}

export function AppShell({ clientId, clientName, children }: AppShellProps) {
  const pathname = usePathname()
  const { activePanel, setActivePanel, sidebarOpen, toggleSidebar, setSidebarOpen } =
    useDashboardUIStore()

  return (
    <div className="min-h-screen bg-[#F1F3F4] text-slate-900">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-[280px] border-r border-slate-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Dardock Command Center
              </p>
              <h1 className="mt-1 text-sm font-semibold text-slate-900">{clientName}</h1>
            </div>

            <button
              type="button"
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              onClick={toggleSidebar}
              aria-label="Cerrar sidebar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-3 py-4">
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = activePanel === item.key

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setActivePanel(item.key)
                      setSidebarOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-slate-100 text-slate-950'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Cliente
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{clientId}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Shell persistente para visualizar estrategia, funnel, auditoria y futuras capas de KPIs.
              </p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#F1F3F4]/90 backdrop-blur">
            <div className="flex h-16 items-center justify-between px-4 md:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-600 hover:bg-white lg:hidden"
                  onClick={toggleSidebar}
                  aria-label="Abrir sidebar"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Portal dinamico
                  </p>
                  <p className="text-sm font-semibold text-slate-900">{pathname}</p>
                </div>
              </div>

              <Link
                href="/"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
              >
                Volver al indice
              </Link>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
```

## Store recomendado

Archivo sugerido:

`store/dashboard-ui-store.ts`

```ts
import { create } from 'zustand'

type PanelKey = 'summary' | 'products' | 'audience' | 'strategy' | 'audit'

interface DashboardUIState {
  activePanel: PanelKey
  sidebarOpen: boolean
  setActivePanel: (panel: PanelKey) => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

export const useDashboardUIStore = create<DashboardUIState>((set) => ({
  activePanel: 'summary',
  sidebarOpen: false,
  setActivePanel: (panel) => set({ activePanel: panel }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))
```

## Layout del dashboard por cliente

Archivo sugerido:

`app/[clientId]/dashboard/page.tsx`

```tsx
import { notFound } from 'next/navigation'
import { AppShell } from '@/components/layout/app-shell'
import { DashboardPage } from '@/components/dashboard/dashboard-page'
import { getClientDashboard } from '@/lib/content/client-content'

interface DashboardPageProps {
  params: Promise<{ clientId: string }>
}

export default async function ClientDashboardPage({ params }: DashboardPageProps) {
  const { clientId } = await params
  const client = await getClientDashboard(clientId)

  if (!client) notFound()

  return (
    <AppShell clientId={clientId} clientName={client.meta.name}>
      <DashboardPage client={client} />
    </AppShell>
  )
}
```

## Estructura de API

Archivo sugerido:

`app/api/kpis/route.ts`

```ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const KpiWebhookSchema = z.object({
  clientId: z.string().min(1),
  source: z.enum(['make', 'meta', 'google', 'shopify', 'manual']),
  timestamp: z.string(),
  metrics: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
})

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    const payload = KpiWebhookSchema.parse(json)

    // TODO:
    // 1. Guardar en DB o KV
    // 2. Revalidar ruta /[clientId]/dashboard
    // 3. Normalizar metricas por fuente

    return NextResponse.json({
      ok: true,
      message: 'Payload recibido correctamente',
      clientId: payload.clientId,
      source: payload.source,
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Payload invalido',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    )
  }
}

export async function GET(request: NextRequest) {
  const clientId = request.nextUrl.searchParams.get('clientId')

  if (!clientId) {
    return NextResponse.json(
      { ok: false, message: 'clientId es requerido' },
      { status: 400 }
    )
  }

  // TODO: reemplazar por DB real
  return NextResponse.json({
    ok: true,
    clientId,
    metrics: {
      roas: null,
      cpa: null,
      ctr: null,
      cvr: null,
      spend: null,
      updatedAt: null,
    },
  })
}
```

## Recomendacion de migracion

No rehacer todo de una.

### Fase 1

- migrar el shell a Next.js
- mover clientes a `content/clients/*`
- renderizar dashboard estatico por cliente

### Fase 2

- integrar `MDX`
- persistir `activePanel`
- agregar `api/kpis`

### Fase 3

- conectar `Make.com`
- conectar `Meta Ads / Google Ads`
- agregar storage (`Postgres` o `KV`)

### Fase 4

- opcional: `Notion API` como CMS de estrategia

## Fuentes

- Next.js Dynamic Segments: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- Next.js Route Handlers: https://nextjs.org/docs/app/api-reference/file-conventions/route
- Next.js MDX Guide: https://nextjs.org/docs/app/guides/mdx
- Next.js Route Groups: https://nextjs.org/docs/app/api-reference/file-conventions/route-groups
