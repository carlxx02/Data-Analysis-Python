# Supabase Storage Bucket Plan

- `resume-files` (public read, authenticated write/update/delete): stores PDF resumes by version.
- `project-assets` (public read, authenticated write/update/delete): stores project cover images, gallery images, and optional attachments.

Recommended path conventions:
- `resume/{timestamp}-{filename}.pdf`
- `project-assets/{project-slug}/cover/{timestamp}-{filename}`
- `project-assets/{project-slug}/gallery/{timestamp}-{filename}`
- `project-assets/{project-slug}/attachments/{timestamp}-{filename}`
