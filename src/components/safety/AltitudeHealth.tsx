import { altitudeData, altitudeSymptoms, altitudeAriaWatch, altitudePrevention, descendImmediately } from "@/data/trip-data";

const colorMap = {
  green: "bg-emerald-500",
  yellow: "bg-amber-400",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

const maxElevation = 14115;

export default function AltitudeHealth() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-4">Elevation & Risk Levels</h3>
        <div className="flex flex-col gap-3">
          {altitudeData.map((d) => {
            const elevNum = parseInt(d.elevation.replace(/[^0-9]/g, ""));
            const widthPct = (elevNum / maxElevation) * 100;
            return (
              <div key={d.location}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-stone-900">{d.location}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-500">{d.elevation}</span>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                      d.color === "green" ? "bg-emerald-50 text-emerald-700" :
                      d.color === "yellow" ? "bg-amber-50 text-amber-700" :
                      d.color === "orange" ? "bg-orange-50 text-orange-700" :
                      "bg-red-50 text-red-700"
                    }`}>
                      {d.riskLevel}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${colorMap[d.color]}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">Symptoms of Altitude Sickness</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {altitudeSymptoms.map((s) => (
            <div key={s} className="bg-stone-50 rounded-lg px-3 py-2 text-sm text-stone-700">{s}</div>
          ))}
        </div>
      </div>

      <div className="card p-4 md:p-6 border-amber-200">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">Watch for Aria</h3>
        <div className="grid grid-cols-2 gap-2">
          {altitudeAriaWatch.map((s) => (
            <div key={s} className="bg-amber-50 rounded-lg px-3 py-2 text-sm text-amber-800">{s}</div>
          ))}
        </div>
      </div>

      <div className="card p-4 md:p-6">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">Prevention Steps</h3>
        <ol className="space-y-2">
          {altitudePrevention.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-stone-700">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="card p-4 md:p-6 bg-red-50 border-red-200">
        <h3 className="text-lg font-semibold text-red-800 mb-3">Descend Immediately If:</h3>
        <ul className="space-y-2">
          {descendImmediately.map((s) => (
            <li key={s} className="flex gap-2 text-sm text-red-800">
              <span className="text-red-500 flex-shrink-0">!</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
