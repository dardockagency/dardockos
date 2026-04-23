# Dany Cáceres — Plan de Optimización de Campañas y Conversiones
> Fecha: 21 Abril 2026  
> Uso: ejecución Dardock para estabilizar evergreen, cerrar medición y preparar decisiones de mayo.

---

## Resumen ejecutivo

La prioridad no es subir presupuesto. La prioridad es ordenar el sistema para que cada dólar deje aprendizaje útil.

Dany ya tiene autoridad, audiencia y `Purchase` activo vía CAPI. El problema actual está en tres capas:

1. Campañas evergreen con intención separada, pero todavía sin lectura completa del camino previo a compra.
2. Eventos intermedios incompletos: `Lead`, `Contact`, `InitiateCheckout`, clicks, formularios, scroll y tiempo activo.
3. Ascensión débil post-compra: compradores y leads no están siendo clasificados ni empujados de forma sistemática hacia WhatsApp, comunidad, asesoría o ADS Group.

Decisión operativa: activar evergreen con presupuesto controlado, auditar UTMs y eventos en paralelo, y optimizar por calidad de intención antes de escalar.

---

## Arquitectura de campañas recomendada

| ID | Etapa | Objetivo | Audiencia | Evento principal | Presupuesto inicial | Rol |
|---|---|---|---|---|---:|---|
| C1 | TOFU | Tráfico/contenido | Frío LATAM, intereses importación, emprendedores, comercio exterior | `ViewContent` | USD 25/mes | Crear audiencias y validar temas |
| C2 | MOFU | Lead magnet / conversación | Engagers 30-180 días, video viewers, visitantes web, IG/FB | `Lead` o `Contact` | USD 50/mes | Capturar intención educativa |
| C3 | BOFU | Venta Emprende Importando | Visitantes landings, leads, engagers fuertes, compradores excluidos | `Purchase` | USD 25/mes | Convertir intención tibia en venta |
| C6 | Ascensión | WhatsApp post-launch | Compradores, lectores, leads recientes, clickers BOFU | `Contact` | USD 50 del 23 al 30 Abr | Llevar a comunidad/asesoría |

Regla crítica: C1 no debe optimizar a compra. C3 no debe mezclar productos ni enviar a Amazon para Emprende Importando. BOFU de Emprende Importando debe empujar Mercado Libre.

---

## Distribución táctica de presupuesto

Presupuesto mensual disponible: USD 750.  
Presupuesto evergreen base indicado: USD 100/mes para estabilización.

### Fase 1 — 7 días

| Bloque | Presupuesto | Objetivo |
|---|---:|---|
| C1 TOFU | USD 25 | Construir audiencia y detectar temas que atraen intención real |
| C2 MOFU | USD 50 | Medir costo por lead/contacto desde 5 Mitos |
| C3 BOFU | USD 25 | Medir compra o salida fuerte hacia Mercado Libre |
| C6 Ascensión | USD 50 puntual | Recuperar compradores del lanzamiento hacia WhatsApp |

No mover presupuesto hasta validar:

- UTMs activas.
- Eventos mínimos disparando.
- Exclusiones correctas.
- Landing con CTA único.
- WhatsApp con clasificación mínima de intención.

### Fase 2 — 14 a 30 días

Redistribuir según señales:

| Señal | Acción |
|---|---|
| C1 bajo CPC pero sin `ViewContent` o bajo tiempo activo | Cambiar ángulo creativo, no escalar |
| C2 buen CTR pero bajo `Lead`/`Contact` | Revisar promesa, formulario, ManyChat o fricción del CTA |
| C3 buen `InitiateCheckout` pero bajo `Purchase` | Revisar destino Mercado Libre, precio, confianza, objeciones |
| C6 alto WhatsApp pero baja calificación | Ajustar copy para filtrar intención; no pagar por curiosos |
| Purchase con volumen bajo | Usar `InitiateCheckout` como lectura, mantener Purchase como objetivo final |

---

## Naming recomendado

### Campañas

```text
DANY_[ETAPA]_[PRODUCTO]_[OBJETIVO]_[MES]
```

Ejemplos:

```text
DANY_TOFU_HOMEHUB_VIEWCONTENT_202604
DANY_MOFU_5MITOS_LEAD_202604
DANY_BOFU_EMPRENDE_PURCHASE_202604
DANY_ASCENSION_WA_CONTACT_202604
```

### Conjuntos

```text
[PAIS/REGION]_[AUDIENCIA]_[VENTANA]_[EXCLUSION]
```

Ejemplos:

```text
LATAM_INTERESES_IMPORTACION_FRIO_EXCLBUYERS
ARG_ENGAGERS_180D_EXCLBUYERS
LATAM_WEBVISITORS_30D_EXCLBUYERS
LATAM_LEADS_90D_EXCLBUYERS
```

### Anuncios

```text
[ANGULO]_[FORMATO]_[HOOK]_[CTA]
```

Ejemplos:

```text
ERROR_COSTOS_REEL_NOIMPROVISES_ML
MITOS_CAROUSEL_MARGENREAL_DESCARGAR
ASCENSION_VIDEO_PROBLEMAREAL_WA
```

---

## UTMs obligatorias

Formato:

```text
utm_source={{site_source_name}}
utm_medium=paid_social
utm_campaign=dany_[etapa]_[producto]_[objetivo]_202604
utm_content={{ad.name}}
utm_term={{adset.name}}
```

URLs por campaña:

| Campaña | URL debe llevar | Prohibido |
|---|---|---|
| C1 | Home hub o contenido con `utm_campaign=dany_tofu_homehub_viewcontent_202604` | Enviar directo a compra |
| C2 | Lead magnet 5 Mitos con `utm_campaign=dany_mofu_5mitos_lead_202604` | Mezclar libro + asesoría + comunidad en el mismo CTA |
| C3 | Landing Emprende con salida Mercado Libre y `utm_campaign=dany_bofu_emprende_purchase_202604` | Amazon como destino BOFU Emprende |
| C6 | WhatsApp/landing ascensión con `utm_campaign=dany_ascension_wa_contact_202604` | Mensaje genérico sin segmentación |

---

## Tracking mínimo antes de optimizar

| Evento | Dónde validar | Uso |
|---|---|---|
| `PageView` | Meta Events Manager + GA4 | Base de navegación |
| `ViewContent` | Landings de libros, lead magnet y asesoría | Audiencias y lectura TOFU/MOFU |
| `Lead` | Formulario GHL / ManyChat / entrega 5 Mitos | Optimización MOFU |
| `Contact` | Click WhatsApp / asesoría | Optimización ascensión |
| `InitiateCheckout` | Click a Mercado Libre/Amazon/checkout | Diagnóstico BOFU |
| `Purchase` | CAPI | Evento principal de ventas |
| `cta_click` | GA4/GTM | Diagnóstico de promesa |
| `form_start` | GA4/GTM | Fricción de formulario |
| `scroll_75` | GA4/GTM | Calidad de lectura |
| `engaged_45s` | GA4/GTM | Calidad de sesión |

No marcar como conversiones principales en Meta:

- `cta_click`
- `form_start`
- `scroll_75`
- `engaged_45s`

Estos eventos sirven para diagnóstico, audiencias y CRO, no para que Meta optimice inversión.

---

## Checklist técnico de implementación

### Meta / CAPI

- [ ] Confirmar que `Purchase` llega solo desde fuente confiable o deduplicado si también existe browser.
- [ ] Validar `event_id` compartido en eventos Pixel + CAPI.
- [ ] Enviar `event_source_url`, `action_source=website`, IP, user agent, `fbp` y `fbc` cuando estén disponibles.
- [ ] Revisar Event Match Quality en `Lead` y `Contact`; objetivo mínimo: 6/10.
- [ ] Confirmar exclusión de compradores en C3.

### GTM / GA4

- [ ] Activar GTM Preview en páginas clave.
- [ ] Validar eventos en GA4 DebugView.
- [ ] Crear eventos GA4 equivalentes a Meta para lectura cross-channel.
- [ ] Confirmar que las UTMs llegan limpias a GA4.
- [ ] Revisar que no haya eventos duplicados por múltiples containers o scripts embebidos en GHL.

### GHL

- [ ] Conectar formularios reales a `Lead`.
- [ ] Conectar entrega efectiva del lead magnet a `CompleteRegistration` si aplica.
- [ ] Registrar clicks y formularios por landing/producto.
- [ ] Preparar campos ocultos para UTMs: source, medium, campaign, content, term.
- [ ] Pasar UTMs a contacto para segmentación posterior.

---

## CRO por activo

### Home hub

Rol: validar autoridad y distribuir intención.  
No debe intentar vender todo.

CTA recomendado por bloque:

- Nuevo importador: descargar 5 Mitos.
- Quiere empezar: ver Emprende Importando.
- Ya vende/importa: ir a WhatsApp/asesoría.

Medición:

- `ViewContent`
- `cta_click`
- `scroll_75`
- `engaged_45s`

### Landing 5 Mitos

Rol: capturar intención educativa.

Debe tener:

- Promesa específica: errores que comen margen antes de importar.
- Formulario simple.
- Una sola acción: descargar/recibir PDF.
- Follow-up a libro o WhatsApp según intención.

Medición:

- `ViewContent`
- `form_start`
- `Lead`
- `CompleteRegistration`

### Landing Emprende Importando

Rol: venta BOFU libro 1.

Debe tener:

- CTA único hacia Mercado Libre.
- Objeciones claras: para quién es, qué evita, qué resultado permite pensar mejor.
- Prueba de autoridad de Dany.
- No mencionar “3.ª Edición”.
- No mandar a Amazon desde BOFU.

Medición:

- `ViewContent`
- `cta_click`
- `InitiateCheckout`
- `Purchase`

### WhatsApp

Rol: clasificar y ascender.

Primer mensaje recomendado:

```text
Hola, soy del equipo de Dany Cáceres. Para orientarte mejor, ¿en qué punto estás hoy?

1. Quiero empezar a importar y no sé por dónde partir.
2. Ya vendo productos y quiero mejorar margen/proveedores.
3. Ya importé o estoy por importar y tengo un problema concreto.
4. Quiero información sobre asesoría o acompañamiento.
```

Clasificación:

| Respuesta | Segmento | Próxima acción |
|---|---|---|
| 1 | Aspiracional práctico | Lead magnet + Emprende Importando |
| 2 | Emprendedor en movimiento | Vender Importando + comunidad |
| 3 | Importador con problema real | Diagnóstico / asesoría |
| 4 | Alta intención | Calificar presupuesto, urgencia y país |

---

## Hipótesis de optimización

| Hipótesis | Cómo se valida | Acción si se confirma |
|---|---|---|
| La audiencia responde mejor a advertencias prácticas que a promesas aspiracionales | CTR, `engaged_45s`, comentarios cualitativos | Duplicar ángulos de “errores caros” |
| El lead magnet captura intención barata pero no necesariamente compra | CPL vs tasa de click a libro/WA | Crear secuencia de nurturing |
| C3 puede tener baja compra por fricción externa en Mercado Libre | `InitiateCheckout` alto, `Purchase` bajo | Revisar destino, copy de transición y prueba social |
| WhatsApp genera contactos, pero mezcla curiosos con oportunidades reales | `Contact` alto, baja calificación | Endurecer copy y primer filtro |
| Compradores del lanzamiento tienen mayor probabilidad de ascender a comunidad/asesoría que leads fríos | Tasa de respuesta C6 vs C2 | Crear campaña permanente de ascensión |

---

## Brief creativo inicial Meta Ads

### Pieza 1 — Error de margen

Etapa: TOFU  
Formato: Reel corto  
Hook: “Importar barato no sirve si vendes sin margen.”  
Visual: Dany hablando a cámara con overlay de cálculo simple: costo producto + envío + impuestos + comisión + margen.  
CTA: “Aprende antes de comprar afuera.”  
Evento: `ViewContent`

### Pieza 2 — 5 Mitos

Etapa: MOFU  
Formato: carrusel  
Hook: “5 mitos que hacen que muchos emprendedores importen mal.”  
Visual: cada slide desmonta un mito: proveedor barato, envío simple, todo deja margen, vender después, copiar producto ganador.  
CTA: “Descarga el PDF.”  
Evento: `Lead`

### Pieza 3 — Emprende Importando

Etapa: BOFU  
Formato: imagen/libro + autoridad  
Hook: “Antes de traer stock, entiende el negocio completo.”  
Visual: portada del libro + frase de Dany + sello de 21 años de experiencia.  
CTA: “Consíguelo en Mercado Libre.”  
Evento: `Purchase`

### Pieza 4 — Problema real

Etapa: Ascensión  
Formato: video corto  
Hook: “Si tu error de importación ya cuesta plata, no necesitas más teoría.”  
Visual: Dany planteando escenarios: carga detenida, costos mal calculados, producto sin rotación.  
CTA: “Habla con el equipo.”  
Evento: `Contact`

### Pieza 5 — Antigurú

Etapa: TOFU/MOFU  
Formato: Reel o estático con frase fuerte  
Hook: “Importar no es magia. Es cálculo, criterio y venta.”  
Visual: contraste entre promesas falsas y proceso real.  
CTA: “Mira el sistema antes de decidir.”  
Evento: `ViewContent` o `Lead`

---

## Decisiones por tomar con datos

Necesitamos completar esta información para hacer optimización fina:

| Dato faltante | Por qué importa |
|---|---|
| Resultados del lanzamiento $0.99 | Define interés real por “Vender Importando” y calidad del comprador |
| URLs activas de landings | Permite auditar CTA, UTMs y eventos |
| Capturas de Events Manager | Confirma deduplicación, match quality y eventos activos |
| Acceso/lectura GA4 | Permite ver sesiones, fuentes y rutas |
| Resultados C1/C2/C3/C6 | Permite decidir creativos, audiencias y presupuesto |
| Flujo actual de WhatsApp | Permite cerrar ascensión y calificación comercial |
| Destinos Mercado Libre/Amazon | Permite revisar fricción externa y consistencia BOFU |

---

## Plan de acción priorizado

### Hoy

1. Auditar URLs activas y UTMs de C1, C2, C3 y C6.
2. Validar `PageView`, `ViewContent` y `Purchase` en Events Manager.
3. Definir CTA único por landing.
4. Preparar primer filtro de WhatsApp.

### Próximos 3 días

1. Implementar `Lead`, `Contact` e `InitiateCheckout`.
2. Implementar `cta_click`, `form_start`, `scroll_75` y `engaged_45s` en GA4/GTM.
3. Revisar que GHL capture UTMs en campos ocultos.
4. Actualizar creativos post-launch, separando lanzamiento de evergreen.

### Próximos 7 días

1. Activar C1, C2 y C3 con presupuestos base.
2. Ejecutar C6 del 23 al 30 Abr con mensaje de ascensión.
3. Revisar calidad de leads/contactos, no solo costo.
4. Preparar reporte de lanzamiento y primera lectura evergreen.

### Próximos 30 días

1. Definir CPA base de Emprende Importando.
2. Definir CPL/CPContact útil para 5 Mitos y WhatsApp.
3. Crear secuencia WhatsApp por segmento.
4. Construir dashboard simple: inversión, leads, contactos, compras, CPA, revenue estimado y ascensión.

---

## Criterio de éxito

La optimización inicial será exitosa si al cierre de abril podemos responder con datos:

1. Qué campaña trae intención real y cuál solo trae tráfico.
2. Qué landing pierde usuarios antes del CTA.
3. Qué porcentaje hace click hacia compra externa.
4. Qué compradores/leads tienen potencial de ascensión.
5. Qué evento conviene usar para optimizar en mayo.

Sin esas respuestas, cualquier escalamiento de presupuesto sería prematuro.
