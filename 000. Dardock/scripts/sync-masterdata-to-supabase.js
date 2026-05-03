#!/usr/bin/env node
/**
 * Sync all MasterData.json files → Supabase clients.master_data
 *
 * Requires env vars:
 *   SUPABASE_URL          — from Supabase project settings
 *   SUPABASE_SERVICE_KEY  — service_role key (NOT anon key)
 *
 * Run locally:
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node scripts/sync-masterdata-to-supabase.js
 */

const fs = require('fs')
const path = require('path')
const https = require('https')

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌  Missing SUPABASE_URL or SUPABASE_SERVICE_KEY')
  process.exit(1)
}

// Map folder name → dashboard slug
const SLUG_MAP = {
  ADSGroup: 'ads-group',
  DanyCaceres: 'dany-caceres',
  GeneraIndustrial: 'genera-industrial',
  CosasNuestras: 'cosas-nuestras',
}

const MASTER_DATA_ROOT = path.join(__dirname, '..', '00_MASTER_DATA')

function supabaseRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, SUPABASE_URL)
    const data = body ? JSON.stringify(body) : null

    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method,
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    }

    const req = https.request(options, (res) => {
      let body = ''
      res.on('data', chunk => body += chunk)
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, body: body ? JSON.parse(body) : null })
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`))
        }
      })
    })

    req.on('error', reject)
    if (data) req.write(data)
    req.end()
  })
}

async function syncClient(folderName, masterData) {
  const slug = SLUG_MAP[folderName]
  if (!slug) {
    console.warn(`⚠️  No slug mapping for folder: ${folderName} — skipping`)
    return
  }

  const status = masterData.score_capas?.status ?? 'warning'

  await supabaseRequest('POST', '/rest/v1/clients', {
    slug,
    name: masterData.cliente,
    industry: masterData.rubro ?? masterData.tipo ?? '',
    status,
    master_data: masterData,
  })

  console.log(`✅  ${slug} — score ${masterData.score_capas?.global ?? '?'} · status ${status}`)
}

async function main() {
  if (!fs.existsSync(MASTER_DATA_ROOT)) {
    console.error(`❌  Folder not found: ${MASTER_DATA_ROOT}`)
    process.exit(1)
  }

  const folders = fs.readdirSync(MASTER_DATA_ROOT).filter(f =>
    fs.statSync(path.join(MASTER_DATA_ROOT, f)).isDirectory()
  )

  let synced = 0
  let failed = 0

  for (const folder of folders) {
    const jsonPath = path.join(MASTER_DATA_ROOT, folder, `${folder}_MasterData.json`)
    if (!fs.existsSync(jsonPath)) {
      console.warn(`⚠️  ${folder}: no MasterData.json found`)
      continue
    }

    try {
      const raw = fs.readFileSync(jsonPath, 'utf8')
      const data = JSON.parse(raw)
      await syncClient(folder, data)
      synced++
    } catch (err) {
      console.error(`❌  ${folder}: ${err.message}`)
      failed++
    }
  }

  console.log(`\n📊  Sync complete — ${synced} synced, ${failed} failed`)
  if (failed > 0) process.exit(1)
}

main()
