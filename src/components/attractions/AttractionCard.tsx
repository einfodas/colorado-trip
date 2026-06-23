import { attractions } from "@/data/trip-data";
import type { Attraction } from "@/data/trip-data";

function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="card p-4 md:p-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-stone-900">{attraction.name}</h3>
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-700">
            {attraction.city}
          </span>
          {attraction.free && (
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
              FREE
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-stone-600 mt-1">{attraction.location}</p>
      {attraction.distanceFromDEN && (
        <p className="text-xs text-stone-500 mt-0.5">From DEN: {attraction.distanceFromDEN}</p>
      )}
      <p className="text-sm text-stone-600 mt-1">Duration: {attraction.duration}</p>

      <div className="mt-3">
        <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Pricing</p>
        <ul className="mt-1 space-y-0.5">
          {attraction.pricing.map((p, i) => (
            <li key={i} className="text-sm text-stone-700">{p}</li>
          ))}
        </ul>
      </div>

      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-wide">Why for Aria</p>
        <p className="text-sm text-emerald-800 mt-1">{attraction.whyForAria}</p>
      </div>

      {attraction.tips.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Tips</p>
          <ul className="mt-1 space-y-1">
            {attraction.tips.map((tip, i) => (
              <li key={i} className="text-sm text-stone-600 flex gap-2">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {attraction.website && (
        <a
          href={attraction.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
        >
          {attraction.websiteLabel || attraction.website}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function AttractionCards() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.name} attraction={attraction} />
      ))}
    </div>
  );
}
