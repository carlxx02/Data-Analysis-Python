export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="card p-10 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}
