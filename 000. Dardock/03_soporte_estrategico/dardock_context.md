# DARDOCK — Contexto Consolidado de Proyecto
> Marzo 2026 | Uso interno / terminal

---

## 1. IDENTIDAD DE AGENCIA

- **Nombre:** Dardock Creative (*Designing Stories*)
- **Base:** Chile
- **Director:** Matías
- **Equipo:** Israel (contenido)
- **Misión:** Transformar la inversión publicitaria en activos de crecimiento mediante Growth Marketing y Automatización con IA.
- **Diferenciador:** Decisiones basadas en datos. "No hacemos marketing adolescente."
- **Voz de marca:** Profesional, directa, basada en evidencias, tecnológicamente avanzada.

---

## 2. CLIENTES ACTIVOS

### 2.1 Cosas Nuestras
- **Rubro:** E-commerce de mate y cultura rioplatense
- **Web:** cosasnuestras.cl (Shopify)
- **Ubicación:** Chile, RM. Despacho gratis sobre $29.990 en RM.
- **Canales ads:** Meta + Google
- **Plataformas orgánicas:** FB + IG (Metricool)
- **Productos:**
  - Línea *El Club del Mate*: bolsos materos, termos, mates, bombillas, yerba importada, yerberas
  - Línea *El Kiosco*: alfajores Havanna/Cachafaz, golosinas, panadería, chocolates arg/uru
  - Kits de regalo curados por rango de precio
  - Canal mayorista activo
- **Fundada:** 2016
- **Perfiles de audiencia:**
  1. Argentinos/uruguayos en Chile (nostalgia activa, mayor urgencia)
  2. Chilenos mateadores o adoptando el hábito
  3. Compradores de regalo con identidad cultural
- **Insight clave:** El cliente compra pertenencia, ritual y nostalgia — no producto físico.
- **Funnel actual:** Shopify + WhatsApp (+56 9-8158-4994) + RRSS. SIN landing pages segmentadas, quiz funnel, email/WA marketing post-visita ni retargeting.
- **Plan Funnel 400%:** Diseñado. Pendiente de implementación.
- **Problemas detectados (dic 2025):**
  - Interacciones cayeron -19.15% vs mes anterior (FB -20%, IG -39.86%)
  - Impresiones IG explotaron (+108%, 796K) pero sin engagement → desacople contenido/audiencia
  - Solo 2 posts con copy estructurado en todo el mes
  - Contenido de ritual/identidad supera ampliamente al contenido de producto puro
- **Próximas tareas:** Reescribir descripciones de producto, proponer rotación de oferta, identificar fricciones en Shopify.

---

### 2.2 Dany Cáceres
- **Rubro:** Marca personal — importación y emprendimiento
- **Empresa matriz:** ADS Group International
- **Canales ads:** Meta + Google
- **Funnel completo:**
  - Contenido (RRSS/YouTube)
  - → Libros (*Emprende Importando*, *Vender Importando*) [tripwire]
  - → Comunidad WhatsApp pagada [mid-ticket]
  - → Asesoría 1:1 high-ticket
  - → Clientes corporativos logística para ADS Group
- **Lanzamiento próximo:** Libro nuevo (~20 abril). Precio accesible como entrada al funnel.
- **Plataformas:** Meta Ads, Google Ads, YouTube, Instagram, Mercado Libre (venta de libros)
- **Problemas detectados en auditoría:**
  - YouTube depende de paid ads para vistas
  - Instagram con engagement declinante
  - Google Ads CPC en aumento
  - Conversion tracking ausente entre plataformas
  - Tráfico web se queda en homepage, no llega a landing pages de libros
  - Funnel break crítico: la mayoría del tráfico no llega a la oferta
- **Desafío técnico:** Tracking Meta Ads → Mercado Libre.
  - Solución propuesta: webhook `orders_v2` de ML vía Make.com → Meta CAPI (Purchase events) + landing page intermediaria *Emprende Importando* para capturar `fbclid` y mejorar match quality.
- **Prioridades:**
  1. Redirigir tráfico de ads a landing pages (no homepage)
  2. Lanzar campaña Meta con objetivo conversión
  3. Resolver tracking ML → Meta CAPI
  4. Preparar lanzamiento del libro nuevo

---

### 2.3 Tres Toques
- **Rubro:** Restaurante / sanguchería / burger bar
- **Dirección:** Av. Francisco Bilbao 4531, La Reina, Santiago de Chile
- **Web:** trestoques.cl | **IG:** @trestoque3
- **Concepto:** "Burgers brutales, cervezas heladas y buena vibra."
- **Canales de venta:** Consumo en local + Delivery (Uber Eats, PedidosYa, Rappi) + Web directa
- **Canales ads:** Meta (FB + IG). Google pendiente confirmar.
- **Público:** 20-45 años, Santiago urbano. Foodie, social, casual.
- **Personalidad de marca:** Cercana, casual, urbana, con humor y actitud.
- **Menú destacado:**
  - Hamburguesa Tres Toques (carne 150g, cebolla caramelizada, cheddar, mantecoso, champiñones, tocino)
  - Hamburguesa Mostra (doble carne, cheddar, mantecoso, tocino, aros de cebolla)
  - Hamburguesa Veggie
  - Barros Luco, Chacarero, Churrasco Italiano
  - Papas con cheddar, picoteos

---

### 2.4 ADS Group International
- **Rubro:** Logística y freight forwarding
- **Operación:** Perú, Chile, USA, Argentina, China
- **Relación:** Empresa matriz de Dany Cáceres. El funnel de Dany alimenta leads corporativos.
- **Servicios:** Logística integral, freight forwarding, importación/exportación, asesoría en comercio exterior.
- **Canales ads:** Solo Google Ads
- **Objetivo:** Leads B2B calificados
- **Público:** Empresas importadoras/exportadoras, emprendedores que escalan a importación formal, empresas que necesitan freight forwarding entre Latam, USA y China.

---

## 3. STACK TECNOLÓGICO

| Categoría | Herramientas |
|-----------|-------------|
| Ads & Analytics | Meta Ads, Google Ads, Metricool |
| E-commerce | Shopify, Mercado Libre |
| Automatizaciones | n8n (self-hosted), Make.com |
| APIs | Meta Ads API, Meta CAPI, Claude API, WhatsApp |
| Project Management | ClickUp |
| Contenido/Producción | (Israel) |

---

## 4. FRAMEWORKS ESTRATÉGICOS

### Russell Brunson — Value Ladder
- Nivel 0: Audit gratuito (lead magnet)
- Nivel 1: Frontend service (entry ticket)
- Nivel 2: Core retainer
- Nivel 3: Premium retainer
- Nivel 4: High-ticket consulting
- Axioma: "Estás a solo un funnel de distancia."
- Aplicación Dardock: Una vez validada la oferta, Brunson diseña el Value Ladder y el flujo de landing page.

### Jan Schröder — Funnel 400%
- Metodología para multiplicar conversiones en cada etapa del funnel.
- Plan diseñado para Cosas Nuestras. Pendiente de implementación.

### Alex Hormozi — Oferta y Escala
- Axioma: "Haz una oferta tan buena que la gente se sienta estúpida diciendo que no."
- Aplicación Dardock: Antes de lanzar cualquier campaña, auditar si la oferta del cliente es una "$100M Offer".
- Filtro: ¿Esta oferta es escalable?

### Ogilvy / Halbert / Schwartz
- Framework de copywriting para ads y contenido.

### Protocolo R-A-C-E (Prompts)
- **Role:** Asignar rol específico (ej. "Actúa como Hormozi analizando...")
- **Action:** Verbos de alto impacto: Audita, Deconstruye, Sintetiza
- **Context:** Datos del negocio, miedos, recursos actuales
- **Expectation:** Formato y límite de acciones (ej. "3 acciones que no tomen más de 2 horas")

---

## 5. SERVICIOS CORE DE DARDOCK

- Meta/Google Ads (gestión y optimización)
- Funnels de venta
- CRM
- Automatización de chatbots
- Producción audiovisual
- Automatización de reportes (n8n/Make + Claude API)
- Consultoría de e-commerce
- **En desarrollo:** "The Infinite Growth Engine" (servicio high-ticket)
  - Fee implementación: $2.5k–$5k + variable por resultados
  - Garantía: Infraestructura automatizada en 30 días o se trabaja gratis

---

## 6. AUTOMATIZACIONES EN SCOPE

### 6.1 Meta Ads Reporting Pipeline
- **Stack:** n8n + Claude API
- **Objetivo:** Extracción automática de datos Meta Ads → análisis vía Claude API → entrega de reporte
- **Estado:** En definición

### 6.2 Meta CAPI — Mercado Libre (Alta prioridad)
- **Problema:** Sin tracking de conversiones ML → Meta, el algoritmo optimiza contra señales proxy (no compras reales), degradando ROAS directamente.
- **Solución propuesta:**
  1. Webhook `orders_v2` de Mercado Libre
  2. → Make.com (o n8n — pendiente definir)
  3. → Meta Conversions API (evento Purchase)
  4. + Landing page intermediaria para capturar `fbclid` y mejorar match quality
- **Estado abierto:**
  - Destino del clic en el ad (¿ML directo o landing?)
  - ¿Build en Make o n8n?
  - Estado de activación de Shopify CAPI nativo
- **Meta Pixel y CAPI token:** Ya configurados.

---

## 7. RIESGOS ESTRUCTURALES DE DARDOCK

1. **Concentración de revenue** en pocos clientes
2. **Matías como punto único de falla** operacional
3. **Posicionamiento no diferenciado** vs agencias tradicionales
4. **Sin canal propio de adquisición** de clientes (dependencia de referidos/red)

---

## 8. METODOLOGÍA DE TRABAJO

1. **Auditoría:** Identificar fugas de dinero en el ecosistema actual del cliente.
2. **Estrategia:** Diseño del motor de crecimiento (oferta Hormozi + estructura Brunson).
3. **Implementación:** Despliegue de campañas y sistemas de captación.
4. **Optimización:** Análisis semanal de datos → escalar lo que funciona, cortar lo que no.

**Restricciones de calidad:**
- No se aceptan campañas sin tracking correctamente configurado.
- Toda pieza creativa debe responder a un hook claro y una oferta validada.

---

## 9. ESTRUCTURA DE PROYECTOS EN CLAUDE

| Proyecto | Chats |
|----------|-------|
| Dardock HQ | Estrategia, Procesos, Automatizaciones, Propuestas |
| Cosas Nuestras | Estrategia/Funnel, Meta Ads, Google Ads, Contenido, Reportes |
| Dany Cáceres | Estrategia/Funnel, Meta Ads, Google Ads, Contenido, Tracking, Reportes |
| Tres Toques | Estrategia/Funnel, Meta Ads, Google Ads, Contenido, Reportes |
| ADS Group | Estrategia B2B, Google Ads, Contenido Institucional, Reportes |
| **Total** | **5 proyectos, 24 chats especializados** |

---

## 10. PRÓXIMAS ACCIONES PRIORITARIAS

1. Finalizar arquitectura CAPI ML → Make/n8n → Meta (decisiones abiertas: destino del clic, plataforma de build, estado Shopify CAPI)
2. Implementar Funnel 400% para Cosas Nuestras (landing pages por segmento)
3. Preparar lanzamiento libro Dany Cáceres (~20 abril): timeline, campañas Meta, tracking
4. Definir value ladder de Dardock con pricing concreto para mercado chileno
5. Construir SOPs para reducir dependencia operacional de Matías
6. Activar canal propio de adquisición de clientes para Dardock
7. Optimizar product pages y oferta de Cosas Nuestras (Shopify)

---

## 11. NOTAS DE TRABAJO

- Matías usa ventanas de chat separadas por proyecto/workstream.
- Idioma de trabajo: español, informal, ritmo rápido.
- Claude opera como estratega senior — diagnosticar antes de prescribir, impacto primero.
- Israel ejecuta contenido; Matías usa Claude para estrategia, arquitectura y entregables estructurados.
- Los recaps deben incluir próximos pasos claros organizados por proyecto y prioridad.

---

*Generado: Marzo 2026 | Dardock — Designing Stories*
