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
        <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
          {item.time}
        </span>
        <p className="text-base font-medium text-stone-900 dark:text-stone-100 mt-1">{item.activity}</p>
        {item.notes && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{item.notes}</p>
        )}
      </div>
    </div>
  );
}
