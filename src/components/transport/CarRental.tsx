import { carRentals, carAdditionalCosts } from "@/data/trip-data";

export default function CarRental() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-3 font-medium text-stone-700">Company</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Vehicle</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Rate</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Total</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {carRentals.map((r) => (
                <tr key={r.company} className="border-b border-stone-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-stone-900">{r.company}</td>
                  <td className="px-4 py-3 text-stone-600">{r.vehicleType}</td>
                  <td className="px-4 py-3 text-stone-600">{r.dailyRate}</td>
                  <td className="px-4 py-3 font-medium text-stone-900">{r.total}</td>
                  <td className="px-4 py-3 text-stone-600 hidden md:table-cell">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">Additional Costs</h3>
        <div className="flex flex-col gap-3">
          {carAdditionalCosts.map((cost) => (
            <div key={cost.item} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <p className="text-sm font-medium text-stone-900 sm:w-40">{cost.item}</p>
              <p className="text-sm text-stone-600 sm:flex-1">{cost.cost}</p>
              <p className="text-xs text-stone-500 sm:w-60">{cost.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4 md:p-6 bg-blue-50 border-blue-200">
        <h3 className="text-base font-semibold text-blue-900 mb-2">Estimated Total</h3>
        <p className="text-lg font-bold text-blue-800">$480 – $840 (6 days, mid-size SUV)</p>
        <p className="text-sm text-blue-700 mt-1">+ gas (~$60-80) + car seat ($0-90) + tolls ($5-10)</p>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">Booking Tips</h3>
        <ul className="space-y-2">
          <li className="text-sm text-stone-600 flex gap-2">
            <span className="text-stone-400 flex-shrink-0">•</span>
            <span>Book ASAP — July is peak season, SUVs sell out</span>
          </li>
          <li className="text-sm text-stone-600 flex gap-2">
            <span className="text-stone-400 flex-shrink-0">•</span>
            <span>Compare on Kayak, Costco Travel, or directly</span>
          </li>
          <li className="text-sm text-stone-600 flex gap-2">
            <span className="text-stone-400 flex-shrink-0">•</span>
            <span>All major companies are on-site at DEN</span>
          </li>
          <li className="text-sm text-stone-600 flex gap-2">
            <span className="text-stone-400 flex-shrink-0">•</span>
            <span>Check credit card for rental insurance coverage before buying</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
