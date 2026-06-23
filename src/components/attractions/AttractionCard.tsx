import { MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";
import { attractions, bonusAttractions } from "@/data/trip-data";
import type { Attraction } from "@/data/trip-data";
import { getCityColor } from "@/lib/colors";

function AttractionCard({ attraction }: { attraction: Attraction }) {
  const cc = getCityColor(attraction.city);
  return (
    <div className="card overflow-hidden">
      <div className={`${cc.bg} ${cc.bgDark} px-5 py-3 transition-colors`}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {attraction.name}
            {attraction.highlight && (
              <span className="ml-2 inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 align-middle">
                ⭐ NEW
              </span>
            )}
          </h3>
          <div className="flex gap-1.5 flex-shrink-0">
            <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} border ${cc.border} ${cc.borderDark} transition-colors`}>
              {attraction.city}
            </span>
            {attraction.free && (
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                FREE
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <p className="text-sm text-stone-600 dark:text-stone-400">{attraction.location}</p>
        {attraction.distanceFromDEN && (
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-1">
            <MapPin className="w-4 h-4 inline" />
            {attraction.distanceFromDEN}
          </p>
        )}
        <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-1">
          <Clock className="w-4 h-4 inline" />
          {attraction.duration}
        </p>

        <div className="mt-3">
          <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide flex items-center gap-1">
            <DollarSign className="w-4 h-4 inline" />
            Pricing
          </p>
          <ul className="mt-1 space-y-0.5">
            {attraction.pricing.map((p, i) => (
              <li key={i} className="text-sm text-stone-700 dark:text-stone-300">{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 transition-colors">
          <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Why for Aria</p>
          <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">{attraction.whyForAria}</p>
        </div>

        {attraction.tips.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">Tips</p>
            <ul className="mt-1 space-y-1">
              {attraction.tips.map((tip, i) => (
                <li key={i} className="text-sm text-stone-600 dark:text-stone-400 flex gap-2">
                  <span className="text-stone-400 dark:text-stone-500 flex-shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {attraction.website && (
            <a
              href={attraction.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              style={{ touchAction: 'manipulation' }}
            >
              {attraction.websiteLabel || attraction.website}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {attraction.mapUrl && (
            <a
              href={attraction.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              style={{ touchAction: 'manipulation' }}
            >
              View on Map
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AttractionCards() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4">
        {attractions.map((attraction) => (
          <AttractionCard key={attraction.name} attraction={attraction} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Bonus Attractions <span className="text-base font-normal text-stone-500 dark:text-stone-400">(if time allows)</span>
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {bonusAttractions.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </div>
    </div>
  );
}
