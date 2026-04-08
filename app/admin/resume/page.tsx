'use client';

import { useState } from 'react';

export default function AdminResumePage() {
  const [status, setStatus] = useState('');

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Manage Resume</h1>
      <form
        className="card space-y-4 p-6"
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const uploadRes = await fetch('/api/upload/resume', { method: 'POST', body: formData });
          const uploadData = await uploadRes.json();
          if (!uploadRes.ok) return setStatus(uploadData.error ?? 'Upload failed');

          const saveRes = await fetch('/api/resume', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: String(formData.get('title')),
              version_label: String(formData.get('version_label')),
              pdf_url: uploadData.publicUrl,
              active: true,
              updated_date: new Date().toISOString().slice(0, 10)
            })
          });

          setStatus(saveRes.ok ? 'Resume updated.' : 'Unable to save record.');
        }}
      >
        <input name="title" placeholder="Resume title" className="w-full rounded-lg border p-3" required />
        <input name="version_label" placeholder="Version label" className="w-full rounded-lg border p-3" required />
        <input name="file" type="file" accept="application/pdf" className="w-full rounded-lg border p-3" required />
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-white">Upload + Save</button>
        {status ? <p className="text-sm text-slate-600">{status}</p> : null}
      </form>
    </div>
  );
}
