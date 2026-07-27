const seen = new Map<string, string>();

export function slugify(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const existing = seen.get(slug);
  if (existing && existing !== name) {
    console.warn(`Slug collision: "${name}" and "${existing}" both map to "${slug}"`);
  }
  if (!existing) {
    seen.set(slug, name);
  }
  return slug;
}
