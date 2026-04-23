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
