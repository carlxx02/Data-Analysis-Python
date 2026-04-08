import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';

const schema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1),
  version_label: z.string().min(1),
  pdf_url: z.string().url(),
  active: z.coerce.boolean().default(true),
  updated_date: z.string().min(1)
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const supabase = await createServerSupabaseClient();

  if (parsed.data.active) {
    await supabase.from('resumes').update({ active: false }).neq('id', '00000000-0000-0000-0000-000000000000');
  }

  const { id, ...payload } = parsed.data;
  const query = id ? supabase.from('resumes').update(payload).eq('id', id) : supabase.from('resumes').insert(payload);

  const { error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
