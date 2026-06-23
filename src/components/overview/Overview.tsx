import { tripMeta } from "@/data/trip-data";

export default function Overview() {
  return (
    <div className="card p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">{tripMeta.title}</h1>
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mt-1 tabular-nums">{tripMeta.dates}</p>
          <p className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-1 font-body leading-snug">{tripMeta.duration}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 transition-colors">
            <p className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">Family</p>
            <p className="text-base text-stone-900 dark:text-stone-100 mt-1">{tripMeta.family.join(", ")}</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 transition-colors">
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Budget</p>
            <p className="text-base text-stone-900 dark:text-stone-100 mt-1">{tripMeta.budgetRange}</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 transition-colors">
            <p className="text-xs font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wide">Base Cities</p>
            <p className="text-base text-stone-900 dark:text-stone-100 mt-1">{tripMeta.baseCities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
