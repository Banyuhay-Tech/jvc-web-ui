globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute } from './astro/server_DIoIlRSf.mjs';
/* empty css                                    */

const BOOKING_CONTENT = {
  title: "Book an Appointment",
  subtitle: "Fill out the form below and we'll call you within 24 hours to confirm your appointment.",
  form: {
    nameLabel: "Name*",
    petLabel: "Pet's Name & Type*",
    serviceLabel: "Service Needed*",
    branchLabel: "Preferred Branch*",
    branchOptions: [
      { id: "branch-kawit", value: "Kawit", label: "Kawit" },
      { id: "branch-imus", value: "Imus", label: "Imus" }
    ],
    datetimeLabel: "Date & Time*"
  }
};

const $$Astro = createAstro("https://jvc.pages.dev");
const $$BookAppointment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookAppointment;
  const bookingStatus = Astro2.url.searchParams.get("booking");
  return renderTemplate`${maybeRenderHead()}<section id="book-appointment" class="booking-section" aria-labelledby="booking-title" data-astro-cid-s5xp7mlo> <div class="container" data-astro-cid-s5xp7mlo> <div class="header-content" data-astro-cid-s5xp7mlo> <h2 id="booking-title" class="section-title" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.title}</h2> <p class="section-subtitle" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.subtitle}</p> </div> ${bookingStatus === "success" && renderTemplate`<div class="form-alert form-alert-success" role="status" aria-live="polite" data-astro-cid-s5xp7mlo>
Thanks! We received your request. We’ll call you within 24 hours to confirm.
</div>`} ${bookingStatus === "error" && renderTemplate`<div class="form-alert form-alert-error" role="alert" data-astro-cid-s5xp7mlo>
Something went wrong. Please check the form and try again.
</div>`} <form class="booking-form" action="/api/appointments" method="POST" data-astro-cid-s5xp7mlo> <input class="hp-field" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" data-astro-cid-s5xp7mlo> <div class="form-row two-col" data-astro-cid-s5xp7mlo> <div class="form-group" data-astro-cid-s5xp7mlo> <label for="name" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.form.nameLabel}</label> <input type="text" id="name" name="name" required data-astro-cid-s5xp7mlo> </div> <div class="form-group" data-astro-cid-s5xp7mlo> <label for="pet" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.form.petLabel}</label> <input type="text" id="pet" name="pet" required data-astro-cid-s5xp7mlo> </div> </div> <div class="form-row two-col" data-astro-cid-s5xp7mlo> <div class="form-group" data-astro-cid-s5xp7mlo> <label for="phone" data-astro-cid-s5xp7mlo>Contact number*</label> <input type="tel" id="phone" name="phone" required data-astro-cid-s5xp7mlo> </div> <div class="form-group" data-astro-cid-s5xp7mlo> <label for="email" data-astro-cid-s5xp7mlo>Email</label> <input type="email" id="email" name="email" data-astro-cid-s5xp7mlo> </div> </div> <div class="form-group" data-astro-cid-s5xp7mlo> <label for="service" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.form.serviceLabel}</label> <input type="text" id="service" name="service" required data-astro-cid-s5xp7mlo> </div> <div class="form-group" data-astro-cid-s5xp7mlo> <label class="branch-main-label" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.form.branchLabel}</label> <div class="checkbox-group" data-astro-cid-s5xp7mlo> ${BOOKING_CONTENT.form.branchOptions.map((option) => renderTemplate`<div class="checkbox-item" data-astro-cid-s5xp7mlo> <input type="radio"${addAttribute(option.id, "id")} name="branch"${addAttribute(option.value, "value")} required data-astro-cid-s5xp7mlo> <label${addAttribute(option.id, "for")} data-astro-cid-s5xp7mlo>${option.label}</label> </div>`)} </div> </div> <div class="form-group half-width" data-astro-cid-s5xp7mlo> <label for="datetime" data-astro-cid-s5xp7mlo>${BOOKING_CONTENT.form.datetimeLabel}</label> <input type="datetime-local" id="datetime" name="datetime" required data-astro-cid-s5xp7mlo> </div> <button type="submit" class="submit-btn" data-astro-cid-s5xp7mlo>Submit Request</button> </form> </div> </section> `;
}, "D:/jvc-web-ui/src/pages/home/sections/book-appointment.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/home/sections/book-appointment.astro";
const $$url = "/home/sections/book-appointment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookAppointment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BookAppointment as $, _page as _ };
