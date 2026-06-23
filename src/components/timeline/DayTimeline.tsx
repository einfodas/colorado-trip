import { Car, Clock } from "lucide-react";
import { itinerary } from "@/data/trip-data";
import TimelineItem from "./TimelineItem";
import { getCityColor, getCityFromLocation } from "@/lib/colors";

export default function DayTimeline() {
  return (
    <div className="flex flex-col gap-4">
      {itinerary.map((day, idx) => {
        const cc = getCityColor(getCityFromLocation(day.location));
        return (
          <details
            key={day.day}
            id={`day-${day.day}`}
            className="card overflow-hidden scroll-mt-16 group"
            open={idx === 0}
          >
            {day.critical && (
              <div className="bg-red-600 text-white px-4 py-2 text-sm font-medium">
                {day.critical}
              </div>
            )}

            <summary className="flex items-stretch cursor-pointer list-none select-none">
              <div className={`w-1.5 rounded-l-lg ${cc.bg} ${cc.bgDark} flex-shrink-0 transition-colors`} />
              <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 flex-1 min-w-0">
                <div className="min-w-0">
                  <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    Day {day.day}: {day.date}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{day.theme}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                  <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} transition-colors`}>
                    {day.location}
                  </span>
                  <svg
                    className="w-5 h-5 text-stone-400 dark:text-stone-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </summary>

            <div className="px-4 pb-4 md:px-6 md:pb-6">
              <div className="relative">
                {day.timeline.map((item, itemIdx) => (
                  <TimelineItem key={itemIdx} item={item} isLast={itemIdx === day.timeline.length - 1} />
                ))}
              </div>

              <div className="mt-4 bg-stone-50 dark:bg-stone-800 rounded-lg p-3 transition-colors">
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <Car className="w-4 h-4 inline mr-1" />
                  Driving: {day.driving}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 flex items-center gap-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Total: {day.totalDriving}
                </p>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
