# GK Portfolio

The portfolio of Erothu Gopala Krishna. It follows the motionsites "3D Jack" design (`https://motionsites.ai/?prompt=3d-jack-portfolio-hero`), rebuilt with his own content.

**Stack:** React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion 12, Lucide React, and the Kanit font.

## Run
```
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/ — deploy to Vercel, Netlify or Railway static
```

## Edit content
All the content is in **`src/data.ts`**: profile, contact links, services, skills and projects.

- `featured: true` gives a project one of the large sticky stacking cards. Other projects appear in the "More projects" grid.
- Leave `live` or `repo` empty to hide that button.
- `image: "/screens/templeos.png"` adds a screenshot to the card. Put the file in `public/screens/`.
- Leave `email`, `phone` or `linkedin` empty to hide its button.

## Images
- `public/gk-hero.png`: the hero portrait. It works best as an illustration on a black background.
- `public/gk-photo.png`: the round photo in the Contact section.

## Sections
Hero (magnet portrait) → scroll marquee (projects and tech) → About (scroll-revealed text and CSS 3D objects) → Services and Skills → Projects (stacking cards) → Contact.

`_v1-threejs/` holds the earlier static Three.js version. Delete it once you no longer need it.
