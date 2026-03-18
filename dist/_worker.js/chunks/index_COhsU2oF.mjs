globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_DIoIlRSf.mjs';
import { $ as $$HomeLayout } from './HomeLayout_PXZGCfgy.mjs';
import { $ as $$Hero, H as HERO_CONTENT } from './hero_XyAXZ0IO.mjs';
import { $ as $$WhyChoose } from './why-choose_CAZ3ObKI.mjs';
import { $ as $$OurServices } from './our-services_C9pjK-i1.mjs';
import { $ as $$Testimonials } from './testimonials_CV6LDu4J.mjs';
import { $ as $$PetGallery } from './pet-gallery_C_Dkdhr7.mjs';
import { $ as $$BookAppointment } from './book-appointment_DNLBdcyP.mjs';
import { $ as $$VisitUs } from './visit-us_C7VlcSRY.mjs';

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
