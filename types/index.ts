export interface KPIStat {
  label: string;
  value: string;
}

export interface Profile {
  id: string;
  full_name: string;
  headline: string;
  hero_title: string;
  hero_subtitle: string;
  about_summary: string;
  email: string;
  linkedin_url?: string;
  github_url?: string;
  location?: string;
  kpi_stats: KPIStat[];
  created_at: string;
  updated_at: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  proficiency_level: string;
  years_of_use: number;
  sort_order: number;
  featured: boolean;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  problem: string;
  approach: string;
  impact_results: string;
  tools_used: string[];
  category: string;
  cover_image_url?: string;
  attachment_url?: string;
  external_url?: string;
  github_url?: string;
  featured: boolean;
  published: boolean;
  project_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Resume {
  id: string;
  title: string;
  version_label: string;
  pdf_url: string;
  active: boolean;
  updated_date: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  sort_order: number;
  created_at: string;
}
