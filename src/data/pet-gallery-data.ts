export const GALLERY_CONTENT = {
  title: "Pet Gallery",
  description:
    "Meet some of our furry visitors! From grooming glow-ups to playful pet boarders, see the love and care we give to each animal.",
  icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7h-3.5l-1.5-2h-6L7.5 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    <circle cx="12" cy="13" r="3.2"/>
    <path d="M19.5 2.5l-.8 2.2-2.2.8 2.2.8.8 2.2.8-2.2 2.2-.8-2.2-.8z"/>
    <path d="M4.5 19.5l-.6 1.8-1.8.6 1.8.6.6 1.8.6-1.8 1.8-.6-1.8-.6z"/>
  </svg>`,
  images: [
    {
      src: "/images/fluffy-white-dog.jpg",
      alt: "A fluffy white dog being groomed",
    },
  ],
} as const;
