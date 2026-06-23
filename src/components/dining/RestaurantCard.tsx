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
      <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{restaurant.notes}</p>
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
