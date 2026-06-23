import { restaurants } from "@/data/trip-data";

const cities = ["Denver", "Boulder", "Estes Park", "Colorado Springs"];

function RestaurantCard({ restaurant }: { restaurant: typeof restaurants[0] }) {
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-stone-900 dark:text-stone-100">{restaurant.name}</h4>
        <span className="text-sm font-medium text-stone-700 dark:text-stone-300 flex-shrink-0">{restaurant.avgCost}</span>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{restaurant.cuisine}</p>
      {restaurant.address && (
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">📍 {restaurant.address}</p>
      )}
      <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{restaurant.notes}</p>
      {restaurant.mapUrl && (
        <a
          href={restaurant.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          View on Map
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function RestaurantCards() {
  return (
    <div className="flex flex-col gap-6">
      {cities.map((city) => {
        const cityRestaurants = restaurants.filter((r) => r.city === city);
        if (cityRestaurants.length === 0) return null;
        return (
          <div key={city}>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">{city}</h3>
            <div className="grid grid-cols-1 gap-3">
              {cityRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
