import Link from 'next/link';

const links = [
  ['Overview', '/admin'],
  ['Profile', '/admin/profile'],
  ['Tools', '/admin/tools'],
  ['Projects', '/admin/projects'],
  ['Resume', '/admin/resume'],
  ['Settings', '/admin/settings']
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-shell grid gap-6 py-10 lg:grid-cols-[220px_1fr]">
      <aside className="card h-fit p-4">
        <p className="mb-4 text-sm font-semibold text-slate-500">Admin</p>
        <nav className="space-y-2">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
