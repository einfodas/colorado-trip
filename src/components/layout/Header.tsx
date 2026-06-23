"use client";

import { useState } from "react";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="flex items-center justify-between h-14 px-4 max-w-6xl mx-auto">
        <a href="#" className="text-lg font-semibold tracking-tight text-stone-900">
          {tripMeta.title}
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-sm text-stone-600 hover:text-blue-700 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
              style={{ touchAction: 'manipulation' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-stone-600 cursor-pointer"
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'rgba(59, 130, 246, 0.2)' }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-stone-200 bg-white px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-base text-stone-700 hover:text-blue-700 hover:bg-stone-50 rounded-lg cursor-pointer"
              style={{ touchAction: 'manipulation' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
