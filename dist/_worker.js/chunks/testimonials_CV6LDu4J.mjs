globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute, e as renderScript } from './astro/server_DIoIlRSf.mjs';
/* empty css                                */

const TESTIMONIALS_CONTENT = {
  header: {
    title: "Happy Pets,\nHappier Owners",
    description: "Don't just take it from us — hear it from pet parents who trust us with their furbabies. We're proud to be a clinic where pets feel at ease and owners feel confident."
  },
  reviews: [
    {
      text: "Best veterinary clinic in Cavite. Kahit na maraming mas malalapit na vet samin, dito talaga namin dinadala pets namin kahit for vaccinations lang. Affordable and you can feel their passion for their job. Highly recommended.",
      author: "Cristina G"
    },
    {
      text: "Sobrang thankful ako sa Jamir vet clinic dahil mabilis lang napagaling ang furbaby namin. Bukod sa magagaling at mababait sila Doc Rj at Doc Rex ganun din ang ibang mga staff nila. 💯 Tagal sa good service nila. Highly recommended itong Jamir Vet Clinic.",
      author: "Shavina Candila"
    },
    {
      text: "Highly recommended vet clinic! ⭐⭐⭐⭐⭐ Doctors and staff are very accommodating and friendly, especially Doc Ali.. she made sure to check everything with my dearest cat. Very caring and professional and really took her time with explanations and options. Thank you Doc for taking care of my beloved Sunday.. he is doing well now. If meron lang higher than 5 star binigay ko na. 😊💯 Will definitely come back here again for future visits.",
      author: "Dithh Dith"
    },
    {
      text: "Our very trusted vet in Cavite! Very practical approach in vet care and realistic pricing for their services. I have nothing bad to say about this vet clinic. They operated on 2 of our furbabies and they are recovering well. Jino finished his eye enucleation due to trauma yesterday. Thank you, Jamir Vet!",
      author: "Andrea Pardilla"
    },
    {
      text: "Jamir Vet Clinic is one of the best vet clinics I've been to. The staff are very professional, kind, and genuinely care for animals. They treated my pet with patience and love, and explained the condition clearly so I could understand everything. The clinic is clean, organized, and the prices are affordable compared to other places.\n\nWhat really stood out was how they handled emergencies and follow-ups — they're responsive, easy to talk to, and make sure your pet gets the best care. Whether it's for checkups, vaccines, or treatment, I can say this clinic is trustworthy and reliable.\n\nThank you, Jamir Vet Clinic, for taking care of our fur babies! 🐾♥️",
      author: "Justine Lopez"
    }
  ]
};

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const reviews = TESTIMONIALS_CONTENT.reviews;
  const cyclicReviews = [reviews[reviews.length - 1], ...reviews, reviews[0]];
  return renderTemplate`${maybeRenderHead()}<section class="testimonials-section" data-astro-cid-jc65c2vi> <div class="container" data-astro-cid-jc65c2vi> <div class="main-layout" data-astro-cid-jc65c2vi> <div class="left-content" data-astro-cid-jc65c2vi> <div class="text-group" data-astro-cid-jc65c2vi> <h2 class="section-title" data-astro-cid-jc65c2vi>${TESTIMONIALS_CONTENT.header.title}</h2> <p class="section-description" data-astro-cid-jc65c2vi>${TESTIMONIALS_CONTENT.header.description}</p> </div> </div> <div class="right-carousel" data-astro-cid-jc65c2vi> <div class="glass-outer-box" data-astro-cid-jc65c2vi> <span class="quote-mark" aria-hidden="true" data-astro-cid-jc65c2vi>“</span> <div class="carousel-clip" role="region" aria-label="Testimonials carousel" data-astro-cid-jc65c2vi> <div class="testimonial-inner" id="track" style="transform: translateX(-100%);" data-astro-cid-jc65c2vi> ${cyclicReviews.map((review) => renderTemplate`<div class="testimonial-slide" data-astro-cid-jc65c2vi> <div class="testimonial-card" data-astro-cid-jc65c2vi> <p class="review-body" data-astro-cid-jc65c2vi>“${review.text}”</p> <div class="author-area" data-astro-cid-jc65c2vi> <span class="line" data-astro-cid-jc65c2vi></span> <p class="author-name" data-astro-cid-jc65c2vi>${review.author}</p> </div> </div> </div>`)} </div> </div> <div class="nav-bar" data-astro-cid-jc65c2vi> <button type="button" class="arrow prev" data-action="prev" aria-label="Previous" data-astro-cid-jc65c2vi>‹</button> <div class="dots" id="testimonial-dots" role="tablist" aria-label="Testimonials" data-astro-cid-jc65c2vi> ${reviews.map((_, i) => renderTemplate`<button type="button"${addAttribute(`dot ${i === 0 ? "active" : ""}`, "class")}${addAttribute(i, "data-index")} role="tab"${addAttribute(`Go to slide ${i + 1}`, "aria-label")}${addAttribute(i === 0, "aria-selected")} data-astro-cid-jc65c2vi></button>`)} </div> <button type="button" class="arrow next" data-action="next" aria-label="Next" data-astro-cid-jc65c2vi>›</button> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/jvc-web-ui/src/pages/home/sections/testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/jvc-web-ui/src/pages/home/sections/testimonials.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/testimonials.astro";
const $$url = "/home/sections/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Testimonials as $, _page as _ };
