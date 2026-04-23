# SOP — Revisión Semanal de Cliente Activo

## Cuándo aplica

Cada semana, por cada cliente en retainer. Idealmente lunes o martes antes de la semana operativa.

---

## PASO 1 — Auditoría semanal

**Skill:** `/auditoria-semanal`

Punto de entrada para toda revisión semanal. La skill revisa resultados recientes, detecta anomalías, evalúa el estado por plataforma y genera el resumen ejecutivo de la semana.

Inputs que necesita:
- nombre del cliente
- período de revisión (ej. "semana del 14 al 20 de abril")
- datos de la semana: inversión, conversiones, ROAS, CPM, CTR, CPA
- contexto: cambios realizados la semana anterior, eventos especiales, pausas

---

## PASO 2 — Revisión por plataforma activa

Según los canales del cliente, correr la skill específica si hay algo que profundizar:

| Plataforma | Skill |
|---|---|
| Meta Ads | `/ads-meta` |
| Google Ads | `/ads-google` |
| TikTok Ads | `/ads-tiktok` |
| LinkedIn Ads | `/ads-linkedin` |
| Microsoft/Bing | `/ads-microsoft` |

No correr todas por defecto. Solo la que muestra señal anómala o requiere decisión esta semana.

---

## PASO 3 — Revisión de creativo (si hay piezas nuevas o fatiga detectada)

**Skill:** `/ads-creative`

Correr cuando:
- se lanzaron creativos nuevos esta semana
- la frecuencia supera 3.0 en Meta
- CTR bajó >20% semana a semana sin cambio de oferta
- hay que decidir si pausar o rotar piezas

---

## PASO 4 — Revisión de presupuesto y bidding (si hay cambios o desvíos)

**Skill:** `/ads-budget`

Correr cuando:
- el gasto real se desvió >15% del plan
- hay campaña en learning phase bloqueada
- se está evaluando escalar o reducir presupuesto
- el ROAS cayó y no hay causa creativa obvia

---

## PASO 5 — Actualizar el dashboard del cliente

### 5.1 Entrar al repo

```bash
cd Dashboard/dardock-command-center
git pull
```

### 5.2 Editar la data del cliente

```bash
src/data/clients/<slug-cliente>.ts
```

Campos que actualizar cada semana:
- `period` — nuevo período
- `kpis` — valores reales de la semana
- `systemLayers` — ajustar scores y comentarios según hallazgos
- `immediatePriorities` — actualizar según qué cambió
- `roadmap` — marcar tareas completadas, agregar nuevas

### 5.3 Publicar

```bash
npm run ship -- "actualiza semana <fecha> <slug>"
```

---

## PASO 6 — Reporte al cliente

Formato mínimo:

```
Semana del [fecha]:

✅ Lo que funcionó
⚠️ Lo que detectamos
🔧 Lo que hicimos
📋 Lo que viene

[URL dashboard]
```

Enviar por WhatsApp o email según el acuerdo con el cliente.

---

## PASO 7 — Registro interno (opcional pero recomendado)

Anotar en el ClickUp del cliente:
- resumen de la semana (2-3 líneas)
- tareas completadas
- tareas que quedan pendientes
- próximo hito

---

## Checklist semanal

- [ ] `/auditoria-semanal` corrida con datos de la semana
- [ ] Plataforma(s) con señal anómala revisadas en profundidad
- [ ] Creativo revisado si hay fatiga o piezas nuevas
- [ ] Presupuesto y bidding revisados si hay desvío o decisión pendiente
- [ ] `src/data/clients/<slug>.ts` actualizado
- [ ] Build validado
- [ ] Dashboard publicado
- [ ] Reporte enviado al cliente
- [ ] ClickUp actualizado

---

## Regla operativa

La revisión semanal no busca el análisis más exhaustivo posible.

Busca responder tres preguntas:

1. **¿Qué cambió esta semana que importa?**
2. **¿Hay algo que romper o pausar ahora?**
3. **¿Qué hace Dardock esta semana y qué debe hacer el cliente?**

Si no hay señal anómala, la revisión debería durar menos de 30 minutos.
