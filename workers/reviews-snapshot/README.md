# JVC reviews snapshot Worker

Snapshot-only API (EPMS pattern):

- **Cron** (`0 6 * * *` UTC): Google Places → normalize → KV `snapshot`
- **`GET /api/reviews`**: reads KV only — never calls Places

## Setup

```bash
cd workers/reviews-snapshot
npm install
npx wrangler kv namespace create REVIEWS_KV
# paste id into wrangler.toml
npx wrangler secret put GOOGLE_PLACES_API_KEY
```

Set real Place IDs in `wrangler.toml` `[vars]` `GOOGLE_PLACE_IDS` (comma-separated).

Deploy:

```bash
npm run deploy
```

Set JVC `WORKER_URL` to `https://jvc-reviews-snapshot.<account>.workers.dev/api/`

## Cost

Places is billed only on daily cron. Homepage traffic only hits cached KV JSON.
