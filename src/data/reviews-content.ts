import type { ReviewDto, ReviewsDto } from "../dtos/reviews.dto";
import { VISIT_US_CONTENT } from "./visit-us-data";

const facebookHref = VISIT_US_CONTENT.branches[0].facebookLink;
const googleHref = "https://share.google/6wtaPd4jZz852FC60";

/** Section copy + CTAs. Google CTA uses Kawit share link. */
export const REVIEWS_CONTENT = {
  title: "What Pet Parents Say",
  description:
    "Don't just take our word for it. Here's what pet parents are saying about their experience with Jamir Veterinary Clinic.",
  reviewsLabel: "reviews",
  recommendedLabel: "recommend",
  likesLabel: "followers",
  /** Static Facebook highlights from Kawit FB page (96% recommend · 204 reviews · 17K followers). */
  facebookRecommend: "96%",
  likesCount: "17k+",
  facebookReviewsCount: "204",
  cta: {
    text: "Follow Us On Facebook",
    href: facebookHref,
  },
  ctaSecondary: {
    text: "Read Our Google Reviews",
    href: googleHref,
  },
} as const;

/**
 * Curated Google fallback for Kawit listing (share.google/6wtaPd4jZz852FC60).
 * Stats match public Google rating (~4.9 / 241+).
 */
const FALLBACK_GOOGLE_REVIEWS: Array<Omit<ReviewDto, "id" | "profileUrl">> = [
  {
    source: "google",
    author: "Hazel Anne Domingo",
    rating: 5,
    text: "I highly recommend Jamir Veterinary Clinic, especially Doc Tan, for the exceptional care and compassion they showed to my dog, Chloe. From the very beginning of Chloe's treatment, Doc Tan was patient, kind, and very thorough in explaining her condition and the medications she needed. He genuinely cared about her recovery and made sure she received the best possible treatment. His professionalism, dedication, and love for animals gave me peace of mind during such a difficult time. Thank you, Doc Tan, for taking such great care of Chloe. We are truly grateful for your kindness and commitment. You are an amazing veterinarian, and I highly recommend Jamir Veterinary Clinic to every pet owner looking for trustworthy and compassionate care.",
    date: "2026-06-30T00:00:00.000Z",
    avatar: "",
    lang: "en",
  },
  {
    source: "google",
    author: "Maricar Barredo",
    rating: 5,
    text: "The service is really great. You don't even have to ask about the condition of your pet; they always keep you updated. The doctors are very knowledgeable and clear in explaining your pet's health. The staff is polite and truly knows how to care for animals. Both our dog and our cat underwent surgery in Jamir Vet for tumors, and both have fully recovered. I highly recommend this vet clinic!",
    date: "2026-04-30T00:00:00.000Z",
    avatar: "",
    lang: "en",
  },
  {
    source: "google",
    author: "Daryl Mercado",
    rating: 5,
    text: "5 stars is honestly not enough for this clinic. I'm incredibly grateful for the care and professionalism they showed when treating my dog. After receiving a very high quote from another clinic along with many suggested tests, I decided to seek a second opinion here. The vet carefully evaluated my dog, recommended only the necessary procedures, and successfully performed the surgery for about half the price I was previously quoted. What stood out the most was their honesty and genuine concern for my dog's well-being. They took the time to explain everything clearly and made sure my dog received the right treatment without unnecessary procedures. It's rare to find a vet who truly cares about both the animal and the owner. I'm so thankful I found this clinic. Highly, highly recommended.",
    date: "2026-03-30T00:00:00.000Z",
    avatar: "",
    lang: "en",
  },
  {
    source: "google",
    author: "Sharica Raissabelle Villaflores",
    rating: 5,
    text: "Trusted vet clinic for our dogs. Thank you for taking care of our Chuchay. Highly recommended vet clinic. Staffs and doctors are so accomodating and friendly. Doctor explained everything regarding our dog's case. Thank you, JVC!",
    date: "2025-08-30T00:00:00.000Z",
    avatar: "",
    lang: "en",
  },
];

/** Used when WORKER_URL is unset or snapshot is unavailable. */
export function buildFallbackReviews(): ReviewsDto {
  const now = new Date().toISOString();
  const reviews: ReviewDto[] = FALLBACK_GOOGLE_REVIEWS.map((r, i) => ({
    ...r,
    id: `google:fallback:${i}`,
    profileUrl: googleHref,
  }));

  return {
    generatedAt: now,
    sources: {
      google: {
        // Public Kawit Google listing (~4.9 / 241+)
        totalCount: 241,
        avg: 4.9,
        profileUrl: googleHref,
        fetchedAt: now,
      },
      facebook: {
        profileUrl: facebookHref,
        fetchedAt: now,
        error: "Using curated fallback",
      },
    },
    stats: {
      total: 241,
      average: 4.9,
    },
    reviews,
  };
}
