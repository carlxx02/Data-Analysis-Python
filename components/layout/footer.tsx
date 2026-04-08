export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="section-shell text-sm text-slate-500">
        © {new Date().getFullYear()} Data Analyst Portfolio. Built with Next.js + Supabase.
      </div>
    </footer>
  );
}
