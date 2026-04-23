# CHANGELOG — Dardock Command Center

---

## [V2.0.0] — 2026-04-12

### Resumen
Rediseño completo del dashboard. Pasa de demo visual a entregable ejecutivo premium.

### Archivos nuevos
- `src/types/dashboard.ts` — sistema de tipos TypeScript para toda la data del cliente
- `src/data/clients/cosas-nuestras.ts` — data real del primer cliente (Cosas Nuestras, Abril 2026)
- `src/components/dashboard/HeroExecutive.tsx` — nuevo hero: insight gigante + score card + breakdown de capas
- `src/components/dashboard/KpiGrid.tsx` — grid asimétrico: 1 KPI protagonista (grande, con glow) + 4 secundarios

### Archivos modificados
- `src/pages/ClientDashboard.tsx` — reconstruido completo con tema oscuro premium y 7 secciones

### Qué cambió visualmente
| Antes | Después |
|---|---|
| Hero plano con nombre del cliente | Hero con insight principal en tipografía gigante (6xl, font-black) |
| Score aislado y decorativo | Score card con número grande, estado, interpretación y mini-breakdown |
| 6 KPI cards todas iguales | 1 KPI protagonista (7xl) + 4 secundarios en grid 2×2 |
| Fondo genérico | `bg-[#070708]` + cards `bg-[#111111]` + borders `white/5` |
| Sin narrativa ejecutiva | Bloque 3 columnas: Qué funciona / Qué necesita atención / Qué hacemos ahora |
| Sin tabla de síntomas | Tabla síntoma → causa → capa → impacto |
| Roadmap al pie | Roadmap en 3 columnas con peso visual (Urgente / 30d / 90d) |
| Sin separación de responsables | Sección "Dardock hace / Cliente hace" |

### Colores semánticos aplicados
- Verde performance: `#4cc120` (healthy)
- Gold premium: `#f5c842` (warning / observación)
- Rojo crítico: `#D93025` (critical)
- Fondo: `#070708`
- Cards: `#111111`

### Arquitectura multi-cliente
El dashboard ahora acepta un `clientId` prop y tiene un registro central.
Para agregar un nuevo cliente: crear `src/data/clients/<slug>.ts` y registrarlo en `CLIENT_REGISTRY`.

---

## [V1.0.0] — versión inicial (demo NovaSkin)

Demo funcional con estructura básica. Reemplazada por V2.
