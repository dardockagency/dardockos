# Arquitectura Definitiva del Sistema Dardock

## Objetivo

Definir la arquitectura final de Dardock como sistema operativo de agencia.

Este documento traduce la lógica inicial trabajada con Gemini a una estructura usable, pequeña y conectada con los archivos actuales.

La idea no es tener un “súper cerebro” abstracto.

La idea es tener un sistema claro de:

- identidad
- fuentes
- procesamiento
- outputs
- operación

---

## Resumen ejecutivo

La arquitectura correcta para Dardock tiene 5 capas:

1. identidad central
2. repositorio de conocimiento
3. motores de procesamiento
4. interfaces de salida
5. operación y mantenimiento

Cada capa tiene una función distinta.

El error sería mezclar todo en un solo documento, una sola voz o una sola interfaz.

---

## 1. Capa de Identidad Central

### Función

Definir qué es Dardock, qué no negocia y bajo qué lógica toma decisiones.

### Qué contiene

- posicionamiento
- promesa
- foco de agencia
- fee base
- límites de servicio
- lógica de ofertas
- principios de operación

### Documento principal actual

- `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`

### Regla

Toda fuente, mentor o framework queda subordinado a esta capa.

Ningún referente externo puede contradecir la identidad central.

---

## 2. Capa de Repositorio de Conocimiento

### Función

Almacenar el conocimiento fuente que alimenta la toma de decisiones.

### Qué contiene

- mentores
- frameworks
- casos
- contexto de clientes
- estructura histórica de agencia
- referencias estratégicas

### Subcapas recomendadas

#### A. Axiomas

Qué principios no se negocian.

Ejemplos:

- Hormozi para oferta
- Brunson para funnel
- Kennedy para direct response
- Miller para claridad

#### B. Casos y contexto

- aprendizajes de clientes
- reportes
- fricciones reales
- quiebres observados

#### C. Referencias de sistema

- arquitectura inicial
- revisión de cerebros
- ideas de mentoría

### Documentos actuales relacionados

En `03_soporte_estrategico/`:

- `dardock_context.md`
- `Revision_Gemini_Arquitectura_y_Cerebros.md`
- `Extraccion_Util_Document_MD_para_Dardock.md`
- `Reestructuracion_Dardock_Performance_Ads.md`

### Regla

El repositorio no decide.

Solo alimenta.

---

## 3. Capa de Procesamiento

### Función

Convertir conocimiento y contexto en criterio operativo.

Es la capa más importante después de identidad.

### Qué contiene

- marcos de decisión
- matrices
- SOPs
- filtros
- modelos de diagnóstico

### Módulos principales

#### A. Motor de diagnóstico

Analiza el problema por capas para encontrar causa real.

Documento actual:

- `03_soporte_estrategico/Framework_Diagnostico_por_Capas_Dardock.md`

#### B. Motor de roles

Aclara quién resuelve qué.

Documento actual:

- `03_soporte_estrategico/Matriz_Roles_Agencia_Dardock.md`

#### C. Motor operativo

Baja estrategia a cadencia, límites, reporting y tasking.

Documento principal actual:

- `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`

#### D. Motor comercial

Traduce criterio en propuestas y encuadre de venta.

Documentos actuales:

- `04_comercial_propuestas/`

### Regla

La capa de procesamiento sí decide.

No repite fuentes. Las filtra.

---

## 4. Capa de Interfaces de Salida

### Función

Convertir el criterio interno en outputs utilizables.

### Tipos de salida

#### A. Interfaz comercial

- propuestas
- diagnóstico
- landing

Documentos actuales:

- `01_uso_diario/dardock_landing.html`
- `04_comercial_propuestas/`

#### B. Interfaz operativa

- reportes
- recaps
- backlog
- tasking

Base actual:

- `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`

#### C. Interfaz estratégica

- playbooks
- documentos de dirección

Documentos actuales:

- `02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md`
- `02_consolidados_md/Arquitectura_Definitiva_Sistema_Dardock.md`

### Regla

La interfaz debe ser simple aunque el sistema sea complejo.

No exponer complejidad innecesaria al cliente ni al equipo.

---

## 5. Capa de Operación y Mantenimiento

### Función

Mantener el sistema vivo sin volverlo inmanejable.

### Qué incluye

- decidir qué archivos siguen vivos
- archivar soportes
- consolidar cuando haya duplicación
- evitar dispersión documental

### Documento actual de control

- `README_SISTEMA_DARDOCK.md`
- `02_consolidados_md/DARDOCK_SYSTEM_INDEX.md`

### Regla

No crear nuevos archivos si:

- el tema ya existe en `DARDOCK_OPERATING_SYSTEM.md`
- se puede resolver en propuestas
- se puede resolver en un consolidado existente

---

## Flujo completo del sistema

### Paso 1

La identidad central define el marco.

### Paso 2

El repositorio entrega axiomas, contexto y referencias.

### Paso 3

La capa de procesamiento filtra eso y toma decisiones.

### Paso 4

Las interfaces convierten esas decisiones en:

- propuestas
- landing
- reportes
- entregables

### Paso 5

La operación mantiene el sistema ordenado y usable.

---

## Jerarquía real de autoridad

### Nivel 1 — Dardock

La identidad central manda.

### Nivel 2 — Marcos de decisión internos

- operating system
- framework diagnóstico
- matriz de roles
- propuestas

### Nivel 3 — Referentes externos

- Hormozi
- Brunson
- Kennedy
- Miller
- Abdaal

### Nivel 4 — Fuentes experimentales o históricas

- Gemini
- ideas arquitectónicas previas
- documentos de soporte

### Regla

Nunca permitir que un referente externo reemplace el criterio de negocio de Dardock.

---

## Traducción a carpetas actuales

### 01_uso_diario

Corresponde a:

- identidad central activa
- operación diaria
- landing principal

### 02_consolidados_md

Corresponde a:

- arquitectura
- playbooks
- índices maestros

### 03_soporte_estrategico

Corresponde a:

- conocimiento fuente
- marcos en desarrollo
- referencias históricas

### 04_comercial_propuestas

Corresponde a:

- outputs comerciales reutilizables

---

## Qué mantener vivo

### Vivos

- `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`
- `01_uso_diario/dardock_landing.html`
- `04_comercial_propuestas/`

### Vivos pero de consulta menos frecuente

- `02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md`
- `02_consolidados_md/Arquitectura_Definitiva_Sistema_Dardock.md`
- `02_consolidados_md/DARDOCK_SYSTEM_INDEX.md`

### Soporte

- el resto de `03_soporte_estrategico/`

---

## Qué haría después

### Corto plazo

1. integrar el framework diagnóstico al operating system
2. integrar la matriz de roles a la capa consolidada
3. terminar landing con datos reales

### Mediano plazo

1. convertir reportes en template fijo
2. estructurar intake comercial
3. crear librería de briefs creativos

### Largo plazo

1. conectar esta arquitectura a automatización real
2. centralizar casos y aprendizajes por cliente

---

## Conclusión final

La arquitectura definitiva de Dardock no debe ser un cerebro gigantesco.

Debe ser un sistema pequeño, modular y claro:

- una identidad central fuerte
- un repositorio subordinado
- motores que filtran y deciden
- interfaces simples
- pocas piezas vivas

Ese modelo sí es consistente con una agencia de 2 personas que quiere crecer sin perder criterio.
