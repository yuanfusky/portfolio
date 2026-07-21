# Jingyuan Ren — Portfolio

A static, content-driven portfolio built with Astro, Tailwind CSS, and Markdown. The project system is deliberately separated from the page layout: project ordering, featured state, status labels, links, and case-study content all live in individual Markdown files.

## Install and run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Astro will print a local address, usually `http://localhost:4321`.

To verify a production build:

```bash
npm run build
```

The static site is generated in `dist/`.

The build also arranges the generated files into `dist/client/` and adds a minimal Cloudflare-compatible static-assets entrypoint under `dist/server/`. It does not add runtime application logic; the website remains fully static.

## Project content model

Every project is stored as a Markdown or MDX file in `src/content/projects/`. The homepage and project index read these files automatically. Dynamic detail pages are generated from each project's `slug`.

The schema lives in `src/content.config.ts`. It validates these frontmatter fields:

- `title`, `shortTitle`, and `slug`
- `status`, `domain`, and `dataType`
- `tools` and `methods`
- `oneLineProblem`, `whatIBuilt`, `whatILearned`, and `nextExtension`
- `interactionIdea`
- `featured` and `priority`
- `links`

The Markdown below the frontmatter becomes the main case-study narrative.

## Add a new project

1. Duplicate a file in `src/content/projects/`.
2. Rename it with a short, readable filename.
3. Give it a unique `slug`.
4. Replace the frontmatter and Markdown body.
5. Set `featured: true` to show it on the homepage.
6. Set `priority` to control its position; lower numbers appear first.

The project detail route is created automatically at `/projects/[slug]/`.

## Edit, replace, or reorder projects

- Edit content: open the relevant Markdown file and change its frontmatter or body.
- Reorder: change `priority` values. You do not need to edit a page component.
- Remove from homepage: set `featured: false`. It will remain in the complete project index.
- Replace: remove the old file and add a new one using the same schema.
- Change status: update `status`, for example from `Course Project · Extendable Case Study` to `Research Prototype`.
- Add links: add items under `links`, for example:

```yaml
links:
  - label: GitHub
    url: https://github.com/username/repository
  - label: Report
    url: /reports/project-report.pdf
```

## Add images

Place static images in `public/images/`, then reference them with an absolute site path such as `/images/project-name/overview.webp`.

For images used inside a Markdown project body:

```md
![Evaluation results](/images/sciq-rag/evaluation-results.webp)
```

For a future card image field, add it to the collection schema in `src/content.config.ts`, then add the same field to the project frontmatter and render it in `ProjectCard.astro`.

## Replace contact placeholders

Placeholder URLs and the email address currently appear in `Navbar.astro`, `Footer.astro`, `index.astro`, and `about.astro`. Replace them with Jingyuan's GitHub, LinkedIn, and email. Add the real CV as `public/cv.pdf`.

## Deploy

This site is fully static and requires no environment variables, backend, or database.

### Cloudflare Pages

1. Import the repository in Cloudflare Pages.
2. Choose the Astro framework preset.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

### Vercel

1. Import the repository in Vercel.
2. Vercel should detect Astro automatically.
3. Confirm `npm run build` as the build command and `dist` as the output directory.

### Netlify

Use `npm run build` as the build command and `dist` as the publish directory.

## Main structure

```text
src/
  components/          Reusable UI components
  content/projects/    Editable project Markdown files
  layouts/             Shared page layouts
  pages/               Homepage, about, project index, detail routes
  styles/              Global Tailwind theme and project prose styles
public/                 CV, images, icons, and social preview assets
```
