import { itinerary } from "@/data/trip-data";

export default function TripCalendar() {
  return (
    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-7 md:gap-3" style={{ WebkitOverflowScrolling: 'touch' }}>
      {itinerary.map((day) => (
        <a
          key={day.day}
          href={`#day-${day.day}`}
          className="card min-w-[140px] snap-center p-3 text-left flex-shrink-0 hover:border-blue-300 transition-colors md:min-w-0 block"
        >
          <p className="text-xs font-medium text-blue-700">{day.dayName}</p>
          <p className="text-2xl font-bold text-stone-900 mt-0.5">{day.date.split(" ")[1]}</p>
          <p className="text-xs text-stone-500">{day.date.split(" ")[0]}</p>
          <p className="text-sm font-medium text-stone-800 mt-2 line-clamp-2">{day.theme}</p>
          <p className="text-xs text-stone-500 mt-1">{day.location}</p>
        </a>
      ))}
    </div>
  );
}
