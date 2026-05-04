# Popup CRO Strategy — Cosas Nuestras
> Fecha: 02 Mayo 2026 · Estado actual: solo embed mid-page · Skill: popup-cro

---

## Estado actual

**Lo que existe:** Embed estático mid-page — "Suscríbete y Disfruta de Beneficios Exclusivos"  
**CVR estimado actual:** 0.3-0.8% (embed pasivo sin trigger = muy baja visibilidad)  
**Lo que falta:** Popup con trigger activo — timed, exit-intent y/o scroll-based

---

## Estrategia de 3 popups (sin solapamiento)

### Popup 1 — Captura principal (Email list building)
**Tipo:** Timed · 20 segundos o 40% de scroll, lo que ocurra primero  
**Audiencia:** Visitantes nuevos que no han comprado  
**Frecuencia:** 1 vez por sesión · No volver a mostrar por 14 días tras cierre · Nunca en checkout  

**Copy:**

> **Headline:** ¿Tu primer mate o el de siempre?  
> **Subhead:** Suscribite y recibí descuentos exclusivos + el kit que más le va a tu ritual.  
> **CTA:** Quiero mi descuento  
> **Decline:** Ahora no, gracias

**Por qué funciona:**
- Pregunta espejo (Curiosidad Obsesiva™) — el visitante se identifica sin que le digamos qué somos
- Doble promesa: descuento + personalización
- Sin mencionar "newsletter" — menciona el ritual

**Benchmark esperado:** 2-4% de conversión sobre impresiones

---

### Popup 2 — Exit Intent (Recuperación de abandono)
**Tipo:** Exit intent (cursor hacia barra superior)  
**Audiencia:** Visitantes que van a salir sin comprar ni suscribirse  
**Frecuencia:** 1 vez por sesión · Solo si no convirtió Popup 1  

**Copy:**

> **Headline:** Antes de irte — ¿seguro que no te falta el mate?  
> **Subhead:** Llevate 10% de descuento en tu primera compra. Solo por hoy.  
> **CTA:** Sí, me llevo el descuento  
> **Decline:** No, voy a pagar precio completo

**Nota:** El copy del decline en este caso es gentle-pressure válido para e-commerce de ticket bajo (<$40.000). No es manipulador — el visitante claramente sabe que rechaza un descuento.

**Benchmark esperado:** 3-7% sobre impresiones (exit intent convierte mejor que timed)

---

### Popup 3 — Quiz de segmentación (Participación Crea Posesión)
**Tipo:** Click-triggered (botón "¿Qué kit es para mí?" en colección kits y homepage)  
**Audiencia:** Todos los visitantes — se activa solo cuando hacen clic  
**Frecuencia:** Sin límite — es click-triggered, no interruptivo  

**Flujo:**
```
Pregunta 1: "¿El mate es para...?"
  → Para mí solo  
  → Para compartir con amigos/familia  
  → Es un regalo

Pregunta 2 (si "Para mí solo"): "¿Tenés todo o empezás de cero?"
  → Tengo termo, me falta el resto → Kit Básico
  → Empiezo de cero → Kit Primer Mate ★

Pregunta 2 (si "Para compartir"): "¿Cuántas personas?"
  → Solo 2-3 → Kit Estándar
  → Ronda grande → Kit Completo ★

Pregunta 2 (si "Es un regalo"): "¿Cuánto querés gastar?"
  → Hasta $35.000 → Kit Regalo Básico
  → Hasta $55.000 → Kit Premium ★

→ Resultado: Recomendación + botón "Ver este kit"
→ Opcional: "Guardar mi elección" → captura email
```

**Por qué es prioritario:** Este popup no interrumpe — ayuda. El visitante que pasa por el quiz tiene posesión emocional del kit recomendado antes de ver el precio. Convierte mejor que cualquier retargeting.

---

## Reglas de no solapamiento

```
Popup 1 (timed) → se muestra primero
  ↓ si convirtió → nunca más Popup 1 ni Popup 2 en esta sesión
  ↓ si cerró → Popup 2 (exit intent) disponible
  
Popup 2 (exit) → solo si Popup 1 no convirtió
  ↓ si convirtió → fin de sesión de popups
  
Popup 3 (click quiz) → siempre disponible, independiente de 1 y 2
  ↓ captura email al final solo si el usuario elige "guardar"
  
Checkout → TODOS los popups deshabilitados en /checkout
```

---

## Diseño y estética (Dardock brand rules)

**Paleta:** Fondo oscuro cálido (#1a120a) + acento verde mate (#4a7c59) + texto crema (#f5f0e8)  
**Tipografía:** Sans (Inter o similar) para cuerpo — mono para descuento/código  
**Imagen:** Foto de mate con vapor en fondo oscuro — evoca ritual, no producto  
**Tamaño desktop:** 480px ancho · Modal centrado con overlay  
**Mobile:** Full-width bottom slide-up (no full-screen)  
**Cierre:** X visible top-right + click outside · ESC funcional (accesibilidad)

---

## Métricas objetivo

| Popup | Impresiones objetivo | CVR objetivo | Captura mensual estimada |
|---|---|---|---|
| Popup 1 (timed) | 100% nuevos visitantes | 3% | Variable según tráfico |
| Popup 2 (exit) | 40% de los que no convierten P1 | 5% | Variable |
| Popup 3 (quiz click) | 15% de visitantes colección | 25% click-through | Alto engagement |

---

## Herramienta recomendada

**Opción A — Shopify nativo:** Muy limitado. Sin quiz, sin exit intent real.  
**Opción B — Privy** (app gratuita hasta cierto volumen): Popup + exit intent + timed. Sin quiz.  
**Opción C — Klaviyo Forms** (si activan Klaviyo para email): Popup + exit + segmentación avanzada.  
**Opción D — Typeform + Privy:** Quiz en Typeform embebido en popup de Privy. Más fricción técnica.  
**Recomendación:** Empezar con Privy para Popups 1 y 2 esta semana (setup < 2h). Quiz como fase 2.

---

## Compliance GDPR/Privacidad

- Sin pre-check de opt-in — el clic en CTA es el consentimiento
- Link a política de privacidad en pie del popup
- Respetar preferencias (no volver a mostrar tras cierre con cookie 14 días)
- Chile: Ley 19.628 sobre datos personales — consentimiento explícito requerido
