# Versionado GitHub Seguro — Dardock OS
> Criterio para llevar el sistema operativo de agencia a GitHub sin exponer información sensible.

---

## Decisión recomendada

Crear un repositorio privado separado:

```text
dardockagency/dardock-os-private
```

No usar el repo del dashboard para esto. El dashboard es producto. El OS es operación interna.

---

## Incluir

```text
.agents/skills/
01_uso_diario/
02_consolidados_md/
03_soporte_estrategico/
04_comercial_propuestas/
clientes/
CLAUDE.md
README_SISTEMA_DARDOCK.md
.gitignore
```

---

## Excluir

```text
Facturas/
Cursos/
Logo/
90_archivo_legacy/
*.zip
*.xlsx
*.docx
.env
.env.*
secrets/
credentials/
tokens/
```

---

## Riesgos antes de publicar

| Riesgo | Acción |
|---|---|
| Tokens pegados en markdown | Buscar `token`, `secret`, `password`, `access` antes de commit |
| Facturas o datos tributarios | Mantener `Facturas/` fuera del repo |
| Cursos comprados o material tercero | Mantener `Cursos/` fuera del repo |
| Logos pesados o editables | Mantener `Logo/` fuera del repo inicial |
| Archivos legacy con datos sensibles | Mantener `90_archivo_legacy/` fuera del repo |

---

## Comandos sugeridos

Desde `000. Dardock`, solo después de revisar seguridad:

```bash
git init
git add .agents 01_uso_diario 02_consolidados_md 03_soporte_estrategico 04_comercial_propuestas clientes CLAUDE.md README_SISTEMA_DARDOCK.md .gitignore
git commit -m "init dardock os private"
git branch -M main
git remote add origin git@github.com:dardockagency/dardock-os-private.git
git push -u origin main
```

Si se usa el Git raíz actual en `2026/`, no hacer `git add .`; ese root ve demasiadas carpetas de clientes externas.

---

## Revisión previa obligatoria

```bash
rg -n "token|secret|password|contraseña|api_key|access_token|client_secret" .agents 01_uso_diario 02_consolidados_md 03_soporte_estrategico 04_comercial_propuestas clientes CLAUDE.md README_SISTEMA_DARDOCK.md
```

Si aparece un secreto real, moverlo a un gestor de secretos y reemplazarlo por una nota operativa.
