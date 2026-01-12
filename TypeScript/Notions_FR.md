## 📘 1. Introduction à TypeScript

TypeScript est un **sur-ensemble typé de JavaScript**. Il offre toutes les fonctionnalités de JavaScript tout en ajoutant une couche supplémentaire : le **système de types**. 

**✨ Principal avantage :** Mettre en évidence les comportements inattendus dans le code, réduisant ainsi les risques de bogues.

```
JavaScript ⊂ TypeScript
  │         │
  │         └─── + Système de types
  └───────────── Logique de base
```

## 🔤 2. Les fondamentaux du système de types

### 🤖 Inférence de types
TypeScript est capable de générer des types automatiquement en analysant la valeur assignée à une variable.

```typescript
let hello = "World";  // ✅ TypeScript infère: string
let count = 42;       // ✅ TypeScript infère: number
let isActive = true;  // ✅ TypeScript infère: boolean
```

### 📋 Définition de types
On peut décrire la forme d'un objet via une **interface**.

> 💡 **Bonne pratique :** Préférer les `interface` aux `type` sauf pour des besoins spécifiques.

```typescript
interface User {
  name: string;
  age: number;
  email?: string;  // ❓ Propriété optionnelle
}

const user: User = {
  name: "Alice",
  age: 30
};
```

### 🔷 Système de type structurel
TypeScript se concentre sur la **forme** (shape) des valeurs. Si deux objets ont la même forme (mêmes propriétés requises), ils sont considérés comme étant du même type.

```typescript
interface Point { x: number; y: number; }

const point1: Point = { x: 10, y: 20 };
const point2 = { x: 5, y: 15 };  // ✅ Même forme = compatible

function printPoint(p: Point) {
  console.log(p.x, p.y);
}

printPoint(point2);  // ✅ Fonctionne!
```

### 🎯 Types Primitifs et Spéciaux

| Type | Description | Exemple |
|------|-------------|----------|
| `any` | ⚠️ Autorise tout (éviter si possible) | `let x: any = 42;` |
| `unknown` | 🔒 Force une vérification avant usage | `let y: unknown = "hello";` |
| `never` | 🚫 Type impossible (ex: fonction qui throw) | `function fail(): never` |
| `void` | ⭕ Absence de valeur de retour | `function log(): void` |

## 🧩 3. Composition de types

### ➕ Unions
Permet à une variable d'être l'un de plusieurs types.

```typescript
// Type union simple
type ID = string | number;

let userId: ID;
userId = "abc123";  // ✅ OK
userId = 42;        // ✅ OK aussi

// Fonction avec union
function printId(id: string | number) {
  if (typeof id === "string") {
   ⚙️ 5. Configuration (TSConfig)

Le fichier `tsconfig.json` définit la racine d'un projet et les options de compilation.

### 📁 Gestion des fichiers

```json
{
  "include": [
    "src/**/*",      // 📂 Tous les fichiers dans src/
   📊 Tableau de référence rapide
  ],
  "exclude": [
    "node_modules",  // ❌ Exclure
    "**/*.spec.ts"   // ❌ Exclure les tests
  ]
}
```

**Wildcards disponibles :**
- `*` : Correspond à zéro ou plusieurs caractères
- `**` : Correspond à n'importe quel répertoire imbriqué

### 🔒 Options de vérification stricte

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

| Option | Description | Effet |
|--------|-------------|--------|
| `strict` | 🛡️ Active toutes les vérifications strictes | Mode sécurité maximale |
| `noImplicitAny` | ⚠️ Erreur si `any` est inféré | Force la déclaration explicite |
| `strictNullChecks` | 🚫 `null` et `undefined` comme types distincts | Évite les erreurs runtime |

### 📝 Exemple de configuration complète

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```
### 🔧 Génériques
Fournissent des variables aux types, permettant de créer des structures réutilisables.

```typescript
// Tableaux génériques
const names: Array<string> = ["Alice", "Bob"];
const numbers: Array<number> = [1, 2, 3];

// Interface générique personnalisée
interface Box<T> {
---

## 💡 Analogie : Le DOM comme un grand magasin

```
🏬 DOM (Document Object Model)
  │
  ├─ 🚪 document = Accueil du magasin
  │
  ├─ 🔍 getElementById = Chercher un article par code-barres
  │   └─ Retour: L'article OU "pas en stock" (null)
  │
  ├─ 🏷️ HTMLElement = Étiquette générale "article du magasin"
  │
  └─ 📋 HTMLAnchorElement = Fiche technique détaillée
      └─ Indique exactement ce qu'on peut faire (ex: cliquer sur un lien)
```

**En résumé :**
- 🔍 **Recherche** : `getElementById` = Scanner un code-barres
- 🏷️ **Type générique** : `HTMLElement` = "C'est un produit"
- 📋 **Type spécifique** : `HTMLAnchorElement` = "C'est un lien avec href, target, etc."
- ❓ **null** : "Article introuvable en stock"
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };

// Fonction générique
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = getFirstElement([1, 2, 3]);  // Type: number | undefined

### 4. Manipulation du DOM avec TypeScript
Le type **`HTMLElement`** est la colonne vertébrale de la manipulation du DOM en TypeScript.
*   **Sélection d'éléments :**
    *   `getElementById` : Retourne un `HTMLElement | null`. Il peut être `null` car TS ne peut pas garantir que l'élément existe avant l'exécution.
    *   `querySelector` : Plus flexible, il retourne le premier élément correspondant au sélecteur.
    *   `querySelectorAll` : Retourne une `NodeListOf<Element>`, une liste personnalisée implémentant `length`, `item()`, et `forEach`.
*   **Création d'éléments :** `document.createElement` utilise des modèles génériques avancés. Si vous passez "p", TS infère automatiquement que le type de retour est un `HTMLParagraphElement` grâce à une interface de correspondance nommée `HTMLElementTagNameMap`.
*   **Hiérarchie des interfaces :** `HTMLElement` étend `Element`, qui lui-même étend **`Node`**.
*   **Enfants et Nœuds :**
    *   `children` (HTMLCollection) : Contient uniquement les **HTMLElements** enfants.
    *   `childNodes` (NodeList) : Contient tous les **nœuds**, y compris les nœuds de texte.

### 5. Configuration (TSConfig)
Le fichier `tsconfig.json` définit la racine d'un projet et les options de compilation.
*   **Gestion des fichiers :** `include` et `exclude` utilisent des caractères génériques (wildcards) comme `*` ou `**/` pour cibler les fichiers.
*   **Options de vérification :**
    *   `strict` : Active une large gamme de comportements de vérification de type pour garantir la correction du programme.
    *   `noImplicitAny` : Émet une erreur si TypeScript doit inférer le type `any` par défaut.
    *   `strictNullChecks` : Traite `null` et `undefined` comme des types distincts pour éviter les erreurs d'exécution.

---

### Tableau des commandes et types TypeScript (DOM et Fondamentaux)

| Commande / Type | Description | Retour / Effet |
| :--- | :--- | :--- |
| **`document.getElementById("id")`** | Sélectionne un élément par son identifiant unique. | `HTMLElement \| null` |
| **`document.createElement("tag")`** | Crée un nouvel élément HTML programmatiquement. | `HTMLElement` (ou type spécifique comme `HTMLAnchorElement`) |
| **`element.appendChild(child)`** | Ajoute un nœud à la fin de la liste des enfants d'un parent. | Le nœud ajouté |
| **`document.querySelector("sel")`** | Sélectionne le premier élément descendant correspondant aux sélecteurs. | `Element \| null` |
| **`document.querySelectorAll("sel")`**| Sélectionne tous les éléments correspondants. | `NodeListOf<Element>` |
| **`element.textContent`** | Définit ou récupère le contenu textuel d'un nœud. | `string` |
| **`element.children`** | Propriété listant uniquement les éléments HTML enfants. | `HTMLCollection` |
| **`element.childNodes`** | Propriété listant tous les nœuds enfants (incluant le texte). | `NodeList` |
| **`interface Name { ... }`** | Déclare une forme d'objet pour le typage explicite. | Nouveau type d'objet |
| **`type A = B \| C`** | Union : définit qu'un type peut être l'un ou l'autre. | Type composé |
| **`typeof variable`** | Prédicat de type pour vérifier le type d'une variable au runtime. | `string` (ex: "string", "number") |

**Analogie pour comprendre le DOM dans TypeScript :** Imaginez que le DOM est un grand magasin. `document` est l'accueil du magasin. `getElementById` est comme demander un article spécifique par son code-barres ; on vous dit soit où il est, soit qu'il n'est pas en stock (`null`). Les interfaces comme `HTMLAnchorElement` sont les fiches techniques précises de chaque produit : elles vous disent exactement ce que vous pouvez faire avec (comme cliquer sur un lien), alors que le type `HTMLElement` est juste une étiquette générale disant que c'est "un article du magasin".
