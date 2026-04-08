import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1),
  slug: z.string().min(1),
  short_description: z.string().min(1),
  full_description: z.string().min(1),
  problem: z.string().min(1),
  approach: z.string().min(1),
  impact_results: z.string().min(1),
  tools_used: z.union([z.string(), z.array(z.string())]),
  category: z.string().min(1),
  featured: z.coerce.boolean().optional().default(false),
  published: z.coerce.boolean().optional().default(false)
});

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('projects').select('*').order('project_date', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const tools_used =
    typeof parsed.data.tools_used === 'string'
      ? parsed.data.tools_used.split(',').map((value) => value.trim())
      : parsed.data.tools_used;

  const payload = { ...parsed.data, tools_used };
  const { id, ...rest } = payload;

  const supabase = await createServerSupabaseClient();
  const query = id ? supabase.from('projects').update(rest).eq('id', id) : supabase.from('projects').insert(rest);
  const { error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
