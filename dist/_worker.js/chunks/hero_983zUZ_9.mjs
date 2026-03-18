globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_D6c3p7-M.mjs';
/* empty css                        */

const HERO_CONTENT = {
  title: "Jamir Veterinary Clinic",
  subtitle: "Compassionate Care for Pets and Peace of Mind for Pet Owners",
  description: "Jamir Veterinary Clinic is your trusted partner in keeping your pets healthy, happy, and cared for. With two fully equipped branches in Kawit and Imus, we offer comprehensive veterinary services all delivered with kindness and professionalism."
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-kqoyo4w6> <div class="hero-overlay" aria-hidden="true" data-astro-cid-kqoyo4w6></div> <div class="hero-container" data-astro-cid-kqoyo4w6> <div class="content-wrapper" data-astro-cid-kqoyo4w6> <div class="text-column" data-astro-cid-kqoyo4w6> <h1 class="hero-title" data-astro-cid-kqoyo4w6>${HERO_CONTENT.title}</h1> <h2 class="hero-subtitle" data-astro-cid-kqoyo4w6>${HERO_CONTENT.subtitle}</h2> <p class="hero-description" data-astro-cid-kqoyo4w6>${HERO_CONTENT.description}</p> <div class="hero-actions" data-astro-cid-kqoyo4w6> <a href="#book-appointment" class="btn-primary" data-astro-cid-kqoyo4w6>Get Started</a> </div> </div> </div> </div> </section> `;
}, "D:/jvc-web-ui/src/pages/home/sections/hero.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/hero.astro";
const $$url = "/home/sections/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, HERO_CONTENT as H, _page as _ };
