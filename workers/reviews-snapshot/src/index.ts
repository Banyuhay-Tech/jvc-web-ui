import { fetchPlaceDetails } from "./places";
import { normalizePlaces } from "./normalize";
import { SNAPSHOT_KEY, type Env, type ReviewsDto } from "./types";

const CACHE_HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=3600",
};

async function buildSnapshot(env: Env): Promise<ReviewsDto> {
  const apiKey = env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_PLACES_API_KEY is not set");
  }

  const placeIds = (env.GOOGLE_PLACE_IDS || "")
    .split(",")
    .map((id) => id.trim())
    .filter((id) => id && !id.startsWith("PLACEHOLDER"));

  if (placeIds.length === 0) {
    throw new Error(
      "No real GOOGLE_PLACE_IDS configured (placeholders only)",
    );
  }

  const places = await Promise.all(
    placeIds.map((id) => fetchPlaceDetails(id, apiKey)),
  );

  return normalizePlaces(
    places,
    env.GOOGLE_PROFILE_URL || "https://share.google/6wtaPd4jZz852FC60",
    "",
  );
}

/** Write path — cron only. Keeps last good snapshot on failure. */
async function refreshSnapshot(env: Env): Promise<void> {
  try {
    const snapshot = await buildSnapshot(env);
    await env.REVIEWS_KV.put(SNAPSHOT_KEY, JSON.stringify(snapshot));
    console.log(
      `Snapshot saved: ${snapshot.reviews.length} reviews, avg ${snapshot.stats.average}`,
    );
  } catch (err) {
    console.error("Snapshot refresh failed; keeping previous:", err);
  }
}

/** Read path — never calls Places. */
async function serveSnapshot(env: Env): Promise<Response> {
  const raw = await env.REVIEWS_KV.get(SNAPSHOT_KEY);
  if (!raw) {
    return new Response(
      JSON.stringify({ error: "Snapshot not ready" }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(raw, { status: 200, headers: CACHE_HEADERS });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "GET" && (path === "/api/reviews" || path === "/reviews")) {
      return serveSnapshot(env);
    }

    if (request.method === "GET" && (path === "/" || path === "/api")) {
      return new Response(
        JSON.stringify({
          service: "jvc-reviews-snapshot",
          endpoints: ["GET /api/reviews"],
          note: "Snapshot-only; Places runs on cron only",
        }),
        { headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response("Not Found", { status: 404 });
  },

  async scheduled(
    _controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<void> {
    ctx.waitUntil(refreshSnapshot(env));
  },
};
