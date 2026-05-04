# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What lives here

This is the Dardock OS — a monorepo combining operational markdown docs and the **Dardock Command Center** dashboard product.

**Start with [`MASTER.md`](MASTER.md)** — it's the single navigation index for the entire system, with direct links to every file you'll need.

Three repos live under this folder, each with its own GitHub remote:

| Folder | GitHub repo | Purpose |
|---|---|---|
| `Dashboard/dardock-command-center/` | `dardockagency/dardock-command-center` | Client reporting dashboard |
| `consejo/` | `dardockagency/dardock-consejo` | Strategic decision layer |
| `.` (this root) | `dardockagency/...` | Agency OS — docs, ops, client context |

The active product code lives in `Dashboard/dardock-command-center/`. `consejo/` is a cloned repo for local access — push changes with `cd consejo && git push`.

---

## Dashboard — commands

All commands run from `Dashboard/dardock-command-center/`:

```bash
npm run dev          # local dev server (Vite)
npm run build        # production build → dist/
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest watch mode
npm run ship         # deploy via scripts/deploy-dashboard.sh
```

Run a single test file:
```bash
npx vitest run src/test/MyComponent.test.tsx
```

---

## Dashboard — architecture

**Stack:** Vite + React 18 + TypeScript + Tailwind + shadcn/ui + React Router v6 + TanStack Query + Zustand + Supabase

**Two portals, one repo, one deploy:**

| Portal | Routes | Guard |
|---|---|---|
| Client | `/clientes/:slug`, `/client/:clientId` | `ProtectedRoute scope="client"` |
| Agency | `/agency`, `/agency/:clientId` | `ProtectedRoute scope="agency"` |

Portal separation is by **route only** in V1. No localStorage, no flags, no toggles.

**Data layer — multi-client via TypeScript files:**

- `src/data/clientData.ts` — shared types (`ClientData`, `KPI`, `SystemLayer`, `Finding`, etc.)
- `src/data/clients/<slug>.ts` — one file per client with all dashboard data
- Adding a new client = new file in `src/data/clients/` + route entry

**Components:**

- `src/components/dashboard/` — all dashboard UI blocks (HeroSection, ScoreGauge, KPIStrip, SystemLayers, Roadmap, etc.)
- `src/components/auth/` — ProtectedRoute, SignOutButton, Supabase client
- `src/components/ui/` — shadcn/ui primitives (do not edit directly)

**Auth:**

- Supabase for auth. Client initialized in `src/components/auth/client.ts`
- `ProtectedRoute` wraps agency and client routes with scope-based access control
- V1 has no auth on public routes; auth gates only agency and client portals

**Deploy:**

- GitHub → Vercel auto-deploy on push to main
- Repo: `github.com/dardockagency/dardock-command-center`
- Live URL: `central.dardock.com`
- `vercel.json` configured for SPA fallback (required for React Router)

---

## Dardock OS — document system

Start here before scanning the workspace:

| File | Purpose |
|---|---|
| `00_LEER_PRIMERO.md` | First navigation layer for humans and agents |
| `01_uso_diario/AGENCIA_ESTADO.md` | Weekly agency state and active priorities |
| `01_uso_diario/FLUJO_AGENCIA_DARDOCK.md` | Official agency workflow from input to report |
| `01_uso_diario/POLITICA_ARCHIVOS.md` | File classification, naming, cleanup and source-of-truth rules |

| Folder | Purpose |
|---|---|
| `01_uso_diario/` | Active operational files — start here for daily ops |
| `01_uso_diario/AGENCIA_ESTADO.md` | **Agency master view — open every Monday** |
| `01_uso_diario/FLUJO_AGENCIA_DARDOCK.md` | Agency workflow and operating cadence |
| `01_uso_diario/POLITICA_ARCHIVOS.md` | Rules for what stays local, what goes to ClickUp/Notion/Drive |
| `01_uso_diario/DARDOCK_OPS_CORE.md` | Operating protocol for Codex + ClickUp + Notion + WhatsApp |
| `01_uso_diario/INTEGRACIONES_CLICKUP_NOTION_WHATSAPP.md` | Integration design and routing logic |
| `01_uso_diario/ESQUEMA_CLICKUP.md` | ClickUp execution schema |
| `01_uso_diario/ESQUEMA_NOTION.md` | Notion documentation/reporting schema |
| `01_uso_diario/SOP_Cliente_Nuevo.md` | Standard procedure for onboarding a new client |
| `01_uso_diario/SOP_Revision_Semanal.md` | Standard procedure for weekly client reviews |
| `02_consolidados_md/` | Master strategy + Command Center architecture decisions |
| `03_soporte_estrategico/` | Historical context, useful reference |
| `04_comercial_propuestas/` | Client proposals and pricing |
| `clientes/` | **Client operational context — one folder per client** |
| `clientes/_TEMPLATE/` | Template for new clients (CLAUDE.md + Estado_Actual.md) |
| `90_archivo_legacy/` | Archived, do not use as source of truth |

**Rule:** If something is already in `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`, don't create it elsewhere.

**Folder hygiene rule:** do not scan heavy/reference folders by default. Avoid `Cursos/`, `Facturas/`, `Logo/`, `90_archivo_legacy/`, zips, PDFs and `03_soporte_estrategico/archivados_integrados/` unless the user explicitly asks for historical/source material.

## Tool source-of-truth rules

| Need | Source of truth |
|---|---|
| Executable tasks, owners, due dates, comments | ClickUp |
| Reports, meeting notes, wiki, shared documentation | Notion |
| Fast capture and field updates | WhatsApp bot |
| Strategic client context | `clientes/<slug>/Estado_Actual.md` |
| Weekly agency view | `01_uso_diario/AGENCIA_ESTADO.md` |

Do not create global markdown task boards if ClickUp is the task source of truth. Local markdown can mention strategic blockers and state changes, but operational tasks belong in ClickUp.

## Client session workflow

To work on a specific client:
```
1. Read 00_LEER_PRIMERO.md                     ← navigation guardrail, if the session is broad
2. Read 01_uso_diario/AGENCIA_ESTADO.md        ← weekly agency view
3. Read clientes/<slug>/CLAUDE.md              ← client rules + pointers
4. Read clientes/<slug>/Estado_Actual.md       ← what's live this week
5. Read client-specific system files only when needed
```

Active clients: `dany-caceres` · `cosas-nuestras` · `genera-industrial` · `ads-group` (pending audit)

---

## Consejo Dardock — capa de decisión estratégica

Repo separado: `github.com/dardockagency/dardock-consejo` (privado). Vive localmente en `consejo/`.

Contiene 5 personajes-prompts (TORAK, Syrex, Sami, Mr. Green, El Errante) y 5 protocolos de sesión. Se usa en el Proyecto Claude "Consejo Dardock" en claude.ai para deliberar decisiones estratégicas antes de ejecutar.

**Relación con este OS:**

| Archivo en dardock-consejo | Fuente en este OS |
|---|---|
| `contexto/estado-clientes.md` | `clientes/*/Estado_Actual.md` |
| `contexto/estado-financiero.md` | `01_uso_diario/AGENCIA_ESTADO.md` |
| `contexto/capacidad-operativa.md` | `01_uso_diario/AGENCIA_ESTADO.md` |
| `decisiones/log-cronologico.md` | Decisiones tomadas → se ejecutan via ClickUp |

El Consejo consume el OS como input. El OS ejecuta lo que el Consejo decide. No reemplaza ClickUp ni Notion — solo cubre la capa de decisión que no tiene otro hogar.

Actualizar los archivos de `/contexto/` en dardock-consejo una vez por mes, idealmente junto con `AGENCIA_ESTADO.md`.

---

## Routines

Estas son instrucciones persistentes que corren automáticamente cuando el usuario usa ciertos triggers. No preguntar — ejecutar directamente.

### Routine: Audit semanal de cliente
**Trigger:** "audita [cliente] esta semana" / "audit semanal [cliente]" / "genera el informe semanal"
**Pasos:**
1. Leer `00_MASTER_DATA/[Cliente]/[Cliente]_MasterData.json` — fuente de verdad del cliente
2. Leer `clientes/[slug]/Estado_Actual.md` — estado operativo de la semana
3. Leer los datos del período que el usuario haya pasado (CSV, texto, métricas de plataformas)
4. Copiar `01_uso_diario/AUDITORIA_SEMANAL_TEMPLATE.html`, llenarlo con datos reales
5. Guardar como `clientes/[slug]/audits/audit_semanal_[AAAA-MM-DD].html`
6. Actualizar `score_capas`, `metricas`, `proximos_hitos` y `campañas_activas` en `[Cliente]_MasterData.json`
7. Actualizar `Estado_Actual.md` con el nuevo estado semanal
8. Git commit + push → GitHub Action sincroniza automáticamente a Supabase → Dashboard actualizado
9. Reportar: qué mejoró, qué empeoró, las 3 acciones urgentes de la semana

**Nota API (activo cuando Google Ads API esté aprobada):** antes del paso 3, correr
`node scripts/pull-platform-data.js [slug]` para traer métricas frescas de Google Ads + GA4 + Meta.

### Routine: Superaudit mensual de cliente
**Trigger:** "superaudit [cliente]" / "audit mensual [cliente]" / "informe mensual [cliente]"
**Pasos:**
1. Leer `00_MASTER_DATA/[Cliente]/[Cliente]_MasterData.json` — estado completo del cliente
2. Leer los últimos 4 `audits/audit_semanal_*.html` del cliente — tendencia del mes
3. Leer `clientes/[slug]/Estado_Actual.md` — pendientes y bloqueos activos
4. Generar análisis profundo por las 5 capas: Oferta · Tracking · Funnel · Campañas · Creativo
5. Guardar como `clientes/[slug]/audits/superaudit_[AAAA-MM].html`
6. Actualizar `score_capas.global` y todos los sub-scores en `[Cliente]_MasterData.json`
7. Actualizar `_last_updated` y `proximos_hitos` para el mes siguiente
8. Git commit + push → Supabase sync → Dashboard actualizado
9. Reportar: score global vs mes anterior, los 3 mayores avances, las 3 prioridades del mes siguiente

### Routine: Onboarding nuevo cliente
**Trigger:** "onboarding [nombre cliente]" / "nuevo cliente [nombre]"
**Pasos:**
1. Crear carpeta `clientes/[slug]/` con subcarpetas `audits/`, `design/`, `lead-magnet/`
2. Copiar `clientes/_TEMPLATE/CLAUDE.md` → llenar con datos del cliente
3. Copiar `clientes/_TEMPLATE/Estado_Actual.md` → llenar con estado inicial
4. Crear `00_MASTER_DATA/[Cliente]/[Cliente]_MasterData.json` desde `clientes/_TEMPLATE/MasterData.json`
5. Git commit + push → cliente aparece en Supabase y en el Dashboard
6. Confirmar estructura lista para trabajar

### Routine: Actualizar estado de agencia
**Trigger:** "actualiza el estado de la agencia" / "update lunes"
**Pasos:**
1. Leer `01_uso_diario/AGENCIA_ESTADO.md`
2. Leer los `Estado_Actual.md` de cada cliente activo
3. Consolidar en una vista de agencia: qué está crítico, qué está bien, qué necesita decisión
4. Actualizar `AGENCIA_ESTADO.md` con fecha y cambios

---

## Key decisions (do not revisit without reason)

- **No Next.js until V3** — current stack is Vite + React Router. Next.js eval deferred until backend/auth/persistence are real requirements.
- **No per-client repos in V1/V2** — one repo, one deploy, data changes per client file only.
- **No subdomains per client yet** — all clients under `central.dardock.com/:slug`.
- **ClickUp is the task source of truth** — do not duplicate full task boards in markdown.
- **Notion is the report/wiki source of truth** — local markdown stays operational and compact.
