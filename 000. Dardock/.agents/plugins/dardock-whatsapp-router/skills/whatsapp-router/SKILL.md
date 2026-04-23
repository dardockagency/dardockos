---
name: whatsapp-router
description: Classify WhatsApp messages for Dardock into task, progress, blocker, query, or report, then prepare structured outputs for ClickUp, Notion, and WhatsApp replies. Use when handling WhatsApp chatbot inputs, Make.com router logic, voice-note transcripts, or operational messages.
---

# WhatsApp Router

## Intent schema

Classify every message into one primary intent:

| Intent | Meaning | Destination |
|---|---|---|
| `task` | New executable action | ClickUp |
| `progress` | Update on existing work | ClickUp comment + Notion if reportable |
| `blocker` | Something prevents execution | ClickUp urgent/high task |
| `query` | User asks for status/info | Reply from context |
| `report` | User asks for summary/deliverable | Notion/report draft |

## Output JSON

```json
{
  "intent": "task | progress | blocker | query | report",
  "client_slug": "",
  "client_name": "",
  "topic": "",
  "priority": "urgent | high | medium | low",
  "owner": "",
  "summary": "",
  "next_action": "",
  "clickup_action": "create_task | comment_task | query_tasks | none",
  "notion_action": "create_report | update_page | none",
  "whatsapp_reply": ""
}
```

## Client aliases

Normalize common names:

| Input | Slug |
|---|---|
| Dany, Dany Cáceres | `dany-caceres` |
| Cosas, Cosas Nuestras, CN | `cosas-nuestras` |
| Genera, Genera Industrial | `genera-industrial` |
| ADS, ADS Group | `ads-group` |

## Reply style

Short, operational, no filler:

```text
Registrado. Lo dejo como tarea alta para Dany: implementar microeventos GTM. Próxima acción: crear triggers form_start, whatsapp_click e InitiateCheckout.
```

## Safety

If the message contains a token, password, API key, or credential, do not include it in ClickUp/Notion content. Reply that the secret must be moved to a secure connection or environment variable.
