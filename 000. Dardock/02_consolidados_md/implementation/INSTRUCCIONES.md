# Instrucciones de integración — JSON Schema + Data Layer

## Qué hay en esta carpeta

Estos archivos van copiados directamente al proyecto `dardock-command-center`.
No modificar la estructura. Copiar como está.

```
implementation/
├── src/
│   ├── types/
│   │   └── client.ts              ← Tipos TypeScript (fuente de verdad)
│   └── lib/
│       ├── schema/
│       │   └── client-schema.ts   ← Validación Zod
│       └── data/
│           └── load-client.ts     ← Loader con cache + listado para agencia
└── content/
    └── clients/
        ├── cosas-nuestras.json    ← Data real completa
        ├── dany-caceres.json      ← Template para completar
        ├── genera-industrial.json ← Template para completar
        └── ads-group.json         ← Template para completar
```

---

## Pasos de integración

### Paso 1 — Instalar Zod

```bash
npm install zod
```

### Paso 2 — Copiar los archivos

Copiar la carpeta `src/` al `src/` del proyecto.
Copiar la carpeta `content/` a la raíz del proyecto.

### Paso 3 — Configurar Vite para importar JSON

En `vite.config.ts`, verificar que está habilitado el import de JSON
(Vite lo soporta por defecto, no requiere configuración adicional).

Si al importar aparece un error de tipo, agregar en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

### Paso 4 — Usar el loader en los componentes

```tsx
import { loadClient } from '@/lib/data/load-client'

// En el componente que renderiza el portal del cliente:
const client = loadClient('cosas-nuestras')

// El objeto client está completamente tipado.
// Si el JSON tiene un error de schema, falla en desarrollo con un mensaje claro.
```

### Paso 5 — Agregar un cliente nuevo

1. Crear `/content/clients/<slug>.json` usando `dany-caceres.json` como template
2. Completar todos los campos marcados como "COMPLETAR"
3. Agregar el import y registro en `src/lib/data/load-client.ts`
4. Git push → Vercel despliega automáticamente

---

## Reglas de uso

- El `id` en el JSON debe coincidir con el slug del archivo y con la URL
- Nunca importar un JSON directamente en un componente — siempre usar `loadClient()`
- `funnel.available: false` significa que el módulo Funnel no se muestra
- `criticalAlert.active: false` significa que no hay banner en la pantalla Hoy
- `agencyThisWeek` se actualiza manualmente cada lunes — si no existe proceso para hacerlo, dejar el array vacío hasta que exista

---

## Tipos disponibles

```typescript
import type {
  ClientData,
  SystemLayer,
  KPI,
  PendingItem,
  AgencyTask,
  RoadmapItem,
  FunnelData,
  StatusLevel,
  LayerId,
} from '@/types/client'
```

O importar directamente desde el schema de Zod (equivalente):

```typescript
import type { ClientData } from '@/lib/schema/client-schema'
```
