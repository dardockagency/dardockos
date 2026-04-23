# SOP — Cliente Nuevo

## Cuándo aplica

Cuando un prospecto acepta trabajar con Dardock y hay que activar su sistema completo.

---

## FASE 0 — Pre-validación (antes de firmar)

Antes de avanzar, validar el `Checklist Pre-Propuesta` en `04_comercial_propuestas/05_Checklist_Pre_Propuesta.md`.

Si aparecen 2 o más señales de alerta, ajustar alcance o no avanzar.

---

## FASE 1 — Extracción de contexto de marca

**Skill:** `/ads-dna`

Correr sobre el sitio web del cliente. Genera el perfil de marca, propuesta de valor, audiencias, tono, competidores.

Output esperado: `brand-profile.json`

Guardar en: `../1. Cliente/<nombre-cliente>/brand-profile.json`

---

## FASE 2 — Contexto de marketing del producto

**Skill:** `/product-marketing-context`

Crea o actualiza el documento de contexto de marketing (ICP, pain points, posicionamiento, diferenciadores).

Output esperado: `marketing-context.md`

Guardar en: `../1. Cliente/<nombre-cliente>/marketing-context.md`

---

## FASE 3 — Auditoría completa de ads

**Skill:** `/ads-audit`

Auditoría multi-plataforma con subagentes paralelos. Cubre Meta, Google, tracking, budget, creativo, y las plataformas activas que tenga el cliente.

Inputs que pide:
- acceso a cuentas de ads o exports
- datos de conversión / ROAS disponibles
- contexto de oferta y funnel

Output esperado: reporte de auditoría completo con hallazgos por plataforma.

Guardar en: `../1. Cliente/<nombre-cliente>/auditoria-inicial.md`

> Si el cliente no tiene ads activos aún, saltar esta fase y marcarla como pendiente.

---

## FASE 4 — Tracking

**Skill:** `/analytics-tracking`

Validar el estado del pixel, CAPI, eventos de conversión, GA4, UTMs y atribución.

Identificar gaps antes de encender campañas o escalar inversión.

Output esperado: reporte de tracking con estado de cada capa y acciones requeridas.

---

## FASE 5 — Cargar cliente al dashboard

### 5.1 Crear archivo de data

```bash
cd Dashboard/dardock-command-center
cp src/data/clients/cosas-nuestras.ts src/data/clients/<slug-cliente>.ts
```

Editar el nuevo archivo con los datos reales de la auditoría.

Campos mínimos obligatorios:
- `clientName`, `descriptor`, `period`
- `overallScore` (0-100)
- `kpis` (mínimo 3)
- `systemLayers` (las 5 capas: Oferta, Tracking, Funnel, Campañas, Creativo)
- `immediatePriorities` (mínimo 2)
- `roadmap`

### 5.2 Registrar en el index

Agregar export en `src/data/clients/index.ts`.

### 5.3 Agregar ruta

Verificar que existe la ruta `/clientes/<slug>` o `/client/<slug>` en `src/App.tsx`.

### 5.4 Publicar

```bash
npm run ship -- "agrega cliente <slug>"
```

---

## FASE 6 — Briefing creativo (si aplica)

**Skill:** `/ads-create`

Con base en el brand-profile y la auditoría, genera el brief creativo para la primera tanda de campañas.

---

## FASE 7 — Entrega al cliente

1. Compartir URL del dashboard: `central.dardock.com/clientes/<slug>`
2. Enviar resumen ejecutivo por email o WhatsApp
3. Agendar kickoff de 30 min para revisar hallazgos y roadmap

---

## Checklist de activación

- [ ] Checklist pre-propuesta validado
- [ ] `brand-profile.json` generado
- [ ] `marketing-context.md` creado
- [ ] Auditoría inicial completada
- [ ] Tracking evaluado y gaps documentados
- [ ] Archivo `src/data/clients/<slug>.ts` creado y completo
- [ ] Index del dashboard actualizado
- [ ] Build validado (`npm run build`)
- [ ] Deploy publicado (`npm run ship`)
- [ ] URL del dashboard compartida con el cliente
- [ ] Kickoff agendado
