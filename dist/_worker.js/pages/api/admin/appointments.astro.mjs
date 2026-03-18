globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getSupabaseAdminClient } from '../../../chunks/server_CmQzTMpY.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_jEiFjMJ7.mjs';

function getAdminPassword() {
  return "JVC@ndBanyuhay2026";
}
const GET = async ({ request }) => {
  const provided = request.headers.get("x-admin-password") ?? "";
  const expected = getAdminPassword();
  if (provided !== expected) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase.from("appointment_requests").select(
    "id,created_at,customer_name,email,phone,pet_details,service_needed,branch,requested_datetime,status,notes,source_page,ip,user_agent"
  ).order("created_at", { ascending: false }).limit(500);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
