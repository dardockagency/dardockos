# Codex Instructions — Supabase Integration
# Dardock Command Center · V2 Data Layer

---

## CONTEXTO DEL PROYECTO

Estás trabajando en **Dardock Command Center**, una plataforma desplegada en Vercel.

**Stack actual:**
- Vite + React + TypeScript + Tailwind + React Router
- Zustand para UI state
- JSON estáticos por cliente como fuente de data actual

**URLs live:**
- `https://dardock-command-center.vercel.app/clientes/cosas-nuestras`
- `https://dardock-command-center.vercel.app/agency/dany-caceres`

**Repo:** `dardockagency/dardock-command-center` (privado)

---

## OBJETIVO DE ESTA TAREA

Integrar Supabase como capa de persistencia para datos que necesitan ser
editables desde la UI, sin reemplazar los JSON estáticos que ya funcionan
para datos de solo lectura (scores, KPIs, roadmap, insight).

**Regla de separación:**
- JSON estático → datos que cambian con auditorías (scores, KPIs, roadmap)
- Supabase → datos que cambian operativamente en tiempo real (tareas, pendientes)

---

## PASO 1 — Instalar dependencia

```bash
npm install @supabase/supabase-js
```

---

## PASO 2 — Variables de entorno

Crear archivo `.env.local` en la raíz del proyecto (NO commitear este archivo):

```
VITE_SUPABASE_URL=<pegar URL del proyecto Supabase>
VITE_SUPABASE_ANON_KEY=<pegar anon key del proyecto Supabase>
```

Verificar que `.env.local` está en `.gitignore`. Si no está, agregarlo.

---

## PASO 3 — Crear las tablas en Supabase

Ir al SQL Editor del proyecto Supabase y ejecutar este script completo:

```sql
-- ─────────────────────────────────────────────────────────────────
-- Tabla 1: agency_tasks
-- "Dardock esta semana" — editable desde la UI por la agencia
-- Reemplaza el array agencyThisWeek del JSON estático
-- ─────────────────────────────────────────────────────────────────

create table if not exists agency_tasks (
  id          uuid primary key default gen_random_uuid(),
  client_id   text not null,
  task        text not null,
  status      text not null check (status in ('done', 'in-progress', 'planned')),
  layer       text check (layer in ('offer', 'tracking', 'funnel', 'campaigns', 'creative')),
  week_start  date not null,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index on agency_tasks (client_id, week_start);

-- ─────────────────────────────────────────────────────────────────
-- Tabla 2: tasks
-- Tasking board del workspace de agencia (4 columnas)
-- ─────────────────────────────────────────────────────────────────

create table if not exists tasks (
  id          uuid primary key default gen_random_uuid(),
  client_id   text not null,
  title       text not null,
  description text,
  status      text not null default 'inbox'
                check (status in ('inbox', 'in-progress', 'waiting-client', 'done')),
  layer       text check (layer in ('offer', 'tracking', 'funnel', 'campaigns', 'creative')),
  owner       text check (owner in ('dardock', 'client', 'both')),
  due_date    date,
  priority    text not null default 'medium'
                check (priority in ('high', 'medium', 'low')),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index on tasks (client_id, status);

-- ─────────────────────────────────────────────────────────────────
-- Tabla 3: pending_items
-- Pendientes del cliente — la agencia los crea, el cliente los ve
-- ─────────────────────────────────────────────────────────────────

create table if not exists pending_items (
  id          uuid primary key default gen_random_uuid(),
  client_id   text not null,
  title       text not null,
  description text,
  due_date    date,
  status      text not null default 'pending'
                check (status in ('pending', 'seen')),
  priority    text not null default 'medium'
                check (priority in ('high', 'medium', 'low')),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index on pending_items (client_id, status);

-- ─────────────────────────────────────────────────────────────────
-- Trigger: actualizar updated_at automáticamente
-- ─────────────────────────────────────────────────────────────────

create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger agency_tasks_updated_at
  before update on agency_tasks
  for each row execute function update_updated_at();

create trigger tasks_updated_at
  before update on tasks
  for each row execute function update_updated_at();

create trigger pending_items_updated_at
  before update on pending_items
  for each row execute function update_updated_at();
```

---

## PASO 4 — Configurar Row Level Security (RLS)

En el SQL Editor, ejecutar:

```sql
-- Habilitar RLS en las 3 tablas
alter table agency_tasks   enable row level security;
alter table tasks           enable row level security;
alter table pending_items   enable row level security;

-- Política temporal para V1/V2: acceso público con anon key
-- (se reemplaza por políticas de usuario real cuando exista auth en V3)

create policy "acceso_publico_agency_tasks"
  on agency_tasks for all
  using (true)
  with check (true);

create policy "acceso_publico_tasks"
  on tasks for all
  using (true)
  with check (true);

create policy "acceso_publico_pending_items"
  on pending_items for all
  using (true)
  with check (true);
```

---

## PASO 5 — Crear cliente de Supabase

Crear el archivo `src/lib/supabase/client.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Faltan variables de entorno de Supabase.\n' +
    'Verifica que VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY estén en .env.local'
  )
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
```

---

## PASO 6 — Crear tipos de base de datos

Crear el archivo `src/lib/supabase/types.ts`:

```typescript
// Tipos generados manualmente para las 3 tablas.
// Cuando el proyecto escale, reemplazar con: npx supabase gen types typescript

export type TaskStatus       = 'inbox' | 'in-progress' | 'waiting-client' | 'done'
export type AgencyTaskStatus = 'done' | 'in-progress' | 'planned'
export type PendingStatus    = 'pending' | 'seen'
export type Priority         = 'high' | 'medium' | 'low'
export type LayerId          = 'offer' | 'tracking' | 'funnel' | 'campaigns' | 'creative'
export type Owner            = 'dardock' | 'client' | 'both'

export interface AgencyTask {
  id:         string
  client_id:  string
  task:       string
  status:     AgencyTaskStatus
  layer:      LayerId | null
  week_start: string   // 'YYYY-MM-DD'
  created_at: string
  updated_at: string
}

export interface Task {
  id:          string
  client_id:   string
  title:       string
  description: string | null
  status:      TaskStatus
  layer:       LayerId | null
  owner:       Owner | null
  due_date:    string | null
  priority:    Priority
  created_at:  string
  updated_at:  string
}

export interface PendingItem {
  id:          string
  client_id:   string
  title:       string
  description: string | null
  due_date:    string | null
  status:      PendingStatus
  priority:    Priority
  created_at:  string
  updated_at:  string
}

export interface Database {
  public: {
    Tables: {
      agency_tasks:  { Row: AgencyTask;  Insert: Omit<AgencyTask, 'id' | 'created_at' | 'updated_at'>  }
      tasks:         { Row: Task;        Insert: Omit<Task, 'id' | 'created_at' | 'updated_at'>        }
      pending_items: { Row: PendingItem; Insert: Omit<PendingItem, 'id' | 'created_at' | 'updated_at'> }
    }
  }
}
```

---

## PASO 7 — Crear hooks de datos

Crear el archivo `src/lib/supabase/hooks.ts`:

```typescript
import { useEffect, useState, useCallback } from 'react'
import { supabase } from './client'
import type { AgencyTask, Task, PendingItem, TaskStatus, AgencyTaskStatus } from './types'

// ── Utilidad: lunes de la semana actual ───────────────────────────────────────

export function getCurrentWeekStart(): string {
  const today = new Date()
  const day   = today.getDay()
  const diff  = day === 0 ? -6 : 1 - day   // ajuste para que lunes = inicio
  const monday = new Date(today)
  monday.setDate(today.getDate() + diff)
  return monday.toISOString().split('T')[0]
}

// ── Hook: agency_tasks ("Dardock esta semana") ────────────────────────────────

export function useAgencyTasks(clientId: string) {
  const [tasks, setTasks]     = useState<AgencyTask[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  const weekStart = getCurrentWeekStart()

  const fetch = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('agency_tasks')
      .select('*')
      .eq('client_id', clientId)
      .eq('week_start', weekStart)
      .order('created_at')

    if (error) setError(error.message)
    else setTasks(data ?? [])
    setLoading(false)
  }, [clientId, weekStart])

  useEffect(() => { fetch() }, [fetch])

  const addTask = async (task: string, layer?: string) => {
    const { error } = await supabase
      .from('agency_tasks')
      .insert({ client_id: clientId, task, status: 'planned', layer: layer ?? null, week_start: weekStart })
    if (!error) fetch()
  }

  const updateStatus = async (id: string, status: AgencyTaskStatus) => {
    const { error } = await supabase
      .from('agency_tasks')
      .update({ status })
      .eq('id', id)
    if (!error) fetch()
  }

  const deleteTask = async (id: string) => {
    const { error } = await supabase
      .from('agency_tasks')
      .delete()
      .eq('id', id)
    if (!error) fetch()
  }

  return { tasks, loading, error, addTask, updateStatus, deleteTask, refetch: fetch }
}

// ── Hook: tasks (tasking board) ───────────────────────────────────────────────

export function useTasks(clientId: string) {
  const [tasks, setTasks]     = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('client_id', clientId)
      .neq('status', 'done')   // las completadas no se cargan por defecto
      .order('created_at')

    if (error) setError(error.message)
    else setTasks(data ?? [])
    setLoading(false)
  }, [clientId])

  useEffect(() => { fetch() }, [fetch])

  const addTask = async (title: string, opts?: { layer?: string; owner?: string; priority?: string }) => {
    const { error } = await supabase
      .from('tasks')
      .insert({
        client_id: clientId,
        title,
        status:    'inbox',
        layer:     opts?.layer    ?? null,
        owner:     opts?.owner    ?? null,
        priority:  opts?.priority ?? 'medium',
      })
    if (!error) fetch()
  }

  const moveTask = async (id: string, status: TaskStatus) => {
    const { error } = await supabase
      .from('tasks')
      .update({ status })
      .eq('id', id)
    if (!error) fetch()
  }

  const deleteTask = async (id: string) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)
    if (!error) fetch()
  }

  return { tasks, loading, error, addTask, moveTask, deleteTask, refetch: fetch }
}

// ── Hook: pending_items (Pendientes del cliente) ──────────────────────────────

export function usePendingItems(clientId: string) {
  const [items, setItems]     = useState<PendingItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('pending_items')
      .select('*')
      .eq('client_id', clientId)
      .order('priority', { ascending: false })
      .order('created_at')

    if (error) setError(error.message)
    else setItems(data ?? [])
    setLoading(false)
  }, [clientId])

  useEffect(() => { fetch() }, [fetch])

  const markAsSeen = async (id: string) => {
    const { error } = await supabase
      .from('pending_items')
      .update({ status: 'seen' })
      .eq('id', id)
    if (!error) fetch()
  }

  const addItem = async (
    title: string,
    opts?: { description?: string; dueDate?: string; priority?: string }
  ) => {
    const { error } = await supabase
      .from('pending_items')
      .insert({
        client_id:   clientId,
        title,
        description: opts?.description ?? null,
        due_date:    opts?.dueDate     ?? null,
        priority:    opts?.priority    ?? 'medium',
        status:      'pending',
      })
    if (!error) fetch()
  }

  const deleteItem = async (id: string) => {
    const { error } = await supabase
      .from('pending_items')
      .delete()
      .eq('id', id)
    if (!error) fetch()
  }

  const pendingCount = items.filter(i => i.status === 'pending').length

  return { items, loading, error, markAsSeen, addItem, deleteItem, pendingCount, refetch: fetch }
}
```

---

## PASO 8 — Integrar en los componentes existentes

### 8a. Reemplazar agencyThisWeek del JSON en la pantalla Hoy

Buscar el componente que renderiza "Dardock esta semana".
Reemplazar la lectura del JSON con el hook:

```typescript
// ANTES (del JSON estático):
// const { agencyThisWeek } = client

// DESPUÉS (de Supabase):
import { useAgencyTasks } from '@/lib/supabase/hooks'

const { tasks: agencyThisWeek, loading, addTask, updateStatus } = useAgencyTasks(clientId)
```

Los campos del objeto cambian así:

| JSON (antes)    | Supabase (después) |
|-----------------|-------------------|
| `item.task`     | `item.task`        |
| `item.status`   | `item.status`      |
| `item.layer`    | `item.layer`       |
| `item.id`       | `item.id`          |

El shape es compatible. El cambio es mínimo.

### 8b. Reemplazar pending del JSON en la pantalla Pendientes

```typescript
// ANTES:
// const { pending } = client

// DESPUÉS:
import { usePendingItems } from '@/lib/supabase/hooks'

const { items: pending, loading, markAsSeen, pendingCount } = usePendingItems(clientId)
```

El `pendingCount` ya viene calculado — úsalo para el badge del topbar.

### 8c. Conectar el tasking board de agencia

```typescript
import { useTasks } from '@/lib/supabase/hooks'

const { tasks, loading, addTask, moveTask } = useTasks(clientId)

// Para el board de 4 columnas:
const inbox          = tasks.filter(t => t.status === 'inbox')
const inProgress     = tasks.filter(t => t.status === 'in-progress')
const waitingClient  = tasks.filter(t => t.status === 'waiting-client')
// 'done' no se carga por defecto (ver hook)
```

---

## PASO 9 — Configurar variables en Vercel

En el dashboard de Vercel → Settings → Environment Variables, agregar:

```
VITE_SUPABASE_URL        = <URL del proyecto Supabase>
VITE_SUPABASE_ANON_KEY   = <anon key del proyecto Supabase>
```

Redeploy después de agregar las variables.

---

## PASO 10 — Seed data inicial (opcional pero recomendado)

Para que la pantalla no arranque vacía, insertar datos de prueba en Supabase
desde el SQL Editor:

```sql
-- Seed: agency_tasks para Cosas Nuestras esta semana
insert into agency_tasks (client_id, task, status, layer, week_start) values
  ('cosas-nuestras', 'Reconectar CAPI Meta', 'in-progress', 'tracking', '2026-04-13'),
  ('cosas-nuestras', 'Pausar ad sets ROAS < 0.8×', 'planned', 'campaigns', '2026-04-13'),
  ('cosas-nuestras', 'Brief creativo 3 conceptos', 'done', 'creative', '2026-04-13'),
  ('cosas-nuestras', 'Auditoría estructura campañas Google', 'done', 'campaigns', '2026-04-13');

-- Seed: pending_items para Cosas Nuestras
insert into pending_items (client_id, title, description, due_date, status, priority) values
  ('cosas-nuestras', 'Aprobar brief creativo Meta', 'Dardock preparó 3 direcciones creativas. Necesitamos aprobación para iniciar producción.', '2026-04-15', 'pending', 'high'),
  ('cosas-nuestras', 'Confirmar budget Q2', 'Necesitamos confirmar el presupuesto mensual del trimestre.', '2026-04-18', 'pending', 'medium'),
  ('cosas-nuestras', 'Validar acceso CAPI en Business Manager', 'Acceso de administrador necesario para reconectar la señal de Meta.', '2026-04-13', 'pending', 'high');
```

---

## ESTRUCTURA FINAL DE ARCHIVOS NUEVOS

```
src/
└── lib/
    └── supabase/
        ├── client.ts    ← cliente singleton de Supabase
        ├── types.ts     ← tipos de las 3 tablas
        └── hooks.ts     ← useAgencyTasks, useTasks, usePendingItems
```

---

## COMMIT SUGERIDO

```bash
git add .
git commit -m "feat: add Supabase data layer for live write operations

- Install @supabase/supabase-js
- Create 3 tables: agency_tasks, tasks, pending_items
- Add singleton client with env validation
- Add typed hooks: useAgencyTasks, useTasks, usePendingItems
- Replace static JSON arrays with live Supabase queries
- Keep static JSON for read-only data (scores, KPIs, roadmap, insight)"

git push origin main
```

---

## QUÉ NO CAMBIAR

El JSON estático por cliente sigue siendo la fuente de verdad para:
- `meta` (nombre, industria, periodo)
- `insight` (frase principal)
- `systemHealth` (score, capas, estado)
- `kpis` (métricas ejecutivas)
- `roadmap` (urgente / 30 días / 90 días)
- `criticalAlert` (banner — se actualiza con git push cuando cambia)
- `funnel` (V1.5, condicional)

Solo migran a Supabase los datos que necesitan ser editables sin deploy.
