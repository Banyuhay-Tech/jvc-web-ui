/** Places API (New) — called only from cron. */

type PlacesReview = {
  rating?: number;
  publishTime?: string;
  text?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

const FIELD_MASK = [
  "rating",
  "userRatingCount",
  "reviews",
  "googleMapsUri",
].join(",");

export async function fetchPlaceDetails(
  placeId: string,
  apiKey: string,
): Promise<PlaceDetails> {
  const id = placeId.startsWith("places/") ? placeId.slice(7) : placeId;
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`;

  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places ${res.status} for ${id}: ${body.slice(0, 200)}`);
  }

  return (await res.json()) as PlaceDetails;
}

export type { PlaceDetails, PlacesReview };
