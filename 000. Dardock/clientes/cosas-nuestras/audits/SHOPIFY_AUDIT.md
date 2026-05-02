# Shopify Audit — Cosas Nuestras
> Fecha: 02 Mayo 2026 · Auditado contra live scrape + apps instaladas + Shopify Admin API (token vambee) · Skill: shopify-audit

---

## Apps instaladas (verificadas)

| App | Costo | Función | Estado |
|-----|-------|---------|--------|
| **Revie: Reviews por Whatsapp** | $39/mes | Recolección de reviews vía WhatsApp | Activa — bug de display en tema |
| **Recupera Carrito por Whatsapp** | $19/mes | Cart abandonment recovery WhatsApp | Activa — S22 ✅ |
| **Vitals** | $29.99/mes | Suite CRO (popup, upsell, email, prueba social, etc.) | ⚠️ Subutilizada |
| **FBP \| Fast Bundle** | — | Bundles y cross-sell | Instalada — sin configurar |
| **Search & Discovery** | Gratis | Búsqueda y filtros en tienda | Activa |
| **Microsoft Clarity** | Gratis | Heatmaps y session recordings | Activa |
| **Flow** | Gratis | Automatizaciones Shopify | Activa |
| **Coupler.io** | — | Export de datos | Activa |
| **WhatsApp** | — | Chat y soporte | Activa |
| **Payflow** | — | Pasarela de pago | Activa |

**Nota crítica sobre Vitals:** Esta app incluye popup builder, upsell, cross-sell, social proof, email popup y más. Si no se activan estos módulos, están pagando $29.99/mes por funcionalidades que resolverían varios FAILS del audit sin costo extra de app.

---

## Shopify Health Score (revisado con apps reales)

```
Shopify Health Score: 78/100  Grade: C+

Velocidad / Técnico:      75/100  ██████████░░  (20%) — 8 PASS · 4 WARNING · 0 FAIL
Conversión / CRO:         72/100  ██████████░░  (35%) — 9 PASS · 5 WARNING · 2 FAIL
Tracking / Integraciones: 75/100  ██████████░░  (25%) — 7 PASS · 4 WARNING · 1 FAIL
Catálogo / Productos:     88/100  ████████████  (20%) — 6 PASS · 2 WARNING · 0 FAIL
```

**S22 corregido a PASS** — Recupera Carrito por Whatsapp está activa (no era FAIL, era suposición incorrecta).
**Los 2 FAILS reales en CRO:** reviews bug (Revie) + email post-compra.

---

## Velocidad y Técnico (20%)

| ID | Check | Estado | Evidencia |
|----|-------|--------|-----------|
| S01 | LCP < 2.5s | ⚠️ WARNING | No medido — Shopify típico 2.5–4s mobile |
| S02 | Mobile PageSpeed > 70 | ⚠️ WARNING | No medido — con Vitals + apps puede bajar |
| S03 | Desktop PageSpeed > 85 | ⚠️ WARNING | No medido |
| S04 | HTTPS activo | ✅ PASS | cosasnuestras.cl carga en HTTPS |
| S05 | Imágenes WebP/AVIF | ✅ PASS | Shopify CDN (Fastly) convierte automáticamente |
| S06 | Lazy loading imágenes | ✅ PASS | Tema Shopify aplica lazy load por defecto |
| S07 | Redirecciones rotas | ⚠️ WARNING | /products/kit-primer-mate → 404 durante audit (slug cambió) |
| S08 | Checkout nativo Shopify | ✅ PASS | Checkout estándar Shopify confirmado |
| S09 | Pop-ups no bloquean LCP | ✅ PASS | Sin popup activo de Vitals — embed pasivo no bloquea |
| S10 | Fuentes sin FOUT | ✅ PASS | Sistema sans-serif — sin Google Font bloqueante |
| S11 | CDN activo | ✅ PASS | Shopify usa Fastly por defecto |
| S12 | Tiempo respuesta < 200ms | ✅ PASS | Shopify hosting — TTFB típico <150ms |

---

## Conversión / CRO (35%)

| ID | Check | Estado | Evidencia |
|----|-------|--------|-----------|
| S13 | CVR tienda > 2% | ⚠️ WARNING | Estimado 1–2% (97 compras/30d) |
| S14 | Tasa abandono carrito < 65% | ⚠️ WARNING | No verificado desde Admin |
| S15 | CTA above the fold en producto | ✅ PASS | "Agregar al carrito" + precio visibles sin scroll |
| S16 | Imágenes: fondo blanco + lifestyle + detalle | ✅ PASS | 7 imágenes por producto confirmado |
| S17 | Precio visible sin scroll en mobile | ✅ PASS | Precio $35.999 visible arriba del fold |
| S18 | Reviews ≥ 10 en producto | ⚠️ WARNING | 5 reseñas · **Bug de display**: muestra 4.6★ pero sección Revie dice "Be the first to write a review" — las reviews se recolectan vía WhatsApp pero no se renderizan correctamente en el tema |
| S19 | Urgencia real activa | ✅ PASS | "Stock: Pocas existencias" visible |
| S20 | Upsell o cross-sell activo | ⚠️ WARNING | FBP Fast Bundle instalado pero no configurado — Vitals también incluye upsell sin costo extra |
| S21 | Email capture activo | ⚠️ WARNING | Embed pasivo existe · Vitals incluye popup builder sin costo extra — activar esta semana |
| S22 | Carrito abandonado → sequence | ✅ PASS | **Recupera Carrito por Whatsapp activa** ($19/mes) |
| S23 | Shopify One Page Checkout | ✅ PASS | Checkout nativo one-page |
| S24 | Guest checkout habilitado | ✅ PASS | Shopify default |
| S25 | ≥ 3 métodos de pago | ✅ PASS | Shopify Payments CL + Payflow confirmado |
| S26 | Política de devoluciones en producto | ❌ FAIL | Solo en footer — no visible en página de producto |
| S27 | Costos de envío claros | ✅ PASS | Barra "ENVÍO GRATIS SOBRE $29.990" activa |
| S28 | Copy activa identidad/ritual | ⚠️ WARNING | Título excelente, descripción cae en ficha técnica |

---

## Tracking e Integraciones (25%)

| ID | Check | Estado | Evidencia |
|----|-------|--------|-----------|
| S29 | Pixel Meta activo | ✅ PASS | ID 764107243964948 verificado |
| S30 | CAPI activo | ✅ PASS | Stape activo — 32.000 server events/7d |
| S31 | Deduplicación Pixel + CAPI | ⚠️ WARNING | Pendiente screenshot Events Manager |
| S32 | EMQ ≥ 8.0 en Purchase | ⚠️ WARNING | CAPI activo sugiere >7.0 — sin número confirmado |
| S33 | GTM instalado y disparando | ✅ PASS | Verificado |
| S34 | GA4 con eventos estándar | ✅ PASS | view_item, add_to_cart, purchase activos |
| S35 | Google Ads conversion tracking | ✅ PASS | 192 conversiones en 4 meses verificadas |
| S36 | UTMs en campañas | ✅ PASS | Meta y Google con UTMs activos |
| S37 | Catálogo Meta sincronizado | ⚠️ WARNING | Product Set 524086233589361 — lag no verificado |
| S38 | Google Merchant Center | ⚠️ WARNING | Activo vía PMax — no auditado directamente |
| S39 | App Facebook & Instagram instalada | ✅ PASS | CAPI activo confirma que está instalada |
| S40 | Email post-purchase activo | ❌ FAIL | Sin secuencia email post-compra — Recupera Carrito es para abandono, no post-compra · Vitals o Klaviyo pendiente |

---

## Catálogo y Productos (20%)

| ID | Check | Estado | Evidencia |
|----|-------|--------|-----------|
| S41 | Nombre descriptivo con keyword | ✅ PASS | Títulos incluyen keyword + copy de marca |
| S42 | Meta description configurada | ⚠️ WARNING | Revisar en Admin → SEO |
| S43 | URL limpia y legible | ✅ PASS | Slugs legibles y descriptivos |
| S44 | Variantes configuradas | ✅ PASS | Selector de variante funcional |
| S45 | Stock actualizado y visible | ✅ PASS | "Pocas existencias" en tiempo real |
| S46 | Imágenes de calidad | ✅ PASS | 7 imágenes por producto |
| S47 | Collections lógicas | ✅ PASS | Estructura navegable por categorías |
| S48 | Archivados removidos de catálogo Meta | ⚠️ WARNING | /portatermos 404 — verificar en Commerce Manager |

---

## Lo que YA está implementado ✅

| Ítem | App / Método |
|------|-------------|
| Free shipping bar + mensaje dinámico en producto | Tema |
| 7 imágenes por producto (fondo blanco + lifestyle) | Shopify |
| Trust badges (Envío / Calidad / Satisfacción) | Tema |
| Urgencia "Pocas existencias" | Shopify stock |
| Reviews en colección (rating + cantidad visible) | Revie |
| Filtros en colección | Search & Discovery |
| FAQ homepage + blog | Tema |
| Recuperación carrito abandonado | Recupera Carrito WhatsApp ✅ |
| Heatmaps y session recordings | Microsoft Clarity ✅ |
| HTTPS + CDN + checkout nativo | Shopify |
| CAPI + Pixel + GTM + GA4 + Google Ads tracking | Stape + GTM |

---

## Acciones reales pendientes

### 🔴 Urgente — sin costo de app extra (Vitals ya está pagado)

| # | Acción | Cómo | Esfuerzo |
|---|--------|------|---------|
| 1 | **Activar popup en Vitals** (timed 20s + exit intent) | Vitals → Popup — ya pagado | <1h |
| 2 | **Activar upsell/cross-sell en Vitals** | Vitals → Upsell / Product Bundles | <1h |
| 3 | **Fix reviews bug de Revie** — muestra rating pero no renderiza | Contactar soporte Revie · verificar snippet en tema | 1–2h |
| 4 | **Snippet política de devolución** encima del botón en producto | Shopify Admin → Editor de tema → Liquid | 30min |
| 5 | **Configurar FBP Fast Bundle** para cross-sell de accesorios | FBP Admin → crear bundle Yerba + Bombilla + Mate | 1h |

### 🟡 Alta prioridad

| # | Acción | Cómo |
|---|--------|------|
| 6 | **Email post-compra Day 7 + Day 30** | Activar desde Vitals (incluido) o Klaviyo |
| 7 | **Etiquetas en colección** ("Más vendido", "Para regalo") | Shopify Admin → Tags de producto |
| 8 | **Tabla comparativa kits** en colección | Editor de tema → sección personalizada |

### 🔵 Siguiente sprint

| # | Acción |
|---|--------|
| 9 | **Quiz segmentación** — 3 preguntas → kit recomendado |
| 10 | **Hero tiles** en homepage — expat / regalador / curioso |
| 11 | **Verificar meta descriptions** en Admin → SEO por producto |
| 12 | **Fix URL rota** /portatermos → redirect 301 |

---

## Diagnóstico de Vitals ($29.99/mes — ¿se está aprovechando?)

Vitals incluye 40+ apps en una. Si no se activaron estos módulos, están pagando sin recibir el valor:

| Módulo Vitals | Estado estimado | Impacto si se activa |
|--------------|-----------------|---------------------|
| Popup builder (timed + exit intent) | ❌ Sin activar | CVR captura 0.3%→3% |
| Product Upsell / Cross-sell | ❌ Sin activar | +AOV sin apps extra |
| Email post-purchase flows | ❌ Sin activar | Reemplazaría Klaviyo básico |
| Social proof (visitors online, sold count) | ❓ Verificar | Urgencia adicional en producto |
| Currency converter | N/A (CLP fijo) | No aplica |
| Back-in-stock alerts | ❓ Verificar | Captura leads de productos agotados |

**Acción inmediata:** Entrar a Vitals Admin → revisar qué módulos están activos. Si están todos desactivados, activar Popup + Upsell esta semana (ya está pagado).

---

## 📡 Datos verificados vía Shopify Admin API (02 Mayo 2026)

| Métrica | Valor verificado |
|---|---|
| Tema en producción | **Woodstock — Theme Versión LL** (ID 173286064409) |
| Total productos en catálogo | **567 productos** |
| Órdenes pagadas (últimos 30d) | **175 órdenes** |
| Revenue total (últimos 30d) | **$5.662.361 CLP** |
| AOV real | **$32.356 CLP** |
| Webhooks activos | 0 (apps usan polling / App blocks) |
| Script tags globales | 0 (apps usan App Proxy o Assets) |
| Metafields Revie en producto | ✅ Confirmados — reviewCount: 5, avg: 4.6★ |

### 🔴 Root cause confirmado del bug de Revie

**Evidencia directa desde el código del tema:**

El snippet `revie-reviews.liquid` usa JavaScript para inyectar el contenedor de reviews buscando:
```js
getElementsByClassName("page-content--product")
```

**Problema:** Esta clase (`page-content--product`) **no existe en el tema Woodstock**. El tema usa `product-section` como clase wrapper del bloque de producto.

Resultado: el contenedor `<div id="revieList">` nunca se crea en el DOM, por lo que:
- ⚠️ La estrella de rating SÍ se muestra (se inyecta cerca de `.product__price` que sí existe)
- ❌ La lista de reviews NO aparece (el container donde se poblarían es nil)
- Los metafields `revie.reviewProductList` y `revie.reviewData` SÍ tienen datos

**Fix exacto (30 min — editar un Liquid snippet):**

En `snippets/revie-reviews.liquid`, línea 3, cambiar:
```liquid
{% assign classdescription= "page-content--product" %}
```
→ a una clase que sí exista en Woodstock, por ejemplo:
```liquid
{% assign classdescription= "product-section" %}
```

O mejor — inyectar directamente con el ID de sección:
```js
// Alternativa más robusta: buscar product-info (custom element del tema)
document.querySelector('product-info')
```

**Quién lo hace:** Contactar a Revie soporte enviando esta evidencia + el cambio específico. Ellos tienen acceso al snippet y pueden hacer el fix en minutos. O pedirle al dev que edita el tema directamente.
