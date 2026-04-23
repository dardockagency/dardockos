# Integraciones — ClickUp, Notion, WhatsApp y Codex
> Diseño operativo para conectar captura, ejecución y documentación.

---

## Arquitectura recomendada

```text
WhatsApp
  ↓
Make.com webhook
  ↓
Clasificador IA
  ↓
Router operativo
  ├─ ClickUp: tareas, estados, comentarios
  ├─ Notion: reportes, minutas, wiki
  ├─ Carpeta local: contexto estratégico
  └─ Codex: análisis, síntesis, actualización controlada
```

---

## Responsabilidad por herramienta

| Herramienta | Se usa para | No se usa para |
|---|---|---|
| ClickUp | tareas ejecutables, responsables, deadlines | estrategia larga o wiki |
| Notion | reportes, minutas, base de conocimiento | microgestión diaria |
| WhatsApp | captura rápida, notas, comandos naturales | almacenar la verdad final |
| Carpeta Dardock | contexto compacto por cliente | tablero de tareas completo |
| Codex | procesar, redactar, ordenar y actualizar | guardar secretos |

---

## Tipos de entrada desde WhatsApp

| Tipo | Ejemplo | Acción |
|---|---|---|
| Tarea | "crear tarea Dany validar GTM" | Crear tarea ClickUp |
| Avance | "avance Dany Purchase verde" | Comentar tarea + actualizar reporte |
| Bloqueo | "Cosas Nuestras sigue sin pixel" | Crear/actualizar bloqueo |
| Consulta | "qué falta en Dany" | Responder desde ClickUp + Estado_Actual |
| Reporte | "arma reporte semanal Dany" | Generar bloque Notion |

---

## Router mínimo

El clasificador debe extraer:

```json
{
  "intent": "task | progress | blocker | query | report",
  "client": "dany-caceres",
  "topic": "tracking",
  "priority": "urgent | high | medium | low",
  "owner": "Matías",
  "raw_message": "...",
  "next_action": "..."
}
```

---

## Flujo: crear tarea

Entrada:

```text
Crear tarea Dany: implementar GTM para form_start y whatsapp_click. Alta prioridad.
```

Salida ClickUp:

```json
{
  "name": "[Dany] Implementar GTM para form_start y whatsapp_click",
  "status": "to do",
  "priority": "high",
  "assignees": ["Matías"],
  "tags": ["dany-caceres", "tracking", "gtm"],
  "custom_fields": {
    "Cliente": "Dany Cáceres",
    "Tipo": "Tracking",
    "Canal": "Meta Ads",
    "Próxima acción": "Crear triggers y validar en Events Manager",
    "Definición de terminado": "Eventos visibles en GTM Preview, GA4 DebugView y Meta Test Events"
  }
}
```

---

## Flujo: dejar avance

Entrada:

```text
Avance Dany: Purchase ya está verde por API. Falta GTM.
```

Acciones:

1. Comentar tarea ClickUp relacionada.
2. Si cambia el estado real, actualizar `clientes/dany-caceres/Estado_Actual.md`.
3. Crear bloque de avance para Notion.

Bloque Notion:

```md
## Dany Cáceres — Avance tracking

**Avance**
- Purchase ya aparece en verde vía API de conversiones.

**Pendiente**
- Implementar GTM para clicks, formularios, WhatsApp e InitiateCheckout.

**Decisión**
- Purchase queda como evento principal de ventas.
- Microeventos quedan para diagnóstico, audiencias y lectura de intención.
```

---

## Flujo: consultar pendientes

Entrada:

```text
Qué falta en Dany esta semana?
```

Consulta:

1. ClickUp: tareas abiertas del cliente.
2. Carpeta: `Estado_Actual.md` y archivo técnico si aplica.
3. Notion: último reporte si está conectado.

Respuesta:

```md
## Pendientes Dany

1. Implementar microeventos GTM.
2. Validar Lead/Contact por CAPI si hay dato identificable.
3. Auditar UTMs de campañas evergreen.

Bloqueo: GA4 sigue sin validar.
```

---

## Seguridad

- Tokens y API keys viven en variables de entorno o gestores de secretos.
- No se pegan tokens en Notion, ClickUp ni markdown.
- WhatsApp puede capturar instrucciones, no credenciales.
- Los logs de Make.com deben ocultar secrets si se activan webhooks.

---

## Decisión recomendada

Primera versión:

1. WhatsApp captura mensajes.
2. Make.com clasifica intención.
3. ClickUp recibe tareas/avances.
4. Notion recibe reportes.
5. Codex mantiene la carpeta como contexto estratégico y prepara entregables.
