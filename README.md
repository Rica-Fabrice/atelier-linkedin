# Atelier LinkedIn - Programme d'Accélération

Un site web haute conversion ("Landing Page") développé pour un programme d'accélération d'un **Expert LinkedIn**. Ce projet est un clone haute fidélité optimisé pour la performance, l'accessibilité et l'expérience utilisateur (UX).

## Fonctionnalités Clés

- **Design Premium & Minimaliste** : Palette de couleurs monochrome (off-black `#0a0a0b`, off-white `#fafafa`) avec des contrastes étudiés pour la lisibilité.
- **Animations Fluides (Framer Motion)** : Effets de révélation au défilement (`reveal.tsx`), animations au survol, et composants dynamiques (compteur de statistiques).
- **Navigation Scroll-Spy** : La barre de navigation traque intelligemment le défilement et met en surbrillance la section active via un `IntersectionObserver`.
- **Responsive Design Complet** : L'interface s'adapte parfaitement à toutes les tailles d'écrans, avec un CTA flottant (Sticky CTA) pensé spécifiquement pour maximiser la conversion sur mobile.
- **Performances (Doherty Threshold)** : Optimisation des médias via le composant `next/image` pour un affichage instantané (LCP optimisé).

## Stack Technique

Ce projet est construit avec des technologies modernes pour garantir des performances optimales :

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Typographie** : Polices optimisées (Serif & Sans-serif) gérées via `next/font`

## Architecture du Projet

Le projet suit une architecture modulaire pour faciliter la maintenance :

```text
├── app/
│   ├── layout.tsx         # Layout principal et balises SEO
│   ├── page.tsx           # Page d'accueil (Landing Page complète)
│   └── globals.css        # Variables CSS globales et utilitaires
├── components/
│   ├── site/              # Composants métiers (Hero, About, Pricing, etc.)
│   └── ui/                # Composants d'interface génériques (si présents)
└── public/                # Assets statiques (polices, images locales)
```

## Installation & Démarrage

Pour lancer le projet localement :

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/ton-profil/atelier-linkedin.git
   cd atelier-linkedin
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.
