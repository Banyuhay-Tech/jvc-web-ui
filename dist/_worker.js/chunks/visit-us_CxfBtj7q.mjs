globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_CUdWvnOA.mjs';
/* empty css                            */

const VISIT_US_CONTENT = {
  title: "Visit Us",
  icons: {
    phone: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
  },
  branches: [
    {
      name: "KAWIT BRANCH",
      address: "Covelandia Rd., Sea Oil Gas Station,\nBalsahan, Kawit, Philippines",
      mapImage: "/images/kawit-map.png",
      phone: "09171330774",
      hours: "Mon-Sun: 9am-12pm, 2-6pm",
      facebookText: "Message JVC Kawit on Facebook!",
      facebookLink: "https://www.facebook.com/CaviteVet"
    },
    {
      name: "IMUS BRANCH",
      address: "Samson Bldg., Bayanihan Homes, Anabu\n2D, Imus, Philippines, 4103",
      mapImage: "/images/imus-map.png",
      phone: "09271122473",
      hours: "Mon-Sun: 9am-12pm, 2-6pm",
      facebookText: "Message JVC Imus on Facebook!",
      facebookLink: "https://www.facebook.com/profile.php?id=61572736326394"
    }
  ]
};

const $$VisitUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="visit-us-section" aria-labelledby="visit-us-title" data-astro-cid-4bwjme3z> <!-- Decorative Background Paw Prints --> <div class="bg-paw paw-left" aria-hidden="true" data-astro-cid-4bwjme3z> <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4bwjme3z> <path d="M8.5 6.5C8.5 7.88071 7.38071 9 6 9C4.61929 9 3.5 7.88071 3.5 6.5C3.5 5.11929 4.61929 4 6 4C7.38071 4 8.5 5.11929 8.5 6.5Z" data-astro-cid-4bwjme3z></path> <path d="M15.5 3.5C15.5 4.88071 14.3807 6 13 6C11.6193 6 10.5 4.88071 10.5 3.5C10.5 2.11929 11.6193 1 13 1C14.3807 1 15.5 2.11929 15.5 3.5Z" data-astro-cid-4bwjme3z></path> <path d="M21 7.5C21 8.88071 19.8807 10 18.5 10C17.1193 10 16 8.88071 16 7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5Z" data-astro-cid-4bwjme3z></path> <path d="M12.5 23C16.6421 23 20 19.6421 20 15.5C20 12.5 17.5 10 14.5 10C13.5 10 12.5 10.5 12.5 10.5C12.5 10.5 11.5 10 10.5 10C7.5 10 5 12.5 5 15.5C5 19.6421 8.35786 23 12.5 23Z" data-astro-cid-4bwjme3z></path> </svg> </div> <div class="bg-paw paw-right" aria-hidden="true" data-astro-cid-4bwjme3z> <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4bwjme3z> <path d="M8.5 6.5C8.5 7.88071 7.38071 9 6 9C4.61929 9 3.5 7.88071 3.5 6.5C3.5 5.11929 4.61929 4 6 4C7.38071 4 8.5 5.11929 8.5 6.5Z" data-astro-cid-4bwjme3z></path> <path d="M15.5 3.5C15.5 4.88071 14.3807 6 13 6C11.6193 6 10.5 4.88071 10.5 3.5C10.5 2.11929 11.6193 1 13 1C14.3807 1 15.5 2.11929 15.5 3.5Z" data-astro-cid-4bwjme3z></path> <path d="M21 7.5C21 8.88071 19.8807 10 18.5 10C17.1193 10 16 8.88071 16 7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5Z" data-astro-cid-4bwjme3z></path> <path d="M12.5 23C16.6421 23 20 19.6421 20 15.5C20 12.5 17.5 10 14.5 10C13.5 10 12.5 10.5 12.5 10.5C12.5 10.5 11.5 10 10.5 10C7.5 10 5 12.5 5 15.5C5 19.6421 8.35786 23 12.5 23Z" data-astro-cid-4bwjme3z></path> </svg> </div> <div class="container" data-astro-cid-4bwjme3z> <h2 id="visit-us-title" class="section-title" data-astro-cid-4bwjme3z> ${VISIT_US_CONTENT.title} </h2> <div class="branches-grid" data-astro-cid-4bwjme3z> ${VISIT_US_CONTENT.branches.map((branch) => renderTemplate`<div class="branch-card" data-astro-cid-4bwjme3z> <!-- Branch Header --> <div class="branch-header" data-astro-cid-4bwjme3z> <h3 class="branch-name" data-astro-cid-4bwjme3z>${branch.name}</h3> <p class="branch-address" data-astro-cid-4bwjme3z>${branch.address}</p> </div> <!-- Map Image --> <div class="map-wrapper" data-astro-cid-4bwjme3z> <img${addAttribute(branch.mapImage, "src")}${addAttribute(`Map to ${branch.name}`, "alt")} class="map-image" loading="lazy" width="400" height="225" data-astro-cid-4bwjme3z> </div> <!-- Contact Details --> <div class="contact-details" data-astro-cid-4bwjme3z> <a${addAttribute(`tel:${branch.phone.replace(/\s/g, "")}`, "href")} class="contact-item contact-item-link" data-astro-cid-4bwjme3z> <span class="icon" data-astro-cid-4bwjme3z>${unescapeHTML(VISIT_US_CONTENT.icons.phone)}</span> <p data-astro-cid-4bwjme3z>${branch.phone}</p> </a> <div class="contact-item" data-astro-cid-4bwjme3z> <span class="icon" data-astro-cid-4bwjme3z>${unescapeHTML(VISIT_US_CONTENT.icons.clock)}</span> <p data-astro-cid-4bwjme3z>${branch.hours}</p> </div> <a${addAttribute(branch.facebookLink, "href")} target="_blank" rel="noopener noreferrer" class="facebook-link" data-astro-cid-4bwjme3z> ${branch.facebookText} </a> </div> </div>`)} </div> </div> </section> `;
}, "D:/jvc-web-ui/src/pages/home/sections/visit-us.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/visit-us.astro";
const $$url = "/home/sections/visit-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VisitUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$VisitUs as $, _page as _ };
