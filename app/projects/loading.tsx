import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingProjects() {
  return (
    <section className="section-shell py-14">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-56 w-full" />
        ))}
      </div>
    </section>
  );
}
