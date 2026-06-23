import { budgetRows, costSavingStrategies } from "@/data/trip-data";

export default function BudgetBreakdown() {
  const totalLow = budgetRows.reduce((sum, r) => {
    const num = parseInt(r.low.replace(/[^0-9]/g, ""));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  const totalHigh = budgetRows.reduce((sum, r) => {
    const num = parseInt(r.high.replace(/[^0-9]/g, ""));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 transition-colors">
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Category</th>
                <th className="text-right px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Low</th>
                <th className="text-right px-4 py-3 font-medium text-stone-700 dark:text-stone-300">High</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {budgetRows.map((row) => (
                <tr key={row.category} className="border-b border-stone-100 dark:border-stone-700 last:border-0 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900 dark:text-stone-100">{row.category}</td>
                  <td className="px-4 py-3 text-right text-stone-600 dark:text-stone-400 tabular-nums">{row.low}</td>
                  <td className="px-4 py-3 text-right text-stone-600 dark:text-stone-400 tabular-nums">{row.high}</td>
                  <td className="px-4 py-3 text-stone-600 dark:text-stone-400 hidden md:table-cell">{row.notes}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 dark:bg-blue-900/20 font-bold transition-colors">
                <td className="px-4 py-3 text-blue-900 dark:text-blue-200">Total</td>
                <td className="px-4 py-3 text-right text-blue-900 dark:text-blue-200 tabular-nums">${totalLow.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-blue-900 dark:text-blue-200 tabular-nums">${totalHigh.toLocaleString()}</td>
                <td className="px-4 py-3 hidden md:table-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100 mb-3">Cost-Saving Strategies</h3>
        <ul className="space-y-2">
          {costSavingStrategies.map((tip, i) => (
            <li key={i} className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 flex-shrink-0">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
