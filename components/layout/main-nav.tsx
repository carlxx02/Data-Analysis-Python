'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/tools', label: 'Tools' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Data Analyst <span className="text-brand-600">Portfolio</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm transition',
                pathname === link.href ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/admin" className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">
          Admin
        </Link>
      </div>
    </header>
  );
}
