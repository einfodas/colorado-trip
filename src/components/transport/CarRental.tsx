import { carRentals, carAdditionalCosts } from "@/data/trip-data";

export default function CarRental() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 transition-colors">
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Company</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Vehicle</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Rate</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300">Total</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 dark:text-stone-300 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {carRentals.map((r) => (
                <tr key={r.company} className="border-b border-stone-100 dark:border-stone-700 last:border-0 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900 dark:text-stone-100">{r.company}</td>
                  <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{r.vehicleType}</td>
                  <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{r.dailyRate}</td>
                  <td className="px-4 py-3 font-medium text-stone-900 dark:text-stone-100">{r.total}</td>
                  <td className="px-4 py-3 text-stone-600 dark:text-stone-400 hidden md:table-cell">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Additional Costs</h3>
        <div className="flex flex-col gap-3">
          {carAdditionalCosts.map((cost) => (
            <div key={cost.item} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <p className="text-sm font-medium text-stone-900 dark:text-stone-100 sm:w-40">{cost.item}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400 sm:flex-1">{cost.cost}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 sm:w-60">{cost.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4 md:p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 transition-colors">
        <h3 className="text-base font-semibold text-blue-900 dark:text-blue-300 mb-2">Estimated Total</h3>
        <p className="text-lg font-bold text-blue-800 dark:text-blue-200">$480 – $840 (6 days, mid-size SUV)</p>
        <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">+ gas (~$60-80) + car seat ($0-90) + tolls ($5-10)</p>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Booking Tips</h3>
        <ul className="space-y-2">
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Book ASAP — July is peak season, SUVs sell out</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Compare on Kayak, Costco Travel, or directly</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>All major companies are on-site at DEN</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Check credit card for rental insurance coverage before buying</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
