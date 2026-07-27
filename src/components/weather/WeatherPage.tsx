"use client";

import { weatherData, itinerary } from "@/data/trip-data";

const dayWeatherMap: Record<number, string[]> = {
  1: ["Denver"],
  2: ["Denver"],
  3: ["Denver"],
  4: ["Denver", "Boulder"],
  5: ["Denver", "Colorado Springs", "Estes Park"],
  6: ["Estes Park", "RMNP Summit"],
  7: ["Estes Park", "Denver"],
};

const conditions: Record<string, { icon: string; label: string }> = {
  Denver: { icon: "☀️", label: "Sunny" },
  Boulder: { icon: "⛅", label: "Partly Cloudy" },
  "Estes Park": { icon: "🌤️", label: "Mostly Sunny" },
  "Colorado Springs": { icon: "☀️", label: "Sunny" },
  "RMNP Summit": { icon: "🏔️", label: "Cool & Windy" },
};

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-2xl font-normal tracking-tight text-stone-900 dark:text-stone-100 mb-2">
          Weather by Day
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-8">
          July 29 – August 4, 2026 — Average conditions for this time of year
        </p>

        <div className="flex flex-col gap-4">
          {itinerary.map((day) => {
            const locations = dayWeatherMap[day.day] || [];
            return (
              <div key={day.day} className="card overflow-hidden">
                <div className="px-4 py-3 bg-sky-50 dark:bg-sky-950/30 border-b border-sky-200 dark:border-sky-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-sky-700 dark:text-sky-300 uppercase tracking-wide">
                        Day {day.day} — {day.dayName}
                      </span>
                      <h2 className="text-base font-medium text-stone-900 dark:text-stone-100 mt-0.5">
                        {day.date}
                      </h2>
                    </div>
                    <span className="text-xs text-stone-500 dark:text-stone-400 hidden sm:block">
                      {day.theme}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  {locations.map((loc) => {
                    const w = weatherData.find((d) => d.location === loc);
                    const c = conditions[loc] || { icon: "🌡️", label: "Variable" };
                    if (!w) return null;
                    return (
                      <div
                        key={loc}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
                      >
                        <div className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                              {loc}
                            </span>
                            <span className="text-xs text-stone-400 dark:text-stone-500">
                              {w.elevation}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                              H: {w.avgHigh}
                            </span>
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              L: {w.avgLow}
                            </span>
                            <span className="text-xs text-stone-500 dark:text-stone-400">
                              Rain: {w.rainDays}
                            </span>
                          </div>
                          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                            {c.label} — {w.notes}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
          <h3 className="text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">
            ⚡ Afternoon Thunderstorms
          </h3>
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            Colorado summers feature sunny mornings with thunderstorms developing 2-4 PM. Be off
            exposed mountain ridges and summits by noon. Pack layers — temperatures drop 5-11°C at
            higher elevations and in the evenings.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-1 mt-6 text-sm text-sky-600 dark:text-sky-400 hover:underline"
        >
          ← Back to Trip Overview
        </a>
      </div>
    </div>
  );
}
