import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  id: z.string().uuid().optional(),
  full_name: z.string().min(1),
  headline: z.string().min(1),
  hero_title: z.string().min(1),
  hero_subtitle: z.string().min(1),
  about_summary: z.string().min(1),
  email: z.string().email(),
  linkedin_url: z.string().optional(),
  github_url: z.string().optional(),
  location: z.string().optional(),
  kpi_stats: z.array(z.object({ label: z.string(), value: z.string() })).optional()
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const supabase = await createServerSupabaseClient();
  const { id, ...payload } = parsed.data;
  const query = id ? supabase.from('profiles').update(payload).eq('id', id) : supabase.from('profiles').insert(payload);
  const { error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
