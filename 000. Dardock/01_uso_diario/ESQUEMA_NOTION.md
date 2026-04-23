# Esquema Notion — Dardock
> Notion es la fuente de verdad para conocimiento, reportes y minutas.

---

## Bases recomendadas

```text
Clientes
Reportes
Minutas
Activos Estratégicos
Playbooks
```

No usar Notion como tablero principal de tareas si ClickUp está activo.

---

## Páginas Notion detectadas

| Página | Uso recomendado |
|---|---|
| `Dardock OS` | Home principal de Notion |
| `Dardock — Agency HQ` | Vista ejecutiva semanal; debe alinearse con `AGENCIA_ESTADO.md` |
| `Comandos & Skills — Referencia Dardock` | Referencia de operación Claude/Codex |
| `Backup MDs — Sistema Dardock` | Espejo/backup de markdowns, no fuente primaria |

Actualizar primero la carpeta local y después sincronizar una versión limpia a Notion cuando sea reportable o compartible.

---

## Database: Clientes

| Propiedad | Tipo | Uso |
|---|---|---|
| Cliente | title | Nombre del cliente |
| Slug | text | `dany-caceres` |
| Estado | select | Activo, Pipeline, Pausado, Cerrado |
| Servicio | select | Performance, Tracking, Growth, Auditoría |
| Score | number | score ejecutivo |
| Tracking | select | Crítico, Parcial, Sano |
| Próximo hito | text | una línea |
| Carpeta local | url/text | ruta o referencia |
| ClickUp | url | lista o vista filtrada |

---

## Database: Reportes

| Propiedad | Tipo | Uso |
|---|---|---|
| Título | title | `[Cliente] Reporte semanal YYYY-MM-DD` |
| Cliente | relation | Clientes |
| Fecha | date | fecha del reporte |
| Tipo | select | Semanal, Mensual, Auditoría, Tracking, Comercial |
| Estado | select | Borrador, En revisión, Enviado |
| Decisión principal | text | una línea ejecutiva |
| Link ClickUp | url | tarea o epic relacionado |

---

## Template de reporte semanal

```md
# [Cliente] — Reporte semanal

## Resumen ejecutivo

Qué cambió esta semana y qué implica para el negocio.

## Métricas clave

- Inversión:
- Resultados:
- CPA/ROAS/CPL:
- Tracking:

## Avances

- 

## Bloqueos

- 

## Decisiones

- 

## Próximas acciones

| Acción | Responsable | Fecha |
|---|---|---|
| | | |
```

---

## Database: Minutas

| Propiedad | Tipo | Uso |
|---|---|---|
| Título | title | `[Cliente] Reunión YYYY-MM-DD` |
| Cliente | relation | Clientes |
| Fecha | date | fecha |
| Participantes | multi-select | personas |
| Decisiones | text | bullets |
| Tareas creadas | url/text | links ClickUp |

---

## Regla de uso

Notion guarda contexto compartible. ClickUp ejecuta.

Si una minuta genera tareas, deben crearse en ClickUp y enlazarse desde Notion.
