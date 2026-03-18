globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DIoIlRSf.mjs';
import { $ as $$HomeLayout } from '../chunks/HomeLayout_PXZGCfgy.mjs';
import { V as VISIT_US_CONTENT } from '../chunks/visit-us-data_tZ-zGjgC.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_jEiFjMJ7.mjs';

const $$Astro = createAstro("https://jvc.pages.dev");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const contactStatus = Astro2.url.searchParams.get("contact");
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "Contact - Jamir Veterinary Clinic", "description": "Have a question or want to book a visit? We'd love to hear from you.", "data-astro-cid-ahc3q4vw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="contact-page" data-astro-cid-ahc3q4vw> <div class="bg-paw paw-left" aria-hidden="true" data-astro-cid-ahc3q4vw> <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ahc3q4vw> <path d="M8.5 6.5C8.5 7.88071 7.38071 9 6 9C4.61929 9 3.5 7.88071 3.5 6.5C3.5 5.11929 4.61929 4 6 4C7.38071 4 8.5 5.11929 8.5 6.5Z" data-astro-cid-ahc3q4vw></path> <path d="M15.5 3.5C15.5 4.88071 14.3807 6 13 6C11.6193 6 10.5 4.88071 10.5 3.5C10.5 2.11929 11.6193 1 13 1C14.3807 1 15.5 2.11929 15.5 3.5Z" data-astro-cid-ahc3q4vw></path> <path d="M21 7.5C21 8.88071 19.8807 10 18.5 10C17.1193 10 16 8.88071 16 7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5Z" data-astro-cid-ahc3q4vw></path> <path d="M12.5 23C16.6421 23 20 19.6421 20 15.5C20 12.5 17.5 10 14.5 10C13.5 10 12.5 10.5 12.5 10.5C12.5 10.5 11.5 10 10.5 10C7.5 10 5 12.5 5 15.5C5 19.6421 8.35786 23 12.5 23Z" data-astro-cid-ahc3q4vw></path> </svg> </div> <div class="container" data-astro-cid-ahc3q4vw> <header class="contact-header" data-astro-cid-ahc3q4vw> <h1 class="section-title" data-astro-cid-ahc3q4vw>Get in Touch</h1> <p class="section-intro" data-astro-cid-ahc3q4vw>Have a question or want to book a visit? We'd love to hear from you and your furry friends!</p> </header> <div class="contact-grid" data-astro-cid-ahc3q4vw> <section class="form-container" data-astro-cid-ahc3q4vw> <h2 id="contact-form" class="sr-only" data-astro-cid-ahc3q4vw>Contact form</h2> ${contactStatus === "success" && renderTemplate`<div class="form-alert form-alert-success" role="status" aria-live="polite" data-astro-cid-ahc3q4vw>
Thanks! Your message has been sent. We’ll get back to you soon.
</div>`} ${contactStatus === "error" && renderTemplate`<div class="form-alert form-alert-error" role="alert" data-astro-cid-ahc3q4vw>
Something went wrong. Please try again.
</div>`} <form class="contact-form" action="/api/contact" method="POST" data-astro-cid-ahc3q4vw> <input class="hp-field" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" data-astro-cid-ahc3q4vw> <div class="input-group" data-astro-cid-ahc3q4vw> <label for="name" data-astro-cid-ahc3q4vw>Your Name</label> <input type="text" id="name" name="name" placeholder="John Doe" required data-astro-cid-ahc3q4vw> </div> <div class="input-group" data-astro-cid-ahc3q4vw> <label for="email" data-astro-cid-ahc3q4vw>Email Address</label> <input type="email" id="email" name="email" placeholder="hello@example.com" required data-astro-cid-ahc3q4vw> </div> <div class="input-group" data-astro-cid-ahc3q4vw> <label for="subject" data-astro-cid-ahc3q4vw>Subject</label> <select id="subject" name="subject" data-astro-cid-ahc3q4vw> <option value="general" data-astro-cid-ahc3q4vw>General Inquiry</option> <option value="appointment" data-astro-cid-ahc3q4vw>Booking an Appointment</option> <option value="feedback" data-astro-cid-ahc3q4vw>Feedback</option> </select> </div> <div class="input-group" data-astro-cid-ahc3q4vw> <label for="message" data-astro-cid-ahc3q4vw>Message</label> <textarea id="message" name="message" rows="5" placeholder="Tell us how we can help..." required data-astro-cid-ahc3q4vw></textarea> </div> <button type="submit" class="submit-btn" data-astro-cid-ahc3q4vw>Send Message</button> </form> </section> <aside class="info-container" data-astro-cid-ahc3q4vw> <h2 class="info-heading" data-astro-cid-ahc3q4vw>Our Locations</h2> <div class="branches-stack" data-astro-cid-ahc3q4vw> ${VISIT_US_CONTENT.branches.map((branch) => renderTemplate`<div class="mini-branch-card" data-astro-cid-ahc3q4vw> <h3 class="branch-name-small" data-astro-cid-ahc3q4vw>${branch.name}</h3> <p class="branch-detail" data-astro-cid-ahc3q4vw>${branch.address}</p> <p class="branch-detail" data-astro-cid-ahc3q4vw><strong data-astro-cid-ahc3q4vw>Phone:</strong> ${branch.phone}</p> <p class="branch-detail" data-astro-cid-ahc3q4vw><strong data-astro-cid-ahc3q4vw>Hours:</strong> ${branch.hours}</p> </div>`)} </div> </aside> </div> </div> </main> ` })} `;
}, "D:/jvc-web-ui/src/pages/contact/index.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
