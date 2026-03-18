globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_D6c3p7-M.mjs';
import { j as jsxRuntimeExports } from './jsx-runtime_DtF_RNUE.mjs';
import { c as createLucideIcon, S as Stethoscope } from './stethoscope_Dd6Rrjnf.mjs';
/* empty css                              */

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Heart = createLucideIcon("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);

const WHY_CHOOSE_CONTENT = {
  title: "Why Choose Jamir Veterinary Clinic?",
  bgImage: "/images/why-choose.png",
  footerText: "Your pet's health and happiness are our priority.",
  features: [
    { text: "Family-friendly and pet-loving environment", iconName: "heart" },
    { text: "Experienced, gentle, and approachable veterinary team", iconName: "stethoscope" },
    { text: "Complete medical and wellness services under one roof", iconName: "sparkles" },
    { text: "Clean and comfortable clinics", iconName: "building" }
  ]
};

const iconMap = {
  heart: Heart,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  building: Building2
};
function WhyChooseIcon({ name, className, size = 50 }) {
  const Icon = iconMap[name] ?? Heart;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className, size, strokeWidth: 2, "aria-hidden": true });
}

const $$WhyChoose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="why-choose" class="why-choose-section"${addAttribute(`background-image: linear-gradient(rgba(10, 68, 30, 0.4), rgba(10, 68, 30, 0.4)), url(${WHY_CHOOSE_CONTENT.bgImage});`, "style")} aria-labelledby="why-choose-title" data-astro-cid-brys7kqb> <div class="container" data-astro-cid-brys7kqb> <div class="header-group" data-astro-cid-brys7kqb> <span class="subtitle" data-astro-cid-brys7kqb>Quality You Can Trust</span> <h2 id="why-choose-title" class="section-title" data-astro-cid-brys7kqb>${WHY_CHOOSE_CONTENT.title}</h2> <div class="title-accent" data-astro-cid-brys7kqb></div> </div> <!-- Features Grid --> <div class="features-grid" data-astro-cid-brys7kqb> ${WHY_CHOOSE_CONTENT.features.map((feature) => renderTemplate`<div class="feature-item" data-astro-cid-brys7kqb> <div class="glass-overlay" aria-hidden="true" data-astro-cid-brys7kqb></div> <div class="card-inner" data-astro-cid-brys7kqb> <div class="icon-wrapper" data-astro-cid-brys7kqb> ${renderComponent($$result, "WhyChooseIcon", WhyChooseIcon, { "name": feature.iconName, "size": 56, "data-astro-cid-brys7kqb": true })} </div> <p class="feature-text" data-astro-cid-brys7kqb>${feature.text}</p> </div> </div>`)} </div> <!-- Footer Text --> <h3 class="footer-text" data-astro-cid-brys7kqb>${WHY_CHOOSE_CONTENT.footerText}</h3> </div> </section> `;
}, "D:/jvc-web-ui/src/pages/home/sections/why-choose.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/why-choose.astro";
const $$url = "/home/sections/why-choose";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhyChoose,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$WhyChoose as $, _page as _ };
