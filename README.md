# Standard Inference — web

The Standard Inference site: home, episode pages, and technical notes. Built with [Astro](https://astro.build) and [bun](https://bun.sh), deployed as static files to Cloudflare Pages.

## Develop

```sh
bun install
bun run dev       # http://localhost:4321
bun run build     # static output in dist/
bun run preview   # serve dist/
```

Use `bun run`, not `npm run`: the scripts call `bunx --bun astro`, which runs Astro under bun. `bun run dev -- --host` exposes the dev server on your network.

## Add content

**Technical note.** Add `src/content/notes/<slug>.mdx`. Frontmatter (see `src/content.config.ts`) sets the code, title, dates, level, sources, corrections and the "watch the video" panel. The body is Markdown, plus these components if you import them (see `softmax.mdx` for a full example):

- `<Equation n="01" title="…" tex={String.raw`…`} />` renders KaTeX at build time
- `<Cite n={1} />` and `<Cite n={1} fn />` for source and footnote links
- `<CodeListing client:load … />` for a code block with a copy button
- `<Caption speaker="…">` from `src/ds/index.js`

It appears at `/notes/<slug>/`, in the notes index, and on the home page.

**Episode.** Add `src/content/episodes/<slug>.json` (`n` sets the running order). Claims, corrections and the "next episode" text live there. It appears at `/episodes/<slug>/` and in the home page list.

**Series, nav, contact details.** Edit `src/data/site.ts`.

## Structure

```
src/
  ds/             SI-74 design system: CSS tokens + prebuilt React bundle
  styles/         web-scale.css (web type scale), site.css, prose.css
  layouts/        Base.astro (page shell, header, footer)
  components/     Astro components; react/ holds the interactive islands
  content/        notes (MDX) and episodes (JSON)
  pages/          routes
```

The design-system components (`Tag`, `Button`, `Panel`, …) come from the prebuilt bundle `src/ds/bundle.js`, loaded and re-exported by `src/ds/index.js`. Replace the bundle when the design system changes; don't edit it by hand.

## Deploy

Pushes to `main` build and deploy to Cloudflare Pages through `.github/workflows/deploy.yml`. Other branches and PRs get preview deployments.

One-time setup:

1. Create the project: `bunx wrangler pages project create standard-inference --production-branch main`
2. Create a Cloudflare API token with the **Cloudflare Pages: Edit** permission, and find your Account ID.
3. Add repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` (Settings → Secrets and variables → Actions).

## Gotchas

- **React is pinned to 19.2.0.** React 19.3.1's server build fails to load under bun 1.3.13 ("Expected CommonJS module to have a function wrapper"). Unpin once bun fixes it.
- **Node 22.14 is too old for this Astro**, which needs 22.23.4 or newer. Running under bun avoids it.
