# GitHub Workflow Dardock

## Objetivo

Tener una guía simple para usar este repo sin depender de memoria ni experiencia avanzada en Git.

Esta guía está pensada para Matías.

---

## 1. Antes de empezar a trabajar

Siempre entra a la carpeta del repo:

```bash
cd /ruta/a/dardockos
```

Luego corre:

```bash
git pull
```

Eso trae lo último.

---

## 2. Trabaja normalmente

Edita archivos, crea nuevos documentos, ajusta dashboards, prompts o propuestas.

No hace falta hacer nada con Git mientras piensas o editas.

---

## 3. Cuando termines una sesión

### Mira el estado

```bash
git status
```

### Agrega cambios

```bash
git add .
```

### Haz commit

```bash
git commit -m "describe aquí lo que cambiaste"
```

Ejemplos:

```bash
git commit -m "actualiza dashboard v2 y prompt de lovable"
git commit -m "agrega auditoria y roadmap de cosas nuestras"
git commit -m "refactoriza operating system y templates"
```

### Sube cambios

```bash
git push
```

---

## 4. Si cambias de computador

En el nuevo computador:

### Si todavía no tienes el repo

```bash
git clone https://github.com/dardockagency/dardockos.git
cd dardockos
```

### Si ya lo tienes

```bash
git pull
```

---

## 5. Si Git te dice que hay cambios y no entiendes

Primero mira esto:

```bash
git status
```

Luego mira el detalle:

```bash
git diff
```

Eso te muestra qué cambió.

---

## 6. Si quieres subir solo un archivo

Ejemplo:

```bash
git add "000. Dardock/01_uso_diario/DARDOCK_OPERATING_SYSTEM.md"
git commit -m "actualiza operating system"
git push
```

---

## 7. Si quieres ver el historial

```bash
git log --oneline --decorate --graph -20
```

Eso te ayuda a recordar qué se hizo antes.

---

## 8. Errores comunes

## Error 1

Empiezas a trabajar sin hacer `git pull`.

Resultado:

- trabajas sobre una versión vieja

### Solución

Siempre:

```bash
git pull
```

antes de empezar.

---

## Error 2

Editas muchas cosas y luego no recuerdas qué cambiaste.

### Solución

```bash
git status
git diff
```

---

## Error 3

Olvidas subir los cambios.

### Solución

Al final de cada sesión:

```bash
git add .
git commit -m "mensaje"
git push
```

---

## 9. Qué no hacer si no estás seguro

No uses:

```bash
git reset --hard
git checkout -- .
git clean -fd
```

Esos comandos pueden borrar trabajo.

---

## 10. Regla mínima de seguridad

No subir nunca:

- passwords
- API keys
- tokens
- credenciales
- archivos sensibles de clientes

---

## 11. Ritual recomendado de Dardock

### Antes de trabajar

```bash
git pull
```

### Después de trabajar

```bash
git status
git add .
git commit -m "explica qué hiciste"
git push
```

---

## 12. Si un día no recuerdas nada

Haz esto:

```bash
git pull
git status
```

Luego abre:

- `README.md`
- `000. Dardock/README_SISTEMA_DARDOCK.md`

Y vuelve a entrar al sistema desde ahí.
