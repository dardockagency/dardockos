# Plan Oficial — Dardock Command Center

## Decision madre

El `Dardock Command Center` se construira como:

- `1 sola plataforma`
- `2 portales`
  - `Portal Cliente`
  - `Workspace Agencia`

No:

- dos deploys
- dos productos
- dos arquitecturas paralelas

La agencia puede ver la capa cliente y una capa operativa adicional.  
El cliente nunca ve la capa operativa interna.

---

## Estado actual del stack

El producto real hoy vive en:

- `Vite + React + Tailwind + React Router`

Decision oficial:

- `NO migrar a Next.js en V1 ni V2`
- evaluar migracion recien en `V3`, cuando existan:
  - backend real
  - auth real
  - persistencia
  - integraciones

---

## Principio de producto

### Job to be done del cliente

El cliente entra para responder:

1. que tan sano esta su sistema
2. que esta mal ahora
3. que esta haciendo Dardock
4. que tiene que hacer el

### Job to be done de la agencia

La agencia entra para responder:

1. que cliente requiere atencion hoy
2. que tarea esta bloqueada
3. que depende del cliente
4. donde esta la fuga mas importante
5. que se esta entregando esta semana

---

## Arquitectura funcional

```text
Dardock Command Center
├── /client/:clientId/*
│   └── Portal Cliente
└── /agency/*
    ├── Workspace Agencia
    └── /agency/:clientId/*
        └── Vista del cliente + overlay operativo
```

Regla importante:

- en V1 sin auth, la separacion entre portales se hace por `ruta`
- no por toggle oculto
- no por localStorage
- no por flags visuales

---

## Modulos por portal

## Portal Cliente

Modulos oficiales:

- `Hoy`
- `Sistema`
- `Roadmap`
- `Pendientes`

Modulo condicional:

- `Funnel`
  - entra solo si existen datos reales por etapa
  - si eso ocurre, entra como `V1.5`

### Regla para Pendientes

En V1 no se llamara `Aprobaciones`.

Se llamara:

- `Pendientes`

Porque sin autenticacion real no existe todavia una aprobacion firmada por identidad.

---

## Workspace Agencia

Modulos oficiales de V2:

- `Inicio`
- `Tasking`
- `Pendientes`
- `Estado tecnico`

Patron adicional:

- `Cliente individual`
  - no es un modulo de sidebar
  - es una ruta o vista derivada al entrar a un cliente
  - muestra el `Portal Cliente` + un `overlay operativo`

### Regla de nomenclatura

No usar:

- `Tracking`

Usar:

- `Estado tecnico`

Porque el modulo debe contener explicitamente:

- pixel
- CAPI
- EMQ
- eventos
- UTMs
- atribucion

Y no convertirse en un cajon de sastre ambiguo.

---

## Navegacion oficial

## Portal Cliente

Sin sidebar.

Topbar fija con:

- nombre cliente
- score
- estado
- badge de pendientes
- ultima actualizacion

Navegacion horizontal:

- `Hoy`
- `Sistema`
- `Roadmap`
- `Pendientes`
- `Funnel` solo si aplica

## Workspace Agencia

Con sidebar.

Grupos maximos:

- `Clientes`
- `Operaciones`
- `Agencia`

Ejemplo:

- `Clientes`
  - Cosas Nuestras
  - Dany Caceres
  - ADS Group
  - Genera Industrial
- `Operaciones`
  - Tasking
  - Pendientes
  - Estado tecnico
- `Agencia`
  - Inicio

No agregar mas grupos hasta nueva decision de producto.

---

## Pantallas obligatorias

## V1 — Pantalla Hoy del cliente

Debe responder en 10 segundos:

1. que pasa
2. que necesita hacer el cliente
3. que esta haciendo Dardock

Bloques obligatorios:

- banner critico si existe
- insight principal
- score
- columna izquierda: `Pendientes del cliente`
- columna derecha: `Dardock esta semana`
- fila inferior: KPIs rapidos

### Riesgo operativo

`Dardock esta semana` solo se muestra si existe proceso interno para actualizarlo.

Definir antes del lanzamiento:

- quien lo actualiza
- cuando se actualiza
- que pasa si no se actualiza

Si no existe ese proceso:

- ocultar esa columna hasta resolverlo

---

## Sistema

Debe mostrar:

- health por capas
- KPIs ejecutivos
- lectura corta del sistema

No mostrar al cliente:

- tabla tecnica extensa de sintomas y causas
- nota de diagnostico interno completa

---

## Roadmap

Debe ser:

- claro
- ejecutivo
- readable
- sin dependencia tecnica innecesaria para cliente

Puede vivir como:

- 3 horizontes
  - urgente
  - 30 dias
  - 90 dias

o como:

- secuencia semanal tipo sprint visual

La decision de formato queda supeditada a legibilidad real, no a estetica.

---

## Pendientes

En V1:

- lista read-only o con accion simple `marcar como visto`
- sin aprobacion formal
- sin firma de identidad

Objetivo:

- mostrar lo que estamos esperando del cliente
- reducir friccion
- dar claridad operativa

---

## Funnel — criterio de entrada

El `Funnel` no se construye por defecto en V1.

Entra solo si existen datos reales suficientes por etapa.

### Definicion oficial de "datos reales suficientes"

Por cada etapa se necesita:

- volumen de entrada
- tasa de conversion hacia la etapa siguiente
- benchmark de referencia defendible

Si esto existe para al menos un cliente:

- construir `V1.5`

Si no existe:

- no fingir funnel con numeros inventados

### V1.5 incluye

- etapas
- benchmark
- gap
- causa
- accion recomendada

No incluye todavia:

- simulador
- proyecciones complejas
- calculadora de revenue

---

## Data layer oficial por fase

## V1

Usar:

- `JSON por cliente`

Ejemplo:

```text
/content/clients/cosas-nuestras.json
/content/clients/dany-caceres.json
/content/clients/genera-industrial.json
```

Uso correcto:

- contenido de display
- score
- salud del sistema
- KPIs
- roadmap
- pendientes
- insight

### Regla

El JSON es correcto para:

- data de lectura

El JSON no es suficiente para:

- tasking editable
- aprobaciones reales
- acciones multiusuario
- historial persistente

---

## Validacion obligatoria del schema

Cada JSON debe validarse contra un schema unico.

Opciones:

- `TypeScript interfaces`
- `Zod`

Condicion obligatoria:

- ningun JSON entra a UI sin validacion

Objetivo:

- evitar que una estructura rota quiebre silenciosamente la pantalla de un cliente

---

## Persistencia del tasking

Decision obligatoria antes de V2:

- definir donde vive el tasking

Opciones validas:

### Opcion A — Supabase

Recomendada.

Sirve para:

- tareas persistentes
- varios usuarios
- estados compartidos
- base para auth futura

### Opcion B — Notion API

Posible, pero menos robusta.

### Opcion C — Tasking read-only

La agencia sigue operando en otra herramienta y el dashboard solo refleja estado.

### Regla

No construir board de tareas editable hasta resolver esta decision.

---

## ClickUp

ClickUp no es el producto.

Puede ser:

- fuente operativa
- sync de tareas
- base para que Claude o automatizaciones generen tasking semanal

Pero la interfaz visible premium sigue siendo:

- `Dardock Command Center`

---

## Roadmap oficial por fases

## V1

Objetivo:

- portal cliente funcional y honesto

Incluye:

- routing base `/client/:clientId`
- topbar persistente
- banner critico
- pantalla `Hoy`
- pantalla `Sistema`
- pantalla `Roadmap`
- pantalla `Pendientes`
- data desde JSON validado

No incluye:

- auth
- aprobaciones reales
- tasking editable
- comparativas
- consumo

## V1.5

Objetivo:

- agregar funnel real si existen datos defendibles

Incluye:

- funnel por etapas
- benchmark
- causa
- accion

## V2

Objetivo:

- workspace agencia funcional

Incluye:

- `/agency`
- `/agency/:clientId`
- inicio agencia
- tasking
- pendientes
- estado tecnico
- overlay operativo sobre cliente

No incluye:

- comparativa como modulo separado
- consumo como modulo separado
- auth cliente real
- integraciones live

## V3

Objetivo:

- convertirlo en plataforma real

Incluye:

- backend real
- auth
- aprobaciones con identidad
- snapshots KPI
- integraciones
- multi-tenant
- evaluacion de migracion a Next.js

---

## Lo que se elimina oficialmente

No continuar construyendo con estas ideas como guia activa:

- dos deploys
- dos productos
- comparativa como modulo temprano
- consumo como modulo temprano
- aprobaciones falsas sin identidad
- funnel con datos inventados
- documento viejo de Next.js como guia actual

---

## Las 4 condiciones de aprobacion para construir

1. `Schema del JSON validado`
2. `Decision de persistencia para tasking antes de V2`
3. `Proceso de actualizacion de "Dardock esta semana" definido`
4. `Documento de Next.js marcado como obsoleto`

Si estas 4 condiciones se cumplen:

- la arquitectura queda oficialmente aprobada para ejecucion

---

## Decision ejecutiva final

Construir primero:

- un `Portal Cliente` pequeno, claro y util

Despues:

- un `Workspace Agencia` operativo

No hacer crecer la plataforma por ambicion visual.
Hacerla crecer por claridad de decision y utilidad diaria.
