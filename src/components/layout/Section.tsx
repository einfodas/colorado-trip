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
    <section id={id} className="group px-4 py-8 md:px-8 md:py-12 max-w-6xl mx-auto scroll-mt-16">
      <div className="mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">
          {title}
        </h2>
        <div className="h-0.5 w-12 origin-left rounded-full bg-stone-300 dark:bg-stone-600 mt-2 transition-transform duration-300 ease-out group-hover:scale-x-200" />
        {subtitle && (
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
