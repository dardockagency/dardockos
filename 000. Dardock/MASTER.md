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

Notion es introducción, documentación y log. No es tasking (eso es ClickUp) ni contexto técnico (eso es la carpeta local).

### Árbol de páginas

```
🐢 Dardock OS                             ← HOME: axiomas, stack, equipo, navegación
├── 🏢 Dardock — Agency HQ                ← Vista operativa semanal (abrir cada lunes)
│   ├── 📋 Log de Avances (database)      ← Registro de avances, bloqueos y decisiones
│   ├── 📚 Backup MDs — Sistema Dardock   ← Espejo de markdowns locales (GitHub manda)
│   └── 🗂️ Clientes Inactivos             ← Clientes sin retainer activo
├── 🎭 Consejo Dardock                    ← Documentación de los 5 personajes + protocolos
└── ⚡ Comandos & Skills — Referencia Dardock
```

### Páginas y su función

| Página | Para qué se usa |
|---|---|
| **🐢 Dardock OS** | Home del workspace: quiénes somos, axiomas, stack operativo, equipo, navegación |
| **🏢 Agency HQ** | Alertas activas, scores de clientes, entregables de la semana — actualizar cada lunes |
| **📋 Log de Avances** | Database: un registro por cada avance, bloqueo, decisión o reporte enviado |
| **🎭 Consejo Dardock** | Documentación completa de los 5 personajes y 5 protocolos de sesión |
| **📚 Backup MDs** | Espejo legible de los markdowns del OS; fuente primaria sigue siendo GitHub |
| **🗂️ Clientes Inactivos** | Designio, Trip Arcade, FOSKO, ADS Group — criterio de reactivación documentado |
| **⚡ Comandos & Skills** | Referencia de comandos Claude Code, flujo de sesión, URLs clave |

### Databases activas

**Clientes Dardock** — CRM de la agencia

| Campo | Tipo | Valores |
|---|---|---|
| Name | Título | Nombre del cliente |
| Estado | Select | Activo · Pipeline · Pausado · Cerrado |
| Servicio | Multi-select | Performance · Tracking · Growth System · Auditoría · Setup one-shot |
| Score | Número | 0–100 (score ejecutivo del estado) |
| Tracking_Salud | Select | Sano · Parcial · Crítico |
| Próximo hito | Texto | Una línea con la acción más urgente |
| Email | Email | Contacto directo |
| Projects | Relación → Proyectos Dardock | Proyectos vinculados |

**Proyectos Dardock** — proyectos por cliente

| Campo | Tipo | Valores |
|---|---|---|
| Name | Título | Nombre del proyecto |
| Status | Status | Not started · In progress · Done · Archive |
| Type | Multi-select | Performance Ads · Tracking & CAPI · Growth System · Auditoría · Funnel & Landing · Setup one-shot · Contenido |
| Timing | Fecha | Rango del proyecto |
| Budget | Número ($) | Presupuesto |
| Clients | Relación → Clientes | Cliente asociado |
| Done | Rollup | % tareas completadas |

**📋 Log de Avances** — registro operativo semanal

| Campo | Tipo | Valores |
|---|---|---|
| Título | Título | Descripción del avance/bloqueo/decisión |
| Cliente | Select | Dany Cáceres · Cosas Nuestras · Genera Industrial · ADS Group · Dardock interno |
| Semana | Fecha | Semana a la que pertenece |
| Tipo | Select | Avance · Bloqueo · Decisión · Alerta · Reporte enviado |
| Resumen | Texto | Qué pasó |
| Decisión o siguiente paso | Texto | Qué se decidió o qué sigue |
| Link ClickUp | URL | Tarea relacionada |
| Estado | Select | Activo · Resuelto · Archivado |

### Stack operativo completo

| Herramienta | Rol | Fuente de verdad de... |
|---|---|---|
| **GitHub** | Repos: OS + dashboard + consejo | Código y markdowns versionados |
| **Notion** | Documentación + wiki + log de avances | Conocimiento compartible y reportes |
| **ClickUp** | Tasking: tareas, responsables, fechas | Ejecución diaria del equipo |
| **Make.com** | Automatización de flujos | Pipelines: WhatsApp → ClickUp → Notion |
| **Claude Code** | Operaciones con IA | Auditorías, análisis, código, copy |
| **Stape / sGTM** | Server-side tracking | Señal limpia de conversiones |
| **Vercel** | Deploy automático del dashboard | central.dardock.com |

### Flujo de información

```
Trabajo ejecutado (ClickUp)
        ↓
Avance, bloqueo o decisión relevante
        ↓
Registrar en Log de Avances (Notion) ← fuente de historial
        ↓
Si es reporte para cliente → redactar y marcar "Reporte enviado"
        ↓
Si cambia estado estratégico → actualizar clientes/<slug>/Estado_Actual.md en GitHub
```

### Qué NO va en Notion
- Microgestión de tareas diarias → ClickUp
- Contexto técnico de campañas → `clientes/<slug>/` en GitHub
- Decisiones estratégicas en proceso → Consejo Dardock (`consejo/decisiones/`)
- Credenciales o tokens → nunca en Notion

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
