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
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-3 font-medium text-stone-700">Location</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Elevation</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">High</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Low</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700">Rain</th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.map((w) => (
                <tr key={w.location} className="border-b border-stone-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-stone-900">{w.location}</td>
                  <td className="px-4 py-3 text-stone-600">{w.elevation}</td>
                  <td className="px-4 py-3 text-stone-600">{w.avgHigh}</td>
                  <td className="px-4 py-3 text-stone-600">{w.avgLow}</td>
                  <td className="px-4 py-3 text-stone-600">{w.rainDays}</td>
                  <td className="px-4 py-3 text-stone-600 hidden md:table-cell">{w.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-stone-900">Safety Rules</h3>
        {safetyRules.map((rule, idx) => (
          <div key={idx} className="card overflow-hidden">
            <button
              onClick={() => setExpandedRule(expandedRule === idx ? null : idx)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <span className="text-base font-medium text-stone-900">{rule.rule}</span>
              <svg
                className={`w-5 h-5 text-stone-400 transition-transform flex-shrink-0 ml-2 ${expandedRule === idx ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedRule === idx && (
              <div className="px-4 pb-3">
                <p className="text-sm text-stone-600">{rule.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
