'use client';

import { useState } from 'react';

export function SimpleForm({
  endpoint,
  fields,
  initial
}: {
  endpoint: string;
  fields: Array<{ name: string; label: string; type?: string }>;
  initial?: Record<string, string | number | boolean>;
}) {
  const [status, setStatus] = useState('');

  return (
    <form
      className="card space-y-4 p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const body = Object.fromEntries(form.entries());

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        setStatus(res.ok ? 'Saved successfully.' : 'Failed to save.');
      }}
    >
      {fields.map((field) => (
        <label key={field.name} className="block space-y-1">
          <span className="text-sm font-medium">{field.label}</span>
          <input
            name={field.name}
            type={field.type ?? 'text'}
            defaultValue={String(initial?.[field.name] ?? '')}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      ))}
      <button className="rounded-lg bg-brand-600 px-4 py-2 text-white">Save</button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
