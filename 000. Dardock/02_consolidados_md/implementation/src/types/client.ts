// ─────────────────────────────────────────────────────────────────────────────
// Dardock Command Center — Client Data Types
// Fuente de verdad de tipos. Toda la UI consume este archivo.
// Versión: V1 — Portal Cliente
// ─────────────────────────────────────────────────────────────────────────────

export type StatusLevel = 'healthy' | 'warning' | 'critical'

export type LayerId = 'offer' | 'tracking' | 'funnel' | 'campaigns' | 'creative'

export type DeltaDirection = 'up' | 'down' | 'neutral'

export type RoadmapOwner = 'dardock' | 'client' | 'both'

export type TaskStatus = 'done' | 'in-progress' | 'planned'

export type PendingStatus = 'pending' | 'seen'

// ── Meta ─────────────────────────────────────────────────────────────────────

export interface ClientMeta {
  id: string          // slug único, coincide con el nombre del archivo JSON
  name: string        // nombre visible del cliente
  industry: string    // descriptor corto: "Ecommerce · Decoración · Shopify"
  period: string      // periodo auditado: "Abril 2026"
  updatedAt: string   // ISO 8601: "2026-04-12T10:00:00Z"
}

// ── System Health ─────────────────────────────────────────────────────────────

export interface SystemLayer {
  id: LayerId
  label: string         // nombre visible: "Tracking"
  score: number         // 0–100
  status: StatusLevel
  note: string          // frase corta para el cliente (max 80 chars)
  noteInternal?: string // diagnóstico completo — solo para la agencia (V2)
}

export interface SystemHealth {
  globalScore: number   // 0–100, promedio ponderado de capas
  status: StatusLevel
  statusLabel: string   // "Inestable" | "Estable" | "Crítico"
  interpretation: string // frase de contexto bajo el score
  layers: SystemLayer[]  // siempre 5: offer, tracking, funnel, campaigns, creative
}

// ── KPIs ─────────────────────────────────────────────────────────────────────

export interface KPI {
  id: string
  label: string
  value: string          // string siempre — el formato lo decide el JSON: "1.8×", "$8.200", "1.4%"
  unit: string           // unidad adicional si aplica: "CLP", "/10" — vacío si ya está en value
  delta: string | null   // "-40% vs target" | null si no hay comparación
  deltaDirection: DeltaDirection | null
  status: StatusLevel
  target: string | null  // "3.0×" | null
  isProtagonist: boolean // true = KPI principal en el grid (solo uno por cliente)
}

// ── Critical Alert ─────────────────────────────────────────────────────────────

export interface CriticalAlert {
  active: boolean
  message: string | null  // null si active = false
  layer: LayerId | null   // capa afectada, para colorización
  since: string | null    // "2026-04-08" — fecha de inicio del problema
}

// ── Pending (Pendientes del cliente) ──────────────────────────────────────────

export interface PendingItem {
  id: string
  title: string
  description: string | null
  dueDate: string | null    // "2026-04-15" — ISO date string
  status: PendingStatus
  priority: 'high' | 'medium' | 'low'
}

// ── Agency This Week (Dardock esta semana) ─────────────────────────────────────

export interface AgencyTask {
  id: string
  task: string
  status: TaskStatus
  layer: LayerId | null   // capa relacionada, para etiqueta de color
}

// ── Roadmap ───────────────────────────────────────────────────────────────────

export interface RoadmapItem {
  id: string
  action: string
  impact: string          // impacto en una frase: "Restaura atribución completa"
  layer: LayerId | null
  dependency: string | null
  owner: RoadmapOwner
}

export interface Roadmap {
  urgent: RoadmapItem[]
  thirtyDays: RoadmapItem[]
  ninetyDays: RoadmapItem[]
}

// ── Funnel (V1.5 — condicional) ───────────────────────────────────────────────

export interface FunnelStage {
  id: string
  label: string           // "Awareness" | "Consideración" | "Decisión" | "Retención"
  volume: number          // visitantes/usuarios en esa etapa
  cvr: number             // tasa de conversión REAL a la siguiente etapa (0–1)
  cvrBenchmark: number    // benchmark de industria (0–1)
  status: StatusLevel
  gap: string | null      // descripción del gap si status !== 'healthy'
  cause: string | null    // causa probable
  recommendedAction: string | null
}

export interface FunnelData {
  available: boolean      // false = no mostrar el módulo
  stages: FunnelStage[]
}

// ── Root ClientData ───────────────────────────────────────────────────────────

export interface ClientData {
  meta: ClientMeta
  insight: string         // H1 de la pantalla Hoy: "Sistema rentable, pero mal calibrado"
  systemHealth: SystemHealth
  criticalAlert: CriticalAlert
  kpis: KPI[]
  pending: PendingItem[]
  agencyThisWeek: AgencyTask[]
  roadmap: Roadmap
  funnel: FunnelData      // available: false en V1 si no hay datos reales
}
