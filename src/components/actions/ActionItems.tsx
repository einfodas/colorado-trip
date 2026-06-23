"use client";

import { useState, useCallback } from "react";
import { beforeYouLeave } from "@/data/trip-data";

const STORAGE_KEY = "colorado-trip-actions";

const priorityColors = {
  critical: { dot: "bg-red-600", badge: "bg-red-50 text-red-700" },
  important: { dot: "bg-amber-500", badge: "bg-amber-50 text-amber-700" },
  nice: { dot: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700" },
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
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.task)}
                  className="w-5 h-5 rounded border-stone-300 text-blue-700 focus:ring-blue-500 mt-0.5"
                />
                <div className="flex-1">
                  <p className={`text-base ${isChecked ? "line-through text-stone-400" : "text-stone-900"}`}>
                    {item.task}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}>
                      {item.priority}
                    </span>
                    <span className="text-xs text-stone-500">{item.deadline}</span>
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
