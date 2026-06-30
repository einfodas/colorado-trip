"use client";

import { useState } from "react";
import { weatherData, safetyRules } from "@/data/trip-data";

export default function WeatherSafety() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-50 dark:bg-sky-950/30 border-b border-sky-200 dark:border-sky-800 transition-colors">
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200">Location</th>
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200">Elevation</th>
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200">High</th>
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200">Low</th>
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200">Rain</th>
                <th className="text-left px-3 py-2.5 md:px-4 md:py-3 font-medium text-sky-900 dark:text-sky-200 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.map((w) => (
                <tr key={w.location} className="border-b border-stone-100 dark:border-stone-700 last:border-0 transition-colors">
                  <td className="px-3 py-2.5 md:px-4 md:py-3 font-medium text-stone-900 dark:text-stone-100">{w.location}</td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3 text-stone-600 dark:text-stone-400">{w.elevation}</td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3 text-stone-600 dark:text-stone-400">{w.avgHigh}</td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3 text-stone-600 dark:text-stone-400">{w.avgLow}</td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3 text-stone-600 dark:text-stone-400">{w.rainDays}</td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3 text-stone-600 dark:text-stone-400 hidden md:table-cell">{w.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">Safety Rules</h3>
        {safetyRules.map((rule, idx) => (
          <div key={idx} className="card overflow-hidden">
            <button
              onClick={() => setExpandedRule(expandedRule === idx ? null : idx)}
              className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
              style={{ touchAction: 'manipulation' }}
              type="button"
            >
              <span className="text-base font-medium text-stone-900 dark:text-stone-100">{rule.rule}</span>
              <svg
                className={`w-5 h-5 text-stone-400 dark:text-stone-500 transition-transform duration-200 flex-shrink-0 ml-2 ${expandedRule === idx ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: expandedRule === idx ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-3">
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{rule.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
