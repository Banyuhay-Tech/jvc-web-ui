import { createClient } from '@supabase/supabase-js';

type RuntimeEnv = Record<string, unknown> | undefined;

function getEnv(name: string, runtimeEnv?: RuntimeEnv): string {
  // Cloudflare Workers runtime env (passed from Astro locals.runtime.env)
  if (runtimeEnv) {
    const v = runtimeEnv[name];
    if (typeof v === 'string' && v.length > 0) return v;
  }

  // Vite / Astro dev server (statically replaced at build time)
  try {
    const v = (import.meta as unknown as { env: Record<string, string> }).env[name];
    if (typeof v === 'string' && v.length > 0) return v;
  } catch {}

  // Node process.env fallback (wrangler dev / miniflare)
  try {
    const v = process.env[name];
    if (typeof v === 'string' && v.length > 0) return v;
  } catch {}

  throw new Error(`Missing required environment variable: ${name}`);
}

export function getSupabaseAdminClient(runtimeEnv?: RuntimeEnv) {
  const url = getEnv('SUPABASE_URL', runtimeEnv);
  const serviceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', runtimeEnv);

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function getAdminPassword(runtimeEnv?: RuntimeEnv): string {
  try {
    return getEnv('ADMIN_PASSWORD', runtimeEnv);
  } catch {
    return 'JVC@ndBanyuhay2026';
  }
}
