# Shreyas Ghare: Portfolio

Personal portfolio site, built with [Astro](https://astro.build) and deployed on Netlify.
Every push to `main` publishes automatically.

## Editing content

All the words on the site live in four files. You rarely need to touch anything else.

| File | What's in it |
|---|---|
| `src/data/site.ts` | Name, contact links, About text, education, skills, languages |
| `src/data/experience.ts` | Research and leadership roles, service, interests |
| `src/data/projects.ts` | Every project. Each one gets its own page automatically. |
| `src/data/awards.ts` | Awards and honors. `featured: true` puts one in the highlight boxes. |

**Add a project:** copy an existing block in `projects.ts`, give it a new `slug`, edit the text.
Add `featured: true` to show it on the home page. For photos, drop them in `public/projects/` and list them under `images`.

**Swap the résumé:** replace `public/Shreyas_Ghare_Resume.pdf` (keep the same file name).

**Change colors or fonts:** edit the variables at the top of `src/styles/global.css`.

## Quick edits without installing anything

On the GitHub repo page, press the `.` key. A browser editor opens where you can change a file and commit.

## Running it locally

Needs Node.js 22 or newer.

```bash
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
```

## Structure

```
public/           static files (headshot, résumé, favicon)
src/data/         all site content
src/components/   header, footer, icons, project card
src/layouts/      shared page shell (fonts, meta tags)
src/pages/        home, projects list, project detail pages, 404
src/styles/       design tokens and shared styles
```
