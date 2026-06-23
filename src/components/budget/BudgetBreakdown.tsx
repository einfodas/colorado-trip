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
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-3 font-medium text-stone-700">Category</th>
                <th className="text-right px-4 py-3 font-medium text-stone-700">Low</th>
                <th className="text-right px-4 py-3 font-medium text-stone-700">High</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {budgetRows.map((row) => (
                <tr key={row.category} className="border-b border-stone-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-stone-900">{row.category}</td>
                  <td className="px-4 py-3 text-right text-stone-600">{row.low}</td>
                  <td className="px-4 py-3 text-right text-stone-600">{row.high}</td>
                  <td className="px-4 py-3 text-stone-600 hidden md:table-cell">{row.notes}</td>
                </tr>
              ))}
              <tr className="bg-stone-50 font-bold">
                <td className="px-4 py-3 text-stone-900">Total</td>
                <td className="px-4 py-3 text-right text-stone-900">${totalLow.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-stone-900">${totalHigh.toLocaleString()}</td>
                <td className="px-4 py-3 hidden md:table-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">Cost-Saving Strategies</h3>
        <ul className="space-y-2">
          {costSavingStrategies.map((tip, i) => (
            <li key={i} className="text-sm text-stone-600 flex gap-2">
              <span className="text-emerald-500 flex-shrink-0">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
