import { SectionTitle } from '@/components/ui/section-title';
import { getActiveResume } from '@/lib/data/public';

export default async function ResumePage() {
  const resume = await getActiveResume();

  return (
    <section className="section-shell py-14">
      <SectionTitle title="Resume" subtitle="Current version for hiring teams and clients." />
      <div className="card p-8">
        {resume?.pdf_url ? (
          <>
            <a className="rounded-lg bg-brand-600 px-4 py-2 text-white" href={resume.pdf_url}>
              Download {resume.version_label}
            </a>
            <iframe title="Resume preview" src={resume.pdf_url} className="mt-6 h-[720px] w-full rounded-xl border" />
          </>
        ) : (
          <p>No active resume found.</p>
        )}
      </div>
    </section>
  );
}
