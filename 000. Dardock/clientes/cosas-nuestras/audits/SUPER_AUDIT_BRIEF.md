# Super Audit Brief — Cosas Nuestras

> Stack: **Google Ads + Meta (Facebook/Instagram) + Shopify**
> Score actual: **54** · Capas críticas: **Tracking 42** · **Creativo 45**
> Skills que se van a correr: `audit-meta`, `audit-google`, `shopify-audit`, `audit-tracking`, `audit-creative`, `audit-budget`, `audit-landing`, `audit-compliance`

Llená esta hoja de un tirón. Cada bloque me da lo que necesito para correr una auditoría profunda sin volver a pedir nada.

---

## 1. Accesos

- [ ] Meta Business Manager — confirmá rol (admin / employee / partner)
- [ ] Google Ads — confirmá rol (admin / standard)
- [ ] Google Analytics 4 — propiedad y rol
- [ ] Google Tag Manager — container ID y rol
- [ ] Shopify admin — rol
- [ ] Dominio (DNS) — ¿quién lo controla?
- [ ] Hosting / CDN si aplica

> Si falta alguno, marcá "pendiente cliente" y seguís con el resto.

---

## 2. Tracking — la capa que más score regala

### Pixel + CAPI

- ID del Pixel Meta: `__________`
- CAPI activo: ¿sí / no?
- Método CAPI: ¿Shopify Facebook & Instagram channel app? ¿GTM server-side? ¿manual?
- EMQ score actual (Meta Events Manager): `__/10`
- Eventos clave configurados (✓ los activos):
  - [ ] PageView
  - [ ] ViewContent
  - [ ] AddToCart
  - [ ] InitiateCheckout
  - [ ] Purchase (con value + currency)
  - [ ] Lead (si aplica)
- Deduplicación pixel + CAPI: ¿`event_id` igual en ambos?

### GA4 + GTM

- Property ID GA4: `G-__________`
- Container GTM: `GTM-__________`
- ¿sGTM (server container)? sí / no
- Eventos GA4 con conversion marcado: `__________`
- Linker GA4 ↔ Google Ads: sí / no
- Enhanced conversions Google Ads: sí / no

### Shopify

- App Facebook & Instagram channel: ¿instalada y autorizada?
- Catálogo Meta sincronizado: ¿qué Product Set ID?
- ¿Hay desincronización conocida entre catálogo Shopify y Product Set Meta?

### Compartir

- Screenshot de Meta Events Manager → Diagnostics
- Screenshot de GA4 → Configure → Events (lista)
- Pegar acá cualquier error rojo del Pixel Helper

---

## 3. Meta Ads (campañas activas)

| Campaña | Objetivo | Budget/día | Spent último 30d | ROAS | CPA | Estado |
|---|---|---|---|---|---|---|
| Andrómeda | sales | | | | | activo |
| Andrómeda Copia | sales | | | | | activo (a pausar) |
| ... | | | | | | |

- ¿Advantage+ Shopping activo? sí / no
- ¿Cuántos ad sets corriendo total?
- ¿Cuántos ads únicos (no copias) corriendo?
- Edad media del creative más viejo: `__ días`
- ¿Lookalikes en uso? ¿de qué seed source?
- Última vez que rotaron creatives: `__________`

---

## 4. Google Ads (campañas activas)

| Campaña | Tipo (Search/PMax/Shopping/Display) | Budget/día | Spent último 30d | ROAS | CPA | Estado |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |

- ¿Performance Max activo? sí / no
- ¿Search separado de PMax? sí / no
- Audience signals en PMax: ¿qué audiencias?
- Negative keywords list maestro: ¿existe?

---

## 5. Shopify

- Theme actual: `__________` (versión)
- Apps de reviews activas: `__________`
- Apps de upsell / cross-sell: `__________`
- Apps de email/automation: `__________`
- Tiempo de carga homepage (PageSpeed mobile): `__/100`
- Tiempo de carga PDP (PageSpeed mobile): `__/100`
- Carrito abandonado %: `__%`
- Checkout abandono %: `__%`

---

## 6. Funnel y CRO

- AOV actual: `$__________ CLP`
- AOV target: `$__________ CLP`
- CVR landing principal: `__%`
- CVR PDP: `__%`
- ¿Hay tripwire / lead magnet activo? sí / no
- ¿Email/WhatsApp post-compra automatizado? sí / no
- Pop-up captura de email: ¿existe? CR del pop-up: `__%`

---

## 7. Datos para superpoder a Claude

Pegar acá (o adjuntar archivo en `audits/raw/`):

- Export CSV últimos 30 días Meta Ads (campañas + ad sets + ads)
- Export CSV últimos 30 días Google Ads (campañas)
- Export GA4 últimos 30 días (sesiones, conversiones por canal, top landing pages)
- Top 10 productos vendidos último 30d (Shopify)
- Lista de creatives activos con thumbnail (link a Drive)

---

## 8. Contexto comercial

- Ticket promedio último 30d: `$__________`
- Ticket promedio target: `$__________`
- ¿Hay temporada/peak coming? ¿cuándo?
- Margen bruto típico por orden: `__%`
- ROAS mínimo break-even: `__×`
- ROAS target sostenible: `__×`

---

## 9. Hipótesis del cliente

Lo que el cliente cree que está pasando (puede ser correcto o incorrecto, igual escribilo):

- ____________
- ____________

---

## 10. Lo que vos ya viste

Hallazgos que tenés en la cabeza pero no documentaste todavía:

- ____________
- ____________

---

**Cuando esté lleno**, decímelo. Disparo en paralelo: `audit-tracking`, `audit-meta`, `audit-google`, `shopify-audit`, `audit-creative`. Te entrego un único informe consolidado con score actualizado y plan de acción priorizado.
