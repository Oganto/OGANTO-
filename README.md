# Oganto Portfolio

Personal developer portfolio for Oginni Isreal (Oganto) — Next.js 16, TypeScript, Tailwind CSS v4, GSAP + Lenis.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Editing content

All real content lives in two files — you never need to touch the components to update text:

- `src/lib/site-data.ts` — name, positioning, intro, contact links, skills, journey, AI focus section
- `src/lib/projects.ts` — your project list. To add a new project, add a new object to the `projects` array with an image in `public/images/`.

Anything marked `// TODO` is a placeholder — fill it in when you have the info (tech stack per project, GitHub links, live URLs, journey milestones, etc). Placeholders also show inside the project detail modal on the site itself so you know exactly what's missing.

## Structure

```
src/
  app/            # layout, page, global styles/tokens
  components/
    sections/     # Hero, About, WhatIDo, Skills, Projects, Journey, AIFocus, Contact
    ui/           # Reveal (scroll-animation wrapper)
    Nav.tsx, Footer.tsx, SmoothScroll.tsx
  lib/
    site-data.ts  # editable content
    projects.ts   # editable project list
```

## Deploying

Push to GitHub and import into Vercel, or run `npm run build && npm run start`.
