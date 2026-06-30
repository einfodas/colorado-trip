import { MapPin, DollarSign, Car, ExternalLink, Star, Calendar, CheckCircle } from "lucide-react";
import { hotels } from "@/data/trip-data";
import { getCityColor } from "@/lib/colors";

const cities = ["Denver", "Estes Park", "Colorado Springs"];

function HotelCard({ hotel }: { hotel: typeof hotels[0] }) {
  const isConfirmed = hotel.confirmed;

  return (
    <div className={`card p-4 md:p-6 hover:shadow-md transition-shadow duration-200 ${
      isConfirmed 
        ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700" 
        : ""
    }`}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">
              {hotel.name}
            </h3>
            {isConfirmed && (
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
            )}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
              {hotel.city}
            </span>
            {isConfirmed && (
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                Confirmed
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-600 dark:text-stone-400 flex items-center gap-1">
        <MapPin className="w-4 h-4 inline mr-1 flex-shrink-0" />
        {hotel.address}
      </p>

      {isConfirmed && hotel.checkIn && hotel.checkOut && (
        <div className="mt-3 p-3 bg-white dark:bg-stone-900 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-900 dark:text-green-200">
              Booking Details
            </span>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-stone-600 dark:text-stone-400">Check-in:</span>
              <span className="font-medium text-stone-900 dark:text-stone-100">{hotel.checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600 dark:text-stone-400">Check-out:</span>
              <span className="font-medium text-stone-900 dark:text-stone-100">{hotel.checkOut}</span>
            </div>
            {hotel.confirmationNo && (
              <div className="flex justify-between pt-1 border-t border-green-200 dark:border-green-800 mt-1">
                <span className="text-stone-600 dark:text-stone-400">Confirmation #:</span>
                <span className="font-mono text-xs font-medium text-stone-900 dark:text-stone-100">
                  {hotel.confirmationNo}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {!isConfirmed && (
        <>
          <p className="text-sm font-medium text-stone-900 dark:text-stone-100 mt-2 flex items-center gap-1 tabular-nums">
            <DollarSign className="w-4 h-4 inline mr-1" />
            {hotel.rate}
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{hotel.why}</p>
        </>
      )}

      {hotel.distanceToAttraction && (
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 flex items-center gap-1">
          <Car className="w-4 h-4 inline mr-1" />
          {hotel.distanceToAttraction}
        </p>
      )}

      {hotel.highlight && !isConfirmed && (
        <p className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2 mt-2 transition-colors">
          {hotel.highlight}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={hotel.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.97] transition-all duration-150"
          style={{ touchAction: "manipulation" }}
        >
          {hotel.bookingLabel}
          <ExternalLink className="w-4 h-4" />
        </a>
        {hotel.mapUrl && (
          <a
            href={hotel.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.97] transition-all duration-150"
            style={{ touchAction: "manipulation" }}
          >
            View on Map
            <ExternalLink className="w-4 h-4" />
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
        const cc = getCityColor(city);
        return (
          <div key={city}>
            <h3 className={`inline-flex px-3 py-1 rounded-lg text-base font-semibold ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} mb-3 transition-colors`}>{city}</h3>
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
