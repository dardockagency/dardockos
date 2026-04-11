# Dardock OS

Repositorio central de trabajo para Dardock.

Este repo existe para evitar:

- mandarte archivos por WhatsApp
- mandarte archivos por Drive
- perder versiones
- no saber cuál es “el archivo correcto”
- trabajar distinto en cada computador

Si vuelves a este repo después de semanas o meses, este README debe decirte exactamente:

- qué contiene el repositorio
- dónde trabajar
- qué archivos importan
- cómo actualizar desde otro computador
- cómo subir cambios sin romper nada

---

## 1. Qué es este repositorio

Este repo concentra el sistema base de Dardock:

- sistema operativo de agencia
- prompts
- templates de auditoría
- templates de dashboard
- propuestas comerciales
- outputs de clientes

No es un backup caótico de todo tu disco.

Es un repositorio de trabajo.

---

## 2. Qué contiene

### Núcleo Dardock

- `000. Dardock/01_uso_diario/`
- `000. Dardock/02_consolidados_md/`
- `000. Dardock/04_comercial_propuestas/`
- `000. Dardock/README_SISTEMA_DARDOCK.md`

### Cliente de ejemplo ya incluido

- `1. Cliente/2. Cosas Nuestras/4. Abril/Dashboard_Cosas_Nuestras_Abril2026.md`
- `1. Cliente/2. Cosas Nuestras/4. Abril/Roadmap_8_Semanas_Cosas_Nuestras.md`
- `1. Cliente/2. Cosas Nuestras/4. Abril/Prompt_Auditoria_Cosas_Nuestras.md`

### No incluido en el bootstrap

Por diseño, no se subió inicialmente:

- `000. Dardock/Cursos/`
- `000. Dardock/Facturas/`
- `000. Dardock/90_archivo_legacy/`

Eso ayuda a mantener el repo liviano y usable.

---

## 3. Qué archivos son los más importantes

Si solo vas a abrir 4 cosas, abre estas:

### 1. Sistema operativo de agencia

- [000. Dardock/01_uso_diario/DARDOCK_OPERATING_SYSTEM.md](./000.%20Dardock/01_uso_diario/DARDOCK_OPERATING_SYSTEM.md)

Sirve para:

- operación diaria
- criterios de servicio
- límites
- reporting
- tasking

### 2. Sistema de prompts

- [000. Dardock/01_uso_diario/DARDOCK_PROMPT_SYSTEM.md](./000.%20Dardock/01_uso_diario/DARDOCK_PROMPT_SYSTEM.md)

Sirve para:

- auditoría
- dashboard
- roadmap

### 3. Landing principal

- [000. Dardock/01_uso_diario/dardock_landing.html](./000.%20Dardock/01_uso_diario/dardock_landing.html)

Sirve para:

- versión de trabajo de la landing de Dardock
- base visual / comercial

### 4. Playbook estratégico

- [000. Dardock/02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md](./000.%20Dardock/02_consolidados_md/DARDOCK_MASTER_PLAYBOOK.md)

Sirve para:

- dirección estratégica
- visión de agencia
- decisiones de mediano plazo

---

## 4. Mapa simple de carpetas

### `000. Dardock/01_uso_diario`

Archivos vivos.

Qué significa:

- aquí está lo que sí usas día a día

### `000. Dardock/02_consolidados_md`

Archivos de referencia fuerte.

Qué significa:

- no los abres todos los días, pero sí ordenan el sistema

### `000. Dardock/03_soporte_estrategico`

Soporte útil, contexto y documentos de respaldo.

Qué significa:

- no es el centro del sistema

### `000. Dardock/04_comercial_propuestas`

Todo lo comercial y de propuestas.

Qué significa:

- aquí armas y adaptas propuestas

### `1. Cliente/...`

Trabajo por cliente.

Qué significa:

- auditorías
- roadmaps
- prompts específicos
- outputs operativos

---

## 5. Regla general de uso

Antes de crear un archivo nuevo, pregúntate:

1. ¿Esto ya existe en `DARDOCK_OPERATING_SYSTEM.md`?
2. ¿Esto es una variante de propuesta?
3. ¿Esto es algo específico de un cliente?
4. ¿Esto es solo soporte o referencia?

Si no sabes dónde poner algo:

- operativo general → `01_uso_diario`
- estratégico → `02_consolidados_md`
- soporte → `03_soporte_estrategico`
- venta → `04_comercial_propuestas`
- cliente → `1. Cliente/...`

---

## 6. Cómo trabajar desde otro computador

## Primera vez

Clona el repo:

```bash
git clone https://github.com/dardockagency/dardockos.git
cd dardockos
```

## Cada vez que abras el repo en otro computador

Antes de editar, corre:

```bash
git pull
```

Eso baja los últimos cambios.

### Regla crítica

Nunca empieces a editar sin hacer `git pull` primero.

Si no, puedes trabajar sobre una versión vieja.

---

## 7. Flujo básico de trabajo

Cuando hagas cambios:

### Paso 1

Mira qué cambió:

```bash
git status
```

### Paso 2

Agrega los archivos correctos:

```bash
git add .
```

O si quieres agregar solo algunos:

```bash
git add README.md
git add "000. Dardock/01_uso_diario/DARDOCK_OPERATING_SYSTEM.md"
```

### Paso 3

Haz commit:

```bash
git commit -m "actualiza dashboard y sistema de prompts"
```

### Paso 4

Sube los cambios:

```bash
git push
```

---

## 8. Comandos que más vas a usar

### Ver estado

```bash
git status
```

### Bajar cambios

```bash
git pull
```

### Subir cambios

```bash
git push
```

### Ver historial

```bash
git log --oneline --decorate --graph -20
```

### Ver qué cambió

```bash
git diff
```

---

## 9. Situaciones comunes

## “Solo quiero bajar lo último”

```bash
git pull
```

## “Ya trabajé y quiero guardar”

```bash
git status
git add .
git commit -m "describe lo que cambiaste"
git push
```

## “No recuerdo qué modifiqué”

```bash
git status
git diff
```

## “Quiero ver qué hicimos antes”

```bash
git log --oneline --decorate --graph -20
```

---

## 10. Qué no hacer

No hagas esto si no estás muy seguro:

- `git reset --hard`
- `git checkout -- .`
- `git clean -fd`
- borrar archivos dentro de `.git/`

Esos comandos pueden borrar trabajo.

---

## 11. Qué cosas no deberías subir al repo

No subir:

- credenciales
- tokens
- contraseñas
- accesos de clientes
- secretos en `.env`
- archivos gigantes irrelevantes
- facturas privadas
- basura de sistema

Si algo es sensible, no lo subas.

---

## 12. Cómo pensar el repo

Este repo no es solo una carpeta.

Es:

- memoria de trabajo de Dardock
- sistema operativo compartido
- repositorio de templates
- base para trabajar desde distintas computadoras

---

## 13. Recomendación de hábito

Cada vez que cierres una sesión de trabajo importante:

1. `git status`
2. `git add .`
3. `git commit -m "mensaje claro"`
4. `git push`

Eso evita perder cambios y mantiene el repo vivo.

---

## 14. Si olvidas todo

Haz esto:

```bash
git pull
git status
```

Luego abre:

- `000. Dardock/README_SISTEMA_DARDOCK.md`
- `000. Dardock/01_uso_diario/DARDOCK_OPERATING_SYSTEM.md`

Y desde ahí vuelves a orientarte.

---

## 15. Archivo complementario

También existe una guía práctica adicional:

- [GITHUB_WORKFLOW_DARDOCK.md](./GITHUB_WORKFLOW_DARDOCK.md)

Úsala si necesitas un paso a paso todavía más simple.
