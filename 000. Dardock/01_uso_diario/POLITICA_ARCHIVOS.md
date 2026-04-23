# Política de Archivos Dardock
> Reglas para mantener la carpeta útil, liviana y legible para humanos y agentes.

---

## Objetivo

Reducir ruido, evitar duplicación y usar cada herramienta para lo que corresponde.

La carpeta local debe guardar contexto compacto y decisiones. No debe reemplazar ClickUp, Notion ni Drive.

---

## Clasificación de archivos

| Tipo | Dónde vive | Ejemplos |
|---|---|---|
| Estado vivo agencia | `01_uso_diario/` | `AGENCIA_ESTADO.md` |
| Flujo/SOP activo | `01_uso_diario/` | `FLUJO_AGENCIA_DARDOCK.md` |
| Estado vivo cliente | `clientes/<slug>/` | `Estado_Actual.md` |
| Reglas cliente | `clientes/<slug>/` | `CLAUDE.md` |
| Sistema técnico cliente | `clientes/<slug>/` | `Sistema_Conversiones.md` |
| Reporte compartible | Notion | Reportes semanales/mensuales |
| Tarea ejecutable | ClickUp | Pendientes con responsable/fecha |
| Evidencia pesada | Drive | PDFs, capturas, exports, planillas |
| Código producto | `Dashboard/` | `dardock-command-center` |
| Archivo histórico | `90_archivo_legacy/` | referencias antiguas |

---

## Qué sí debe estar en markdown local

- Estado actual resumido.
- Decisiones estratégicas.
- Reglas de marca o cliente.
- Arquitectura de sistemas.
- Prompts de transferencia.
- Diagnósticos ejecutivos.
- Índices que reduzcan lectura.

---

## Qué no debe estar en markdown local

- Passwords, tokens, API keys o secretos.
- Task boards completos.
- Copias completas de reportes de ClickUp.
- PDFs convertidos completos si no se usan como fuente diaria.
- Exports brutos de herramientas.
- Archivos duplicados con nombres distintos.
- Reportes finales para cliente si ya viven en Notion.

---

## Naming

### Carpetas de cliente

```text
clientes/dany-caceres/
clientes/cosas-nuestras/
clientes/genera-industrial/
clientes/ads-group/
```

### Archivos activos de cliente

```text
CLAUDE.md
Estado_Actual.md
Sistema_<tema>.md
Diagnostico_<tema>_YYYY-MM-DD.md
Reporte_Operativo_<tema>_YYYY-MM-DD.md
Prompt_Transferencia_<tema>.md
```

### Archivos de agencia

```text
AGENCIA_ESTADO.md
FLUJO_AGENCIA_DARDOCK.md
POLITICA_ARCHIVOS.md
SOP_<proceso>.md
ESQUEMA_<herramienta>.md
```

---

## Regla de lectura mínima

Para una sesión de agencia:

```text
00_LEER_PRIMERO.md
01_uso_diario/AGENCIA_ESTADO.md
01_uso_diario/FLUJO_AGENCIA_DARDOCK.md
```

Para una sesión de cliente:

```text
01_uso_diario/AGENCIA_ESTADO.md
clientes/<slug>/CLAUDE.md
clientes/<slug>/Estado_Actual.md
```

Solo abrir más archivos si el problema lo exige.

---

## Regla de archivo pesado

PDFs, imágenes, zips, planillas y exports deben vivir en Drive o en carpetas de archivo, no en superficie activa.

Si un archivo pesado es importante, crear una nota local breve:

```md
## Fuente
Link Drive:

## Qué contiene
Resumen de 5-10 líneas.

## Cuándo usarlo
Condición concreta.
```

---

## Regla de consolidación

Si hay dos archivos que dicen lo mismo:

1. Elegir fuente principal.
2. Mover la idea útil al archivo principal.
3. Marcar el archivo viejo como integrado o moverlo a archivo.
4. No dejar dos versiones activas con criterios distintos.

---

## Regla de limpieza semanal

Cada viernes o lunes:

- Revisar archivos nuevos en raíz.
- Mover archivos pesados a Drive/archivo.
- Validar que `AGENCIA_ESTADO.md` siga vigente.
- Confirmar que tareas reales estén en ClickUp.
- Confirmar que reportes compartibles estén en Notion.
- Eliminar archivos vacíos o temporales.

---

## Estado de carpetas actuales

| Carpeta | Estado | Acción |
|---|---|---|
| `01_uso_diario/` | Activa | Mantener solo operación viva |
| `clientes/` | Activa | Un archivo de estado por cliente + sistemas necesarios |
| `02_consolidados_md/` | Soporte estratégico | No abrir por defecto |
| `03_soporte_estrategico/` | Biblioteca | Usar solo por consulta |
| `04_comercial_propuestas/` | Comercial | Mantener para propuestas |
| `Dashboard/` | Producto/código | Versionar separado |
| `Facturas/` | Sensible/pesado | Mantener fuera de Git |
| `Cursos/` | Referencia/pesado | Mantener fuera de operación diaria |
| `Logo/` | Assets | Mover a Drive o mantener fuera de Git |
| `90_archivo_legacy/` | Archivo | No usar como fuente principal |

---

## Regla final

Un archivo se queda activo solo si ayuda a decidir o ejecutar esta semana.

Si solo ayuda a recordar historia, va a soporte o archivo.
