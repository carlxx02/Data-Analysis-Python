import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  category: z.string().min(1),
  proficiency_level: z.coerce.string(),
  years_of_use: z.coerce.number().min(0),
  sort_order: z.coerce.number().int().min(0),
  featured: z.coerce.boolean().optional().default(false),
  visible: z.coerce.boolean().optional().default(true)
});

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('tools').select('*').order('sort_order');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const supabase = await createServerSupabaseClient();
  const { id, ...payload } = parsed.data;

  const query = id ? supabase.from('tools').update(payload).eq('id', id) : supabase.from('tools').insert(payload);
  const { error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from('tools').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
