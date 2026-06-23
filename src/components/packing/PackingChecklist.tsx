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
              <h3 className="text-lg font-semibold text-stone-900">{group.category}</h3>
              <span className="text-sm font-medium text-stone-500">
                {done}/{total} packed
              </span>
            </div>

            <div className="w-full bg-stone-100 rounded-full h-2 mb-4">
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
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(key)}
                        className="w-5 h-5 rounded border-stone-300 text-blue-700 focus:ring-blue-500"
                      />
                      <span className={`text-base ${isChecked ? "line-through text-stone-400" : "text-stone-700"}`}>
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
