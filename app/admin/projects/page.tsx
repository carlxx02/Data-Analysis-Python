import { SimpleForm } from '@/components/admin/simple-form';

export default function AdminProjectsPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Manage Projects</h1>
      <SimpleForm
        endpoint="/api/projects"
        fields={[
          { name: 'title', label: 'Title' },
          { name: 'slug', label: 'Slug' },
          { name: 'category', label: 'Category' },
          { name: 'short_description', label: 'Short description' },
          { name: 'full_description', label: 'Full description' },
          { name: 'problem', label: 'Problem' },
          { name: 'approach', label: 'Approach' },
          { name: 'impact_results', label: 'Impact/results' },
          { name: 'tools_used', label: 'Tools (comma separated)' }
        ]}
      />
    </div>
  );
}
