# Dany Cáceres — Sistema de Conversiones
> Última actualización: 21 Abril 2026

---

## Resumen ejecutivo

Purchase ya está activo y en verde vía API de conversiones. Esto cambia la prioridad: el sistema ya tiene señal de cierre, pero todavía necesita medir intención previa en la web para entender qué tráfico avanza antes de comprar.

La siguiente capa debe medir clicks, formularios, WhatsApp, scroll, visitas a landings y rutas por producto. La implementación recomendada es híbrida:

- GTM/browser para microeventos de navegación e intención.
- CAPI/API para eventos con valor comercial validado: Purchase, Lead, Contact y CompleteRegistration.

Prioridad: enriquecer señal sin contaminar la optimización con eventos débiles.

---

## Arquitectura recomendada

| Etapa | Activo | Evento primario | Evento secundario | Plataforma |
|---|---|---|---|---|
| TOFU | Home hub / contenido | PageView | ViewContent | Pixel + GA4 |
| MOFU | Lead magnet 5 Mitos | Lead | CompleteRegistration | Pixel + CAPI + GHL |
| BOFU libro 1 | Emprende Importando | ViewContent | InitiateCheckout / Purchase* | Pixel + CAPI |
| BOFU libro 2 | Vender Importando | ViewContent | InitiateCheckout / Purchase* | Pixel + CAPI |
| Ascensión | WhatsApp / asesoría | Contact | Lead | Pixel + CAPI + GHL |

*Purchase ya fue entregado y aparece en verde. Mantenerlo como evento principal de ventas, cuidando deduplicación si también dispara desde navegador.

---

## Eventos mínimos Meta

| Evento | Cuándo disparar | Valor para optimización | Prioridad |
|---|---|---|---|
| PageView | Todas las páginas | Bajo | Base |
| ViewContent | Landing específica de libro, lead magnet o asesoría | Medio | Alta |
| Lead | Formulario GHL enviado o lead magnet solicitado | Alto | Crítica |
| Contact | Click real a WhatsApp, asesoría o conversación comercial | Alto | Crítica |
| InitiateCheckout | Click hacia Mercado Libre/Amazon con intención BOFU | Medio-alto | Media |
| Purchase | Compra confirmada | Máximo | Crítica |

Regla: para campañas de venta, optimizar a `Purchase` cuando haya volumen suficiente. Para campañas de captación, usar `Lead` o `Contact`. No optimizar a `click`, `scroll` o `form_start`; esos eventos sirven para diagnóstico, audiencias y lectura de calidad.

---

## Eventos web adicionales

| Evento | Nombre recomendado | Disparo | Canal | Uso |
|---|---|---|---|---|
| Click CTA principal | `cta_click` | Click en CTA de libro, lead magnet o asesoría | GTM + GA4 | Diagnóstico / audiencia |
| Click WhatsApp | `Contact` + `whatsapp_click` | Click a link `wa.me`, WhatsApp o botón de asesoría | GTM + CAPI si hay dato | Conversión secundaria |
| Inicio formulario | `form_start` | Primer foco o input en formulario GHL | GTM + GA4 | Fricción de formulario |
| Envío formulario | `Lead` | Submit exitoso o thank-you page | GTM + CAPI/GHL | Conversión principal MOFU |
| Registro completo | `CompleteRegistration` | Entrega efectiva de lead magnet o registro completado | CAPI/GHL | Conversión secundaria |
| Click salida compra | `InitiateCheckout` | Click hacia Mercado Libre/Amazon/checkout | GTM + CAPI si se puede | Intención BOFU |
| Scroll profundo | `scroll_75` | 75% de scroll en landing | GTM + GA4 | Calidad de lectura |
| Tiempo activo | `engaged_45s` | 45 segundos activos en landing | GTM + GA4 | Calidad de sesión |
| Video CTA | `video_cta_click` | Click desde bloque video/testimonio | GTM + GA4 | Diagnóstico creativo |

No conviene marcar todos estos como conversiones optimizables en Meta. La jerarquía es:

1. `Purchase`
2. `Lead`
3. `Contact`
4. `CompleteRegistration`
5. `InitiateCheckout`
6. Eventos custom solo para lectura/audiencias

---

## Qué va por GTM y qué va por API

| Tipo de evento | Mejor vía | Razón |
|---|---|---|
| PageView | Pixel/GTM | Evento base de navegación |
| ViewContent | Pixel/GTM | Fácil de disparar por URL o landing |
| Clicks CTA | GTM | Son eventos de interacción del navegador |
| Scroll / tiempo activo | GTM | Señales de comportamiento, no server-side |
| Form start | GTM | Ocurre antes de tener lead confirmado |
| Form submit exitoso | GHL/API + Pixel | Debe validarse contra envío real |
| Lead | CAPI/API + Pixel | Evento de valor comercial |
| Contact WhatsApp | GTM + CAPI si se captura dato | Click nace en web; si hay lead identificado, reforzar por server |
| InitiateCheckout | GTM + CAPI opcional | Click BOFU hacia compra |
| Purchase | CAPI/API | Debe venir de fuente confirmada |

Principio: GTM mide comportamiento; CAPI/API confirma eventos con valor de negocio.

---

## Deduplicación Pixel + CAPI

Cada evento enviado por navegador y servidor debe compartir:

| Campo | Uso |
|---|---|
| `event_name` | Mismo nombre entre Pixel y CAPI |
| `event_id` | ID único compartido para deduplicar |
| `event_time` | Timestamp del evento |
| `action_source` | `website` |
| `event_source_url` | URL exacta donde ocurrió |

Sin `event_id`, Meta puede contar doble o degradar calidad de señal. Sin datos de usuario hasheados, el Event Match Quality será bajo.

---

## Datos de usuario a enviar por CAPI

Prioridad de campos:

| Campo | Fuente probable | Prioridad |
|---|---|---|
| email hasheado | Formulario GHL / lead magnet | Crítica |
| teléfono hasheado | WhatsApp / formulario | Alta |
| nombre/apellido hasheado | Formulario | Media |
| IP + user agent | Navegador / GHL | Alta |
| fbc / fbp | Cookies Meta | Crítica si está disponible |
| país | Formulario / IP | Media |

No enviar datos personales sin hashing cuando aplique. GHL o el middleware que conecte CAPI debe encargarse de normalizar y hashear.

---

## UTMs estándar para Dany

Formato recomendado:

```text
utm_source={{site_source_name}}
utm_medium=paid_social
utm_campaign=dany_[etapa]_[producto]_[objetivo]_[fecha]
utm_content={{ad.name}}
utm_term={{adset.name}}
```

Ejemplos:

```text
dany_tofu_homehub_contenido_202604
dany_mofu_5mitos_lead_202604
dany_bofu_emprende_contact_202604
dany_bofu_vender_contact_202604
dany_ascension_asesoria_whatsapp_202604
```

Regla: ningún anuncio BOFU debe mandar a una URL sin UTM o a una página que mezcle productos.

---

## Conversión por campaña evergreen

| Campaña | Objetivo real | Evento recomendado | Comentario |
|---|---|---|---|
| C1 TOFU tráfico contenido frío | Crear audiencia y lectura de interés | ViewContent | No optimizar a compra |
| C2 MOFU mensajería 5Mitos | Capturar lead / conversación | Lead o Contact | Principal candidata para CAPI |
| C3 BOFU ventas retargeting Emprende | Intención de compra libro 1 | Purchase | Usar Purchase como optimización si el volumen alcanza; InitiateCheckout queda como señal previa |
| C6 Post-launch compradores → upsell WA | Ascensión a comunidad/asesoría | Contact | Medir WhatsApp como conversión principal |

---

## Validación obligatoria

Antes de mover presupuesto:

- [ ] Pixel detecta PageView en danycaceres.com.
- [ ] Pixel detecta ViewContent en landings de libro y lead magnet.
- [x] CAPI recibe evento `Purchase`.
- [ ] CAPI recibe evento `Lead` desde GHL.
- [ ] CAPI recibe evento `Contact` para WhatsApp/asesoría si hay dato identificable.
- [ ] GTM dispara `cta_click`, `form_start`, `scroll_75` y `engaged_45s`.
- [ ] GTM dispara `InitiateCheckout` al salir a Mercado Libre/Amazon.
- [ ] Events Manager muestra eventos browser + server deduplicados.
- [ ] Event Match Quality ideal: sobre 6/10 en Lead y Contact.
- [ ] Test Events confirma `event_id` compartido.
- [ ] Cada campaña activa tiene URL con UTMs.
- [ ] Google Ads conversiones revisadas y separadas de Meta.
- [ ] GA4 registra fuente/medio/campaña sin romper atribución.

---

## Diagnóstico actual

| Capa | Estado | Lectura |
|---|---|---|
| Pixel | Activo | Base instalada, pero insuficiente para atribución robusta |
| CAPI | Purchase activo en verde | Señal de venta disponible; falta enriquecer Lead/Contact |
| GHL | Sin microeventos validados | Debe convertirse en fuente server-side de Lead/Contact |
| Google Ads | Activo | Falta validar conversiones reales |
| GA4 | Sin validar | Necesario para lectura cross-channel |
| UTMs | Sin auditar | Riesgo de tráfico sin trazabilidad |

---

## Decisión estratégica

Purchase ya puede ser el evento principal de campañas de venta, siempre que el volumen alcance para aprendizaje. El siguiente paso no es crear más eventos para optimizar todo, sino construir una lectura completa del embudo:

1. `Purchase` para ventas.
2. `Lead` para formularios y lead magnet.
3. `Contact` para WhatsApp / asesoría.
4. `InitiateCheckout` para clicks BOFU a compra externa.
5. `cta_click`, `form_start`, `scroll_75` y `engaged_45s` solo para diagnóstico, remarketing y mejora de landing.

Esto permite saber no solo quién compra, sino dónde se rompe el camino antes de la compra.

---

## Implementación GTM recomendada

Crear variables:

- `Click URL`
- `Click Text`
- `Page URL`
- `Page Path`
- `Form ID`
- `Form Classes`
- `Scroll Depth Threshold`
- `{{Event ID}}` generado por Custom JavaScript con UUID

Crear triggers:

- Click en links que contienen `wa.me`, `api.whatsapp.com` o `whatsapp`.
- Click en links externos hacia Mercado Libre, Amazon o checkout.
- Click en botones con texto: comprar, obtener, descargar, asesoría, WhatsApp.
- Form start: primer foco en campos de formulario GHL.
- Form submit o thank-you page.
- Scroll depth 75%.
- Timer 45 segundos, limitado a landings relevantes.

Crear tags:

- Meta Pixel `ViewContent` por landing.
- Meta Pixel `Contact` para WhatsApp.
- Meta Pixel `Lead` para formulario confirmado.
- Meta Pixel `InitiateCheckout` para salida a compra.
- GA4 events equivalentes para lectura cross-channel.

No crear `Purchase` desde GTM si ya viene por API confirmada, salvo que se tenga `event_id` compartido y deduplicación probada.
