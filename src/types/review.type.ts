export type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
  avatar: string;
  date: string;
  url: string;
  source: "facebook" | "google";
};

export type HighlightRating = {
  value: string;
  points?: number;
  label?: string;
  type: "stars" | "text";
  source?: "facebook" | "google";
};
