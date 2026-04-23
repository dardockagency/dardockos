# Dardock OS — Leer Primero
> Punto de entrada para operar esta carpeta sin quemar contexto ni duplicar información.

---

## Regla principal

Esta carpeta no debe funcionar como un basurero de documentos ni como un segundo ClickUp.

Cada capa tiene un rol:

| Capa | Fuente de verdad |
|---|---|
| Tareas, responsables, fechas, comentarios | ClickUp |
| Reportes, minutas y wiki compartible | Notion |
| Archivos pesados, entregables y respaldos | Google Drive |
| Contexto estratégico compacto | Carpeta local |
| Captura rápida de pedidos/avances | WhatsApp |

---

## Cómo empezar una sesión

### Si es operación general

Abrir en este orden:

1. `01_uso_diario/AGENCIA_ESTADO.md`
2. `01_uso_diario/FLUJO_AGENCIA_DARDOCK.md`
3. `01_uso_diario/POLITICA_ARCHIVOS.md`

### Si es un cliente

Abrir en este orden:

1. `01_uso_diario/AGENCIA_ESTADO.md`
2. `clientes/<cliente>/CLAUDE.md`
3. `clientes/<cliente>/Estado_Actual.md`
4. Solo si aplica: archivo técnico específico del cliente

Ejemplo Dany:

```text
clientes/dany-caceres/CLAUDE.md
clientes/dany-caceres/Estado_Actual.md
clientes/dany-caceres/Sistema_Conversiones.md
```

---

## Qué no abrir por defecto

No abrir salvo que la tarea lo pida:

- `90_archivo_legacy/`
- `Cursos/`
- `Facturas/`
- `Logo/`
- zips/exportaciones
- PDFs históricos
- `03_soporte_estrategico/archivados_integrados/`

---

## Mapa de carpetas

| Carpeta | Uso |
|---|---|
| `01_uso_diario/` | Operación viva de agencia |
| `clientes/` | Estado compacto por cliente |
| `02_consolidados_md/` | Estrategia consolidada y arquitectura dashboard |
| `03_soporte_estrategico/` | Biblioteca de referencia, no fuente diaria |
| `04_comercial_propuestas/` | Ofertas, propuestas y estructura comercial |
| `Dashboard/` | Código de productos/dashboard |
| `Landing/` | Exportaciones o assets de landing |
| `90_archivo_legacy/` | Archivo histórico |

---

## Decisión operativa

Desde ahora, la carpeta local debe responder tres preguntas:

1. Qué está pasando.
2. Qué decidimos.
3. Dónde está la fuente de verdad para ejecutar.

No debe intentar guardar todo.
