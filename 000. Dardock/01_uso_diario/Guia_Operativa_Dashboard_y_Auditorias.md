# Guía Operativa — Dashboard y Auditorías

## Objetivo

Tener una hoja simple para operar el sistema sin depender de memoria técnica.

---

## 1. Repos importantes

### Sistema Dardock

Repo:

```bash
https://github.com/dardockagency/dardockos.git
```

Sirve para:

- operating system
- prompts
- memoria del sistema
- arquitectura

### Dashboard

Repo:

```bash
https://github.com/dardockagency/dardock-command-center.git
```

Sirve para:

- dashboard de clientes
- UX/UI
- data de clientes
- deploy automático en Vercel

---

## 2. Comandos básicos del dashboard

### Entrar al repo

```bash
cd /ruta/a/dardock-command-center
```

### Traer cambios recientes

```bash
git pull
```

### Instalar dependencias

```bash
npm install
```

### Ver el dashboard localmente

```bash
npm run dev
```

### Validar build

```bash
npm run build
```

### Validar tests

```bash
npm run test
```

### Publicar cambios y generar redeploy automático

```bash
npm run ship
```

Si quieres un mensaje propio:

```bash
npm run ship -- "actualiza dashboard de cosas nuestras"
```

---

## 3. Qué archivo editar según lo que quieras hacer

### Cambiar data de un cliente

Editar:

```bash
src/data/clients/<cliente>.ts
```

Ejemplos:

```bash
src/data/clients/cosas-nuestras.ts
src/data/clients/dany-caceres.ts
src/data/clients/ads-group.ts
src/data/clients/genera-industrial.ts
```

### Cambiar la estructura de los datos

Editar:

```bash
src/data/clientData.ts
```

### Cambiar UX/UI del dashboard

Editar:

```bash
src/pages/Index.tsx
src/index.css
src/components/dashboard/HeroSection.tsx
src/components/dashboard/ScoreGauge.tsx
src/components/dashboard/KPIStrip.tsx
src/components/dashboard/SystemLayers.tsx
src/components/dashboard/StrengthsWeaknesses.tsx
src/components/dashboard/SymptomsBlock.tsx
src/components/dashboard/Roadmap.tsx
src/components/dashboard/NextSteps.tsx
src/components/dashboard/FooterSection.tsx
```

---

## 4. Flujo correcto para actualizar la data de un cliente

### Paso 1

Entrar al repo:

```bash
cd /ruta/a/dardock-command-center
```

### Paso 2

Traer cambios:

```bash
git pull
```

### Paso 3

Editar el archivo del cliente:

```bash
src/data/clients/<cliente>.ts
```

### Paso 4

Opcional: probar localmente

```bash
npm run dev
```

### Paso 5

Publicar:

```bash
npm run ship -- "actualiza data de <cliente>"
```

---

## 5. Flujo correcto para mejorar UX/UI

### Paso 1

Entrar al repo y traer cambios:

```bash
cd /ruta/a/dardock-command-center
git pull
```

### Paso 2

Editar archivos visuales:

```bash
src/index.css
src/pages/Index.tsx
src/components/dashboard/*
```

### Paso 3

Ver local:

```bash
npm run dev
```

### Paso 4

Validar:

```bash
npm run build
npm run test
```

### Paso 5

Publicar:

```bash
npm run ship -- "mejora ux ui dashboard"
```

---

## 6. Flujo correcto para agregar un cliente nuevo

### Paso 1

Crear un archivo nuevo:

```bash
src/data/clients/<cliente>.ts
```

### Paso 2

Usar como referencia:

```bash
src/data/clients/cosas-nuestras.ts
```

### Paso 3

Agregar export en:

```bash
src/data/clients/index.ts
```

### Paso 4

Publicar:

```bash
npm run ship -- "agrega cliente <cliente>"
```

---

## 7. Qué representa el dashboard hoy

El dashboard actual de `Cosas Nuestras` usa:

- métricas base reales tomadas de los informes trabajados en abril 2026
- score
- lectura por capas
- prioridades
- roadmap

Todo eso último es interpretación estratégica Dardock, no data cruda del Ads Manager.

---

## 8. Prompts clave para auditar clientes

### Prompt 1 — Auditoría base

Usar cuando quieras detectar dónde se rompe el sistema.

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
```

### Prompt 2 — Dashboard ejecutivo

Usar cuando ya tienes auditoría y quieres convertirla en salida presentable.

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
```

### Prompt 3 — Roadmap priorizado

Usar cuando quieres convertir el diagnóstico en plan de trabajo.

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
```

---

## 9. Prompts adicionales útiles

### Prompt — Cargar data cruda a formato cliente

```text
Actúa como operador senior de Dardock.

Voy a pegar métricas crudas y notas sueltas de un cliente.
Tu tarea es convertir esa información en una estructura lista para poblar `src/data/clients/<cliente>.ts`.

Quiero que me devuelvas:
1. clientName
2. descriptor
3. period
4. sourceNote
5. overallReading
6. executiveSummary
7. kpis
8. systemLayers
9. findings
10. strengths
11. weaknesses
12. immediatePriorities
13. roadmap
14. dardockActions
15. clientActions
16. closingPhrase

Reglas:
- no inventar métricas que no existan
- si una métrica falta, marcarla como gap
- mantener tono ejecutivo
```

### Prompt — Mejorar solo UX/UI del dashboard

```text
Actúa como director de producto y frontend strategist para Dardock.

Quiero mejorar el dashboard actual sin cambiar su lógica de negocio.

Analiza:
- hero
- score
- cards KPI
- layers
- roadmap
- jerarquía tipográfica
- spacing
- contraste
- claridad ejecutiva

Devuélveme:
1. problemas prioritarios de UX/UI
2. cambios concretos por componente
3. recomendaciones de copy visual
4. prioridades de implementación
```

### Prompt — Crear brief creativo desde auditoría

```text
Actúa como creative strategist de performance para Dardock.

Con base en la auditoría de este cliente, crea un brief creativo orientado a performance.

Quiero:
1. hooks
2. ángulos
3. objeciones a resolver
4. formatos sugeridos
5. CTA
6. ideas de piezas para testing
```

---

## 10. Regla final

Si dudas entre tocar UX/UI o tocar data:

- si cambia el cliente = tocar `src/data/clients/<cliente>.ts`
- si cambia cómo se ve = tocar `src/components/dashboard/*`
- si cambia la estructura del sistema = tocar `src/data/clientData.ts`
