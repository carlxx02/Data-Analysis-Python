-- Enable extension
create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  headline text not null,
  hero_title text not null,
  hero_subtitle text not null,
  about_summary text not null,
  email text not null,
  linkedin_url text,
  github_url text,
  location text,
  kpi_stats jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  proficiency_level numeric(5,2) not null,
  years_of_use int not null default 0,
  sort_order int not null default 0,
  featured boolean not null default false,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text not null,
  full_description text not null,
  problem text not null,
  approach text not null,
  impact_results text not null,
  tools_used text[] not null default '{}',
  category text not null,
  cover_image_url text,
  attachment_url text,
  external_url text,
  github_url text,
  featured boolean not null default false,
  published boolean not null default false,
  project_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  image_url text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.resumes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  version_label text not null,
  pdf_url text not null,
  active boolean not null default false,
  updated_date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_profiles_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
create trigger set_tools_updated_at before update on public.tools for each row execute procedure public.set_updated_at();
create trigger set_projects_updated_at before update on public.projects for each row execute procedure public.set_updated_at();
create trigger set_resumes_updated_at before update on public.resumes for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.tools enable row level security;
alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.resumes enable row level security;

create policy "public can read profile" on public.profiles for select using (true);
create policy "public can read visible tools" on public.tools for select using (visible = true);
create policy "public can read published projects" on public.projects for select using (published = true);
create policy "public can read project images" on public.project_images for select using (
  exists (select 1 from public.projects p where p.id = project_id and p.published = true)
);
create policy "public can read active resume" on public.resumes for select using (active = true);

create policy "authenticated full access profiles" on public.profiles for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access tools" on public.tools for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access projects" on public.projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access project_images" on public.project_images for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access resumes" on public.resumes for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
