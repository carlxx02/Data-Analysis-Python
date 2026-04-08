import Link from 'next/link';
import { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-6">
      <p className="text-sm text-brand-600">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm text-slate-600">{project.short_description}</p>
      <p className="mt-4 text-sm font-medium text-slate-700">Impact: {project.impact_results}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools_used.map((tool) => (
          <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
            {tool}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-5 inline-block text-sm font-medium text-brand-600">
        Read Case Study →
      </Link>
    </article>
  );
}
