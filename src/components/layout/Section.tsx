export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-8 md:px-8 md:py-12 max-w-6xl mx-auto scroll-mt-16">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-base text-stone-600 dark:text-stone-400">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
