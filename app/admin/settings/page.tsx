'use client';

import { createClient } from '@/lib/supabase/client';

export default function AdminSettingsPage() {
  return (
    <div className="card p-6">
      <h1 className="text-2xl font-semibold">Settings & Auth</h1>
      <p className="mt-2 text-slate-600">Sign out current admin session.</p>
      <button
        className="mt-4 rounded-lg border border-slate-300 px-4 py-2"
        onClick={async () => {
          await createClient().auth.signOut();
          window.location.href = '/admin/login';
        }}
      >
        Sign out
      </button>
    </div>
  );
}
