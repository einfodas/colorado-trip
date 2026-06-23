"use client";

import { MapPin } from "lucide-react";
import { itinerary } from "@/data/trip-data";
import { getCityColor, getCityFromLocation } from "@/lib/colors";

export default function TripCalendar() {
  const handleDayClick = (e: React.MouseEvent<HTMLAnchorElement>, dayNum: number) => {
    e.preventDefault();
    const href = `#day-${dayNum}`;
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 80;
      window.scrollTo({
        top: rect.top + window.scrollY - offset,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div id="calendar" className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-7 md:gap-3" style={{ WebkitOverflowScrolling: 'touch' }}>
      {itinerary.map((day) => {
        const cc = getCityColor(getCityFromLocation(day.location));
        return (
          <a
            key={day.day}
            href={`#day-${day.day}`}
            onClick={(e) => handleDayClick(e, day.day)}
            className="card snap-center overflow-hidden text-left flex-shrink-0 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-150 block w-full md:w-auto md:h-[180px] md:min-w-0 flex flex-col"
          >
            <div className={`${cc.bg} ${cc.bgDark} px-3 pt-3 pb-2 transition-colors`}>
              <p className={`text-xs font-medium ${cc.textMuted} ${cc.textMutedDark}`}>{day.dayName}</p>
              <p className="font-display text-2xl text-stone-900 dark:text-stone-100 mt-0.5">{day.date.split(" ")[1]}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">{day.date.split(" ")[0]}</p>
            </div>
            <div className="px-3 pt-2 pb-3 flex-1 flex flex-col justify-end">
              <p className="text-sm font-medium text-stone-800 dark:text-stone-200 line-clamp-2">{day.theme}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-1 flex items-center gap-0.5">
                <MapPin className="w-3 h-3 inline mr-0.5" />
                {day.location}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
