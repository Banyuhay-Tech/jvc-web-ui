export type ReviewDto = {
  id: string;
  source: "google" | "facebook";
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  profileUrl: string;
  lang: string;
};

export type ReviewsDto = {
  generatedAt: string;
  sources: {
    google: {
      totalCount: number;
      avg: number;
      profileUrl: string;
      fetchedAt: string;
    };
    facebook: {
      profileUrl: string;
      fetchedAt: string;
      error: string;
    };
  };
  stats: {
    total: number;
    average: number;
  };
  reviews: ReviewDto[];
};
