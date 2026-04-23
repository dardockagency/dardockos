# Accesos Requeridos — Dardock Ops
> Checklist para revisar y conectar ClickUp, Notion, WhatsApp, GitHub y Make.

---

## Estado actual

| Plataforma | Estado desde Codex | Observación |
|---|---|---|
| Notion | Conectado en lectura | Puedo buscar y leer páginas existentes |
| Google Drive | Conectado | Perfil activo: `funnels@dardock.com`; puedo listar carpetas y leer archivos compatibles |
| ClickUp | Conectado | Puedo leer workspace, carpetas, listas, tareas y miembros; no se hicieron pruebas de escritura |
| WhatsApp | No conectado directo | Probable proveedor: Twilio; falta confirmar cuenta/proyecto |
| Make.com | No conectado directo | Necesario para router WhatsApp → ClickUp/Notion |
| GitHub dashboard | Repo existente | `dardock-command-center` vive separado |
| GitHub OS privado | Pendiente | Recomendado: `dardock-os-private` |

---

## Notion

Ya detectado:

- `Dardock OS`
- `Dardock — Agency HQ`
- `Comandos & Skills — Referencia Dardock`
- Backups de markdowns y clientes

Falta confirmar:

- Qué página será la home operativa final.
- Si `Agency HQ` debe sincronizarse con `AGENCIA_ESTADO.md`.
- Si se crearán databases nuevas o se usarán las existentes `Company OS Tasks`, `Projects`, `Clients`.

Acceso necesario:

- Links de las databases que quieres usar como definitivas.
- Permiso de edición si quieres que Codex cree/actualice páginas, no solo lea.

---

## ClickUp

Estado confirmado:

- Workspace legible desde Codex.
- Space principal detectado: `Agencia Dardock`.
- Folder de cliente detectado: `Dany Cáceres`.
- Listas Dany detectadas: `Contenido & Reels`, `Proyectos Activos`, `Webinarios`, `Hotmart & Suscripción`, `ADS & Performance`, `Automatizaciones & GHL`, `YouTube`, `Comunidad & WhatsApp`, `YouTube — Dany`, `Comunidad & WhatsApp — Dany`.
- Miembros detectados: Matías, Kenji, Israel, Octavio, Angel, funnels.
- Búsqueda de tareas operativa.
- No se hicieron pruebas de creación/edición para evitar cambios accidentales.

Falta:

- Confirmar si ClickUp será fuente única de tareas
- Definir listas oficiales para Dany y evitar duplicados (`YouTube` vs `YouTube — Dany`, `Comunidad & WhatsApp` vs `Comunidad & WhatsApp — Dany`)
- Definir estados reales por lista
- Definir custom fields reales
- Confirmar permisos de escritura desde Codex antes de crear tareas

Datos mínimos para conectar:

```text
Workspace:
Space:
List principal:
Estados:
Custom fields:
Responsables:
```

---

## WhatsApp

Proveedor probable:

- Twilio, según memoria operativa del proyecto.

Definir proveedor final:

| Opción | Uso |
|---|---|
| WhatsApp Cloud API | Más robusto, requiere Meta developer setup |
| Twilio | Rápido si ya hay cuenta |
| WATI | Operación comercial simple |
| Z-API | Rápido para automatizaciones LATAM |
| Make webhook + proveedor actual | Mejor si ya existe flujo |

Falta:

- Proveedor elegido.
- Número conectado.
- Webhook URL.
- Reglas de privacidad/logs.
- Qué comandos se aceptan por WhatsApp.
- Si existe proyecto anterior del practicante/Kenji, descargarlo a carpeta local o entregar acceso Drive legible.

---

## Make.com

Escenario inicial recomendado:

```text
WhatsApp trigger
  → OpenAI/Codex classifier
  → Router
    → ClickUp: task/comment
    → Notion: report/minute
    → Response WhatsApp
```

Falta:

- Acceso al escenario o workspace Make.
- Conexión ClickUp.
- Conexión Notion.
- Conexión WhatsApp.
- Definir logs y ocultamiento de secrets.

---

## GitHub

Estado:

- `gh` no está instalado localmente.
- El Git root actual está en `2026/`, no en `000. Dardock`.
- Ese root ve demasiadas carpetas externas como untracked.

Recomendación:

Crear repo privado separado:

```text
dardockagency/dardock-os-private
```

Subir solo archivos curados según `VERSIONADO_GITHUB_SEGURO.md`.

Acceso necesario:

- Confirmar si el repo ya existe.
- URL del repo privado si existe.
- Método de auth: GitHub app, HTTPS token, SSH o instalación de `gh`.

---

## Orden de implementación

1. Confirmar fuente de verdad: ClickUp tareas, Notion reportes, WhatsApp captura.
2. Revisar Notion y elegir home/databases definitivas.
3. Crear/ajustar ClickUp schema real.
4. Crear escenario Make de captura WhatsApp.
5. Conectar router a ClickUp/Notion.
6. Crear repo privado OS si quieres versionado.
7. Sincronizar `Agency HQ` con `AGENCIA_ESTADO.md`.

---

## Comandos de prueba cuando esté conectado

```text
revisa pendientes de Dany
```

```text
crea tarea Dany: implementar microeventos GTM. Prioridad alta.
```

```text
deja avance Dany: Purchase verde, falta form_start y WhatsApp click.
```

```text
arma reporte semanal de Cosas Nuestras con bloqueos de tracking.
```
