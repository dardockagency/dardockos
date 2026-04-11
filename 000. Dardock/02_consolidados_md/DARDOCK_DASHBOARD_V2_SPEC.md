# DARDOCK DASHBOARD V2 SPEC

## Objetivo

Llevar el dashboard actual desde una demo correcta a un entregable premium, ejecutivo y realmente utilizable para clientes.

Este documento traduce la crítica UX/UI en cambios concretos para la siguiente iteración.

---

## Diagnóstico de la versión actual

### Lo que funciona

- dirección visual oscura correcta
- grid de fondo útil
- lenguaje visual alineado con performance
- bloque de capas del sistema bien planteado
- KPI cards suficientemente legibles
- score general presente

### Lo que falla

- hero todavía débil
- score demasiado aislado
- cards planas y con poco peso diferencial
- falta narrativa ejecutiva
- falta bloque claro de “qué funciona / qué está roto / qué hacemos ahora”
- branding técnico sin terminar

---

## Meta de la V2

La nueva versión debe responder en 10 segundos:

1. qué tan sano está el sistema
2. cuál es la fuga principal
3. qué se hace ahora

Y en 3 minutos:

4. por qué está pasando
5. qué no se debe hacer todavía
6. cuál es el roadmap

---

## Cambios obligatorios

## 1. Reforzar el hero

### Problema actual

El hero presenta información correcta, pero le falta tensión, jerarquía y dramatización del insight.

### Cambio

El hero debe reorganizarse en 3 niveles:

#### Nivel 1

- nombre del cliente
- descriptor del negocio
- periodo auditado

#### Nivel 2

- insight principal en tipografía muy grande

Ejemplos:

- `Sistema rentable, pero mal calibrado`
- `La adquisición funciona. El funnel no`
- `Buen tráfico. Mala retención del valor`

#### Nivel 3

- score
- interpretación del score
- microfrase de prioridad

Ejemplo:

- `64/100`
- `3 capas requieren corrección antes de escalar`

### Regla

El insight principal debe pesar más que el nombre del cliente.

---

## 2. Darle más protagonismo al score

### Problema actual

El gauge existe, pero no domina visualmente la lectura.

### Cambio

El score debe incluir:

- número central grande
- etiqueta de estado
- frase de interpretación debajo
- opcional: mini breakdown crítico

Ejemplo:

- `64/100`
- `Estado: Inestable`
- `Tracking y funnel limitan la escala`

### Regla

El score no es decorativo. Debe ser un centro de lectura.

---

## 3. Rejerarquizar KPI cards

### Problema actual

Todas las métricas compiten igual.

### Cambio recomendado

Separar métricas en:

#### KPI protagonista

- el más importante según el caso

Ejemplos:

- ROAS
- CPA
- CVR

#### KPIs secundarios

- inversión
- frecuencia
- ticket promedio
- revenue atribuido

### Regla

No todas las métricas merecen el mismo peso visual.

---

## 4. Mejorar el bloque de capas del sistema

### Problema actual

Está bien estructurado, pero visualmente se ve lineal y algo estándar.

### Cambios

- aumentar altura de cada card
- mejorar separación entre score, barra y comentario
- agregar estado textual muy visible
- permitir ver rápido:
  - OK
  - Warning
  - Crítico

### Adición recomendada

Resumen superior del bloque:

- `2 capas críticas`
- `2 capas en observación`
- `1 capa estable`

---

## 5. Agregar bloque narrativo obligatorio

### Problema actual

Falta una capa fuerte de lectura ejecutiva.

### Nuevo bloque obligatorio

#### Qué funciona

- 3 a 5 fortalezas reales

#### Qué necesita atención

- 3 a 5 debilidades o fugas principales

#### Qué hacemos ahora

- 3 prioridades inmediatas

### Regla

El dashboard debe pensar, no solo mostrar.

---

## 6. Hacer visible el roadmap

### Problema actual

Si el roadmap está demasiado abajo o demasiado plano, pierde fuerza.

### Cambio

El roadmap debe verse como módulo visual principal con 3 franjas:

- urgente
- 30 días
- 60-90 días

Cada acción debe tener:

- título corto
- impacto
- dependencia

---

## 7. Corregir branding técnico

### Obligatorio

Actualizar:

- `title`
- `meta description`
- `og:title`
- `og:description`
- preview social

### Regla

No publicar nada con branding genérico de Lovable.

---

## 8. Adaptar un caso real

### Problema actual

La demo “NovaSkin” sirve para probar layout, pero no valida el sistema Dardock.

### Cambio

La V2 debe montarse sobre un caso real:

- idealmente `Cosas Nuestras`

### Regla

Un dashboard gana credibilidad cuando la lógica se prueba con una cuenta real.

---

## Estructura V2 recomendada

## Sección 1 — Hero ejecutivo

- Cliente
- Rubro
- Periodo
- Insight principal
- Score
- Estado

## Sección 2 — KPI section

- 1 KPI protagonista
- 4 o 5 KPIs secundarios

## Sección 3 — Estado del sistema

- oferta
- tracking
- funnel
- campañas
- creativo

## Sección 4 — Qué funciona / Qué necesita atención

2 columnas o 2 bloques claramente diferenciados

## Sección 5 — Síntomas y causas

cards o tabla resumida

## Sección 6 — Roadmap

- urgente
- 30 días
- 60-90 días

## Sección 7 — Próximos pasos

- Dardock
- Cliente

---

## Tono visual recomendado

- oscuro premium
- verde performance
- contraste alto
- elegante
- técnico sin parecer software genérico

---

## Resultado esperado

La V2 debe sentirse como:

- una auditoría ejecutiva viva
- un tablero de decisión
- un entregable que justifica el posicionamiento premium de Dardock
