import { notFound } from 'next/navigation';
import { SectionTitle } from '@/components/ui/section-title';
import { getProjectBySlug } from '@/lib/data/public';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="section-shell py-14">
      <SectionTitle title={project.title} subtitle={project.short_description} />
      <article className="card space-y-6 p-8">
        <section>
          <h3 className="font-semibold">Overview</h3>
          <p className="mt-2 text-slate-700">{project.full_description}</p>
        </section>
        <section>
          <h3 className="font-semibold">Problem</h3>
          <p className="mt-2 text-slate-700">{project.problem}</p>
        </section>
        <section>
          <h3 className="font-semibold">Approach</h3>
          <p className="mt-2 text-slate-700">{project.approach}</p>
        </section>
        <section>
          <h3 className="font-semibold">Impact / Results</h3>
          <p className="mt-2 text-slate-700">{project.impact_results}</p>
        </section>
      </article>
    </section>
  );
}
