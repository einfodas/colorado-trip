"use client";

import { itinerary } from "@/data/trip-data";

export default function TripCalendar() {
  const handleClick = (day: number) => {
    const el = document.getElementById(`day-${day}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-7 md:gap-3" style={{ WebkitOverflowScrolling: 'touch' }}>
      {itinerary.map((day) => (
        <button
          key={day.day}
          onClick={() => handleClick(day.day)}
          className="card min-w-[140px] snap-center p-3 text-left flex-shrink-0 hover:border-blue-300 transition-colors md:min-w-0 cursor-pointer"
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'rgba(59, 130, 246, 0.2)' }}
        >
          <p className="text-xs font-medium text-blue-700">{day.dayName}</p>
          <p className="text-2xl font-bold text-stone-900 mt-0.5">{day.date.split(" ")[1]}</p>
          <p className="text-xs text-stone-500">{day.date.split(" ")[0]}</p>
          <p className="text-sm font-medium text-stone-800 mt-2 line-clamp-2">{day.theme}</p>
          <p className="text-xs text-stone-500 mt-1">{day.location}</p>
        </button>
      ))}
    </div>
  );
}
