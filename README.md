# Petit tutoriel d'edgedb avec NextJs **\***PROOF OF CONCEPT\*\*\* working tree

## Demarrage

- [Docs](https://docs.edgedb.com/guides/tutorials/nextjs_app_router)

### Creation du projet NextJs

```bash
pnpm create next-app <project-name>
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use src/ directory? No
✔ Would you like to use App Router? (recommended) Yes
✔ Would you like to customize the default import alias (@/\*) Yes
```

```bash
cd <project-name>
pnpm add edgedb
pnpm  dev
```

### Installation EdgeDB

La DataBase s'install dans le projet NextJs a voir apres si on a d'atre moyen de faire ou si ca va comme ca

- Linux

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

- Windows

```Powershell
iwr https://ps1.edgedb.com -useb | iex
```

```bash
edgedb --version # 5.3+cc878d8 si output "Command not found" -> redemarrer bash
edgedb project init
edgedb


```

- output:

```
 EdgeDB 5.3+cc878d8 (repl 5.1.0+7c5764f)
Type \help for help, \quit to quit.
edgedb:main>`
```

### Creer schema

- editer le schema `dbschema` dans le dossier <dossier installation>/dbschema/default.esdl

```JavaScript
module default {
  type BlogPost {
    required title: str;
    required content: str {
      default := ""
    }
  }
}
```

- installer le schema `default` avec la commande `edgedb schema install`

- creer un ficher .edgeql dans le dossier `dbschema/migrations`

```bash
edgedb migration create
```

- executer le ficher .edgeql

```bash
edgedb migrate
```

### Creer les premiers posts

```JavaScript
insert BlogPost {
  title := "This one weird trick makes using databases fun",
  content := "Use EdgeDB"
};
```

#output:{default::BlogPost {id: 693790d0-0ec7-11ef-b0f6-dfe4f6fbecb2}}

```JavaScript
insert BlogPost {
  title := "How to build a blog with EdgeDB and Next.js",
  content := "Let's start by scaffolding our app..."
};
```

#output:{default::BlogPost {id: 8bd85e26-0ec7-11ef-b0f6-a3ed574589dc}}

## Deploiment

### install nodejs & pnpm on linux ubuntu

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
npm install -g pnpm
```

- [doc github repo nodejs](https://github.com/nodesource/distributions/blob/master/README.md#debian-and-ubuntu-based-distributions)

### install projet

```bash
git clone <project url>
cd <project name>
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
pnpm install
```
