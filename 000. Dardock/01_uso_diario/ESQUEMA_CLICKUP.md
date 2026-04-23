# Esquema ClickUp — Dardock
> ClickUp es la fuente de verdad para ejecución.

---

## Espacios recomendados

```text
Dardock
  ├─ Clientes Activos
  ├─ Pipeline Comercial
  ├─ Operación Interna
  └─ Producto / Command Center
```

---

## Lista por clientes activos

Opción simple:

```text
Clientes Activos
  ├─ Dany Cáceres
  ├─ Cosas Nuestras
  ├─ Genera Industrial
  └─ ADS Group
```

Opción escalable:

```text
Clientes Activos
  └─ Tareas Clientes
      custom field: Cliente
```

Para Dardock hoy conviene opción simple si el volumen sigue bajo. Migrar a opción escalable cuando haya más de 8 clientes activos.

---

## Estados

| Estado | Uso |
|---|---|
| Backlog | Existe pero no entra esta semana |
| To Do | Comprometida, no iniciada |
| In Progress | En ejecución |
| Waiting Client | Bloqueada por cliente |
| Waiting Internal | Bloqueada por Dardock/equipo |
| Review | Lista para revisión |
| Done | Cerrada con evidencia |

---

## Prioridades

| Prioridad | Criterio |
|---|---|
| Urgent | bloquea venta, tracking, entrega o gasto activo |
| High | impacta performance o cliente esta semana |
| Medium | mejora importante sin bloqueo inmediato |
| Low | nice-to-have o documentación |

---

## Custom fields mínimos

| Campo | Tipo | Valores |
|---|---|---|
| Cliente | select | Dany, Cosas Nuestras, Genera, ADS Group |
| Tipo | select | Tracking, Campañas, Creativo, Reporte, Comercial, Dashboard, Admin |
| Canal | select | Meta, Google, Mercado Libre, GHL, GA4, Notion, Interno |
| Próxima acción | text | una acción concreta |
| Definición de terminado | text | evidencia necesaria |
| Fuente | url/text | markdown, Notion o dashboard |
| Impacto | select | Revenue, Tracking, Cliente, Operación, Estrategia |

---

## Plantilla de tarea

```md
## Contexto

Qué ocurre y por qué importa.

## Acción requerida

Qué hay que hacer, en verbo concreto.

## Definición de terminado

Cómo se valida que está completo.

## Evidencia

Links, capturas, URLs, Events Manager, GA4, dashboard, Notion.
```

---

## Naming

```text
[Cliente] Acción concreta + objeto
```

Ejemplos:

```text
[Dany] Implementar microeventos GTM en landings
[Cosas Nuestras] Reconectar Pixel y validar Purchase
[Genera] Mapear lead a cotización en CRM
```

---

## Reglas

- Toda tarea debe tener próxima acción.
- Toda tarea crítica debe tener definición de terminado.
- No crear tareas tipo "revisar cuenta" sin objeto.
- Si una tarea bloquea gasto activo, prioridad `Urgent`.
- Si una tarea no tiene dueño, no está lista para ejecutarse.

---

## Acceso actual detectado

Existe una entrada antigua en Notion llamada `clickup` con acceso general a `https://clickup.com/` y nota de 2FA a Matías.

Para operar vía API o Make.com falta:

- Workspace ID
- Space/List IDs
- Estados reales
- Custom fields reales
- Token/API o conexión OAuth en Make
- Confirmar si ClickUp será fuente única de tareas
