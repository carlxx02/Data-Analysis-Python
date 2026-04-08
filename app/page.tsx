import Link from 'next/link';
import { Hero } from '@/components/sections/hero';
import { KpiGrid } from '@/components/sections/kpi-grid';
import { ProjectCard } from '@/components/sections/project-card';
import { SectionTitle } from '@/components/ui/section-title';
import { ToolCard } from '@/components/sections/tool-card';
import { getActiveResume, getPublicProfile, getPublicProjects, getPublicTools } from '@/lib/data/public';

export default async function HomePage() {
  const [profile, projects, tools, resume] = await Promise.all([
    getPublicProfile(),
    getPublicProjects(),
    getPublicTools(),
    getActiveResume()
  ]);

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredTools = tools.filter((tool) => tool.featured).slice(0, 8);

  return (
    <>
      <Hero profile={profile} />
      <KpiGrid stats={profile?.kpi_stats ?? []} />

      <section className="section-shell py-12">
        <SectionTitle
          title="Featured Case Studies"
          subtitle="Selected work with measurable business outcomes and clear stakeholder value."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <SectionTitle title="Core Analytics Toolkit" />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="card grid gap-6 p-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Resume</h3>
            <p className="mt-2 text-slate-600">Download my most recent resume and role-ready achievements.</p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            {resume?.pdf_url ? (
              <a href={resume.pdf_url} className="rounded-xl bg-brand-600 px-4 py-3 text-white">
                Download Resume
              </a>
            ) : null}
            <Link href="/resume" className="rounded-xl border border-slate-300 px-4 py-3">
              Resume Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
