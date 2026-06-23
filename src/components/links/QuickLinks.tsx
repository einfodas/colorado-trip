import { quickLinks } from "@/data/trip-data";
import { getCityColor } from "@/lib/colors";

const categories: { name: string; city: string }[] = [
  { name: "Attractions", city: "Denver" },
  { name: "Hotels", city: "Estes Park" },
  { name: "Car Rental", city: "Colorado Springs" },
  { name: "Weather & Safety", city: "Boulder" },
];

export default function QuickLinks() {
  return (
    <div className="flex flex-col gap-6">
      {categories.map(({ name: cat, city }) => {
        const catLinks = quickLinks.filter((l) => l.category === cat);
        if (catLinks.length === 0) return null;
        const cc = getCityColor(city);
        return (
          <div key={cat} className="card p-4 md:p-6">
            <h3 className={`inline-flex px-3 py-1 rounded-lg text-base font-semibold ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} mb-3 transition-colors`}>{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {catLinks.map((link) => (
                <a
                  key={link.url + link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="truncate">{link.label}</span>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
