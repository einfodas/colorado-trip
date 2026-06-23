"use client";

import { tripMeta } from "@/data/trip-data";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Calendar", href: "#calendar" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Attractions", href: "#attractions" },
  { label: "Hotels", href: "#hotels" },
  { label: "Dining", href: "#dining" },
  { label: "Transport", href: "#transport" },
  { label: "Safety", href: "#safety" },
  { label: "Packing", href: "#packing" },
  { label: "Budget", href: "#budget" },
  { label: "Links", href: "#links" },
  { label: "Tasks", href: "#actions" },
];

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcons(next);
}

function updateThemeIcons(theme: string) {
  const sunIcons = document.querySelectorAll<HTMLElement>(".theme-sun");
  const moonIcons = document.querySelectorAll<HTMLElement>(".theme-moon");
  if (theme === "dark") {
    sunIcons.forEach((el) => el.classList.remove("hidden"));
    moonIcons.forEach((el) => el.classList.add("hidden"));
  } else {
    sunIcons.forEach((el) => el.classList.add("hidden"));
    moonIcons.forEach((el) => el.classList.remove("hidden"));
  }
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700 transition-colors">
      <div className="flex items-center justify-between h-14 px-4 max-w-6xl mx-auto">
        <a href="#" className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          {tripMeta.title}
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-blue-700 dark:hover:text-blue-400 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="relative z-10 ml-2 flex items-center justify-center w-9 h-9 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              willChange: 'transform'
            }}
          >
            <svg className="w-5 h-5 theme-sun hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="w-5 h-5 theme-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="relative z-10 flex items-center justify-center w-11 h-11 text-stone-600 dark:text-stone-400"
            aria-label="Toggle theme"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              willChange: 'transform'
            }}
          >
            <svg className="w-5 h-5 theme-sun hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="w-5 h-5 theme-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.654z" />
            </svg>
          </button>
          <a
            href="#mobile-nav"
            className="relative z-10 flex items-center justify-center w-11 h-11 text-stone-600 dark:text-stone-400"
            aria-label="Toggle menu"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              willChange: 'transform'
            }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav md:hidden border-t border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-2 transition-colors">
        <a href="#" className="block text-right px-3 py-2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-sm">
          ✕ Close
        </a>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block px-3 py-2.5 text-base text-stone-700 dark:text-stone-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
