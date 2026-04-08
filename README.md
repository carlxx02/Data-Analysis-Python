# Data Analyst Portfolio (Next.js + Supabase)

Production-ready portfolio platform for a Data Analyst with a premium product-style UI, public case-study pages, and protected admin CMS.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase (Postgres, Auth, Storage)
- Vercel deployment-ready

## Folder Structure

```bash
app/
  api/
    profile/route.ts
    tools/route.ts
    projects/route.ts
    resume/route.ts
    upload/
      resume/route.ts
      project/route.ts
  admin/
    login/
    profile/
    tools/
    projects/
    resume/
    settings/
  about/
  projects/
    [slug]/
  tools/
  resume/
  contact/
  layout.tsx
  page.tsx
components/
  admin/
  layout/
  sections/
  ui/
lib/
  data/public.ts
  env.ts
  supabase/
    client.ts
    server.ts
    admin.ts
types/
  index.ts
hooks/
supabase/
  schema.sql
  seed.sql
  storage-plan.md
middleware.ts
.env.example
```

## Supabase Setup

1. Create a Supabase project.
2. Run SQL from `supabase/schema.sql` in SQL Editor.
3. Run `supabase/seed.sql` for starter content.
4. Create storage buckets:
   - `resume-files`
   - `project-assets`
5. Add environment variables (see `.env.example`).

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Auth Flow (Admin)

- Admin signs in on `/admin/login` using Supabase email/password auth.
- Session cookies are set by Supabase.
- `middleware.ts` protects `/admin/*` routes and redirects unauthenticated users to `/admin/login`.
- `/admin/settings` allows sign-out.

## Protected Route Setup

- Middleware matcher: `/admin/:path*`.
- `/admin/login` remains public.
- Layout-level verification in `app/admin/layout.tsx` for defense in depth.

## Public Pages

- Home
- About
- Projects
- Project Details (`/projects/[slug]`)
- Tools / Skills
- Resume (download + embedded preview)
- Contact

## Admin Pages

- Dashboard (`/admin`)
- Profile editor
- Tools CRUD endpoint form
- Projects CRUD endpoint form
- Resume upload + activate
- Settings/Auth

## Run Locally

```bash
npm install
npm run dev
```

App runs at: `http://localhost:3000`

## Deployment (Vercel)

### Dashboard Flow

1. Push repo to GitHub.
2. Import project in Vercel.
3. Add environment variables from `.env.example` in Vercel Project Settings.
4. Deploy.
5. In Supabase Auth settings, add your Vercel URL to allowed redirect URLs.

### CLI Flow

```bash
npm install
npm run build
npx vercel
npx vercel --prod
```

A helper script is also available:

```bash
./scripts/deploy-vercel.sh
```

This repository includes `vercel.json` for regions, API max duration, and baseline security headers.

## Create First Admin User

1. In Supabase Dashboard: **Authentication → Users → Invite user** (or create user).
2. Confirm user email (if email confirmation is enabled).
3. Use credentials on `/admin/login`.

## Seed Content Included

`supabase/seed.sql` includes:
- one profile record with KPI stats,
- sample tools,
- one featured & published project.

## Notes for Production

- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.
- Do not expose service role key in client components.
- Use additional table constraints / enums as your content model matures.
- Replace simple form UIs with richer admin tables/modals as data volume grows.
