# [Nombre Cliente] × Dardock — Sesión de trabajo

## Fuentes de verdad

| Archivo | Usar para |
|---|---|
| `00_MASTER_DATA/<Cliente>/<Cliente>_MasterData.json` | **Identidad, productos, precios, audiencia, plataformas, hitos, scores. Fuente principal.** |
| `clientes/<slug>/Estado_Actual.md` | Estado semanal: campañas activas, pendientes, presupuesto, score por capas |
| `clientes/<slug>/funnel_config.json` | Config del funnel (etapas, plataformas, accounts) |
| `clientes/<slug>/metrics_live.json` | Métricas live del último período auditado |
| `clientes/<slug>/brand-profile.json` | DNA de marca (colores, tipografía, tono) — si existe |
| ClickUp | Tareas, responsables, fechas, comentarios operativos |
| Notion | Reportes, minutas, wiki compartible |
| Dashboard data | `Dashboard/dardock-command-center/src/data/clients/<slug>.ts` |

**Si hay contradicción entre archivos, manda `<Cliente>_MasterData.json`.**

El schema estandarizado vive en `clientes/_TEMPLATE/MasterData.json` — copiarlo a `00_MASTER_DATA/<Cliente>/` al onboardear.

---

## Quién es [Cliente]

_(1-2 líneas: qué hace, dónde opera, modelo de negocio)_

**Posicionamiento:** _"..."_

**Cliente objetivo:** _(perfil)_

---

## Value ladder

```
(mapear el flujo completo de productos/servicios)
```

---

## Reglas de marca

- Tono:
- Palabras propias:
- Palabras prohibidas:
- Español: (neutro LATAM / local / otro)

---

## Reglas técnicas

- Plataforma web:
- CRM:
- Canales ads activos:
- Tracking actual:

---

## No reabrir

_(decisiones ya tomadas que no se vuelven a discutir)_
