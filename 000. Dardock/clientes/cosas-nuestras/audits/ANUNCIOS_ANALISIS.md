# Cosas Nuestras — Análisis ad-por-ad
> Período: últimos 30 días (2026-04-01 → 2026-05-01)
> Total ads con gasto: **28** · Spend: **641,907 CLP** · Compras: **97**

---

## Acciones tomadas hoy

- ✅ **Andrómeda Copia pausada** (campaign ID `120243596954420521`) — confirmado vía API status=PAUSED. Liberaba 64K CLP/30d con CPA 12,827 y ROAS 0.89×.

---

## TOP — los que sí venden

| # | Ad | Campaña | Spend | Compras | CPA | ROAS | Freq | CTR | Diagnóstico |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| 🥇 | **Diablo Portatermo** (video) | Andrómeda | 234,146 | 35 | 6,690 | **5.37×** | 2.91 | 3.28% | Ganador limpio. Freq sana, CTR alto. **Escalar 30%.** |
| 🥈 | **All Products – Ventas** | Catálogo BOFU | 236,327 | 42 | 5,627 | 4.56× | **5.21** | 2.39% | Vende más que nadie en CPA, pero **freq 5.21 = audiencia agotada**. Refrescar audiencia, no creativo. |
| 🥉 | **Portatermo - Producto** (foto IG) | Andrómeda | 17,824 | 6 | **2,971** | **12.35×** | 1.92 | 2.64% | El mejor CPA de la cuenta. Subexpuesto — **tiene combustible para escalar**. |
| 4 | Claudi + IA - Deporte (Copia) | Andrómeda | 4,742 | 2 | 2,371 | 20.78× | 2.33 | 1.85% | ROAS irreal por bajo volumen, pero la señal es positiva. Ampliar budget a 10-15K para confirmar. |
| 5 | Mate contenido - Blog (video) | Andrómeda | 4,221 | 1 | 4,221 | 96.81× | 1.65 | 4.22% | Mismo: poco volumen, ROAS no confiable, pero CTR 4.22% es excelente. Probar más spend. |
| 6 | Mates - Meme (Copia) | Andrómeda | 4,745 | 1 | 4,745 | 6.49× | 1.68 | 1.90% | OK pero CTR bajo (1.9%). |
| 7 | Factos - Divertido (Copia v2) | Andrómeda | 33,100 | 4 | 8,275 | 4.18× | 2.14 | 3.66% | Aceptable, no destacado. CTR alto (3.66%) sugiere creativo bueno con conversión floja. |

### Conclusión TOP
**Dos creativos cargan el negocio**: Diablo Portatermo (video) + All Products (catálogo). Entre los dos = **470K CLP de los 642K** = 73% del spend total.

Si mañana se rompe uno de los dos, **el negocio cae al 27% de capacidad de venta**. **No hay backup.** Eso es el riesgo más grande de la cuenta.

---

## BOTTOM — los que pierden plata

| # | Ad | Campaña | Spend | Compras | CPA | ROAS | Freq | CTR | Diagnóstico |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| 🚨 | **Factos - Divertido (Copia v1)** | Andrómeda Copia (ya pausada) | 54,648 | 2 | **27,324** | **0.89×** | 2.12 | 2.82% | Mismo nombre que el v2 pero ROAS opuesto. **Estaba en la copia → ya pausado con la campaña.** |
| 🚨 | **piscina de mate** | Andrómeda Copia (ya pausada) | 25,960 | 0 | — | 0.00× | 1.09 | 6.82% | CTR altísimo (6.82%) → la gente clica pero **no compra**. Creativo divertido / promesa que no cumple en landing. **Diagnóstico: hook fuerte + landing débil o producto incorrecto.** |
| ⚠️ | Manzana y Menta - Receta (Copia) | TOFU 2024 | 5,152 | 0 | — | 0.00× | 2.57 | 1.48% | CTR 1.48% bajo + 0 compras. Receta no convierte para venta directa. |

### Conclusión BOTTOM
- Las dos sangrías grandes (54K + 26K = **80K CLP/30d**) ya quedan cortadas con la pausa de Andrómeda Copia ✅
- "piscina de mate" es interesante: 6.82% CTR es excepcional — el creativo enganchó. Pero 0/470 clics convirtieron. Vale la pena entender qué prometía y por qué no cerró → puede ser una ruta TOFU fuerte si arreglamos el matching.

---

## FATIGA — frecuencia >= 4 con spend significativo

| Ad | Spend | Freq | CPA | ROAS | Acción |
|---|---:|---:|---:|---:|---|
| **All Products - Ventas** | 236,327 | **5.21** | 5,627 | 4.56× | Audiencia agotada — refrescar (lookalike más amplio o catalog feed nuevo) |

Solo un ad en zona crítica de fatiga (≥4). Pero está cargando 37% del spend total. El día que su CPA escale, el blended sube fuerte.

**Andrómeda principal** (campaña): freq 3.51 — todavía operable pero entrando en zona de alerta. Hay que producir 2-3 creativos nuevos antes de que llegue a 4.

---

## CEMENTERIO ENMASCARADO — ads "ACTIVE" sin gasto

Encontré **21 ads en estado ACTIVE** pero solo **8 producen gasto real**. Los otros 13 son ads de campañas viejas que no están entregando porque las campañas están pausadas. Algunos ni siquiera son de Cosas Nuestras:

- **Mauricio Benoist** (conferencista) — campaña 2019
- **BOXILIA** (servicio de almacenamiento) — campaña 2019
- **ADS Cargas internacionales** — 2019
- **YERBAS JULIO** — campaña 2019
- **Catálogo braseros / Colección Millenials** — 2019

Estos ads no consumen presupuesto pero **ensucian la lista** y, si por error se activa la campaña padre, empiezan a entregar contenido de hace 7 años.

**Acción**: pausar individualmente los 13 ads zombie — **no eliminar**, solo PAUSED para preservar histórico. Lo confirmás y lo hago vía API.

---

## Lo que vende vs lo que cuesta

```
Diablo Portatermo (video)     ████████████████████ 234K  ← 36% spend, 36% compras
All Products (catálogo)       ████████████████████ 236K  ← 37% spend, 43% compras
Factos Copia v1 (PAUSADA)     █████ 55K              ← 9% spend, 2% compras  🩸
Factos Copia v2               ███ 33K                ← 5% spend, 4% compras
piscina de mate (PAUSADA)     ██ 26K                 ← 4% spend, 0% compras  🩸
Portatermo Producto           █ 18K                  ← 3% spend, 6% compras  ⭐
TOFU 2024 (a pausar)          ██ 28K                 ← 4% spend, 0% compras  🩸
Resto                         ▎ 11K                  ← 2% spend, 9% compras
```

---

## Plan refresh creativos (escala aparte, después de Stape)

Cuando resolvamos el tema pixeles, hay que producir:

1. **3 nuevos creativos formato video** estilo "Diablo Portatermo" (es el ganador, no inventar de cero — replicar el patrón con otros productos: Diablo Mate, Diablo Yerbera, etc.)
2. **2 creativos foto producto** estilo Portatermo - Producto (es el mejor CPA con poco volumen — escalar el patrón)
3. **Refresh catálogo BOFU**: nuevos productos destacados + ampliar audiencia base (lookalike 3% → 5%)
4. **Re-test "piscina de mate"** con landing alineada — el hook funcionó, falló el matching

**No producir**: más "Factos Divertido" (probado en dos versiones, una funcionó marginal, otra perdió plata) ni más recetas (Manzana y Menta probó que no convierte para venta directa).

---

## Próximos checkpoints en este audit

- [ ] **Stape vs GTM**: esperando que mandes la info de la reunión con Meta para definir cuál pixel apagar
- [ ] **Pausar TOFU 2024** (28K CLP sin compras) — espero confirmación tuya
- [ ] **Pausar 13 ads zombie** (Mauricio Benoist, BOXILIA, etc.) — espero confirmación
- [ ] **Verificar dedup pixel principal** — necesito screenshot Events Manager → Diagnostics
- [ ] **Auditoría catálogo Meta** — necesito screenshot Catalog Manager (imágenes desactualizadas reportadas)
