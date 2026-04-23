// ─────────────────────────────────────────────────────────────────────────────
// Dardock Command Center — Zod Validation Schema
//
// Valida cada JSON de cliente antes de que llegue a la UI.
// Sin esto, un campo null donde se espera un string quiebra la pantalla
// silenciosamente sin error en consola.
//
// Instalación requerida: npm install zod
// ─────────────────────────────────────────────────────────────────────────────

import { z } from 'zod'

// ── Enums reutilizables ───────────────────────────────────────────────────────

const StatusLevel = z.enum(['healthy', 'warning', 'critical'])

const LayerId = z.enum(['offer', 'tracking', 'funnel', 'campaigns', 'creative'])

const DeltaDirection = z.enum(['up', 'down', 'neutral'])

const RoadmapOwner = z.enum(['dardock', 'client', 'both'])

const TaskStatus = z.enum(['done', 'in-progress', 'planned'])

const PendingStatus = z.enum(['pending', 'seen'])

// ── Schemas ───────────────────────────────────────────────────────────────────

const ClientMetaSchema = z.object({
  id:        z.string().min(1),
  name:      z.string().min(1),
  industry:  z.string().min(1),
  period:    z.string().min(1),
  updatedAt: z.string().min(1),
})

const SystemLayerSchema = z.object({
  id:           LayerId,
  label:        z.string().min(1),
  score:        z.number().int().min(0).max(100),
  status:       StatusLevel,
  note:         z.string().max(120),
  noteInternal: z.string().optional(),
})

const SystemHealthSchema = z.object({
  globalScore:    z.number().int().min(0).max(100),
  status:         StatusLevel,
  statusLabel:    z.string().min(1),
  interpretation: z.string().min(1),
  layers:         z.array(SystemLayerSchema).length(5), // siempre 5 capas
})

const KPISchema = z.object({
  id:            z.string().min(1),
  label:         z.string().min(1),
  value:         z.string().min(1),
  unit:          z.string(),
  delta:         z.string().nullable(),
  deltaDirection: DeltaDirection.nullable(),
  status:        StatusLevel,
  target:        z.string().nullable(),
  isProtagonist: z.boolean(),
})

const CriticalAlertSchema = z.object({
  active:  z.boolean(),
  message: z.string().nullable(),
  layer:   LayerId.nullable(),
  since:   z.string().nullable(),
})

const PendingItemSchema = z.object({
  id:          z.string().min(1),
  title:       z.string().min(1),
  description: z.string().nullable(),
  dueDate:     z.string().nullable(),
  status:      PendingStatus,
  priority:    z.enum(['high', 'medium', 'low']),
})

const AgencyTaskSchema = z.object({
  id:     z.string().min(1),
  task:   z.string().min(1),
  status: TaskStatus,
  layer:  LayerId.nullable(),
})

const RoadmapItemSchema = z.object({
  id:         z.string().min(1),
  action:     z.string().min(1),
  impact:     z.string().min(1),
  layer:      LayerId.nullable(),
  dependency: z.string().nullable(),
  owner:      RoadmapOwner,
})

const RoadmapSchema = z.object({
  urgent:      z.array(RoadmapItemSchema),
  thirtyDays:  z.array(RoadmapItemSchema),
  ninetyDays:  z.array(RoadmapItemSchema),
})

const FunnelStageSchema = z.object({
  id:                z.string().min(1),
  label:             z.string().min(1),
  volume:            z.number().int().min(0),
  cvr:               z.number().min(0).max(1),
  cvrBenchmark:      z.number().min(0).max(1),
  status:            StatusLevel,
  gap:               z.string().nullable(),
  cause:             z.string().nullable(),
  recommendedAction: z.string().nullable(),
})

const FunnelDataSchema = z.object({
  available: z.boolean(),
  stages:    z.array(FunnelStageSchema),
})

// ── Root Schema ───────────────────────────────────────────────────────────────

export const ClientDataSchema = z.object({
  meta:            ClientMetaSchema,
  insight:         z.string().min(1),
  systemHealth:    SystemHealthSchema,
  criticalAlert:   CriticalAlertSchema,
  kpis:            z.array(KPISchema).min(1),
  pending:         z.array(PendingItemSchema),
  agencyThisWeek:  z.array(AgencyTaskSchema),
  roadmap:         RoadmapSchema,
  funnel:          FunnelDataSchema,
})

// ── Tipo inferido desde el schema (no necesitas importar de types/client.ts) ──

export type ClientData = z.infer<typeof ClientDataSchema>

// ── Validación con error descriptivo ─────────────────────────────────────────

export function validateClientData(raw: unknown, clientId: string): ClientData {
  const result = ClientDataSchema.safeParse(raw)

  if (!result.success) {
    const errors = result.error.errors
      .map(e => `  [${e.path.join('.')}] ${e.message}`)
      .join('\n')

    throw new Error(
      `Schema inválido en JSON del cliente "${clientId}":\n${errors}\n\n` +
      `Revisa /content/clients/${clientId}.json antes de continuar.`
    )
  }

  return result.data
}
