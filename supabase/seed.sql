insert into public.profiles (
  full_name, headline, hero_title, hero_subtitle, about_summary, email, linkedin_url, github_url, location, kpi_stats
) values (
  'Alex Morgan',
  'Data Analyst | Product & Growth Intelligence',
  'From raw data to confident strategic decisions',
  'I build analytics systems that uncover growth opportunities, reduce risk, and align teams around measurable outcomes.',
  'Experienced in SQL, Python, BI, and experimentation frameworks across SaaS and e-commerce organizations.',
  'alex@example.com',
  'https://linkedin.com/in/alexmorgan',
  'https://github.com/alexmorgan',
  'Austin, TX',
  '[{"label":"Revenue uplift delivered","value":"$3.1M+"},{"label":"Dashboards launched","value":"45+"},{"label":"Avg. reporting time reduction","value":"62%"}]'::jsonb
)
on conflict do nothing;

insert into public.tools (name, category, proficiency_level, years_of_use, sort_order, featured, visible) values
('SQL', 'Data Querying', 95, 7, 1, true, true),
('Python', 'Analytics', 90, 6, 2, true, true),
('Tableau', 'BI', 88, 5, 3, true, true),
('Power BI', 'BI', 84, 5, 4, false, true)
on conflict do nothing;

insert into public.projects (
  title, slug, short_description, full_description, problem, approach, impact_results, tools_used, category, featured, published, project_date
) values (
  'Retention Intelligence Engine',
  'retention-intelligence-engine',
  'Built an at-risk cohort model to improve retention interventions.',
  'Designed a predictive pipeline and executive-facing dashboard for churn intelligence.',
  'Customer churn increased 14% QoQ with no clear risk segmentation.',
  'Built feature engineering in Python + SQL, then deployed monitoring dashboards in Tableau.',
  'Reduced churn by 11.2% within one quarter and recovered $420K ARR.',
  '{"Python","SQL","Tableau"}',
  'Product Analytics',
  true,
  true,
  '2025-11-10'
)
on conflict do nothing;
