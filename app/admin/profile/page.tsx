import { SimpleForm } from '@/components/admin/simple-form';

export default function AdminProfilePage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Manage Profile</h1>
      <SimpleForm
        endpoint="/api/profile"
        fields={[
          { name: 'full_name', label: 'Full name' },
          { name: 'headline', label: 'Headline' },
          { name: 'hero_title', label: 'Hero title' },
          { name: 'hero_subtitle', label: 'Hero subtitle' },
          { name: 'about_summary', label: 'About summary' },
          { name: 'email', label: 'Email', type: 'email' }
        ]}
      />
    </div>
  );
}
