import { SectionTitle } from '@/components/ui/section-title';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Admin Dashboard" subtitle="Manage content, publishing state, and portfolio assets." />
      <div className="grid gap-4 md:grid-cols-3">
        {['Profile', 'Tools', 'Projects'].map((item) => (
          <div key={item} className="card p-6">
            <h3 className="font-semibold">{item}</h3>
            <p className="mt-2 text-sm text-slate-600">Use sidebar to update {item.toLowerCase()} content.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
