globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_D6c3p7-M.mjs';
/* empty css                               */

const GALLERY_CONTENT = {
  title: "Pet Gallery",
  description: "Meet some of our furry visitors! From grooming glow-ups to playful pet boarders, see the love and care we give to each animal.",
  icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7h-3.5l-1.5-2h-6L7.5 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    <circle cx="12" cy="13" r="3.2"/>
    <path d="M19.5 2.5l-.8 2.2-2.2.8 2.2.8.8 2.2.8-2.2 2.2-.8-2.2-.8z"/>
    <path d="M4.5 19.5l-.6 1.8-1.8.6 1.8.6.6 1.8.6-1.8 1.8-.6-1.8-.6z"/>
  </svg>`,
  images: [
    {
      src: "/images/pet-gallery-1.png",
      alt: "A fluffy white dog in a green sweater being cared for at the clinic"
    }
  ]
};

const $$PetGallery = createComponent(($$result, $$props, $$slots) => {
  const activeImage = GALLERY_CONTENT.images[0];
  return renderTemplate`${maybeRenderHead()}<section class="pet-gallery-section" aria-labelledby="pet-gallery-title" data-astro-cid-i67hpahp> <div class="container" data-astro-cid-i67hpahp> <div class="content-wrapper" data-astro-cid-i67hpahp> <!-- Left Column: Image & Carousel Dots --> <div class="image-column" data-astro-cid-i67hpahp> <div class="image-wrapper" data-astro-cid-i67hpahp> <img${addAttribute(activeImage.src, "src")}${addAttribute(activeImage.alt, "alt")} class="gallery-image" loading="lazy" width="550" height="413" data-astro-cid-i67hpahp> </div> <!-- Static Carousel Dots Mockup --> <div class="carousel-dots" data-astro-cid-i67hpahp> <span class="dot active" aria-current="true" data-astro-cid-i67hpahp></span> <span class="dot" data-astro-cid-i67hpahp></span> <span class="dot" data-astro-cid-i67hpahp></span> </div> </div> <!-- Right Column: Text Content --> <div class="text-column" data-astro-cid-i67hpahp> <div class="icon-wrapper" data-astro-cid-i67hpahp>${unescapeHTML(GALLERY_CONTENT.icon)}</div> <h2 id="pet-gallery-title" class="section-title" data-astro-cid-i67hpahp> ${GALLERY_CONTENT.title} </h2> <p class="section-description" data-astro-cid-i67hpahp>${GALLERY_CONTENT.description}</p> </div> </div> </div> </section> `;
}, "D:/jvc-web-ui/src/pages/home/sections/pet-gallery.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/pet-gallery.astro";
const $$url = "/home/sections/pet-gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PetGallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PetGallery as $, _page as _ };
