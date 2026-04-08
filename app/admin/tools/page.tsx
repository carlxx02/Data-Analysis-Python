import { SimpleForm } from '@/components/admin/simple-form';

export default function AdminToolsPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Manage Tools</h1>
      <SimpleForm
        endpoint="/api/tools"
        fields={[
          { name: 'name', label: 'Tool name' },
          { name: 'category', label: 'Category' },
          { name: 'proficiency_level', label: 'Proficiency (0-100)' },
          { name: 'years_of_use', label: 'Years of use', type: 'number' },
          { name: 'sort_order', label: 'Sort order', type: 'number' }
        ]}
      />
    </div>
  );
}
