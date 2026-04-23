# Codex Instructions — Dashboard V2 Implementation

## Context

This is a Vite + React + Zustand + TailwindCSS project (pure client-side).
NO Next.js. NO SSR. NO server components. NO next/link.
Font: Plus Jakarta Sans (already linked in index.html).

## Task

Implement the Dardock Command Center V2 dashboard by creating the following files exactly as specified below.

---

## Step 1 — Create `src/types/dashboard.ts`

Create this file with the following content:

```typescript
export type StatusLevel = 'healthy' | 'warning' | 'critical' | 'missing'

export interface SystemLayer {
  id: string
  label: string
  score: number
  status: StatusLevel
  note: string
}

export interface KPI {
  id: string
  label: string
  value: string | number
  unit: string
  delta?: string
  deltaDirection?: 'up' | 'down' | 'neutral'
  status: StatusLevel
  target?: string
  isProtagonist?: boolean
}

export interface RoadmapItem {
  id: string
  action: string
  impact: string
  layer: string
  dependency?: string
  owner: 'dardock' | 'client' | 'both'
}

export interface SymptomCause {
  symptom: string
  cause: string
  layer: string
  impact: 'high' | 'medium' | 'low'
}

export interface ClientData {
  id: string
  name: string
  industry: string
  period: string
  insight: string
  systemHealth: {
    globalScore: number
    status: StatusLevel
    statusLabel: string
    interpretation: string
    layers: SystemLayer[]
  }
  kpis: KPI[]
  narrative: {
    working: string[]
    attention: string[]
    now: string[]
  }
  symptoms: SymptomCause[]
  roadmap: {
    urgent: RoadmapItem[]
    thirtyDays: RoadmapItem[]
    ninetyDays: RoadmapItem[]
  }
  nextSteps: {
    dardock: string[]
    client: string[]
  }
}
```

---

## Step 2 — Create `src/data/clients/cosas-nuestras.ts`

Create this file:

```typescript
import type { ClientData } from '../../types/dashboard'

export const cosasNuestras: ClientData = {
  id: 'cosas-nuestras',
  name: 'Cosas Nuestras',
  industry: 'Ecommerce · Decoración · Shopify',
  period: 'Abril 2026',
  insight: 'Sistema rentable, pero mal calibrado',
  systemHealth: {
    globalScore: 54,
    status: 'warning',
    statusLabel: 'Inestable',
    interpretation: 'Tracking y funnel limitan la escala real',
    layers: [
      { id: 'offer',     label: 'Oferta',   score: 72, status: 'warning',  note: 'Value Ladder incompleta — falta mid-ticket y retención' },
      { id: 'tracking',  label: 'Tracking', score: 30, status: 'critical', note: 'CAPI desconectado — EMQ 4.2/10, atribución rota' },
      { id: 'funnel',    label: 'Funnel',   score: 58, status: 'warning',  note: 'Drop severo en consideración — sin retargeting activo' },
      { id: 'campaigns', label: 'Campañas', score: 61, status: 'warning',  note: 'ROAS 1.8× vs target 3.0× — 3 ad sets bajo break-even' },
      { id: 'creative',  label: 'Creativo', score: 45, status: 'critical', note: 'Fatiga creativa — mismos assets 47 días sin rotación' },
    ],
  },
  kpis: [
    {
      id: 'roas',
      label: 'ROAS',
      value: '1.8×',
      unit: '',
      delta: '-40% vs target',
      deltaDirection: 'down',
      status: 'critical',
      target: '3.0×',
      isProtagonist: true,
    },
    {
      id: 'cpa',
      label: 'CPA Google',
      value: '$8.200',
      unit: 'CLP',
      delta: '+37% sobre meta',
      deltaDirection: 'down',
      status: 'warning',
      target: '$6.000',
    },
    {
      id: 'cvr',
      label: 'CVR Landing',
      value: '1.4%',
      unit: '',
      delta: '-44% vs benchmark',
      deltaDirection: 'down',
      status: 'critical',
      target: '2.5%',
    },
    {
      id: 'aov',
      label: 'Ticket Promedio',
      value: '$42.000',
      unit: 'CLP',
      delta: '-24% vs meta',
      deltaDirection: 'down',
      status: 'warning',
      target: '$55.000',
    },
    {
      id: 'emq',
      label: 'EMQ Meta (CAPI)',
      value: '4.2',
      unit: '/10',
      delta: 'Bajo el mínimo',
      deltaDirection: 'down',
      status: 'critical',
      target: '7.0',
    },
  ],
  narrative: {
    working: [
      'Tráfico pagado llega con volumen suficiente — Meta y Google generan sesiones',
      'Ticket promedio alto para la categoría — producto tiene margen para trabajar',
      'Estructura de campañas Google ordenada — PMax + Search bien separados',
      'Shopping activo y con buena cobertura de catálogo',
    ],
    attention: [
      'CAPI desconectado desde el 8 de abril — toda la atribución Meta está ciega',
      'Sin retargeting en consideración — el 86% de los que evalúan se van sin impacto',
      'Creativos sin rotación hace 47 días — frecuencia alta, CTR cayendo',
      'Sin flujo email post-compra — retención depende solo de remarketing pagado',
      'Value Ladder sin entry ticket — sin puerta de entrada bajo $15.000',
    ],
    now: [
      'Reconectar CAPI y validar EMQ > 7 antes de cualquier otra acción en Meta',
      'Activar campaña de retargeting consideración con creativos nuevos',
      'Producir 3 nuevos conceptos creativos — detener la fatiga esta semana',
    ],
  },
  symptoms: [
    {
      symptom: 'ROAS bajo break-even en Meta',
      cause: 'Atribución rota por CAPI desconectado — el sistema optimiza a ciegas',
      layer: 'Tracking',
      impact: 'high',
    },
    {
      symptom: 'CVR landing 1.4% (benchmark 2.5%)',
      cause: 'Sin prueba social en producto, sin urgencia, sin retargeting de respaldo',
      layer: 'Funnel',
      impact: 'high',
    },
    {
      symptom: 'CTR cayendo semana a semana',
      cause: 'Fatiga creativa — mismos assets 47 días, audiencia quemada',
      layer: 'Creativo',
      impact: 'medium',
    },
    {
      symptom: 'LTV bajo vs categoría',
      cause: 'Sin email post-compra, sin club de clientes, sin upsell estructurado',
      layer: 'Funnel',
      impact: 'medium',
    },
  ],
  roadmap: {
    urgent: [
      {
        id: 'r-001',
        action: 'Reconectar CAPI Meta',
        impact: 'Restaura atribución completa — base de todo lo demás',
        layer: 'Tracking',
        owner: 'dardock',
      },
      {
        id: 'r-002',
        action: 'Pausar ad sets ROAS < 0.8×',
        impact: 'Libera ~$90k/mes de inversión desperdiciada',
        layer: 'Campañas',
        dependency: 'CAPI conectado primero',
        owner: 'dardock',
      },
    ],
    thirtyDays: [
      {
        id: 'r-003',
        action: 'Activar retargeting consideración',
        impact: 'Recuperar hasta 30% del tráfico que abandona sin comprar',
        layer: 'Funnel',
        dependency: 'Nuevos creativos listos',
        owner: 'dardock',
      },
      {
        id: 'r-004',
        action: 'Producir 3 nuevos conceptos creativos',
        impact: 'Sacar fatiga — CTR objetivo +25%',
        layer: 'Creativo',
        owner: 'client',
      },
      {
        id: 'r-005',
        action: 'Instalar flujo email post-compra (3 emails)',
        impact: 'Activa canal de retención sin costo de adquisición',
        layer: 'Funnel',
        owner: 'both',
      },
    ],
    ninetyDays: [
      {
        id: 'r-006',
        action: 'Lanzar entry-ticket bajo $12.000',
        impact: 'Llena gap Value Ladder — amplía base de compradores nuevos',
        layer: 'Oferta',
        owner: 'client',
      },
      {
        id: 'r-007',
        action: 'Construir audiencia lookalike de compradores reales',
        impact: 'Prospección de mayor calidad — CPA objetivo -20%',
        layer: 'Campañas',
        dependency: 'CAPI + 500 conversiones limpias en el pixel',
        owner: 'dardock',
      },
    ],
  },
  nextSteps: {
    dardock: [
      'Reconectar y validar CAPI esta semana',
      'Auditar y pausar ad sets bajo break-even',
      'Configurar campaña retargeting consideración',
      'Entregar brief creativo para 3 conceptos nuevos',
    ],
    client: [
      'Aprobar brief creativo y coordinar producción',
      'Activar plan de email marketing (Klaviyo o similar)',
      'Definir entry-ticket — producto o bundle bajo $12.000',
    ],
  },
}
```

---

## Step 3 — Create `src/components/dashboard/HeroExecutive.tsx`

```tsx
import React from 'react'
import type { ClientData } from '../../types/dashboard'

const STATUS_CONFIG = {
  healthy:  { label: 'Estable',   color: 'text-[#4cc120]', bg: 'bg-[#4cc120]/10', border: 'border-[#4cc120]/30', glow: 'shadow-[0_0_24px_rgba(76,193,32,0.25)]'  },
  warning:  { label: 'Inestable', color: 'text-[#f5c842]', bg: 'bg-[#f5c842]/10', border: 'border-[#f5c842]/30', glow: 'shadow-[0_0_24px_rgba(245,200,66,0.2)]'   },
  critical: { label: 'Crítico',   color: 'text-[#D93025]', bg: 'bg-[#D93025]/10', border: 'border-[#D93025]/30', glow: 'shadow-[0_0_24px_rgba(217,48,37,0.2)]'    },
  missing:  { label: 'Sin datos', color: 'text-zinc-500',  bg: 'bg-zinc-800/40',  border: 'border-zinc-700',     glow: ''                                          },
}

const LAYER_DOT = {
  healthy:  'bg-[#4cc120]',
  warning:  'bg-[#f5c842]',
  critical: 'bg-[#D93025]',
  missing:  'bg-zinc-600',
}

interface Props {
  client: ClientData
}

export function HeroExecutive({ client }: Props) {
  const { systemHealth, name, industry, period, insight } = client
  const status = STATUS_CONFIG[systemHealth.status]

  const criticalCount = systemHealth.layers.filter(l => l.status === 'critical').length
  const warningCount  = systemHealth.layers.filter(l => l.status === 'warning').length
  const healthyCount  = systemHealth.layers.filter(l => l.status === 'healthy').length

  const scoreColor =
    systemHealth.globalScore >= 75 ? '#4cc120' :
    systemHealth.globalScore >= 50 ? '#f5c842' : '#D93025'

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${scoreColor}18 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">

          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              <span className="text-zinc-300">{name}</span>
              <span className="text-zinc-700">·</span>
              <span>{industry}</span>
              <span className="text-zinc-700">·</span>
              <span>{period}</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {insight}
            </h1>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${status.color} ${status.bg} ${status.border}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${LAYER_DOT[systemHealth.status]} animate-pulse`} />
                {systemHealth.statusLabel}
              </span>
              <p className="text-sm font-medium text-zinc-400">{systemHealth.interpretation}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {criticalCount > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#D93025]/10 border border-[#D93025]/20 px-3 py-1 text-xs font-semibold text-[#D93025]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D93025]" />
                  {criticalCount} capa{criticalCount > 1 ? 's' : ''} crítica{criticalCount > 1 ? 's' : ''}
                </span>
              )}
              {warningCount > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#f5c842]/10 border border-[#f5c842]/20 px-3 py-1 text-xs font-semibold text-[#f5c842]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5c842]" />
                  {warningCount} en observación
                </span>
              )}
              {healthyCount > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#4cc120]/10 border border-[#4cc120]/20 px-3 py-1 text-xs font-semibold text-[#4cc120]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4cc120]" />
                  {healthyCount} estable{healthyCount > 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>

          <div className={`flex flex-col justify-center rounded-2xl border bg-[#111111] p-7 ${status.border} ${status.glow}`}>
            <div className="flex items-end gap-1 leading-none">
              <span className="text-8xl font-black tabular-nums tracking-tighter" style={{ color: scoreColor }}>
                {systemHealth.globalScore}
              </span>
              <span className="mb-3 text-2xl font-bold text-zinc-600">/100</span>
            </div>
            <p className={`mt-2 text-sm font-bold uppercase tracking-widest ${status.color}`}>
              Estado: {systemHealth.statusLabel}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">{systemHealth.interpretation}</p>
            <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
              {systemHealth.layers.map((layer) => (
                <div key={layer.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${LAYER_DOT[layer.status]}`} />
                    <span className="text-xs text-zinc-400">{layer.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-16 overflow-hidden rounded-full bg-zinc-800">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${layer.score}%`, backgroundColor: scoreColor }} />
                    </div>
                    <span className="w-8 text-right text-xs font-semibold tabular-nums text-zinc-500">{layer.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
```

---

## Step 4 — Create `src/components/dashboard/KpiGrid.tsx`

```tsx
import React from 'react'
import type { KPI } from '../../types/dashboard'

const STATUS_STYLES = {
  healthy:  { value: 'text-[#4cc120]', badge: 'bg-[#4cc120]/10 text-[#4cc120] border-[#4cc120]/25', dot: 'bg-[#4cc120]', glow: '0_0_32px_rgba(76,193,32,0.18)'  },
  warning:  { value: 'text-[#f5c842]', badge: 'bg-[#f5c842]/10 text-[#f5c842] border-[#f5c842]/25', dot: 'bg-[#f5c842]', glow: '0_0_32px_rgba(245,200,66,0.15)' },
  critical: { value: 'text-[#D93025]', badge: 'bg-[#D93025]/10 text-[#D93025] border-[#D93025]/25', dot: 'bg-[#D93025]', glow: '0_0_32px_rgba(217,48,37,0.15)'  },
  missing:  { value: 'text-zinc-500',  badge: 'bg-zinc-800 text-zinc-500 border-zinc-700',           dot: 'bg-zinc-600', glow: 'none'                             },
}

const DELTA_ARROW = { up: '↑', down: '↓', neutral: '→' }

interface PropsKpiCard { kpi: KPI; protagonist?: boolean }

function KpiCard({ kpi, protagonist = false }: PropsKpiCard) {
  const s = STATUS_STYLES[kpi.status]

  if (protagonist) {
    return (
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-7"
        style={{ boxShadow: s.glow !== 'none' ? s.glow : undefined }}>
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-20 blur-3xl"
          style={{ background: kpi.status === 'healthy' ? '#4cc120' : kpi.status === 'warning' ? '#f5c842' : '#D93025' }} />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${s.dot} animate-pulse`} />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{kpi.label}</span>
          </div>
          {kpi.target && <span className="text-xs text-zinc-600">Meta: <span className="text-zinc-500">{kpi.target}</span></span>}
        </div>
        <div className="mt-5">
          <div className="flex items-end gap-1 leading-none">
            <span className={`text-7xl font-black tabular-nums tracking-tighter ${s.value}`}>{kpi.value}</span>
            {kpi.unit && <span className="mb-2 text-2xl font-semibold text-zinc-600">{kpi.unit}</span>}
          </div>
        </div>
        {kpi.delta && (
          <div className="mt-4 flex items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${s.badge}`}>
              {kpi.deltaDirection ? DELTA_ARROW[kpi.deltaDirection] : ''} {kpi.delta}
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between rounded-xl border border-white/5 bg-[#111111] p-4 transition-colors hover:border-white/10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{kpi.label}</span>
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      </div>
      <div className="mt-3 flex items-end gap-1 leading-none">
        <span className={`text-3xl font-black tabular-nums tracking-tight ${s.value}`}>{kpi.value}</span>
        {kpi.unit && <span className="mb-0.5 text-base font-medium text-zinc-600">{kpi.unit}</span>}
      </div>
      <div className="mt-3 flex items-center justify-between">
        {kpi.delta
          ? <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${s.badge}`}>{kpi.deltaDirection ? DELTA_ARROW[kpi.deltaDirection] : ''} {kpi.delta}</span>
          : <span />}
        {kpi.target && <span className="text-[10px] text-zinc-600">Meta {kpi.target}</span>}
      </div>
    </div>
  )
}

interface Props { kpis: KPI[] }

export function KpiGrid({ kpis }: Props) {
  const protagonist = kpis.find(k => k.isProtagonist) ?? kpis[0]
  const secondaries = kpis.filter(k => k.id !== protagonist.id).slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Métricas clave</span>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <KpiCard kpi={protagonist} protagonist />
        <div className="grid grid-cols-2 gap-4">
          {secondaries.map(kpi => <KpiCard key={kpi.id} kpi={kpi} />)}
        </div>
      </div>
    </section>
  )
}
```

---

## Step 5 — Replace `src/pages/ClientDashboard.tsx`

Replace the ENTIRE content of this file with:

```tsx
import React from 'react'
import { HeroExecutive } from '../components/dashboard/HeroExecutive'
import { KpiGrid }        from '../components/dashboard/KpiGrid'
import type { ClientData, StatusLevel, RoadmapItem } from '../types/dashboard'
import { cosasNuestras } from '../data/clients/cosas-nuestras'

const STATUS_DOT: Record<StatusLevel, string> = {
  healthy: 'bg-[#4cc120]', warning: 'bg-[#f5c842]', critical: 'bg-[#D93025]', missing: 'bg-zinc-600',
}
const STATUS_BAR: Record<StatusLevel, string> = {
  healthy: 'bg-[#4cc120]', warning: 'bg-[#f5c842]', critical: 'bg-[#D93025]', missing: 'bg-zinc-700',
}
const STATUS_LABEL: Record<StatusLevel, string> = {
  healthy: 'Estable', warning: 'Observación', critical: 'Crítico', missing: 'Sin datos',
}
const STATUS_TEXT: Record<StatusLevel, string> = {
  healthy: 'text-[#4cc120]', warning: 'text-[#f5c842]', critical: 'text-[#D93025]', missing: 'text-zinc-500',
}
const IMPACT_COLOR: Record<string, string> = {
  high:   'text-[#D93025] bg-[#D93025]/10 border-[#D93025]/25',
  medium: 'text-[#f5c842] bg-[#f5c842]/10 border-[#f5c842]/25',
  low:    'text-zinc-400 bg-zinc-800 border-zinc-700',
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">{label}</span>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  )
}

function RoadmapCol({ title, accent, items }: { title: string; accent: string; items: RoadmapItem[] }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#111111] p-5">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{title}</p>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm font-semibold text-white">{item.action}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.impact}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500">{item.layer}</span>
              {item.dependency && <span className="text-[10px] text-zinc-600">Req: {item.dependency}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const CLIENT_REGISTRY: Record<string, ClientData> = {
  'cosas-nuestras': cosasNuestras,
}

interface Props { clientId?: string }

export default function ClientDashboard({ clientId = 'cosas-nuestras' }: Props) {
  const client = CLIENT_REGISTRY[clientId] ?? cosasNuestras

  return (
    <div className="min-h-screen bg-[#070708] font-sans text-white antialiased">

      {/* Topbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070708]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4cc120] text-sm font-black text-[#070808]">D</div>
            <span className="text-sm font-bold tracking-tight text-white">
              Dardock <span className="font-light text-zinc-500">Command Center</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-zinc-600 sm:block">Última actualización: {client.period}</span>
            <div className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
              client.systemHealth.status === 'healthy' ? 'border-[#4cc120]/30 bg-[#4cc120]/10 text-[#4cc120]' :
              client.systemHealth.status === 'warning'  ? 'border-[#f5c842]/30 bg-[#f5c842]/10 text-[#f5c842]' :
              'border-[#D93025]/30 bg-[#D93025]/10 text-[#D93025]'}`}>
              <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${STATUS_DOT[client.systemHealth.status]}`} />
              {client.systemHealth.globalScore}/100
            </div>
          </div>
        </div>
      </header>

      <HeroExecutive client={client} />
      <KpiGrid kpis={client.kpis} />

      {/* System layers */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <SectionHeader label="Estado del sistema por capas" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {client.systemHealth.layers.map(layer => (
            <div key={layer.id} className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#111111] p-5 transition-colors hover:border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">{layer.label}</span>
                <span className={`text-xs font-semibold ${STATUS_TEXT[layer.status]}`}>{STATUS_LABEL[layer.status]}</span>
              </div>
              <div className="flex items-end gap-1 leading-none">
                <span className={`text-4xl font-black tabular-nums ${STATUS_TEXT[layer.status]}`}>{layer.score}</span>
                <span className="mb-1 text-base text-zinc-600">/100</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className={`h-full rounded-full transition-all duration-700 ${STATUS_BAR[layer.status]}`} style={{ width: `${layer.score}%` }} />
              </div>
              <p className="text-xs leading-relaxed text-zinc-500">{layer.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <SectionHeader label="Lectura ejecutiva" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-[#4cc120]/15 bg-[#111111] p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4cc120]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#4cc120]">Qué funciona</p>
            </div>
            <ul className="space-y-3">
              {client.narrative.working.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#4cc120]/50" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#D93025]/15 bg-[#111111] p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D93025]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#D93025]">Qué necesita atención</p>
            </div>
            <ul className="space-y-3">
              {client.narrative.attention.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#D93025]/50" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#f5c842]/15 bg-[#111111] p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f5c842]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5c842]">Qué hacemos ahora</p>
            </div>
            <ul className="space-y-3">
              {client.narrative.now.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#f5c842]/50" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <SectionHeader label="Síntomas y causas" />
        <div className="overflow-hidden rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-600">Síntoma</th>
                <th className="hidden px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-600 md:table-cell">Causa probable</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-600">Capa</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-600">Impacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {client.symptoms.map((s, i) => (
                <tr key={i} className="transition-colors hover:bg-white/[0.015]">
                  <td className="px-5 py-4 font-medium text-zinc-200">{s.symptom}</td>
                  <td className="hidden px-5 py-4 text-zinc-500 md:table-cell">{s.cause}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">{s.layer}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${IMPACT_COLOR[s.impact]}`}>
                      {s.impact === 'high' ? 'Alto' : s.impact === 'medium' ? 'Medio' : 'Bajo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <SectionHeader label="Roadmap de acción" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <RoadmapCol title="Esta semana — Urgente" accent="#D93025" items={client.roadmap.urgent} />
          <RoadmapCol title="30 días"               accent="#f5c842" items={client.roadmap.thirtyDays} />
          <RoadmapCol title="60–90 días"            accent="#4cc120" items={client.roadmap.ninetyDays} />
        </div>
      </section>

      {/* Next steps */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionHeader label="Próximos pasos" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/5 bg-[#111111] p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#4cc120]">Dardock hace</p>
            <ul className="space-y-3">
              {client.nextSteps.dardock.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#4cc120]/15 text-[10px] font-bold text-[#4cc120]">{i + 1}</span>
                  <span className="text-sm leading-relaxed text-zinc-400">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#111111] p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#f5c842]">Cliente hace</p>
            <ul className="space-y-3">
              {client.nextSteps.client.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f5c842]/15 text-[10px] font-bold text-[#f5c842]">{i + 1}</span>
                  <span className="text-sm leading-relaxed text-zinc-400">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-xs text-zinc-700">Dardock Command Center · {client.name} · {client.period}</span>
          <span className="text-xs text-zinc-700">dardock.com</span>
        </div>
      </footer>

    </div>
  )
}
```

---

## Step 6 — Verify `index.html` has the font

Make sure this line exists inside `<head>` in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

## Step 7 — Commit and push

```bash
git add .
git commit -m "feat: implement V2 dashboard — HeroExecutive, KpiGrid, dark premium theme

- Add src/types/dashboard.ts with full ClientData type system
- Add src/data/clients/cosas-nuestras.ts with real demo data
- Add HeroExecutive component: insight-first hero with score panel
- Add KpiGrid component: asymmetric layout, 1 protagonist + 4 secondary KPIs
- Rebuild ClientDashboard: dark premium theme, system layers, narrative, roadmap
- Multi-client registry pattern via clientId prop"

git push origin main
```

---

## What was changed (summary for CHANGELOG)

| File | Action | Description |
|---|---|---|
| `src/types/dashboard.ts` | Created | TypeScript types for ClientData, KPI, SystemLayer, RoadmapItem |
| `src/data/clients/cosas-nuestras.ts` | Created | Full demo data for Cosas Nuestras client |
| `src/components/dashboard/HeroExecutive.tsx` | Created | Insight-first hero with score card and layer breakdown |
| `src/components/dashboard/KpiGrid.tsx` | Created | Asymmetric KPI grid: 1 protagonist + 4 secondary |
| `src/pages/ClientDashboard.tsx` | Replaced | Full V2 dark premium dashboard with all 7 sections |
