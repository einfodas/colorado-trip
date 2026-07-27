import { budgetRows, costSavingStrategies, tripMeta } from "@/data/trip-data";

export const metadata = {
  title: "Budget Breakdown — Colorado Family Vacation",
  description: "Detailed trip budget with categories, totals, and cost-saving strategies.",
};

function parseAmount(str: string): number {
  const m = str.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

function BudgetCard({ category, low, high, notes, index }: {
  category: string;
  low: string;
  high: string;
  notes?: string;
  index: number;
}) {
  const lowNum = parseAmount(low);
  const highNum = parseAmount(high);
  const midNum = Math.round((lowNum + highNum) / 2);

  const bgColors = [
    "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
    "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
    "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
    "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800",
    "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800",
    "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800",
    "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
  ];

  const colorClass = bgColors[index % bgColors.length];

  return (
    <div className={`card overflow-hidden border-l-4 ${colorClass}`}>
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-base font-semibold text-stone-900 dark:text-stone-100 leading-tight">
            {category}
          </h3>
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold text-stone-900 dark:text-stone-100 tabular-nums">
              ${midNum.toLocaleString()}
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 tabular-nums">
              {low} – {high}
            </div>
          </div>
        </div>
        {notes && (
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {notes}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
              style={{ width: `${Math.round((midNum / parseAmount(tripMeta.budgetRange.split("–")[1]?.trim() || "4200")) * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BudgetPage() {
  const totalLow = budgetRows.reduce((sum, r) => sum + parseAmount(r.low), 0);
  const totalHigh = budgetRows.reduce((sum, r) => sum + parseAmount(r.high), 0);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Trip
          </a>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Budget Breakdown
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            {tripMeta.dates} · {tripMeta.family.length} travelers
          </p>
        </div>

        <div className="card p-5 md:p-6 mb-6 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 border-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100">
                Total Estimated Cost
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Excluding flights
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                ~${Math.round((totalLow + totalHigh) / 2).toLocaleString()} midpoint
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {budgetRows.map((row, i) => (
            <BudgetCard
              key={row.category}
              index={i}
              category={row.category}
              low={row.low}
              high={row.high}
              notes={row.notes}
            />
          ))}
        </div>

        <div className="card p-5 md:p-6 mt-8">
          <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            Cost-Saving Strategies
          </h3>
          <ul className="space-y-3">
            {costSavingStrategies.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-600 dark:text-stone-400">
                <span className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
