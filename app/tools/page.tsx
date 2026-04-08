import { SectionTitle } from '@/components/ui/section-title';
import { ToolCard } from '@/components/sections/tool-card';
import { getPublicTools } from '@/lib/data/public';

export default async function ToolsPage() {
  const tools = await getPublicTools();

  return (
    <section className="section-shell py-14">
      <SectionTitle title="Tools & Skills" subtitle="Proficiency and depth by analytics category." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
