import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const runtimeEnv = (locals as Record<string, unknown>).runtime
      ? ((locals as Record<string, { env?: Record<string, unknown> }>).runtime?.env)
      : undefined;

    const info: Record<string, unknown> = {
      hasRuntime: !!(locals as Record<string, unknown>).runtime,
      hasRuntimeEnv: !!runtimeEnv,
      runtimeEnvKeys: runtimeEnv ? Object.keys(runtimeEnv).filter(k => !k.startsWith('__')) : [],
      hasSUPABASE_URL: runtimeEnv ? typeof runtimeEnv['SUPABASE_URL'] : 'no-runtime-env',
      hasServiceKey: runtimeEnv ? typeof runtimeEnv['SUPABASE_SERVICE_ROLE_KEY'] : 'no-runtime-env',
      hasAdminPw: runtimeEnv ? typeof runtimeEnv['ADMIN_PASSWORD'] : 'no-runtime-env',
      importMetaEnvKeys: Object.keys(import.meta.env).filter(k => !k.startsWith('__')),
    };

    return new Response(JSON.stringify(info, null, 2), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  }
};
