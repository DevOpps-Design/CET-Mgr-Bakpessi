# Site Web CETMB — Collège Technique d'Enseignement MGR BAKPESSI

Site vitrine du **CETMB** (Collège Technique d'Enseignement MGR BAKPESSI), un établissement technique privé catholique situé à **Kara, Togo**.

Le site est en ligne sur **https://cetmgr-bakpessi.vercel.app**.

---

## L'équipe

Ce projet a été réalisé par :

- **LEMOU Charles**
- **Olivier**
- **Noël**

---

## De quoi est composé le site ?

Le site est un site vitrine simple. Il présente l'établissement, ses filières de formation, les modalités d'admissions, un blog pour les actualités, et une page de contact.

### Les pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Page d'accueil avec présentation de l'école, les filières populaires, les actualités |
| Établissement | `/etablissement` | Présentation complète de l'école : histoire, valeurs, statistiques, localisation |
| Filières | `/filieres` | Liste de toutes les filières de formation (8 filières) |
| Détail filière | `/filieres/:serie` | Page détaillée d'une filière (F1, F2, F3, F4, E, G1, G2, G3) |
| Admissions | `/admissions` | Processus d'inscription, conditions, pièces à fournir, formulaire de pré-inscription |
| Blog | `/blog` | Liste des articles et événements (alimenté par Sanity CMS) |
| Détail article | `/blog/:slug` | Article complet avec contenu riche (Portable Text) |
| Contact | `/contact` | Coordonnées et formulaire de contact |
| Conditions d'utilisation | `/conditions-utilisation` | Mentions légales (CGU) |
| Politique de confidentialité | `/politique-confidentialite` | Politique de confidentialité |
| Politique de cookies | `/cookies` | Politique de cookies |

### Les 8 filières

| Code | Filière | Catégorie |
|------|---------|-----------|
| F1 | Construction mécanique | Industrielle |
| F2 | Électrotechnique | Industrielle |
| F3 | Électronique | Industrielle |
| F4 | Génie civil | Industrielle |
| E | Mathématiques et Techniques | Scientifique |
| G1 | Secrétariat | Tertiaire |
| G2 | Comptabilité | Tertiaire |
| G3 | Gestion | Tertiaire |

---

## Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| **React 19** | Framework frontend (JavaScript, pas de TypeScript) |
| **Vite 7** | Outil de build et dev server |
| **React Router DOM 7** | Routage client-side (toutes les pages) |
| **Bootstrap 5** | Grille et composants de base |
| **CSS personnalisé** | Design system sur mesure (pas de Tailwind) |
| **Framer Motion** | Animations et transitions de page |
| **Lucide React** | Icônes |
| **Sanity CMS** | Gestion de contenu pour le blog |
| **@portabletext/react** | Affichage du contenu riche du blog |
| **Google Fonts** | Inter (titres) + Poppins (corps de texte) |
| **Vercel** | Hébergement et déploiement |

---

## Comment installer le projet

### Prérequis

- **Node.js** v18 ou supérieur (⚠️ v24 n'est pas compatible avec le studio Sanity)
- **npm** (ou yarn/pnpm)

### Installation

```bash
# Cloner le projet
git clone https://github.com/DevOpps-Design/CET-Mgr-Bakpessi.git
cd lycee_bakpessi

# Installer les dépendances
npm install

# Créer le fichier .env avec les variables d'environnement (voir ci-dessous)
cp .env.example .env  # puis éditer le fichier

# Lancer le serveur de développement
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

### Variables d'environnement

Le fichier `.env` doit contenir :

```env
# Sanity Studio (pour le CMS)
SANITY_STUDIO_PROJECT_ID=**********
SANITY_STUDIO_DATASET=production

# Frontend (pour le client Sanity côté navigateur)
VITE_SANITY_PROJECT_ID=**********
VITE_SANITY_DATASET=production

# Token Sanity (pour les opérations d'écriture)
SANITY_TOKEN=skQShUx...
```

> ⚠️ Le fichier `.env` n'est **jamais** poussé sur Git. Ne commitez jamais vos clés.

---

## Comment le blog fonctionne

Le blog est alimenté par **Sanity CMS**. Les articles sont stockés dans le cloud de Sanity et récupérés via des requêtes GROQ.

### Structure d'un article

Un article dans Sanity contient :

- **Titre** : le titre de l'article
- **Slug** : l'identifiant URL (généré automatiquement)
- **Extrait** : résumé court
- **Catégorie** : Innovation, Réussite, Événements, ou Pédagogie
- **Date de publication**
- **Date d'événement** (optionnel)
- **Image** : image de une
- **Corps** : contenu riche avec titres, listes, citations, images, liens

### Fallback

Si Sanity n'est pas configuré ou indisponible, le site affiche des articles de test stockés dans `src/data/blogPosts.js`.

### Comment ajouter un article

1. Aller sur le studio Sanity : https://manage.sanity.io/projects/zjezoatn
2. Créer un nouvel article de type "Article / Événement"
3. Remplir les champs
4. Publier

---

## Structure du projet

```
lycee_bakpessi/
├── public/                    # Fichiers statiques (images, robots.txt, sitemap)
│   └── Assets/
│       ├── Brand/logo.webp    # Logo du CETMB
│       ├── Images/            # Images utilisées dans les sections
│       └── IMG/               # Images par page (home, etablissement, filieres, etc.)
│
├── sanity/                    # Configuration Sanity CMS
│   ├── sanity.config.js       # Configuration du studio
│   ├── sanity.cli.js          # Configuration CLI
│   └── schemas/
│       ├── blogPost.js        # Schéma d'un article de blog
│       └── blockContent.js    # Schéma du contenu riche (Portable Text)
│
├── src/
│   ├── main.jsx               # Point d'entrée React
│   ├── App.jsx                # Configuration du routage
│   │
│   ├── pages/                 # Une page = un fichier
│   │   ├── HomePage.jsx
│   │   ├── EtablissementPage.jsx
│   │   ├── FilierePage.jsx
│   │   ├── FiliereDetailPage.jsx
│   │   ├── AdmissionsPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── TermsPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   └── CookiesPage.jsx
│   │
│   ├── components/
│   │   ├── layout/            # Header, Footer, Layout, LegalLayout
│   │   ├── CookieConsent.jsx  # Bannière de cookies
│   │   └── sections/          # Sections par page
│   │       ├── home/          # 9 sections (Hero, Stats, About, Filieres, etc.)
│   │       ├── etablissement/ # 10 sections (Hero, History, Values, Map, etc.)
│   │       ├── filieres/      # 3 sections (Hero, Liste, CTA)
│   │       ├── admissions/    # 5 sections (Hero, Process, Conditions, Pièces, Formulaire)
│   │       ├── contact/       # 2 sections (Hero, Infos + formulaire)
│   │       └── blog/          # 4 sections (Hero, Filtres, Articles, Newsletter)
│   │
│   ├── lib/                   # Fonctions et hooks partagés
│   │   ├── sanity.js          # Client Sanity + helper d'images
│   │   ├── useBlogPosts.js    # Hook : liste des articles
│   │   └── useBlogPost.js     # Hook : un article par slug
│   │
│   ├── data/
│   │   └── blogPosts.js       # Données de fallback pour le blog
│   │
│   ├── utils/
│   │   └── formatDate.js      # Formatage de dates en français
│   │
│   └── styles/
│       ├── main.css           # Point d'entrée CSS
│       ├── design-system/     # Tokens, typographie, composants, animations
│       └── utilities/         # Classes utilitaires
│
├── .env                       # Variables d'environnement (non versionné)
├── .gitignore
├── index.html                 # HTML d'entrée (SEO, JSON-LD, Open Graph)
├── vite.config.js             # Configuration Vite
├── vercel.json                # Configuration de déploiement Vercel
├── package.json
└── eslint.config.js           # Configuration ESLint
```

---

## Comment les routes fonctionnent

Le routage est géré par `createBrowserRouter` de React Router v7. Toutes les pages sont **chargées en lazy** (chargement à la demande) pour optimiser les performances.

```
/                        → HomePage
/etablissement           → EtablissementPage
/filieres                → FilierePage
/filieres/:serie         → FiliereDetailPage (F1, F2, F3, F4, E, G1, G2, G3)
/admissions              → AdmissionsPage
/blog                    → BlogPage
/blog/:slug              → BlogDetailPage
/contact                 → ContactPage
/conditions-utilisation  → TermsPage
/politique-confidentialite → PrivacyPage
/cookies                 → CookiesPage
```

Chaque page est enveloppée dans un `Layout` qui contient le `Header` (navigation) et le `Footer`. Les pages légales (CGU, confidentialité, cookies) utilisent un `LegalLayout` spécifique.

---

## Le design system

Le projet utilise un design system personnalisé basé sur des **variables CSS** (pas de framework CSS comme Tailwind).

### Couleurs principales

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--cetmb-primary` | `#176609` (vert) | Couleur principale, boutons, liens |
| `--cetmb-accent` | `#a26c21` (or/khaki) | Accent, highlights, chiffres |
| `--cetmb-primary-dark` | `#145307` | Fond sombre, sections dark |
| `--cetmb-bg` | `#FFFFFF` | Fond blanc |
| `--cetmb-surface` | `#F7F7F5` | Fond gris très clair |
| `--cetmb-text` | `#1B1B1B` | Texte principal |
| `--cetmb-text-muted` | `#5F5F5F` | Texte secondaire |

### Typographie

- **Titres** : Inter (poids 600-800, avec letter-spacing négatif)
- **Corps** : Poppins (poids 400-700, line-height 1.7)

### Border radius

Tous les border-radius sont à `0` — c'est un design volontairement anguleux et épuré.

### Les classes importantes

| Classe | Description |
|--------|-------------|
| `.btn-cetmb-primary` | Bouton vert rempli |
| `.btn-cetmb-outline` | Bouton vert contour |
| `.section-padding` | Padding responsive pour les sections |
| `.card-cetmb` | Carte avec bordure et effet hover |
| `.bg-dark-elegant` | Fond sombre avec dégradé radial |

---

## Déploiement

Le site est déployé sur **Vercel**. La configuration est dans `vercel.json` :

- Build : `npm run build`
- Sortie : `dossier dist/`
- Toutes les routes sont redirigées vers `index.html` (SPA)

### Commandes utiles

```bash
npm run dev        # Lancer le serveur de développement
npm run build      # Builder pour la production
npm run preview    # Prévisualiser le build
npm run lint       # Vérifier le code avec ESLint
```

---

## SEO et performance

- **Meta tags** : description, Open Graph, Twitter Card dans `index.html`
- **JSON-LD** : données structurées pour Google (EducationalOrganization)
- **Sitemap** : `public/sitemap.xml` avec les 6 pages principales
- **Robots.txt** : autorise tous les crawlers
- **Lazy loading** : toutes les pages sont chargées à la demande
- **Animations** : respectent `prefers-reduced-motion` pour l'accessibilité

---

## Données en localStorage

Le site utilise le navigateur pour stocker certaines données Localement :

| Clé | Contenu |
|-----|---------|
| `cetmb_cookie_consent` | Consentement cookies (accepté/refusé) |
| `cetmb_preinscription_draft` | Brouillon du formulaire de pré-inscription (auto-save) |
| `cetmb_preinscriptions` | Inscriptions soumises |
| `cetmb_contact_messages` | Messages de contact soumis |
| `cetmb_newsletter` | Emails de la newsletter |

> Ces données restent dans le navigateur de l'utilisateur. Elles ne sont pas envoyées sur un serveur.

---

## Points importants à savoir

1. **Pas de backend** : le site est 100% frontend. Les formulaires stockent en localStorage. Pour un vrai système de formulaire, il faudra ajouter un backend ou un service comme Formspree.

2. **Sanity CMS** : le blog est le seul contenu dynamique. Les autres pages (filières, admissions, etc.) sont en dur dans le code React. Si tu veux rendre ces pages éditables, il faudra créer de nouveaux schémas Sanity.

3. **Node.js** : le studio Sanity ne fonctionne pas avec Node.js v24. Utilise v18 ou v20.

4. **Framer Motion** : pinned en v12.42.0. Les versions supérieures causent des erreurs d'exports avec Vite.

5. **React Router v7** : les routes sont plates (pas de nesting avec `<Route children>`). Utilise `createBrowserRouter`.

---

## Licence

Ce projet est privé — Collège Technique d'Enseignement MGR BAKPESSI, Kara, Togo.
