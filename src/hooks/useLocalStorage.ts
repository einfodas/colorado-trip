"use client";

import { useState, useCallback } from "react";

export function useLocalStorage<T>(key: string, initial: T): [T, (updater: (prev: T) => T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch {
      return initial;
    }
  });

  const update = useCallback((updater: (prev: T) => T) => {
    setValue((prev) => {
      const next = updater(prev);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {}
      }
      return next;
    });
  }, [key]);

  return [value, update];
}
