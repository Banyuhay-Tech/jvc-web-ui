globalThis.process ??= {}; globalThis.process.env ??= {};
import { a7 as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, a8 as renderSlot, m as maybeRenderHead, b as addAttribute, d as renderScript, a9 as renderHead } from './astro/server_CUdWvnOA.mjs';
/* empty css                         */
import { $ as $$Hero, H as HERO_CONTENT } from './hero_B2bDSAa_.mjs';
import { $ as $$WhyChoose } from './why-choose_DuKOPszx.mjs';
import { $ as $$OurServices } from './our-services_BwoVulgY.mjs';
import { $ as $$Testimonials } from './testimonials_ByZvSXE2.mjs';
import { $ as $$PetGallery } from './pet-gallery_CeAoBX_p.mjs';
import { $ as $$BookAppointment } from './book-appointment_CaOvtXcq.mjs';
import { $ as $$VisitUs } from './visit-us_CxfBtj7q.mjs';

const COLORS = {
  green: "#0a441e",
  yellow: "#bb9313"};

const LOGO_URL = "/images/logo.png";
const NAV_LINKS = [
  { name: "Home", id: "home", href: "/" },
  { name: "About", id: "about", href: "/about/" },
  { name: "Contact", id: "contact", href: "/contact/" }
];
const QUICK_LINKS = [
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" }
];

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  COLORS,
  LOGO_URL,
  NAV_LINKS,
  QUICK_LINKS
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://jvc.pages.dev");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { variant = "primary", className = "", class: classProp = "", href, style: styleProp } = Astro2.props;
  const combinedClass = className || classProp;
  const { COLORS } = await Promise.resolve().then(() => index);
  const variantStyles = {
    primary: { backgroundColor: COLORS.green, color: "white" },
    secondary: { backgroundColor: COLORS.yellow, color: COLORS.green },
    outline: { border: `2px solid ${COLORS.green}`, color: COLORS.green },
    white: { backgroundColor: "white", color: COLORS.green }
  };
  const mergedStyle = { ...variantStyles[variant], ...styleProp };
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all active:scale-95 shadow-md";
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `${baseStyle} ${variant === "white" ? "hover:bg-gray-100" : "hover:brightness-110"} ${combinedClass}`, "style": mergedStyle, "href": href }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/jvc-web-ui/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro("https://jvc.pages.dev");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-white shadow-md font-sans animate-slide-down"> <div class="container mx-auto px-4 lg:px-8"> <div class="flex justify-between items-center h-20"> <a href="/" class="flex items-center gap-3 cursor-pointer"> <img${addAttribute(LOGO_URL, "src")} alt="Jamir Veterinary Clinic" class="h-12 w-auto"> <span class="hidden sm:block text-lg font-bold whitespace-nowrap"${addAttribute({ color: COLORS.green }, "style")}>Jamir Veterinary Clinic</span> </a> <div class="hidden lg:flex items-center gap-1"> ${NAV_LINKS.map((link) => {
    const isActive = currentPath === link.href || link.href !== "/" && currentPath.startsWith(link.href);
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${isActive ? "text-white" : "text-gray-600 hover:text-jvc-primary"}`, "class")}${addAttribute(isActive ? { backgroundColor: COLORS.green } : {}, "style")}> ${link.name} </a>`;
  })} <div class="ml-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "href": "/contact/", "className": "shadow-md", "style": { backgroundColor: COLORS.green, color: "white" } }, { "default": ($$result2) => renderTemplate`Book Now` })} </div> </div> <button id="mobile-menu-button" class="lg:hidden p-2 text-gray-600" aria-label="Toggle menu" type="button"> <svg id="menu-icon" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div id="mobile-menu" class="lg:hidden bg-white border-t border-gray-100 hidden w-full shadow-lg"> <div class="px-4 py-4 space-y-1"> ${NAV_LINKS.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`block px-4 py-3 text-base font-medium rounded-lg ${currentPath === link.href ? "text-white" : "text-gray-700 hover:bg-gray-100"}`, "class")}${addAttribute(currentPath === link.href ? { backgroundColor: COLORS.green } : {}, "style")}> ${link.name} </a>`)} <div class="pt-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "href": "/contact/", "className": "w-full", "style": { backgroundColor: COLORS.green, color: "white" } }, { "default": ($$result2) => renderTemplate`Book Now` })} </div> </div> </div> </nav> ${renderScript($$result, "D:/jvc-web-ui/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/jvc-web-ui/src/components/layout/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer-section text-white pt-12 pb-8"${addAttribute({ backgroundColor: COLORS.green, fontFamily: "'Montserrat', sans-serif" }, "style")} data-astro-cid-35ed7um5> <div class="container mx-auto px-4 lg:px-8" data-astro-cid-35ed7um5> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10" data-astro-cid-35ed7um5> <div data-astro-cid-35ed7um5> <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-white" data-astro-cid-35ed7um5> <img${addAttribute(LOGO_URL, "src")} alt="Jamir Veterinary Clinic" class="h-10 w-auto" data-astro-cid-35ed7um5>
Jamir Veterinary Clinic
</h3> <p class="text-sm leading-relaxed"${addAttribute({ color: "rgba(255,255,255,0.9)" }, "style")} data-astro-cid-35ed7um5>
Compassionate care for pets and peace of mind for pet owners. Two branches in Kawit and Imus.
</p> </div> <div data-astro-cid-35ed7um5> <h4 class="text-sm font-bold mb-4 uppercase tracking-wide"${addAttribute({ color: COLORS.yellow }, "style")} data-astro-cid-35ed7um5>Quick Links</h4> <ul class="space-y-2"${addAttribute({ color: "rgba(255,255,255,0.9)" }, "style")} data-astro-cid-35ed7um5> ${QUICK_LINKS.map((item) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(item.href, "href")} class="hover:text-white transition-colors" data-astro-cid-35ed7um5>${item.name}</a> </li>`)} </ul> </div> <div data-astro-cid-35ed7um5> <h4 class="text-sm font-bold mb-4 uppercase tracking-wide"${addAttribute({ color: COLORS.yellow }, "style")} data-astro-cid-35ed7um5>Contact</h4> <p class="text-sm"${addAttribute({ color: "rgba(255,255,255,0.9)" }, "style")} data-astro-cid-35ed7um5>Visit our Kawit or Imus branch for appointments and inquiries.</p> </div> </div> <div class="pt-6 text-center text-sm"${addAttribute({ borderColor: "rgba(255,255,255,0.3)", borderTopWidth: "1px", color: "rgba(255,255,255,0.8)" }, "style")} data-astro-cid-35ed7um5>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Jamir Veterinary Clinic. All rights reserved.
</div> </div> </footer> `;
}, "D:/jvc-web-ui/src/components/layout/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://jvc.pages.dev");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/images/logo.png" } = Astro2.props;
  const ogImage = image.startsWith("http") ? image : new URL(image, Astro2.site).href;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}>`;
}, "D:/jvc-web-ui/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://jvc.pages.dev");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Jamir Veterinary Clinic - Compassionate Care for Pets" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="min-h-screen bg-gray-50 text-gray-900 font-sans"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/jvc-web-ui/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://jvc.pages.dev");
const $$HomeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { title = "Home - Jamir Veterinary Clinic", description = "Compassionate Care for Pets and Peace of Mind for Pet Owners" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/jvc-web-ui/src/layouts/HomeLayout.astro", void 0);

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
