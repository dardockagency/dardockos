// ─────────────────────────────────────────────────────────────────────────────
// Dardock Command Center — Client Data Loader
//
// Carga y valida el JSON de un cliente.
// Todos los componentes de la UI deben consumir datos a través de esta función.
// Nunca importar directamente los JSON en componentes.
// ─────────────────────────────────────────────────────────────────────────────

import { validateClientData, type ClientData } from '../schema/client-schema'

// ── Registry de clientes disponibles ─────────────────────────────────────────
//
// Para agregar un cliente nuevo:
// 1. Crear /content/clients/<slug>.json con la estructura de ClientData
// 2. Agregar el import aquí
// 3. Registrarlo en CLIENT_REGISTRY con el mismo slug como key
//
// El slug debe coincidir con:
// - el campo meta.id en el JSON
// - el nombre del archivo JSON (sin extensión)
// - el parámetro :clientId en la URL

import cosasNuestrasRaw    from '../../../content/clients/cosas-nuestras.json'
import danyCaceresRaw      from '../../../content/clients/dany-caceres.json'
import generaIndustrialRaw from '../../../content/clients/genera-industrial.json'
import adsGroupRaw         from '../../../content/clients/ads-group.json'

const CLIENT_REGISTRY: Record<string, unknown> = {
  'cosas-nuestras':    cosasNuestrasRaw,
  'dany-caceres':      danyCaceresRaw,
  'genera-industrial': generaIndustrialRaw,
  'ads-group':         adsGroupRaw,
}

// ── Cache en memoria (evita re-validar en cada render) ────────────────────────

const cache = new Map<string, ClientData>()

// ── Función principal ─────────────────────────────────────────────────────────

export function loadClient(clientId: string): ClientData {
  if (cache.has(clientId)) {
    return cache.get(clientId)!
  }

  const raw = CLIENT_REGISTRY[clientId]

  if (!raw) {
    throw new Error(
      `Cliente "${clientId}" no encontrado.\n` +
      `Clientes disponibles: ${Object.keys(CLIENT_REGISTRY).join(', ')}`
    )
  }

  const validated = validateClientData(raw, clientId)
  cache.set(clientId, validated)

  return validated
}

// ── Lista de clientes disponibles (para el workspace de agencia) ──────────────

export function listClients(): string[] {
  return Object.keys(CLIENT_REGISTRY)
}

// ── Lista con metadata básica (para el health grid de la agencia) ─────────────

export interface ClientSummary {
  id: string
  name: string
  industry: string
  score: number
  status: ClientData['systemHealth']['status']
  statusLabel: string
  criticalAlert: boolean
  pendingCount: number
}

export function listClientSummaries(): ClientSummary[] {
  return listClients().map(id => {
    const client = loadClient(id)
    return {
      id,
      name:          client.meta.name,
      industry:      client.meta.industry,
      score:         client.systemHealth.globalScore,
      status:        client.systemHealth.status,
      statusLabel:   client.systemHealth.statusLabel,
      criticalAlert: client.criticalAlert.active,
      pendingCount:  client.pending.filter(p => p.status === 'pending').length,
    }
  })
}
