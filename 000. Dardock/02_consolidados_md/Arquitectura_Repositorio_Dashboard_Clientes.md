# Arquitectura Repositorio Dashboard Clientes

## Pregunta central

¿Debemos duplicar el repositorio por cada cliente o hacer pequeñas modificaciones dentro del mismo?

## Respuesta

En la etapa actual de Dardock:

- no duplicar repositorio por cliente
- sí usar un repositorio maestro multi-cliente

---

## Decisión operativa

Usar un solo repositorio:

- `dardock-command-center`

Y dentro de él:

- una sola base UX/UI
- una sola estructura de auditoría
- un archivo de data por cliente

---

## Clientes contemplados ahora

- Cosas Nuestras
- Dany Cáceres
- ADS Group
- Genera Industrial

---

## Estructura recomendada

```text
src/
  components/
    dashboard/
  data/
    clientData.ts
    clients/
      cosas-nuestras.ts
      dany-caceres.ts
      ads-group.ts
      genera-industrial.ts
      index.ts
```

---

## Qué editar según necesidad

### Mejoras UX/UI

- `src/pages/Index.tsx`
- `src/index.css`
- `src/components/dashboard/*`

### Cambios de data de cliente

- `src/data/clients/<cliente>.ts`

### Cambios estructurales del sistema

- `src/data/clientData.ts`

---

## Cuándo sí abrir un repo nuevo

Solo si un cliente requiere:

- branding totalmente distinto
- experiencia de producto distinta
- dominio totalmente independiente con lógica propia
- features o módulos exclusivos
- aislamiento técnico real

---

## Recomendación Dardock

### Ahora

- 1 repo template
- varios clientes dentro del mismo repo

### Después

Mover a rutas por cliente:

- `/cosas-nuestras`
- `/dany-caceres`
- `/ads-group`
- `/genera-industrial`

### Más adelante

Si el sistema madura:

- subdominio por cliente
- auth
- repo separado solo cuando sea realmente necesario
