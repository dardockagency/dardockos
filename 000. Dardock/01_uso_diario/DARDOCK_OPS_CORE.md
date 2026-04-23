# DARDOCK OPS CORE
> Protocolo operativo para trabajar Dardock con Codex, ClickUp, Notion y WhatsApp sin duplicar tareas.

---

## Principio central

No crear otra base de datos paralela.

Cada herramienta tiene una responsabilidad:

| Herramienta | Rol | Fuente de verdad para |
|---|---|---|
| ClickUp | Ejecución | tareas, responsables, fechas, estados |
| Notion | Conocimiento | wiki, minutas, briefs, reportes compartibles |
| WhatsApp | Captura rápida | notas de voz/texto, avances, pedidos urgentes |
| Carpeta Dardock | Contexto estratégico | estado por cliente, decisiones, sistemas técnicos |
| Codex | Operador estratégico | leer, sintetizar, actualizar y preparar acciones |

---

## Archivos activos mínimos

Para operar la agencia, Codex debe abrir solo:

1. `01_uso_diario/AGENCIA_ESTADO.md`
2. `clientes/<slug>/CLAUDE.md`
3. `clientes/<slug>/Estado_Actual.md`
4. Un archivo técnico específico si aplica, por ejemplo `Sistema_Conversiones.md`

No abrir `03_soporte_estrategico/` ni `90_archivo_legacy/` salvo pedido explícito.

---

## Regla de tareas

Las tareas ejecutables viven en ClickUp.

La carpeta local puede mencionar pendientes estratégicos, pero no debe convertirse en tablero paralelo. Si una tarea requiere responsable, fecha, estado o comentario operativo, debe existir en ClickUp.

Formato recomendado para referenciar tareas:

```text
ClickUp: CU-1234
Estado: En curso
Próxima acción: validar eventos en GTM
```

---

## Regla de reportes

Los reportes formales o compartibles viven en Notion.

La carpeta local puede guardar contexto de trabajo y decisiones, pero el entregable ordenado para cliente/equipo debe tener página Notion o documento exportable.

Formato mínimo de reporte:

```md
## Avance
- Qué se completó

## Bloqueos
- Qué impide avanzar

## Decisiones
- Qué se decidió y por qué

## Próximas acciones
- Acción, responsable, fecha
```

---

## Flujo de sesión con Codex

### Revisar cliente

1. Leer `AGENCIA_ESTADO.md`.
2. Leer `clientes/<slug>/CLAUDE.md`.
3. Leer `clientes/<slug>/Estado_Actual.md`.
4. Si la pregunta es técnica, abrir solo el sistema específico del cliente.
5. Devolver resumen ejecutivo, bloqueos, oportunidades y próximas acciones.

### Dejar avance

1. Identificar cliente y tema.
2. Actualizar `Estado_Actual.md` solo si cambia el estado real.
3. Preparar comentario para ClickUp si corresponde.
4. Preparar bloque de reporte para Notion si corresponde.
5. No duplicar una tarea si ya pertenece a ClickUp.

### Crear tarea

1. Convertir la nota en una tarea accionable.
2. Asignar cliente, prioridad, tipo, responsable sugerido y definición de terminado.
3. Si ClickUp está conectado, crearla allá.
4. Si ClickUp no está conectado, entregar payload listo para crear.

---

## Comandos naturales esperados

```text
revisa pendientes de Dany
```

Salida esperada:
- leer estado vivo
- separar bloqueos de tareas
- sugerir acciones priorizadas

```text
deja avance de Dany: Purchase ya está verde, falta GTM
```

Salida esperada:
- actualizar estado si corresponde
- preparar comentario ClickUp
- preparar reporte Notion

```text
crea tarea para Cosas Nuestras: reconectar Pixel y validar CAPI
```

Salida esperada:
- payload ClickUp listo
- prioridad
- definición de terminado

---

## No hacer

- No crear nuevos markdowns globales de tareas si ClickUp será fuente de verdad.
- No escanear toda la carpeta sin motivo.
- No usar archivos legacy como fuente principal.
- No guardar tokens, secretos, API keys ni credenciales en markdowns.
- No marcar como completado algo técnico sin validación concreta.

---

## Decisión operativa

Dardock opera con pocos archivos vivos y herramientas especializadas:

- `AGENCIA_ESTADO.md` = visión semanal.
- `Estado_Actual.md` = snapshot de cliente.
- ClickUp = ejecución.
- Notion = documentación/reportes.
- WhatsApp = captura.
- Codex = operador que conecta y sintetiza.
