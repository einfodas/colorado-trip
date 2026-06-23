import { tripMeta } from "@/data/trip-data";

export default function Overview() {
  return (
    <div className="card p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">{tripMeta.title}</h1>
          <p className="text-sm font-medium text-blue-700 mt-1">{tripMeta.dates}</p>
          <p className="text-lg font-semibold text-stone-900 mt-1">{tripMeta.duration}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-stone-50 rounded-lg p-3">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Family</p>
            <p className="text-base text-stone-900 mt-1">{tripMeta.family.join(", ")}</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-3">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Budget</p>
            <p className="text-base text-stone-900 mt-1">{tripMeta.budgetRange}</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-3">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Base Cities</p>
            <p className="text-base text-stone-900 mt-1">{tripMeta.baseCities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
