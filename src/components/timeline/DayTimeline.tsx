"use client";

import { useState, useEffect } from "react";
import {
  Car,
  Clock,
  Sun,
  Cloud,
  Snowflake,
  AlertTriangle,
  Mountain,
  Droplets,
  Shirt,
  Footprints,
  Apple,
  Wind,
  Compass,
  Bed,
  UtensilsCrossed,
  HeartPulse,
  Package,
} from "lucide-react";
import { itinerary, weatherData, altitudeData } from "@/data/trip-data";
import TimelineItem from "./TimelineItem";
import { getCityColor, getCityFromLocation } from "@/lib/colors";

type DayWeather = {
  icon: typeof Sun;
  high: string;
  low: string;
  label: string;
};

type PackingBadge = {
  icon: typeof Sun;
  label: string;
};

const dayWeatherMap: Record<number, DayWeather> = {
  1: { icon: Sun, high: "87-90°F", low: "60-64°F", label: "Denver" },
  2: { icon: Sun, high: "87-90°F", low: "60-64°F", label: "Denver" },
  3: { icon: Cloud, high: "78-82°F", low: "50-55°F", label: "Estes Park" },
  4: { icon: Snowflake, high: "50-60°F", low: "35-42°F", label: "RMNP Summit" },
  5: { icon: Sun, high: "83-86°F", low: "55-58°F", label: "Colorado Springs" },
  6: { icon: Cloud, high: "83-86°F", low: "55-58°F", label: "Colorado Springs" },
  7: { icon: Sun, high: "87-90°F", low: "60-64°F", label: "Denver" },
};

const dayPackingMap: Record<number, PackingBadge[]> = {
  1: [
    { icon: Droplets, label: "Water bottle" },
  ],
  2: [
    { icon: Sun, label: "Sunscreen" },
    { icon: Droplets, label: "Water bottle" },
  ],
  3: [
    { icon: Sun, label: "Sunscreen" },
    { icon: Droplets, label: "Water bottle" },
    { icon: Shirt, label: "Layers" },
    { icon: Footprints, label: "Hiking shoes" },
  ],
  4: [
    { icon: Sun, label: "Sunscreen" },
    { icon: Droplets, label: "Water bottle" },
    { icon: Shirt, label: "Layers" },
    { icon: Footprints, label: "Hiking shoes" },
    { icon: Apple, label: "Snacks" },
  ],
  5: [
    { icon: Sun, label: "Sunscreen" },
    { icon: Droplets, label: "Water bottle" },
    { icon: Footprints, label: "Hiking shoes" },
  ],
  6: [
    { icon: Shirt, label: "Layers" },
    { icon: Sun, label: "Sunscreen" },
    { icon: Droplets, label: "Water bottle" },
    { icon: Wind, label: "Rain jacket" },
  ],
  7: [
    { icon: Droplets, label: "Water bottle" },
  ],
};

const dayAltitudeMap: Record<number, { maxElevation: string; riskLevel: string; color: string } | null> = {
  1: null,
  2: null,
  3: null,
  4: { maxElevation: "12,183 ft", riskLevel: "Very High", color: "red" },
  5: null,
  6: { maxElevation: "14,115 ft", riskLevel: "Extreme", color: "red" },
  7: null,
};

const jumpLinks = [
  { id: "attractions", label: "Attractions", icon: Compass },
  { id: "hotels", label: "Hotels", icon: Bed },
  { id: "dining", label: "Dining", icon: UtensilsCrossed },
  { id: "safety", label: "Safety", icon: AlertTriangle },
  { id: "altitude", label: "Altitude", icon: HeartPulse },
  { id: "packing", label: "Packing", icon: Package },
];

export default function DayTimeline() {
  const [openDay, setOpenDay] = useState(1);

  // Listen for hash changes to auto-expand the targeted day
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#day-')) {
        const dayNum = parseInt(hash.replace('#day-', ''), 10);
        if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= 7) {
          setOpenDay(dayNum);
        }
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {itinerary.map((day) => {
        const cc = getCityColor(getCityFromLocation(day.location));
        const weather = dayWeatherMap[day.day];
        const packing = dayPackingMap[day.day];
        const altitude = dayAltitudeMap[day.day];
        const isOpen = openDay === day.day;
        const WeatherIcon = weather.icon;

        return (
          <div
            key={day.day}
            id={`day-${day.day}`}
            className="card overflow-hidden scroll-mt-16"
          >
            {day.critical && (
              <div className="bg-red-600 text-white px-4 py-2 text-sm font-medium">
                {day.critical}
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
              className="w-full flex items-stretch cursor-pointer select-none text-left"
              style={{ touchAction: "manipulation" }}
            >
              <div className={`w-1.5 rounded-l-lg ${cc.bg} ${cc.bgDark} flex-shrink-0 transition-colors`} />
              <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 flex-1 min-w-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">
                      Day {day.day}: {day.date}
                    </p>
                    {altitude && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                        <Mountain className="w-3 h-3" />
                        {altitude.maxElevation}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{day.theme}</p>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                      <WeatherIcon className="w-3.5 h-3.5" />
                      {weather.high} / {weather.low}
                    </span>
                    <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${cc.bg} ${cc.bgDark} ${cc.text} ${cc.textDark} transition-colors`}>
                      {day.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                  <svg
                    className={`w-5 h-5 text-stone-400 dark:text-stone-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                  {altitude && (
                    <div className="mb-4 flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-red-700 dark:text-red-300">
                          Altitude Warning: {altitude.riskLevel} Risk
                        </p>
                        <p className="text-red-600 dark:text-red-400 mt-0.5">
                          Max elevation: {altitude.maxElevation}. Watch for headache, nausea, dizziness in Aria. Descend immediately if symptoms worsen.
                        </p>
                      </div>
                    </div>
                  )}

                  {packing.length > 0 && (
                    <div className="mb-4 flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-medium text-stone-500 dark:text-stone-400 mr-1">Pack:</span>
                      {packing.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                            title={item.label}
                          >
                            <Icon className="w-3 h-3" />
                            <span className="hidden sm:inline">{item.label}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}

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

                  <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400 mr-1">Jump to:</span>
                    {jumpLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.id}
                          href={`#${link.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(link.id);
                            if (el) {
                              const rect = el.getBoundingClientRect();
                              window.scrollTo({
                                top: rect.top + window.scrollY - 64,
                                behavior: "smooth",
                              });
                              window.history.pushState(null, "", `#${link.id}`);
                            }
                          }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                          style={{ touchAction: "manipulation" }}
                        >
                          <Icon className="w-3 h-3" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
