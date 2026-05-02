# Google Ads Audit — Cosas Nuestras
> Período: 1 enero → 1 mayo 2026 (4 meses)
> Cuenta: AW-766753117 · Moneda: CLP

---

## TL;DR — 3 hallazgos que cambian el diagnóstico

1. **La campaña Search está prácticamente invisible** — Impression Share < 10%, 86% perdido por ranking (no por presupuesto). Está pagando para no aparecer.
2. **El mejor ad group de toda la cuenta está enterrado con los peores** — "Marca 11/9" (búsqueda de marca) tiene ROAS 26× y CPA 878 CLP pero comparte presupuesto de 12,000 CLP/día con ad groups que pierden dinero.
3. **PMax está funcionando pero sin guía de valor** — 192 conversiones en 4 meses y aún usando "Maximizar conversiones" sin tROAS. Es como tener un Ferrari en punto muerto.

---

## 1. Visión general de cuenta

| Métrica | Valor | Benchmark ecomm CL |
|---|---|---|
| Spend total (4 meses) | **1,705,977 CLP** | — |
| Spend mensual promedio | ~426,494 CLP | — |
| Conversiones | **238.94** | — |
| CPA blended | **7,140 CLP** | — |
| ROAS blended | **3.65×** | ≥ 3× OK, ≥ 4× bueno |
| CPC promedio | **110 CLP** | — |

El ROAS blended 3.65× es aceptable. El problema no es la eficiencia promedio — es que hay dos realidades muy distintas dentro de la cuenta.

---

## 2. Campañas — performance real

| Campaña | Tipo | Budget/día | Spend 4M | Conv | CPA | ROAS | Score |
|---|---|---:|---:|---:|---:|---:|---:|
| **PMax Shopping CN** | PMax | 20,000 | 1,290,823 | 192.57 | 6,703 | **3.97×** | 71.9% |
| **Cosas Nuestras A/B [exacta]** | Search | 12,000 | 415,155 | 46.37 | 8,953 | **2.65×** | 99% |

PMax lleva el 76% del gasto y genera el 81% de las conversiones. Search aporta el 24% del gasto y el 19% de conversiones — pero dentro de Search hay una historia completamente distinta por grupo.

---

## 3. Search — el problema de raíz

### Impression Share

| Métrica | Valor | Diagnóstico |
|---|---|---|
| IS Search | **< 10%** | 🔴 CRÍTICO — aparecen en menos de 1 de cada 10 búsquedas |
| IS perdida por ranking | **86.40%** | 🔴 Baja calidad o puja insuficiente vs competencia |
| IS perdida por presupuesto | 8.38% | ✅ El presupuesto no es el problema |
| % impresiones top | 66.52% | Cuando aparecen, aparecen arriba — pero casi nunca aparecen |

**Diagnóstico**: el tCPA de 8,945 CLP configurado en la campaña es demasiado bajo para ganar las subastas. El algoritmo descarta la mayoría de las oportunidades porque no puede cumplir ese CPA. O el Quality Score es tan bajo que el Ad Rank se cae antes de la puja.

---

## 4. Search — Ad Groups (el dato más importante)

| Ad Group | Spend | Conv | CPA | ROAS | Diagnóstico |
|---|---:|---:|---:|---:|---|
| 🥇 **Marca 11/9** | 23,695 | 27.00 | **878** | **26.03×** | Búsqueda de marca — el mejor de la cuenta |
| Porta Termos | 59,846 | 4.05 | 14,789 | 1.80× | Marginal |
| Yerba mate (23/1) | 120,454 | 7.00 | 17,208 | 1.33× | Por debajo break-even |
| Mates | 102,924 | 4.32 | 23,807 | 1.25× | Por debajo break-even |
| **Bombilla Mate** | **88,111** | 3.00 | **29,370** | **0.84×** | 🔴 PIERDE DINERO |
| **Termos** | **20,124** | 1.00 | **20,124** | **0.53×** | 🔴 PIERDE DINERO |
| Portatermos (23/1) | 0 | 0 | — | — | Sin entrega (publicación limitada) |

**El problema estructural**: todos estos grupos comparten el mismo presupuesto de 12,000 CLP/día. El algoritmo distribuye entre el peor (Bombilla Mate, 0.84×) y el mejor (Marca, 26×) sin poder priorizar. Si separás Marca en su propia campaña, liberás 12K exclusivos para el resto y podés apagar los que pierden.

### Costo de los grupos que pierden
- Bombilla Mate: 88,111 CLP → ROAS 0.84× → **pérdida neta ~14K en 4 meses**
- Termos: 20,124 CLP → ROAS 0.53× → **pérdida neta ~10K en 4 meses**
- Total spend desperdiciado en Search: **~108K CLP (26% del budget Search)**

---

## 5. Search terms — calidad de tráfico

El informe de términos muestra dos problemas serios:

**Queries informacionales (intención incorrecta):**
- "en qué ayuda el mate" → investigación, no compra
- "beneficios del mate" → blog, no tienda
- "propiedades del mate" → blog
- "de qué sirve tomar mate" → editorial
- "beneficios y desventajas del mate" → editorial

**Queries de competidores / productos que no venden:**
- "mates stanley" → marca competidora
- "bombilla mate stanley" → marca competidora
- "bombillon alpaca pico de rey" → producto específico que probablemente no tienen
- "mate system stanley" → competidor

Estos términos consumen impresiones/clics con CTR bajo → bajan Quality Score → bajan IS → el círculo vicioso.

---

## 6. PMax — estado

| Métrica | Valor | Diagnóstico |
|---|---|---|
| Spend 4M | 1,290,823 CLP | — |
| Conversiones | 192.57 | ✅ Suficiente historial |
| CPA | 6,703 CLP | OK |
| ROAS | 3.97× | Aceptable |
| Optimization score | **71.94%** | ⚠️ Google tiene recomendaciones pendientes |
| Estrategia actual | Maximizar conversiones | ⚠️ Sin tROAS — no optimiza por valor |
| IS Display perdida | **> 90%** | No critico (Display es brand awareness, no conversión) |

**Grupo de recursos**: solo un grupo "Intereses" con todos los productos mezclados. No hay separación entre portatermo vs mates vs yerba vs regalos.

---

## 7. Quality Score (keywords Search)

Del informe de keywords, varios con:
- **"Inferior al promedio"** en experiencia de página de destino
- Keywords como "termo de agua", "comprar termo" → landing probablemente no es la PDP correcta del producto

---

## Plan de acción priorizado

| # | Acción | Impacto | Urgencia |
|---|---|---|---|
| 1 | **Separar "Marca" en campaña propia** (budget 5,000/día, tCPA 800-1,000 CLP) | CPA de marca no contamina el resto, presupuesto dedicado al mejor ROAS de la cuenta | 🔴 Esta semana |
| 2 | **Pausar Bombilla Mate + Termos ad groups** | Libera ~108K CLP/4M de gasto negativo | 🔴 Esta semana |
| 3 | **Agregar tROAS a PMax** (target: 3.5× para empezar) | PMax optimiza por valor en vez de volumen puro | ⚠️ Esta semana |
| 4 | **Agregar negative keywords a Search** | Excluir queries informacionales y de competidores | ⚠️ Esta semana |
| 5 | **Revisar optimization score PMax** (71.9%) | Implementar las recomendaciones de Google (probablemente assets + extensiones) | ⚠️ Próximas 2 semanas |
| 6 | **Subir tCPA en Search** | IS < 10% indica que el tCPA está muy apretado — subir 20-30% como test | ⚠️ Próximas 2 semanas |
| 7 | **Crear 2-3 grupos de recursos en PMax** | Separar: Portatermo / Kits de regalo / Yerba | ℹ️ Próximo mes |

---

## Negatives pendientes — lista para implementar

**Informationals (agregar como negativas exactas en Search):**
- beneficios del mate
- propiedades del mate
- en que ayuda el mate
- de que sirve el mate
- para que sirve tomar mate

**Competidores / mal match:**
- stanley
- tramontina
- amazon
- anymate

**Geográficos sin intención comercial:**
- argentina (sin "comprar")
- palermo
- rosario

---

## Score Google Ads

| Sub-componente | Score |
|---|---|
| Estructura de campañas | 45 — PMax + Search es correcto pero Search internamente roto |
| Bidding | 40 — sin tROAS en PMax, tCPA demasiado bajo en Search |
| Quality Score | 40 — múltiples grupos con LPE inferior al promedio |
| Negative keywords | 30 — sin lista maestra, queries informacionales activas |
| Assets / creativos PMax | 55 — un solo grupo de recursos para todo |
| Conversión tracking | 80 — Google Ads conversion tracking activo (2 acciones) |

**Score Google Ads estimado: 48/100**

---

## Nota: GA4

El export de GA4 en la carpeta correspondía a **Genera Industrial**, no a Cosas Nuestras. Para auditar el embudo web de CN necesito:
- Export GA4 desde la propiedad de Cosas Nuestras
- O acceso para leer directamente

---

## Proyección post-fix

Si se ejecutan acciones 1-4 esta semana:
- Search ROAS: 2.65× → estimado **4.5-5×** (al eliminar grupos perdedores y aislar marca)
- PMax ROAS: 3.97× → estimado **4.5×** (con tROAS guiando el algoritmo)
- Google blended: 3.65× → estimado **4.7×**
- CPA blended Google: 7,140 → estimado **~5,500 CLP**
