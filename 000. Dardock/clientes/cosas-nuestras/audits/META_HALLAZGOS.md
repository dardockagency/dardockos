# Meta Ads — Hallazgos extraídos vía Graph API
> Fecha extracción: 2026-05-01 · Cuenta: `act_2186557501595791` (Cosas Nuestras, CLP, America/Santiago)
> Raw data: `audits/raw/meta/`

---

## TL;DR — 3 cosas que cambian el diagnóstico anterior

1. **CAPI YA ESTÁ CONFIGURADO** en el pixel principal. Estado_Actual.md decía "CAPI sin configurar — URGENTE". Falso. Los eventos servidor (32,752) duplican a los del navegador (16,358) en últimos 7d → CAPI dominante. Esto sube el score Tracking varios puntos sin tocar nada.
2. **HAY DOS PIXELES VIVOS** disparando en producción simultáneamente. Riesgo de doble conteo si no hay deduplicación.
3. **Andrómeda Copia confirmado kill** — CPA 12,827 CLP, ROAS 2.78x, solo 5 compras en 30d con 64K CLP gastados. Y hay otra sangría no documentada: campaña "TOFU 2024" (paused-objective TRAFFIC) gastó 27,803 CLP con 0 compras.

---

## 1. Cuenta — números reales últimos 30 días

| Métrica | Valor |
|---|---|
| Spend total | **641,907 CLP** |
| Compras | **97** |
| Valor de compras | 3,463,495 CLP |
| Blended CPA | **6,618 CLP** |
| Blended ROAS | **5.40×** |
| Balance disponible | **25,036 CLP** ⚠️ |
| Spent total cuenta (lifetime) | 18,423,933 CLP |
| Spend cap | sin tope |

⚠️ **Balance crítico**: 25K CLP / 21K CLP por día = **~1 día de oxígeno**. Si no se carga, las activas paran. Verificar método de pago en Billing.

---

## 2. Campañas activas — performance real

| Campaña | Spend | Compras | CPA | ROAS | Frecuencia | CTR | Acción |
|---|---:|---:|---:|---:|---:|---:|---|
| **[ANDRÓMEDA 2025] [OCTUBRE]** | 311,525 | 50 | 6,230 | **7.09×** | 3.51 | 3.18% | ⚠️ Fatiga inicial — rotar creatives |
| **Catálogo [BOFU / COMPRADORES** | 238,444 | 42 | 5,677 | 4.52× | **5.24** | 2.39% | 🔴 **Fatiga severa** — refrescar audiencia o creativo |
| **[ANDRÓMEDA 2025] - Copia** | 64,135 | 5 | **12,827** | 2.78× | 2.32 | 2.70% | 🔴 **PAUSAR** (confirmado) |
| **[TOFU] [TRÁFICO] [2024]** | 27,803 | 0 | — | 0.00× | 1.10 | 7.28% | 🔴 **PAUSAR** — sangría sin compras |
| [VENTAS] [ÁNGULOS] [INTERESES] | 0 | 0 | — | — | — | — | activa sin entrega — revisar adsets |
| Campañas de MKTING Activo | 0 | 0 | — | — | — | — | activa sin entrega |
| Publicación de Instagram | 0 | 0 | — | — | — | — | activa sin gasto |

**Lo que se gasta hoy en cosas que sí venden**: Andrómeda + Catálogo BOFU = 549,969 CLP (86% del spend) con CPA promedio ~6,000 CLP. La eficiencia está concentrada ahí.

**Lo que se gasta en cosas que NO venden**: 91,938 CLP/30d entre Andrómeda Copia y TOFU 2024 = **14% del presupuesto a la basura**. Cortando esos dos, el CPA blended baja de 6,618 → **5,670** sin tocar más nada.

### Fatiga creativa detectada

- **Catálogo BOFU**: frecuencia **5.24** → un usuario promedio vio el ad 5 veces. Síntoma claro de saturación de audiencia. CTR 2.39% (bajo para BOFU). Acción: refrescar pool de productos en el catálogo + ampliar lookalike o introducir creative nuevo.
- **Andrómeda principal**: frecuencia 3.51 → todavía operable pero el CPA va a empezar a subir. 2-3 creativos nuevos en queue.

---

## 3. Tracking — Pixel + CAPI

### Pixeles activos en la cuenta

| Pixel ID | Nombre | Last fired | Estado | Eventos 7d (browser) | Eventos 7d (server) |
|---|---|---|---|---:|---:|
| `764107243964948` | **Cosas Nuestras Actualizado** | 2026-05-01 19:49 | ✅ activo | 16,358 | **32,752** ← CAPI |
| `1136961058496048` | Pixel Google Tag Manager | 2026-05-01 19:50 | ⚠️ activo paralelo | 20,393 | 0 |
| `2094289733994064` | "no es útil" | 2019-01-11 | 💀 muerto | 0 | 0 |

**CAPI status:**
- ✅ Pixel principal: CAPI activo (66% de eventos vienen del servidor) → contradice diagnóstico anterior
- ❌ Pixel GTM: solo browser, sin CAPI
- ⚠️ Advanced Matching: ON con 11 campos en ambos pixeles activos (excelente)

### Eventos detectados últimos 7d (pixel principal)

| Evento | Volumen 7d |
|---|---:|
| PageView | 28,655 |
| ViewContent | 10,691 |
| AddToCart | 812 |
| InitiateCheckout | 348 |
| Search | 302 |
| AddPaymentInfo | 152 |
| **Purchase** | **68** |

Embudo se ve sano: ATC→IC = 43%, IC→AddPay = 44%, IC→Purchase = 19.5%. La pérdida más grande es entre AddPaymentInfo (152) y Purchase (68) = 55% de los que llegaron al pago no compraron. Eso es un check de Shopify checkout, no de Meta.

### Riesgo: dos pixeles vivos

El pixel GTM dispara PageView/ViewContent/AddToCart/Search en paralelo al principal. Si ambos están en el theme de Shopify (uno por la app nativa, otro inyectado via GTM), pueden estar **doble-contando** eventos top-funnel. Eso ensucia la audiencia del pixel y rompe lookalikes.

**Validación pendiente** (necesito acceso a Shopify o Events Manager):
- ¿El pixel GTM tiene `event_id` deduplicado contra el principal?
- ¿O son dos pixeles independientes alimentando dos audiencias distintas?

Si no hay dedup → **eliminar pixel GTM** o consolidar en uno solo. Esto sube EMQ y limpia audiencias.

---

## 4. Catálogo

API no me dejó leer detalle del catalog (permiso `catalog_management` no concedido al token). Lo que sí sé:
- ID `524086233589361` mencionado en Estado_Actual.md → existe pero no es el catálogo, parece ser un product set u otro objeto
- Para auditar imágenes desactualizadas necesito o bien screenshot de Catalog Manager, o regenerar token con `catalog_management` scope

---

## 5. Automatización terceros — Madgicx

Detectada conexión activa de **Madgicx** (3rd party automation tool) con 3 reglas:

| Regla | Estado |
|---|---|
| Stop Loss automation expensive ads (Auto Add Update) | DISABLED |
| Stop Loss automation expensive ads (Auto Add) | DISABLED |
| Madgicx Ad Creation Rule | **ENABLED** |

Tiene capacidad de crear ads automáticamente. Validar con cliente si se sabe que está conectado y si el costo de la suscripción se justifica. Si nadie lo está usando activamente → desconectar (limpia permisos y elimina riesgo de cambios automáticos no auditados).

---

## 6. Cementerio de campañas

Hay **80+ campañas pausadas** desde 2020-2024 acumuladas. Muchas con nombre "Cosas Nuestras Yerbas Ciclismo 2020 - Copia 22", "VIDEO DANY FT MAU", etc. Esto no daña performance pero sí hace imposible navegar el Ads Manager. **Recomendación**: archivar o eliminar todas las campañas pausadas con last_updated > 90 días. Son ruido visual.

Además hay **campañas en estado ACTIVE pero sin presupuesto y sin entrega** (probablemente con todos los ad sets pausados):
- YERBAS - Público Yerbas - Copia 12, 13
- Argentinos Expatriados 2020 - Copia 22
- Campaña venta a seguidores con video - Copia 2
- Publicación de Instagram: ¿Eres de los que ni se...

Estas figuran como activas pero no consumen — confunden el reporting. Pausar formalmente.

---

## Score Tracking — recálculo

Capa Tracking estaba en **55**. Con CAPI confirmado activo + AAM con 11 campos + embudo completo de eventos:

| Sub-componente | Score |
|---|---|
| Pixel browser activo | 100 |
| CAPI configurado | **90** (era 0) |
| Advanced Matching | 95 |
| Eventos clave (7 detectados incl. Purchase) | 90 |
| Deduplicación pixel+CAPI | ❓ pendiente validar |
| Pixel duplicado activo (GTM) | -15 penalización |

**Nuevo score Tracking estimado: 78-82** (vs 55 anterior).

Solo este recálculo te sube el score global de **54 → ~62** sin tocar campañas.

---

## Plan de acción priorizado (en orden de ROI)

| # | Acción | Tiempo | Impacto score |
|---|---|---|---|
| 1 | Recargar saldo cuenta Meta (queda 25K, ~1 día) | 5 min | bloqueante operativo |
| 2 | Pausar Andrómeda Copia | 2 min | +2 (Campañas) |
| 3 | Pausar TOFU 2024 (gasta sin convertir) | 2 min | +1 |
| 4 | Verificar dedup pixel principal vs GTM (Events Manager → Test Events o screenshots) | 15 min | desbloquea +5 si dedup OK, sino dispara fix |
| 5 | Subir 2-3 creativos nuevos para Andrómeda (freq 3.51) | 1-2 días | +3 |
| 6 | Refrescar Catálogo BOFU — ampliar audiencia o pool de productos (freq 5.24) | 1 día | +2 |
| 7 | Limpiar cementerio: archivar 80+ campañas pausadas y desactivar las "active sin entrega" | 30 min | 0 score, +higiene |
| 8 | Decidir Madgicx: usar o desconectar | 10 min | 0 score, -riesgo |

**Proyección score Cosas Nuestras tras ejecutar 1-6**: 54 → **~70-72** ✅

---

## Pendiente para auditoría completa

- [ ] Screenshot Events Manager → Diagnostics (para confirmar EMQ + dedup pixel principal)
- [ ] Screenshot Catalog Manager (imágenes desactualizadas — solo verificable visualmente)
- [ ] Acceso Shopify para auditar checkout (gap AddPaymentInfo→Purchase = 55%)
- [ ] Token con scope `catalog_management` si querés que extraiga catálogo via API
