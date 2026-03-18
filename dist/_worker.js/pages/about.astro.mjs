globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6c3p7-M.mjs';
import { $ as $$HomeLayout } from '../chunks/HomeLayout_BAspVmVF.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_BwPN5SeW.mjs';

const ABOUT_CONTENT = {
  title: "Rooted in Tradition",
  subtitle: "Our Story",
  description: "We started with a simple vision: to provide compassionate, reliable care for pets and peace of mind for their owners. Today, we continue that legacy at our Kawit and Imus branches, with every animal we treat.",
  storyParagraph: "Our journey began over a decade ago. What started as a small team of three has grown into a dedicated collective of experts, all sharing the same passion for veterinary excellence and community impact.",
  values: [
    {
      title: "Integrity",
      desc: "Doing the right thing for every pet and owner, even when no one is watching."
    },
    {
      title: "Quality",
      desc: "We don't just treat; we craft care experiences that last a lifetime."
    },
    {
      title: "Innovation",
      desc: "Looking forward with modern practice while respecting the foundations of veterinary care."
    }
  ]
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "About Us - Jamir Veterinary Clinic", "description": "Our story, values, and commitment to compassionate care for your pets.", "data-astro-cid-fwdcsva6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about-page" data-astro-cid-fwdcsva6> <header class="about-header" data-astro-cid-fwdcsva6> <div class="container" data-astro-cid-fwdcsva6> <h1 class="page-title" data-astro-cid-fwdcsva6>${ABOUT_CONTENT.title}</h1> <div class="accent-line" data-astro-cid-fwdcsva6></div> </div> </header> <section class="story-section" data-astro-cid-fwdcsva6> <div class="container story-grid" data-astro-cid-fwdcsva6> <div class="story-content" data-astro-cid-fwdcsva6> <h2 class="section-subtitle" data-astro-cid-fwdcsva6>${ABOUT_CONTENT.subtitle}</h2> <p class="story-text" data-astro-cid-fwdcsva6>${ABOUT_CONTENT.description}</p> <p class="story-text" data-astro-cid-fwdcsva6>${ABOUT_CONTENT.storyParagraph}</p> </div> <div class="story-image-wrapper" data-astro-cid-fwdcsva6> <div class="image-placeholder" data-astro-cid-fwdcsva6></div> </div> </div> </section> <section class="values-section" data-astro-cid-fwdcsva6> <div class="container" data-astro-cid-fwdcsva6> <h2 class="values-title" data-astro-cid-fwdcsva6>Our Core Values</h2> <div class="values-grid" data-astro-cid-fwdcsva6> ${ABOUT_CONTENT.values.map((value) => renderTemplate`<div class="value-card" data-astro-cid-fwdcsva6> <h3 class="value-name" data-astro-cid-fwdcsva6>${value.title}</h3> <p class="value-desc" data-astro-cid-fwdcsva6>${value.desc}</p> </div>`)} </div> </div> </section> </main> ` })} `;
}, "D:/jvc-web-ui/src/pages/about/index.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
