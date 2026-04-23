---
name: clickup-ops
description: Prepare ClickUp tasks, comments, schemas, and automation payloads for Dardock from client notes, WhatsApp messages, Notion reports, or local markdown context. Use when the user asks to create, structure, sync, audit, or prioritize ClickUp tasks for Dardock clients.
---

# ClickUp Ops

## Purpose

ClickUp is Dardock's execution source of truth. Do not duplicate full task boards in markdown. Use local files for client context and ClickUp for tasks, owners, dates, status, and comments.

## Required context

Read only what is needed:

1. `01_uso_diario/AGENCIA_ESTADO.md`
2. `01_uso_diario/ESQUEMA_CLICKUP.md`
3. `clientes/<slug>/CLAUDE.md`
4. `clientes/<slug>/Estado_Actual.md`
5. Client-specific system file only when relevant.

## Task payload

When ClickUp API is not connected, output this payload:

```json
{
  "name": "[Cliente] Acción concreta",
  "description": "Contexto, acción requerida, definición de terminado y evidencia.",
  "status": "to do",
  "priority": "urgent | high | medium | low",
  "tags": ["cliente-slug", "tipo"],
  "custom_fields": {
    "Cliente": "",
    "Tipo": "",
    "Canal": "",
    "Próxima acción": "",
    "Definición de terminado": "",
    "Fuente": "",
    "Impacto": ""
  }
}
```

## Comment payload

For progress updates:

```md
**Avance**
- 

**Bloqueo**
- 

**Próxima acción**
- 

**Evidencia**
- 
```

## Prioritization

- `urgent`: blocks active spend, tracking, delivery, client trust, or revenue.
- `high`: impacts this week's performance or client delivery.
- `medium`: important but not blocking.
- `low`: documentation or improvement.

## Definition of done

Every task needs observable evidence:

- Meta Events Manager screenshot/status.
- GA4 DebugView event.
- Published dashboard URL.
- Client approval.
- Notion report link.
- Campaign/ad set ID.

## Security

Never include tokens, passwords, API keys, or private credentials in task descriptions. Reference the secret location instead: "secret stored in Make connection" or "Meta token stored in secure credential manager".
