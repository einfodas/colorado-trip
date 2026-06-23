"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

// Module-level shared state — all components using useTheme stay in sync
let currentTheme: Theme =
  typeof window !== "undefined"
    ? ((localStorage.getItem("theme") as Theme) || "light")
    : "light";

const listeners = new Set<(theme: Theme) => void>();

function notify(theme: Theme) {
  listeners.forEach((l) => l(theme));
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    listeners.add(setTheme);
    // Sync on mount in case another component changed it before this mounted
    setTheme(currentTheme);
    return () => {
      listeners.delete(setTheme);
    };
  }, []);

  const toggle = useCallback(() => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    notify(currentTheme);
  }, []);

  return { theme, toggle } as const;
}
