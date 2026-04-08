import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');
  if (!(file instanceof File)) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const path = `resume/${Date.now()}-${file.name}`;
  const supabase = createAdminClient();

  const { error } = await supabase.storage.from('resume-files').upload(path, bytes, {
    contentType: file.type,
    upsert: true
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data } = supabase.storage.from('resume-files').getPublicUrl(path);
  return NextResponse.json({ publicUrl: data.publicUrl });
}
