import { MapPin, DollarSign } from "lucide-react";
import type { TimelineItem as TimelineItemType } from "@/data/trip-data";
import { attractions } from "@/data/trip-data";

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Map itinerary activity names to attraction card IDs
function findMatchingAttraction(activity: string): string | null {
  // Direct match
  const directMatch = attractions.find(a => a.name === activity);
  if (directMatch) return `attraction-${slugify(directMatch.name)}`;
  
  // Partial match (e.g., "Estes Park Aerial Tramway (optional)" → "Estes Park Aerial Tramway")
  const partialMatch = attractions.find(a => activity.includes(a.name));
  if (partialMatch) return `attraction-${slugify(partialMatch.name)}`;
  
  // Special cases
  if (activity.includes("Lookout Mountain") || activity.includes("Buffalo Herd")) {
    return `attraction-${slugify("Golden / Lookout Mountain")}`;
  }
  if (activity.includes("Bear Lake") || activity.includes("Sprague Lake") || 
      activity.includes("Echo Lake") || activity.includes("Trail Ridge Road") || 
      activity.includes("Lily Lake")) {
    return `attraction-${slugify("Rocky Mountain National Park (RMNP)")}`;
  }
  
  return null;
}

export default function TimelineItem({
  item,
  isLast,
}: {
  item: TimelineItemType;
  isLast: boolean;
}) {
  const attractionId = findMatchingAttraction(item.activity);
  
  const handleAttractionClick = (e: React.MouseEvent) => {
    if (!attractionId) return;
    e.preventDefault();
    
    const element = document.getElementById(attractionId);
    if (element) {
      // Wait for any layout changes, then scroll
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const offset = 80;
        window.scrollTo({
          top: rect.top + window.scrollY - offset,
          behavior: 'smooth'
        });
        // Update URL hash
        window.history.pushState(null, '', `#${attractionId}`);
      });
    }
  };
  
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
        </div>
        <p className="text-base font-medium text-stone-900 dark:text-stone-100 mt-1 flex items-center flex-wrap gap-1">
          {attractionId ? (
            <button
              onClick={handleAttractionClick}
              className="text-left hover:text-blue-600 dark:hover:text-blue-400 underline decoration-dotted underline-offset-2 transition-colors cursor-pointer"
              style={{ touchAction: "manipulation" }}
              title={`View ${item.activity} details`}
            >
              {item.activity}
            </button>
          ) : (
            item.activity
          )}
          {item.mapUrl && (
            <a
              href={item.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 active:scale-90 transition-transform duration-150"
              style={{ touchAction: "manipulation", minHeight: 44, minWidth: 44 }}
              aria-label={`Open ${item.activity} in Google Maps`}
            >
              <MapPin className="w-4 h-4" />
            </a>
          )}
        </p>
        {item.notes && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{item.notes}</p>
        )}
        {item.pricing && (
          <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mt-1 flex items-center gap-1 tabular-nums">
            <DollarSign className="w-4 h-4 inline" />
            {item.pricing}
          </p>
        )}
      </div>
    </div>
  );
}
