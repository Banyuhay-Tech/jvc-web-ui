import type { APIRoute } from 'astro';
import { getSupabaseAdminClient } from '../../../../lib/supabase/server';

function getAdminPassword(): string {
  const fromEnv = import.meta.env.ADMIN_PASSWORD;
  if (typeof fromEnv === 'string' && fromEnv.length > 0) return fromEnv;
  return 'JVC@ndBanyuhay2026';
}

const allowedStatuses = new Set(['new', 'confirmed', 'completed', 'cancelled']);

export const PATCH: APIRoute = async ({ request, params }) => {
  const provided = request.headers.get('x-admin-password') ?? '';
  const expected = getAdminPassword();
  if (provided !== expected) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const id = params.id;
  if (!id) {
    return new Response(JSON.stringify({ error: 'missing_id' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'unsupported_content_type' }), {
      status: 415,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const status = (body as { status?: unknown })?.status;
  if (typeof status !== 'string' || !allowedStatuses.has(status)) {
    return new Response(JSON.stringify({ error: 'invalid_status' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from('appointment_requests')
    .update({ status })
    .eq('id', id)
    .select('id,status')
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
};

