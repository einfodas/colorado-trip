import type { TimelineItem as TimelineItemType } from "@/data/trip-data";

export default function TimelineItem({
  item,
  isLast,
}: {
  item: TimelineItemType;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-blue-700 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-0.5 flex-1 bg-stone-200 dark:bg-stone-700 my-1" />}
      </div>

      <div className="flex-1 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            {item.time}
          </span>
          {item.mapUrl && (
            <a
              href={item.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
              style={{ touchAction: "manipulation", minHeight: 44, minWidth: 44 }}
              aria-label={`Open ${item.activity} in Google Maps`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden sm:inline">Map</span>
            </a>
          )}
        </div>
        <p className="text-base font-medium text-stone-900 dark:text-stone-100 mt-1">{item.activity}</p>
        {item.notes && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{item.notes}</p>
        )}
        {item.pricing && (
          <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mt-1">
            💰 {item.pricing}
          </p>
        )}
      </div>
    </div>
  );
}
