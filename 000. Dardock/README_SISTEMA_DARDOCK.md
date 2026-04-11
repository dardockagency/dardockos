# Sistema Dardock — Mapa de Archivos

## Objetivo

Ordenar el ecosistema documental de Dardock para que el equipo no dependa de demasiados markdowns dispersos.

La regla ahora es simple:

- operar desde pocos archivos vivos
- archivar el resto como soporte
- abrir documentos solo si realmente agregan claridad

---

## Arquitectura mínima del sistema

El sistema Dardock hoy funciona en 4 capas activas:

1. `uso diario`
2. `consolidados`
3. `soporte estratégico`
4. `comercial`

### Lógica

- `uso diario` decide y ejecuta
- `consolidados` orienta y ordena
- `soporte estratégico` preserva contexto e ideas útiles
- `comercial` traduce el sistema a propuestas

### Regla

Si algo ya vive en `uso diario`, no debe volver a crearse en otro markdown.

---

## Estructura principal actual

### 01_uso_diario

Archivos que deben usarse de forma habitual.

Contiene:

- `DARDOCK_OPERATING_SYSTEM.md`
- `dardock_landing.html`

Uso:

- operación
- decisiones de servicio
- límites
- reporting
- tasking
- landing principal

---

### 02_consolidados_md

Archivos consolidados que sirven como capa maestra o estratégica.

Contiene:

- `DARDOCK_MASTER_PLAYBOOK.md`

Uso:

- dirección estratégica
- marco de decisiones
- estructura funcional de agencia
- referencia de mediano plazo

---

### 03_soporte_estrategico

Archivos de apoyo realmente útiles y referencia histórica cercana.

Contiene:

- `Reestructuracion_Dardock_Performance_Ads.md`
- `dardock_context.md`
- `Extraccion_Util_Document_MD_para_Dardock.md`
- `Revision_Gemini_Arquitectura_y_Cerebros.md`

Y además:

- `archivados_integrados/`

Ahí quedaron los markdowns que ya fueron absorbidos en el sistema actual y no deberían usarse como fuente principal.

Uso:

- consulta puntual
- rescate de ideas
- referencia histórica

---

### 04_comercial_propuestas

Documentos comerciales y de propuesta.

Contiene:

- `00_Sistema_Propuestas_Dardock.md`
- `01_Propuesta_Auditoria_Growth_Performance.md`
- `02_Propuesta_Setup_Tracking_Base_Performance.md`
- `03_Propuesta_Retainer_Performance_Core.md`
- `04_Propuesta_Retainer_Growth_System.md`
- `05_Checklist_Pre_Propuesta.md`

Uso:

- propuestas comerciales
- cotización
- estructura de venta

---

### 90_archivo_legacy

Material histórico o referencial que no debe ensuciar la superficie activa.

Contiene:

- `referencias_pdf/`
- `misc/`

Uso:

- archivo
- consulta histórica
- rescate puntual

---

## Regla operativa

Antes de abrir algo, validar:

1. ¿Esto se resuelve en `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`?
2. ¿Esto requiere cambiar la landing en `01_uso_diario/dardock_landing.html`?
3. ¿Esto requiere una propuesta comercial en `04_comercial_propuestas`?
4. ¿Esto requiere una decisión de estructura o dirección en `02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md`?

Si la respuesta es sí a una de esas, no hace falta abrir soporte.

---

## Qué archivos son realmente importantes

Si hubiera que quedarse solo con lo mínimo, serían:

1. `01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`
2. `01_uso_diario/dardock_landing.html`
3. `04_comercial_propuestas/`

Y como capa estratégica opcional:

4. `02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md`

---

## Qué ya fue absorbido

No hace falta usar como fuente activa:

- índices viejos
- arquitecturas duplicadas
- SOPs previos ya integrados
- briefs ya incorporados

Eso quedó archivado en:

- `03_soporte_estrategico/archivados_integrados/`
- `90_archivo_legacy/`

---

## Conclusión

No, no era necesario conservar todos los markdowns ni PDFs como archivos visibles en superficie.

Sí conviene conservarlos como soporte, pero no como sistema de uso diario.

Desde ahora, Dardock debería operar sobre pocos archivos vivos y usar el resto solo como biblioteca de referencia.
