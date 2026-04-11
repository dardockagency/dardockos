# DARDOCK PROMPT SYSTEM

## Objetivo

Tener un solo archivo desde el cual Dardock pueda:

- auditar clientes con prompts consistentes
- leer síntomas y causas probables
- generar dashboard ejecutivo
- producir un roadmap según lo que funciona y lo que no

Este archivo no reemplaza el criterio.

Lo estandariza.

---

## Principio central

Sí: los frameworks y la matriz de síntomas funcionan dentro de prompts.

Pero no como prompts sueltos.

Funcionan mejor si el sistema tiene esta secuencia:

1. input del cliente
2. diagnóstico por capas
3. lectura síntoma → causa
4. síntesis observación → decisión → acción
5. salida en dashboard + roadmap

---

## Estructura del sistema de prompts

### Prompt 1 — Auditoría base

Objetivo:

- detectar dónde está roto el sistema del cliente

Se apoya en:

- framework diagnóstico por capas
- matriz síntoma → causa

### Prompt 2 — Dashboard ejecutivo

Objetivo:

- traducir hallazgos a un formato visual y ejecutivo

Se apoya en:

- observación → decisión → acción

### Prompt 3 — Roadmap priorizado

Objetivo:

- convertir el diagnóstico en plan de trabajo

Se apoya en:

- capa principal afectada
- impacto en negocio
- urgencia
- dependencia técnica u operativa

---

## Input mínimo requerido

Antes de correr cualquier prompt, pedir o consolidar:

- nombre del cliente
- rubro
- objetivo de negocio
- oferta principal
- canales activos
- presupuesto de medios
- métricas disponibles
- estado del tracking
- síntoma principal
- links o activos relevantes

Si faltan demasiados datos, el prompt no debe inventar.

Debe marcar gaps.

---

## Prompt 1 — Auditoría base por capas

Usa este prompt:

```text
Actúa como estratega senior de growth y performance para Dardock.

Vas a auditar un cliente usando este orden obligatorio:
1. Oferta
2. Tracking
3. Funnel
4. Campañas
5. Creativo

No empieces por anuncios si el problema puede estar arriba del sistema.

Además, usa esta lógica:
- un síntoma no es una causa
- debes distinguir observación, decisión y acción
- si faltan datos, debes marcarlo como gap crítico

Contexto del cliente:
- Nombre:
- Rubro:
- Objetivo:
- Oferta principal:
- Canales activos:
- Presupuesto:
- Estado tracking:
- Síntoma principal:
- Métricas disponibles:
- Comentarios adicionales:

Quiero la salida en este formato:

1. Resumen ejecutivo
2. Diagnóstico por capas
3. Síntomas detectados y causas probables
4. Qué está funcionando
5. Qué está roto o débil
6. Gaps de información críticos
7. Recomendaciones priorizadas

Reglas:
- No entregues consejos genéricos
- Conecta cada hallazgo con impacto en negocio
- Si algo no puede concluirse, dilo explícitamente
- Prioriza claridad sobre cantidad
```

---

## Prompt 2 — Dashboard ejecutivo

Usa este prompt:

```text
Actúa como consultor ejecutivo de performance para Dardock.

Toma la auditoría del cliente y conviértela en una estructura de dashboard ejecutivo.

Debes organizar la salida en:

1. Resumen ejecutivo
2. Métricas clave
3. Estado del sistema por capas:
   - Oferta
   - Tracking
   - Funnel
   - Campañas
   - Creativo
4. Qué está funcionando
5. Qué necesita atención
6. Riesgos
7. Próximos pasos

Usa la lógica:
- Observación
- Decisión
- Acción

Quiero que cada bloque se pueda usar luego para:
- un documento dashboard
- una presentación ejecutiva
- una reunión con cliente

Reglas:
- no hacer data dump
- cada insight debe responder “so what?”
- no esconder problemas
- usar tono ejecutivo y directo
```

---

## Prompt 3 — Roadmap priorizado

Usa este prompt:

```text
Actúa como operador senior de growth para Dardock.

Con base en la auditoría y dashboard del cliente, crea un roadmap accionable dividido por prioridad y horizonte temporal.

Quiero el roadmap en 3 bloques:

1. Corto plazo (esta semana / 2 semanas)
2. Mediano plazo (30 días)
3. Largo plazo (60-90 días)

Para cada acción incluye:
- Qué se hará
- Por qué importa
- Qué capa del sistema afecta
- Impacto esperado
- Dependencia o requisito previo

Además, separa:
- Quick wins
- Bloqueadores estructurales
- Oportunidades de escala

Reglas:
- no propongas escalar presupuesto como primera solución
- no confundas mejoras tácticas con cambios estructurales
- conecta cada acción a revenue, eficiencia o claridad operativa
```

---

## Secuencia de uso recomendada

### Paso 1

Correr `Prompt 1` para auditar.

### Paso 2

Tomar la salida y correr `Prompt 2` para convertirla en dashboard ejecutivo.

### Paso 3

Tomar ambos resultados y correr `Prompt 3` para generar roadmap.

---

## Cómo se conectan los frameworks

### Framework diagnóstico por capas

Sirve para:

- ordenar el análisis
- evitar culpar anuncios demasiado pronto

### Matriz síntoma → causa

Sirve para:

- orientar la investigación
- acelerar hipótesis de causa probable

### Observación → decisión → acción

Sirve para:

- estructurar la salida ejecutiva
- evitar análisis sin plan

### Input → procesamiento → output

Sirve para:

- mantener coherencia entre datos, lectura y entregable final

---

## Output final ideal para Dardock

Si el sistema funciona bien, de un cliente deberías obtener:

1. Auditoría base
2. Dashboard ejecutivo
3. Roadmap priorizado

Y luego eso puede convertirse en:

- plataforma estratégica
- propuesta
- reporte mensual
- reunión de revisión

---

## Plantilla rápida de uso interno

### Caso

- cliente:
- síntoma principal:
- objetivo de negocio:

### Salida esperada

- auditoría:
- dashboard:
- roadmap:

### Decisión final

- qué hacemos primero:
- qué no hacemos todavía:
- qué falta pedir al cliente:

---

## Regla final

El valor no está en tener muchos prompts.

El valor está en tener pocos prompts, bien estructurados, que siempre produzcan:

- claridad
- prioridad
- acción
