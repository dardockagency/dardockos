# Flujo Agencia Dardock
> Sistema operativo simple para convertir inputs en ejecución, reportes y mejora continua.

---

## Principio

Dardock opera como growth partner + performance ads operator.

El flujo debe proteger tres cosas:

1. Tiempo estratégico de Matías.
2. Trazabilidad de tareas.
3. Calidad de decisiones de performance.

---

## Flujo macro

```text
Input
  -> Triage
  -> Diagnóstico
  -> Plan de acción
  -> Ejecución
  -> Validación
  -> Reporte
  -> Decisión siguiente
```

---

## 1. Input

Canales posibles:

| Canal | Uso |
|---|---|
| WhatsApp | Captura rápida, urgencias, notas de voz |
| ClickUp Form / tarea | Pedido ejecutable |
| Reunión | Decisiones, bloqueos, contexto |
| Notion | Briefs, minutas, reportes |
| Drive | Entregables, respaldos, materiales pesados |

Regla:

Si el input requiere responsable, fecha o seguimiento, debe terminar en ClickUp.

---

## 2. Triage

Todo pedido se clasifica antes de ejecutarse.

| Tipo | Va a |
|---|---|
| Tracking / CAPI / Pixel / GA4 / GTM | ClickUp, tipo `Tracking` |
| Campañas Meta / Google / ML | ClickUp, tipo `Campañas` |
| Creatividades / copies / briefs | ClickUp, tipo `Creativo` |
| Reporte / minuta / decisión | Notion |
| Estrategia cliente | Markdown cliente + Notion si es compartible |
| Archivo pesado / evidencia | Drive + link en ClickUp/Notion |

Checklist de triage:

- Cliente
- Objetivo
- Urgencia
- Responsable
- Fecha
- Definición de terminado
- Fuente/evidencia

---

## 3. Diagnóstico

Antes de proponer acciones, revisar:

| Capa | Pregunta |
|---|---|
| Oferta | Qué se vende y con qué margen |
| Funnel | Dónde ocurre la conversión |
| Tracking | Qué eventos están confiables |
| Campañas | Qué objetivo, presupuesto y aprendizaje existen |
| Creatividad | Qué hipótesis comunica la pieza |
| Operación | Quién ejecuta y qué bloquea |

No optimizar tácticas si el problema está en oferta, tracking o funnel.

---

## 4. Plan de acción

Cada plan debe quedar en tres niveles:

| Nivel | Dónde vive |
|---|---|
| Tareas ejecutables | ClickUp |
| Decisión/criterio | Markdown local o Notion |
| Entregable compartible | Notion / Drive |

Formato mínimo:

```md
## Objetivo
Resultado esperado.

## Acciones
- Acción concreta.

## Validación
Cómo sabremos que está listo.

## Riesgo
Qué puede romperse o bloquearse.
```

---

## 5. Ejecución

Reglas:

- Toda tarea crítica debe tener dueño.
- Toda tarea crítica debe tener definición de terminado.
- Toda tarea que afecte gasto activo debe tener prioridad alta o urgente.
- Toda entrega debe dejar evidencia en ClickUp.
- WhatsApp no reemplaza comentarios de tarea.

Estados recomendados:

```text
Backlog -> To Do -> In Progress -> Waiting Client/Internal -> Review -> Done
```

---

## 6. Validación

Nada técnico se marca como sano sin evidencia.

Ejemplos:

| Tema | Evidencia mínima |
|---|---|
| Pixel | Events Manager / Pixel Helper |
| CAPI | Events Manager con evento server activo |
| GA4 | Evento registrado con fuente/medio |
| GTM | Preview/Test Events |
| Campaña | Captura o datos de Ads Manager |
| Landing | URL final + prueba de CTA/form |

---

## 7. Reporte

Los reportes compartibles viven en Notion.

Estructura base:

```md
## Resumen ejecutivo
Qué cambió y qué implica.

## Métricas clave
Datos relevantes.

## Avances
Qué se completó.

## Bloqueos
Qué impide avanzar.

## Decisiones
Qué se decidió.

## Próximas acciones
Acción, responsable, fecha.
```

---

## 8. Decisión siguiente

Cada ciclo debe cerrar con una decisión:

| Estado | Decisión |
|---|---|
| Señal rota | Corregir tracking/base técnica |
| Señal baja | Iterar oferta, landing o mensaje |
| Señal estable | Optimizar estructura y presupuesto |
| Señal fuerte | Escalar con control |

No aumentar presupuesto como primera respuesta a performance débil.

---

## Cadencia operativa

| Ritmo | Acción |
|---|---|
| Diario | Revisar ClickUp crítico y bloqueos |
| Lunes | Actualizar `AGENCIA_ESTADO.md` |
| Semanal | Reporte por cliente activo |
| Mensual | Decisión de continuidad, foco y margen |

---

## Roles

| Rol | Responsable actual | Foco |
|---|---|---|
| Dirección estratégica | Matías | Diagnóstico, decisiones, cliente |
| Creatividad / diseño | Israel | Piezas con brief claro |
| Automatización / soporte | Por definir | Make, WhatsApp, integraciones |
| Reporting / datos | Por definir | Dashboards, reportes, evidencia |

---

## Comandos naturales para operar

```text
revisa pendientes de Dany
```

```text
crea tarea para Cosas Nuestras: reconectar Pixel y validar eventos
```

```text
deja avance en Dany: Purchase verde, faltan microeventos
```

```text
arma reporte semanal de Genera Industrial
```

```text
ordena archivos del cliente Dany y dime qué queda activo
```
