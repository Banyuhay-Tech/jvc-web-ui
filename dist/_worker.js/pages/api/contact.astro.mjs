globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as getSupabaseAdminClient } from '../../chunks/server_CoaZ9Z-h.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BwPN5SeW.mjs';

function asNonEmptyString(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}
function redirectToContact(status) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: `/contact?contact=${status}#contact-form`
    }
  });
}
const POST = async ({ request, locals }) => {
  const runtimeEnv = locals.runtime ? locals.runtime?.env : void 0;
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data")) {
    return new Response("Unsupported content type", { status: 415 });
  }
  const form = await request.formData();
  const website = asNonEmptyString(form.get("website"));
  if (website) return redirectToContact("success");
  const name = asNonEmptyString(form.get("name"));
  const email = asNonEmptyString(form.get("email"));
  const subject = asNonEmptyString(form.get("subject")) ?? "general";
  const message = asNonEmptyString(form.get("message"));
  if (!name || !email || !message) return redirectToContact("error");
  const userAgent = request.headers.get("user-agent") ?? null;
  const sourcePage = request.headers.get("referer") ?? "/contact";
  const supabase = getSupabaseAdminClient(runtimeEnv);
  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    subject,
    message,
    status: "new",
    source_page: sourcePage,
    user_agent: userAgent
  });
  if (error) return redirectToContact("error");
  return redirectToContact("success");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
