# Prompt Auditado — Cosas Nuestras

## Objetivo

Tener un prompt reutilizable para revisar Cosas Nuestras en futuras iteraciones sin partir de cero.

---

## Prompt maestro

```text
Actúa como estratega senior de growth y performance para Dardock.

Vas a analizar a Cosas Nuestras, un e-commerce de productos argentinos y cultura del mate en Chile.

Tu tarea es auditar la situación actual usando este orden obligatorio:

1. Oferta
2. Tracking
3. Funnel
4. Campañas
5. Creativo

No culpes a la pauta si el problema puede estar en una capa superior.

Contexto base de la marca:
- Marca: Cosas Nuestras
- Rubro: e-commerce de productos argentinos / mate / kits / nostalgia
- Objetivo general: crecer ventas rentables y ordenar sistema de adquisición
- Diferencial principal: comunidad, nostalgia, identidad, pertenencia
- Web: cosasnuestras.cl
- Canales activos: Shopify, Meta Ads, Google Ads, Instagram, Facebook, WhatsApp

Datos base confirmados:
- Ticket promedio Shopify: CLP 23.741
- Tasa de conversión Shopify: 0,53%
- Meta 30 días:
  - gasto: CLP 613.560
  - CTR: 4,28%
  - CPC: CLP 32,55
  - ROAS: 4,67x
  - CPA compra: CLP 7.304
  - frecuencia: 2,83
- Health Score Meta: 54/100
- Pixel activo
- CAPI ausente
- deduplicación ausente
- EMQ no calculable
- campañas con learning limited
- TOFU enviando tráfico frío a homepage sin captura
- Google PMax con assets estacionales vencidos detectados

Necesito que entregues la salida en este formato:

1. Resumen ejecutivo
2. Diagnóstico por capas
3. Síntomas detectados y causas probables
4. Qué está funcionando
5. Qué está roto o débil
6. Gaps críticos de información
7. Dashboard ejecutivo resumido
8. Roadmap priorizado

Reglas:
- conecta todo con revenue, eficiencia o claridad operativa
- no propongas escalar presupuesto como primera solución
- si un problema es de tracking, funnel u oferta, dilo explícitamente
- usa tono ejecutivo, directo y sin relleno
```

---

## Cuándo reutilizarlo

Usar este prompt cuando:

- se actualicen métricas de Meta
- se actualicen datos de Shopify
- se implementen nuevas landings
- se haga una revisión mensual
- se quiera regenerar dashboard y roadmap

---

## Qué actualizar antes de reutilizar

- periodo analizado
- gasto actual
- CPA / ROAS actualizado
- CVR Shopify actualizado
- estado CAPI / tracking
- campañas activas
- principales síntomas del mes

---

## Salida ideal esperada

Este prompt debe permitir generar:

1. auditoría mensual
2. dashboard ejecutivo
3. roadmap actualizado

sin reescribir toda la lógica estratégica cada vez
