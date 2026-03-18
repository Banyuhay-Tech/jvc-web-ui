import type { APIRoute } from 'astro';
import { getSupabaseAdminClient } from '../../../lib/supabase/server';

function getAdminPassword(): string {
  const fromEnv = import.meta.env.ADMIN_PASSWORD;
  if (typeof fromEnv === 'string' && fromEnv.length > 0) return fromEnv;
  return 'JVC@ndBanyuhay2026';
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const provided = request.headers.get('x-admin-password') ?? '';
    const expected = getAdminPassword();

    if (provided !== expected) {
      return new Response(JSON.stringify({ error: 'unauthorized' }), {
        status: 401,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      });
    }

    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase
      .from('appointment_requests')
      .select(
        'id,created_at,customer_name,email,phone,pet_details,service_needed,branch,requested_datetime,status,notes,source_page,ip,user_agent',
      )
      .order('created_at', { ascending: false })
      .limit(500);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      });
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  }
};

