import { KPIStat } from '@/types';

export function KpiGrid({ stats }: { stats: KPIStat[] }) {
  if (!stats?.length) return null;

  return (
    <section className="section-shell pb-12">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="text-3xl font-semibold text-brand-600">{stat.value}</div>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
