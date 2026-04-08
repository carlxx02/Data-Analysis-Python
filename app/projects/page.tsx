import { EmptyState } from '@/components/ui/empty-state';
import { ProjectCard } from '@/components/sections/project-card';
import { SectionTitle } from '@/components/ui/section-title';
import { getPublicProjects } from '@/lib/data/public';

export default async function ProjectsPage() {
  const projects = await getPublicProjects();

  return (
    <section className="section-shell py-14">
      <SectionTitle title="Projects" subtitle="Filter-ready portfolio with full case study detail." />
      {projects.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState title="No projects yet" description="Publish projects from the admin panel." />
      )}
    </section>
  );
}
