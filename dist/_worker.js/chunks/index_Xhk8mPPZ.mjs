globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D6c3p7-M.mjs';
import { $ as $$HomeLayout } from './HomeLayout_BAspVmVF.mjs';
import { $ as $$Hero, H as HERO_CONTENT } from './hero_983zUZ_9.mjs';
import { $ as $$WhyChoose } from './why-choose_BJnOe0L2.mjs';
import { $ as $$OurServices } from './our-services_CjF53GO8.mjs';
import { $ as $$Testimonials } from './testimonials_CEFyZr_K.mjs';
import { $ as $$PetGallery } from './pet-gallery_Us7jQI2q.mjs';
import { $ as $$BookAppointment } from './book-appointment_C2dnihhr.mjs';
import { $ as $$VisitUs } from './visit-us_1WT9BBNn.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": HERO_CONTENT.title, "description": HERO_CONTENT.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="animate-fade-in font-sans"> ${renderComponent($$result2, "HeroSection", $$Hero, {})} ${renderComponent($$result2, "WhyChooseSection", $$WhyChoose, {})} ${renderComponent($$result2, "OurServicesSection", $$OurServices, {})} ${renderComponent($$result2, "TestimonialsSection", $$Testimonials, {})} ${renderComponent($$result2, "PetGallerySection", $$PetGallery, {})} ${renderComponent($$result2, "BookAppointmentSection", $$BookAppointment, {})} ${renderComponent($$result2, "VisitUsSection", $$VisitUs, {})} </div> ` })}`;
}, "D:/jvc-web-ui/src/pages/home/index.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/index.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
