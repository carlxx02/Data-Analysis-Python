'use client';

import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const [status, setStatus] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email'));
    const password = String(form.get('password'));

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setStatus(error ? error.message : 'Login successful. Refreshing...');
    if (!error) window.location.href = '/admin';
  }

  return (
    <div className="section-shell py-16">
      <form onSubmit={onSubmit} className="card mx-auto max-w-md space-y-4 p-8">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border p-3" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border p-3"
          required
        />
        <button className="w-full rounded-lg bg-brand-600 p-3 text-white">Sign in</button>
        {status ? <p className="text-sm text-slate-600">{status}</p> : null}
      </form>
    </div>
  );
}
