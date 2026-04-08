import { Tool } from '@/types';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">{tool.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{tool.category}</p>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-brand-600"
          style={{ width: `${Math.min(Number(tool.proficiency_level), 100)}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">{tool.years_of_use} years</p>
    </div>
  );
}
