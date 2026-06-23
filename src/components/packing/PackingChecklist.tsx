"use client";

import { useState, useCallback } from "react";
import { packingList } from "@/data/trip-data";

const STORAGE_KEY = "colorado-trip-packing";

function loadChecked(): Record<string, boolean> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export default function PackingChecklist() {
  const [checked, setCheckedRaw] = useState<Record<string, boolean>>(loadChecked);

  const setChecked = useCallback((updater: (prev: Record<string, boolean>) => Record<string, boolean>) => {
    setCheckedRaw((prev) => {
      const next = updater(prev);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col gap-6">
      {packingList.map((group) => {
        const total = group.items.length;
        const done = group.items.filter((item) => checked[`${group.category}:${item}`]).length;
        return (
          <div key={group.category} className="card p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-lg font-normal tracking-tight leading-tight text-stone-900 dark:text-stone-100">{group.category}</h3>
              <span className="text-sm font-medium text-stone-500 dark:text-stone-400 tabular-nums">
                {done}/{total} packed
              </span>
            </div>

            <div className="w-full bg-stone-100 dark:bg-stone-700 rounded-full h-2 mb-4 transition-colors">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all"
                style={{ width: `${total > 0 ? (done / total) * 100 : 0}%` }}
              />
            </div>

            <ul className="space-y-2">
              {group.items.map((item) => {
                const key = `${group.category}:${item}`;
                const isChecked = !!checked[key];
                return (
                  <li key={item}>
                    <label className="flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform duration-100">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(key)}
                        className="w-5 h-5 rounded border-stone-300 dark:border-stone-600 text-blue-700 dark:text-blue-500 focus:ring-blue-500"
                        style={{ touchAction: 'manipulation' }}
                      />
                      <span className={`text-base leading-relaxed ${isChecked ? "line-through text-stone-400 dark:text-stone-500" : "text-stone-700 dark:text-stone-300"}`}>
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
