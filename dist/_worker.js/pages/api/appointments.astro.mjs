globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getSupabaseAdminClient } from '../../chunks/server_CmQzTMpY.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BwPN5SeW.mjs';

function asNonEmptyString(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}
function toManilaTimestamptz(datetimeLocal) {
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(datetimeLocal)) {
    return `${datetimeLocal}:00+08:00`;
  }
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})$/.test(datetimeLocal)) {
    return datetimeLocal;
  }
  return null;
}
function redirectToBooking(status) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: `/?booking=${status}#book-appointment`
    }
  });
}
const POST = async (context) => {
  const { request } = context;
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data")) {
    return new Response("Unsupported content type", { status: 415 });
  }
  const form = await request.formData();
  const website = asNonEmptyString(form.get("website"));
  if (website) return redirectToBooking("success");
  const customerName = asNonEmptyString(form.get("name"));
  const email = asNonEmptyString(form.get("email")) ?? "";
  const phone = asNonEmptyString(form.get("phone"));
  const petDetails = asNonEmptyString(form.get("pet"));
  const serviceNeeded = asNonEmptyString(form.get("service"));
  const branch = asNonEmptyString(form.get("branch"));
  const datetimeRaw = asNonEmptyString(form.get("datetime"));
  const requestedDatetime = datetimeRaw ? toManilaTimestamptz(datetimeRaw) : null;
  if (!customerName || !phone || !petDetails || !serviceNeeded || !branch || !requestedDatetime) {
    return redirectToBooking("error");
  }
  const userAgent = request.headers.get("user-agent") ?? null;
  const sourcePage = request.headers.get("referer") ?? "/";
  const ip = "clientAddress" in context ? context.clientAddress ?? null : null;
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("appointment_requests").insert({
    customer_name: customerName,
    email,
    phone,
    pet_details: petDetails,
    service_needed: serviceNeeded,
    branch,
    requested_datetime: requestedDatetime,
    status: "new",
    notes: null,
    source_page: sourcePage,
    ip,
    user_agent: userAgent
  });
  if (error) {
    return redirectToBooking("error");
  }
  return redirectToBooking("success");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
