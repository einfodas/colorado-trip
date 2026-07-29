import { carRentals, carAdditionalCosts } from "@/data/trip-data";

export default function CarRental() {
  return (
    <div className="flex flex-col gap-6">
      {carRentals.map((r) => (
        <div key={r.confirmationNo} className="card p-4 md:p-6 border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-200">
              ✓ Confirmed
            </span>
            <span className="font-display text-lg font-normal tracking-tight text-stone-900 dark:text-stone-100">
              {r.company}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Vehicle</p>
              <p className="text-sm text-stone-900 dark:text-stone-100">{r.vehicleType}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Pick-up</p>
              <p className="text-sm text-stone-900 dark:text-stone-100">{r.pickup}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Return</p>
              <p className="text-sm text-stone-900 dark:text-stone-100">{r.return}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Confirmation</p>
              <p className="text-sm font-mono text-stone-900 dark:text-stone-100">{r.confirmationNo}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Total</p>
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">{r.total} (prepaid)</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400 sm:w-32">Notes</p>
              <p className="text-sm text-stone-600 dark:text-stone-400">{r.notes}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="card p-4 md:p-6">
        <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100 mb-3">Additional Costs</h3>
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
        <h3 className="font-display text-base font-normal tracking-tight text-blue-900 dark:text-blue-300 mb-2">Estimated Total</h3>
        <p className="text-lg font-bold text-blue-800 dark:text-blue-200 tabular-nums">$407.94 (car rental) + gas (~$60-80) + car seat ($0-90) + tolls ($5-10)</p>
        <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">Fastbreak Counter: skip the counter, go straight to the garage</p>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100 mb-3">Pick-up Info</h3>
        <ul className="space-y-2">
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Denver Intl Airport (DEN) — on-site at garage</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Fastbreak Counter: go directly to garage, no counter stop needed</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Phone: (303) 342-9001 | Hours: Open 24 hrs</span>
          </li>
          <li className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
            <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
            <span>Cancel 24+ hrs before: -$50 fee. Within 24 hrs: -$150 fee. No-show: no refund.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
