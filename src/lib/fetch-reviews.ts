import type { ReviewsDto } from "../dtos/reviews.dto";
import { buildFallbackReviews } from "../data/reviews-content";

const FETCH_TIMEOUT_MS = 4000;

/**
 * Loads the reviews snapshot from the Worker API.
 * Never calls Google Places — Worker GET is KV read only.
 */
export async function fetchReviews(
  workerUrl: string | undefined,
): Promise<ReviewsDto> {
  const base = workerUrl?.trim();
  if (!base) {
    return buildFallbackReviews();
  }

  const url = `${base.replace(/\/?$/, "/")}reviews`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);

    if (!res.ok) {
      console.warn(`Reviews snapshot HTTP ${res.status}; using fallback`);
      return buildFallbackReviews();
    }

    return (await res.json()) as ReviewsDto;
  } catch (err) {
    console.warn("Reviews snapshot fetch failed; using fallback", err);
    return buildFallbackReviews();
  }
}
