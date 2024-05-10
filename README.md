# Petit tutoriel d'edgedb avec NextJs

## Demarrage

- [Docs](https://docs.edgedb.com/guides/tutorials/nextjs_app_router)

```bash
pnpm create next-app <project-name>
```

✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use src/ directory? No
✔ Would you like to use App Router? (recommended) Yes
✔ Would you like to customize the default import alias (@/\*) Yes

```bash
cd <project-name>
pnpm  dev
```

```bash
#creer un nouveau dossier car il install dans le dossier courant
mkdir /var/edgedb && cd $_
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
edgedb --version # 5.3+cc878d8 si output "Command not found" -> redemarrer bash
edgedb project init

    output:
#┌─────────────────────┬──────────────────────────┐
#│ Project directory   │ /home/julien             │
#│ Project config      │ /home/julien/edgedb.toml │
#│ Schema dir (empty)  │ /home/julien/dbschema    │
#│ Installation method │ portable package         │
#│ Version             │ 5.3+cc878d8              │
#│ Instance name       │ edgedb                   │
#│ Branch              │ main                     │
#└─────────────────────┴──────────────────────────┘


edgedb

# output
#EdgeDB 5.3+cc878d8 (repl 5.1.0+7c5764f)
#Type \help for help, \quit to quit.
#edgedb:main>
```
