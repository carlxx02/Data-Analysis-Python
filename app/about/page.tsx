import { SectionTitle } from '@/components/ui/section-title';
import { getPublicProfile } from '@/lib/data/public';

export default async function AboutPage() {
  const profile = await getPublicProfile();

  return (
    <section className="section-shell py-14">
      <SectionTitle title="About" subtitle={profile?.headline} />
      <div className="card max-w-4xl p-8">
        <p className="leading-8 text-slate-700">{profile?.about_summary}</p>
      </div>
    </section>
  );
}
