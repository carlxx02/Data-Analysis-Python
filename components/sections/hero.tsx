'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Profile } from '@/types';

export function Hero({ profile }: { profile: Profile | null }) {
  return (
    <section className="section-shell py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Data Analyst Portfolio</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          {profile?.hero_title ?? 'Turning data into strategic, measurable business growth'}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          {profile?.hero_subtitle ??
            'I design analytics systems, build dashboards, and deliver decision-grade insights that improve revenue, retention, and operational performance.'}
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/projects" className="rounded-xl bg-brand-600 px-5 py-3 text-white hover:bg-brand-500">
            View Case Studies
          </Link>
          <Link href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100">
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
