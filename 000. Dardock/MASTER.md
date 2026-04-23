# MASTER — Dardock OS

> Archivo de navegación central. Abre esto primero en cualquier sesión de Claude Code o cuando no recuerdes dónde está algo.

---

## Cómo orientarse en 10 segundos

| Si necesitas... | Abre esto |
|---|---|
| Ver qué está pasando esta semana | [AGENCIA_ESTADO](01_uso_diario/AGENCIA_ESTADO.md) |
| Trabajar en un cliente específico | [clientes/](#clientes-activos) |
| Tomar una decisión estratégica | [consejo/](#consejo-dardock) |
| Tocar el dashboard (código) | [Dashboard/dardock-command-center/](Dashboard/dardock-command-center/) |
| Enviar una propuesta | [04_comercial_propuestas/](04_comercial_propuestas/) |
| Entender el flujo de la agencia | [FLUJO_AGENCIA_DARDOCK](01_uso_diario/FLUJO_AGENCIA_DARDOCK.md) |
| Ver reportes / minutas de clientes | [Notion — Agency HQ](#notion--estructura-y-uso) |

---

## Clientes activos

| Cliente | Estado | CLAUDE | Estado actual |
|---|---|---|---|
| Dany Cáceres | Activo | [CLAUDE.md](clientes/dany-caceres/CLAUDE.md) | [Estado_Actual](clientes/dany-caceres/Estado_Actual.md) |
| Cosas Nuestras | Activo | [CLAUDE.md](clientes/cosas-nuestras/CLAUDE.md) | [Estado_Actual](clientes/cosas-nuestras/Estado_Actual.md) |
| Genera Industrial | Activo | [CLAUDE.md](clientes/genera-industrial/CLAUDE.md) | [Estado_Actual](clientes/genera-industrial/Estado_Actual.md) |
| ADS Group | Pendiente auditoría | [CLAUDE.md](clientes/ads-group/CLAUDE.md) | — |

Template para cliente nuevo: [clientes/_TEMPLATE/](clientes/_TEMPLATE/)

---

## Consejo Dardock

Sistema de decisión estratégica. 5 personajes que deliberan antes de ejecutar.
Repo GitHub: `github.com/dardockagency/dardock-consejo` — vive localmente en `consejo/`.

### Personajes (prompts-fuente)
- [TORAK](consejo/personajes/torak.md) — Performance y ejecución
- [Syrex](consejo/personajes/syrex.md) — Oferta y copy
- [Sami](consejo/personajes/sami.md) — Marca y audiencia
- [Mr. Green](consejo/personajes/mr-green.md) — Árbitro final
- [El Errante](consejo/personajes/el-errante.md) — Antagonista estructural

### Protocolos de sesión
- [01 Sesión estratégica](consejo/protocolos/01-sesion-estrategica.md) — decisiones con impacto +1 semana
- [02 Evaluación cliente nuevo](consejo/protocolos/02-evaluacion-cliente.md) — obligatorio antes de enviar propuesta
- [03 Revisión de pricing](consejo/protocolos/03-revision-pricing.md) — trimestral o por sobrecarga
- [04 Priorización semanal](consejo/protocolos/04-priorizacion-semanal.md) — cada lunes, 20 min
- [05 Decisión rápida](consejo/protocolos/05-decision-rapida.md) — operativa menor, 5 min

### Contexto (actualizar mensualmente)
- [Estado clientes](consejo/contexto/estado-clientes.md) ← espejo de Estado_Actual de cada cliente
- [Estado financiero](consejo/contexto/estado-financiero.md) ← ingresos, márgenes, salidas fijas
- [Capacidad operativa](consejo/contexto/capacidad-operativa.md) ← horas Matías + Israel + stack

### Log de decisiones
- [Log cronológico](consejo/decisiones/log-cronologico.md) — toda decisión tomada en sesión

---

## Operación diaria

| Archivo | Para qué |
|---|---|
| [AGENCIA_ESTADO](01_uso_diario/AGENCIA_ESTADO.md) | Vista semanal — abrir cada lunes |
| [FLUJO_AGENCIA_DARDOCK](01_uso_diario/FLUJO_AGENCIA_DARDOCK.md) | Flujo oficial input → reporte |
| [POLITICA_ARCHIVOS](01_uso_diario/POLITICA_ARCHIVOS.md) | Qué va a dónde (ClickUp / Notion / local) |
| [DARDOCK_OPS_CORE](01_uso_diario/DARDOCK_OPS_CORE.md) | Protocolo Codex + ClickUp + Notion + WhatsApp |
| [SOP_Cliente_Nuevo](01_uso_diario/SOP_Cliente_Nuevo.md) | Onboarding paso a paso |
| [SOP_Revision_Semanal](01_uso_diario/SOP_Revision_Semanal.md) | Revisión semanal por cliente |
| [ACCESOS_REQUERIDOS](01_uso_diario/ACCESOS_REQUERIDOS.md) | Credenciales y accesos por cliente |

---

## Dashboard — Dardock Command Center

Producto de reporting para clientes.

- **Repo local:** [Dashboard/dardock-command-center/](Dashboard/dardock-command-center/)
- **GitHub:** `github.com/dardockagency/dardock-command-center`
- **Live:** `central.dardock.com`
- **Stack:** Vite + React 18 + TypeScript + Tailwind + Supabase

Comandos (desde `Dashboard/dardock-command-center/`):
```
npm run dev    → servidor local
npm run build  → build producción
npm run ship   → deploy a Vercel
```

Agregar cliente nuevo = nuevo archivo en `src/data/clients/<slug>.ts`

---

## Notion — estructura real

Notion opera como wiki ejecutiva y espejo de reportes. No reemplaza ClickUp (tareas) ni la carpeta local (contexto técnico compacto).

### Árbol de páginas

```
🐢 Dardock OS                          ← HOME del workspace
├── 🏢 Dardock — Agency HQ             ← Vista operativa semanal (abrir cada lunes)
│   ├── 📚 Backup MDs — Sistema Dardock   ← Espejo de markdowns locales
│   └── 🗂️ Clientes Inactivos             ← Clientes sin retainer activo
└── ⚡ Comandos & Skills — Referencia Dardock
```

### Páginas y su función real

| Página | URL / ubicación | Para qué se usa |
|---|---|---|
| **🐢 Dardock OS** | Root del workspace | Home con todas las databases embebidas; punto de entrada |
| **🏢 Agency HQ** | Hijo de Dardock OS | Alertas activas, scores de clientes, entregables de la semana — actualizar cada lunes |
| **🗂️ Clientes Inactivos** | Hijo de Agency HQ | Clientes sin retainer (Designio, Trip Arcade, FOSKO, ADS Group) con criterio de reactivación |
| **📚 Backup MDs** | Hijo de Agency HQ | Espejo de los CLAUDE.md y Estado_Actual de cada cliente; no es fuente primaria |
| **⚡ Comandos & Skills** | Hijo de Dardock OS | Referencia de comandos Claude Code y skills disponibles para el equipo |

### Databases que existen (Company OS)

El workspace usa un sistema **Company OS** con 4 databases relacionadas entre sí:

**Company OS Clients** — registro de clientes
| Campo real | Tipo | Uso |
|---|---|---|
| Name | Título | Nombre del cliente |
| Email | Email | Contacto directo |
| Contact | Relación → Team | Persona de contacto interno |
| Projects | Relación → Projects | Proyectos vinculados |
| Expenses | Relación → Expenses | Gastos del cliente |
| Location | Texto | País / ciudad |

> ⚠️ **Gap identificado:** esta database no tiene Score, Estado (Activo/Pausado), ni Servicio (Performance/Tracking). Hay que añadir esos campos para que sea útil como CRM de agencia.

**Company OS Projects** — proyectos por cliente
| Campo real | Tipo | Uso |
|---|---|---|
| Name | Título | Nombre del proyecto |
| Status | Status | Not started / In progress / Done / Archive |
| Timing | Fecha | Rango de fechas |
| Budget | Número ($) | Presupuesto del proyecto |
| Clients | Relación → Clients | Cliente asociado |
| Tasks | Relación → Tasks | Tareas del proyecto |
| Done | Rollup | % de tareas completadas |
| Type | Multi-select | Tipo de trabajo (actualmente: Webdesign, Branding, etc. — hay que actualizar a Performance, Tracking, Growth, Auditoría) |

**Company OS Tasks** — tareas por proyecto
| Campo real | Tipo | Uso |
|---|---|---|
| Name | Título | Nombre de la tarea |
| Status | Status | Not started / In progress / In Review / Done |
| Date | Fecha | Fecha límite |
| Assign | Persona | Responsable (Matías o Israel) |
| Project | Relación → Projects | Proyecto al que pertenece |
| Working hours | Número | Horas estimadas |
| Price | Número ($) | Valor de la tarea |

> ℹ️ Esta database duplica funcionalidad con ClickUp. Mientras ClickUp siga siendo fuente de tareas, esta se usa solo para proyectos con presupuesto/facturación asociada.

**Company OS Team** — equipo (Matías, Israel, etc.)

### Database pendiente de crear: Reportes

No existe una database de reportes semanales operativa. La que aparece en el workspace (`Reportes Semanal`) está anidada en un proyecto interno sin estructura real.

**Campos mínimos para crearla:**
| Campo | Tipo | Valor |
|---|---|---|
| Título | Título | `[Cliente] Reporte YYYY-MM-DD` |
| Cliente | Relación → Clients | Cliente del reporte |
| Tipo | Select | Semanal / Mensual / Auditoría |
| Estado | Status | Borrador → En revisión → Enviado |
| Decisión principal | Texto | Una línea ejecutiva |
| Link ClickUp | URL | Tarea o epic relacionado |

### Flujo real de información

```
Trabajo ejecutado (ClickUp)
        ↓
Resultado / avance relevante
        ↓
Reporte en Notion (database Reportes) ← compartible con cliente
        ↓
Si genera tarea nueva → crear en ClickUp y enlazar desde Notion
        ↓
Si cambia estado estratégico → actualizar clientes/<slug>/Estado_Actual.md local
```

### Qué NO va en Notion
- Microgestión de tareas diarias (eso es ClickUp)
- Contexto técnico detallado de campañas (eso es `clientes/<slug>/`)
- Credenciales, tokens o accesos (nunca en Notion)
- Decisiones estratégicas en proceso (eso es el Consejo Dardock → `consejo/decisiones/`)

---

## Estrategia y referencias

| Carpeta / Archivo | Contenido |
|---|---|
| [02_consolidados_md/](02_consolidados_md/) | Specs dashboard, playbooks, arquitectura |
| [03_soporte_estrategico/](03_soporte_estrategico/) | Frameworks, matrices, contexto histórico |
| [04_comercial_propuestas/](04_comercial_propuestas/) | Propuestas, pricing, checklist pre-propuesta |

---

## Reglas que no se tocan

- **ClickUp** = fuente de verdad de tareas. No duplicar tableros en markdown.
- **Notion** = fuente de verdad de reportes y wiki. No duplicar aquí.
- **Consejo Dardock** = toda decisión estratégica pasa por sesión antes de ejecutar.
- **No Next.js hasta V3** del dashboard.
- **No subdomains por cliente hasta V2.**

---

## Estructura del repo (mapa rápido)

```
000. Dardock/
├── MASTER.md                  ← estás aquí
├── CLAUDE.md                  ← instrucciones para Claude Code
├── 00_LEER_PRIMERO.md         ← entrada para humanos
├── 01_uso_diario/             ← operación viva de la agencia
├── clientes/                  ← contexto estratégico por cliente
├── consejo/                   ← Consejo Dardock (repo independiente)
├── Dashboard/                 ← productos con código
│   └── dardock-command-center/  ← repo independiente
├── 02_consolidados_md/        ← estrategia consolidada y specs
├── 03_soporte_estrategico/    ← referencia, no fuente diaria
├── 04_comercial_propuestas/   ← propuestas y pricing
└── 90_archivo_legacy/         ← archivo histórico (no usar como fuente)
```
