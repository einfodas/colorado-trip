"use client";

import { useState, useCallback } from "react";
import { beforeYouLeave } from "@/data/trip-data";

const STORAGE_KEY = "colorado-trip-actions";

const priorityColors = {
  critical: { dot: "bg-red-600", badge: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400" },
  important: { dot: "bg-amber-500", badge: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" },
  nice: { dot: "bg-emerald-500", badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" },
  completed: { dot: "bg-stone-400", badge: "bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400" },
};

function loadChecked(): Record<string, boolean> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export default function ActionItems() {
  const [checked, setCheckedRaw] = useState<Record<string, boolean>>(loadChecked);

  const setChecked = useCallback((updater: (prev: Record<string, boolean>) => Record<string, boolean>) => {
    setCheckedRaw((prev) => {
      const next = updater(prev);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggle = (task: string) => {
    setChecked((prev) => ({ ...prev, [task]: !prev[task] }));
  };

  return (
    <div className="card p-4 md:p-6">
      <ul className="space-y-3">
        {beforeYouLeave.map((item) => {
          const isChecked = !!checked[item.task];
          const colors = priorityColors[item.priority as keyof typeof priorityColors];
          return (
            <li key={item.task}>
              <label className="flex items-start gap-3 cursor-pointer active:scale-[0.98] transition-transform duration-100">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.task)}
                  className="w-5 h-5 rounded border-stone-300 dark:border-stone-600 text-blue-700 dark:text-blue-500 focus:ring-blue-500 mt-0.5"
                  style={{ touchAction: 'manipulation' }}
                />
                <div className="flex-1">
                  <p className={`text-base ${isChecked ? "line-through text-stone-400 dark:text-stone-500" : "text-stone-900 dark:text-stone-100"}`}>
                    {item.task}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}>
                      {item.priority}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400">{item.deadline}</span>
                  </div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
