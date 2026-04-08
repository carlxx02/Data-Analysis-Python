import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Profile, Project, Resume, Tool } from '@/types';

export async function getPublicProfile(): Promise<Profile | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from('profiles').select('*').limit(1).maybeSingle();
  return data;
}

export async function getPublicTools(): Promise<Tool[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from('tools')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true });
  return data ?? [];
}

export async function getPublicProjects(): Promise<Project[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('project_date', { ascending: false });
  return data ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  return data;
}

export async function getActiveResume(): Promise<Resume | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from('resumes')
    .select('*')
    .eq('active', true)
    .order('updated_date', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data;
}
