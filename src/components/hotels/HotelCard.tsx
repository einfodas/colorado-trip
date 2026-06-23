import { hotels } from "@/data/trip-data";

const cities = ["Denver", "Estes Park", "Colorado Springs"];

function HotelCard({ hotel }: { hotel: typeof hotels[0] }) {
  return (
    <div className="card p-4 md:p-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">{hotel.name}</h3>
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
            {hotel.city}
          </span>
          {hotel.highlight && (
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
              ★
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{hotel.address}</p>
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100 mt-2">{hotel.rate}</p>
      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{hotel.why}</p>

      {hotel.distanceToAttraction && (
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{hotel.distanceToAttraction}</p>
      )}

      {hotel.highlight && (
        <p className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2 mt-2 transition-colors">{hotel.highlight}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={hotel.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          {hotel.bookingLabel}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        {hotel.mapUrl && (
          <a
            href={hotel.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            View on Map
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function HotelCards() {
  return (
    <div className="flex flex-col gap-6">
      {cities.map((city) => {
        const cityHotels = hotels.filter((h) => h.city === city);
        if (cityHotels.length === 0) return null;
        return (
          <div key={city}>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">{city}</h3>
            <div className="grid grid-cols-1 gap-4">
              {cityHotels.map((hotel) => (
                <HotelCard key={hotel.name} hotel={hotel} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
