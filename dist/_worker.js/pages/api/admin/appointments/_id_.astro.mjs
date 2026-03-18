globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getAdminPassword, a as getSupabaseAdminClient } from '../../../../chunks/server_CoaZ9Z-h.mjs';
export { r as renderers } from '../../../../chunks/_@astro-renderers_BwPN5SeW.mjs';

const allowedStatuses = /* @__PURE__ */ new Set(["new", "confirmed", "completed", "cancelled"]);
const PATCH = async ({ request, params, locals }) => {
  try {
    const runtimeEnv = locals.runtime ? locals.runtime?.env : void 0;
    const provided = request.headers.get("x-admin-password") ?? "";
    const expected = getAdminPassword(runtimeEnv);
    if (provided !== expected) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store"
        }
      });
    }
    const id = params.id;
    if (!id) {
      return new Response(JSON.stringify({ error: "missing_id" }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "unsupported_content_type" }), {
        status: 415,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "invalid_json" }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    const status = body?.status;
    if (typeof status !== "string" || !allowedStatuses.has(status)) {
      return new Response(JSON.stringify({ error: "invalid_status" }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    const supabase = getSupabaseAdminClient(runtimeEnv);
    const { data, error } = await supabase.from("appointment_requests").update({ status }).eq("id", id).select("id,status").single();
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
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
