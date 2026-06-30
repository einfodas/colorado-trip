import { Plane, Clock, MapPin } from "lucide-react";
import { flights } from "@/data/trip-data";

export default function FlightCard() {
  return (
    <div className="space-y-6">
      <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl font-normal tracking-tight text-stone-900 dark:text-stone-100">
              Delta Flight 3876
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Round-trip bookings confirmed
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {flights.map((flight, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-900 rounded-lg p-4 shadow-sm border border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  {flight.date}
                </span>
                <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                  Delta {flight.flightNumber}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-stone-400" />
                    <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {flight.from}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-stone-400" />
                    <span className="text-base font-medium text-stone-700 dark:text-stone-300 tabular-nums">
                      {flight.departure}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 relative">
                    <Plane className="w-4 h-4 text-blue-600 dark:text-blue-400 absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-90" />
                  </div>
                  <span className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    {idx === 0 ? "1h 23m" : "3h 15m"}
                  </span>
                </div>

                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {flight.to}
                    </span>
                    <MapPin className="w-4 h-4 text-stone-400" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-base font-medium text-stone-700 dark:text-stone-300 tabular-nums">
                      {flight.arrival}
                    </span>
                    <Clock className="w-4 h-4 text-stone-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Important:</strong> Arrive at Denver International Airport at least 2 hours before departure. Allow extra time for car rental return.
          </p>
        </div>
      </div>
    </div>
  );
}
