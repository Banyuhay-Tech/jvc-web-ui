import type { PlaceDetails, PlacesReview } from "./places";
import type { ReviewDto, ReviewsDto } from "./types";

function slug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 40);
}

function mapReview(review: PlacesReview, index: number): ReviewDto | null {
  const text = review.text?.text?.trim() ?? "";
  if (!text) return null;

  const author = review.authorAttribution?.displayName?.trim() || "Google user";
  const date = review.publishTime || new Date().toISOString();
  const epoch = review.publishTime
    ? Math.floor(new Date(review.publishTime).getTime() / 1000)
    : index;

  return {
    id: `google:${slug(author)}:${epoch}`,
    source: "google",
    author,
    rating: review.rating ?? 5,
    text,
    date,
    avatar: review.authorAttribution?.photoUri ?? "",
    profileUrl: review.authorAttribution?.uri ?? "",
    lang: review.text?.languageCode ?? "en",
  };
}

export function normalizePlaces(
  places: PlaceDetails[],
  profileUrl: string,
  facebookProfileUrl: string,
): ReviewsDto {
  const now = new Date().toISOString();
  const reviews: ReviewDto[] = [];
  let ratingSum = 0;
  let ratingWeight = 0;
  let totalCount = 0;

  for (const place of places) {
    const count = place.userRatingCount ?? 0;
    const avg = place.rating ?? 0;
    if (count > 0 && avg > 0) {
      ratingSum += avg * count;
      ratingWeight += count;
      totalCount += count;
    }
    for (const [i, r] of (place.reviews ?? []).entries()) {
      const mapped = mapReview(r, i);
      if (mapped) reviews.push(mapped);
    }
  }

  const googleAvg =
    ratingWeight > 0
      ? Math.round((ratingSum / ratingWeight) * 10) / 10
      : places[0]?.rating ?? 0;

  const mapsUrl =
    places.find((p) => p.googleMapsUri)?.googleMapsUri || profileUrl;

  // Dedupe by id, keep highest-rated / first
  const seen = new Set<string>();
  const unique = reviews.filter((r) => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });

  return {
    generatedAt: now,
    sources: {
      google: {
        totalCount,
        avg: googleAvg,
        profileUrl: mapsUrl,
        fetchedAt: now,
      },
      facebook: {
        profileUrl: facebookProfileUrl,
        fetchedAt: now,
        error: "Facebook reviews not fetched in v1",
      },
    },
    stats: {
      total: totalCount,
      average: googleAvg,
    },
    reviews: unique,
  };
}
