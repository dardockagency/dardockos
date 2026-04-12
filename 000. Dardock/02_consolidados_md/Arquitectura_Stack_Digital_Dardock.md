# Arquitectura Stack Digital Dardock

## Objetivo

Definir qué sistema vive en cada plataforma para evitar cruces innecesarios y reducir caos operativo.

---

## Regla madre

No usar una sola herramienta para todo.

La arquitectura correcta de Dardock separa:

- código y versionado
- publicación web
- CRM y automatización
- dominio y DNS
- correo y colaboración

---

## 1. GitHub

### Rol

Fuente de verdad del sistema.

### Qué debe vivir aquí

- repositorios de landing
- repositorios de dashboard
- operating system de Dardock
- prompts
- templates
- auditorías estructuradas
- documentación operativa

### Qué no debe vivir aquí

- credenciales
- accesos
- archivos pesados innecesarios
- datos sensibles crudos del cliente

### Repos recomendados

- `dardockos`
- `dardock-command-center`

---

## 2. Vercel

### Rol

Publicación automática de frontends conectados a GitHub.

### Qué debe vivir aquí

- landing pages
- dashboards
- micrositios de auditoría
- frontends React/Vite/Next

### Qué no debe vivir aquí

- CRM
- automatizaciones comerciales
- correo
- lógica de negocio interna de leads

### Flujo correcto

1. cambio en GitHub
2. `git push`
3. Vercel despliega
4. URL pública se actualiza

---

## 3. GHL

### Rol

Capa comercial y de automatización.

### Qué debe vivir aquí

- funnels de captación
- formularios
- agendas
- pipeline comercial
- automatizaciones email / WhatsApp
- onboarding comercial
- seguimiento de leads

### Qué no debe vivir aquí

- dashboard técnico
- frontend del command center
- sistema fuente del código

### Uso correcto

El CTA del dashboard puede enviar a GHL.
El dashboard no debe construirse dentro de GHL.

---

## 4. Squarespace

### Rol

Registro actual del dominio y DNS operativo actual.

### Qué hacer aquí hoy

- administrar registros DNS mientras siga siendo el punto editable
- agregar subdominios si aún no se migra el dominio

### Qué no hacer

- cambiar nameservers a Vercel sin necesidad
- mezclar sitio, correo y dashboards sin criterio

### Nota operativa

Hoy `central.dardock.com` puede resolverse con un `CNAME` desde Squarespace mientras el dominio siga ahí.

---

## 5. Hostinger

### Rol futuro o parcial

Concentrar dominios y DNS si Dardock decide centralizar infraestructura.

### Cuándo tiene sentido usarlo

- cuando el dominio se transfiera realmente
- cuando se quiera centralizar DNS
- cuando se tenga inventario completo de registros

### Riesgo

No mover dominio + DNS + correo + Vercel el mismo día.

---

## 6. Google Workspace

### Rol

Correo y colaboración.

### Qué vive aquí

- correo corporativo
- Drive
- Calendar
- Meet
- identidad operativa del negocio

### Qué no debe tocarse sin cuidado

- MX
- SPF
- DKIM
- configuración de correo durante cambios de DNS

---

## Arquitectura recomendada actual

### Capa de sistema

- GitHub = memoria y código
- Vercel = publicación

### Capa comercial

- GHL = leads, agenda, automatizaciones

### Capa de dominio

- Squarespace hoy
- Hostinger después, si se decide centralizar

### Capa de correo

- Google Workspace

---

## Modelo operativo recomendado

### Dashboard

- Repo: `dardock-command-center`
- Hosting: Vercel
- Dominio ideal: `central.dardock.com`

### Operating System

- Repo: `dardockos`
- Uso interno y documentación

### Captación

- GHL

---

## Regla de implementación

1. primero validar el proyecto en `*.vercel.app`
2. luego conectar dominio custom
3. luego automatizar CTA hacia GHL
4. recién después pensar en multi-cliente o auth

---

## Error común a evitar

No usar GHL como reemplazo de GitHub o Vercel.
No usar Vercel como CRM.
No usar Squarespace como sistema operativo.

Cada plataforma tiene una función.
