import { SectionTitle } from '@/components/ui/section-title';
import { getPublicProfile } from '@/lib/data/public';

export default async function ContactPage() {
  const profile = await getPublicProfile();

  return (
    <section className="section-shell py-14">
      <SectionTitle title="Contact" subtitle="Open to analytics, BI, and product intelligence engagements." />
      <div className="card max-w-2xl space-y-4 p-8">
        <p>Email: {profile?.email}</p>
        <p>LinkedIn: {profile?.linkedin_url}</p>
        <p>GitHub: {profile?.github_url}</p>
      </div>
    </section>
  );
}
