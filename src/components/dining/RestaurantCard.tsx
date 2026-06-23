import { MapPin, DollarSign, UtensilsCrossed, ExternalLink } from "lucide-react";
import { restaurants } from "@/data/trip-data";
import { getCityColor } from "@/lib/colors";

const cities = ["Denver", "Boulder", "Estes Park", "Colorado Springs"];

function RestaurantCard({ restaurant }: { restaurant: typeof restaurants[0] }) {
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-stone-900 dark:text-stone-100">{restaurant.name}</h4>
        <span className="text-sm font-medium text-stone-700 dark:text-stone-300 flex-shrink-0 flex items-center gap-1">
          <DollarSign className="w-4 h-4 inline" />
          {restaurant.avgCost}
        </span>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5 flex items-center gap-1">
        <UtensilsCrossed className="w-4 h-4 inline mr-1" />
        {restaurant.cuisine}
      </p>
      {restaurant.address && (
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-1">
          <MapPin className="w-4 h-4 inline mr-1" />
          {restaurant.address}
        </p>
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
          <ExternalLink className="w-4 h-4" />
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
        const cc = getCityColor(city);
        return (
          <div key={city}>
            <h3 className={`inline-flex px-3 py-1 rounded-lg text-base font-semibold ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} mb-3 transition-colors`}>{city}</h3>
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
