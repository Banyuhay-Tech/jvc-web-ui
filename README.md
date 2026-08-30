# jvc-web-ui

Astro + Tailwind site template, ready for Cloudflare Pages.

## Setup

```bash
npm install
```

**If `npm install` fails:**

1. **Invalid version / ETARGET** – Ensure you have Node 18+ (`node -v`). The project uses Astro 5 and Tailwind 3.
2. **ERESOLVE / peer dependency conflicts** – The repo includes an `.npmrc` with `legacy-peer-deps=true` to relax peer dependency resolution. If you removed it, add it back or run:
   ```bash
   npm install --legacy-peer-deps
   ```
3. **ENOTEMPTY / directory not empty** – Leftover or locked `node_modules` (common on Windows). Remove it and reinstall:
   ```bash
   npm run clean
   npm install
   ```
   Or manually delete the `node_modules` folder (e.g. in File Explorer), then run `npm install` again. Close any terminal or editor using the project first.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18 or 20 (set in Cloudflare Pages dashboard or add a `.nvmrc` with `18` or `20`)

Connect your Git repo in the Cloudflare Pages dashboard, or use the optional `wrangler.toml` and deploy via Wrangler.

## Supabase (appointments)

This project expects these environment variables (do **not** commit them):

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side only)
- `WORKER_URL` (optional) — reviews snapshot API base ending in `/api/`. Empty uses curated fallback. Example: `https://jvc-reviews-snapshot.<account>.workers.dev/api/`

For local development, create a `.env` file in the project root (see `.env.example`). For Cloudflare Pages, add them in your project’s environment variables / secrets.

## Google reviews (snapshot Worker)

The homepage reviews section fetches `{WORKER_URL}reviews`. That endpoint **only reads a KV snapshot**. Google Places runs on a **daily cron** in `workers/reviews-snapshot` — not on page load. Setup steps: `workers/reviews-snapshot/README.md`. Replace `g.page/r/PLACEHOLDER/` in `src/data/reviews-content.ts` and Place IDs in the Worker vars when you have them.
