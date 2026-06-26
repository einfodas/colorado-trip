"use client";

import { useTheme } from "@/hooks/useTheme";
import { CalendarDays, MapPin, Home, Info, ClipboardList, Sun, Moon, type LucideIcon } from "lucide-react";

const navItems: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Itinerary", href: "#itinerary", icon: CalendarDays },
  { label: "Places", href: "#attractions", icon: MapPin },
  { label: "Stay", href: "#hotels", icon: Home },
  { label: "Info", href: "#safety", icon: Info },
  { label: "Checklist", href: "#packing", icon: ClipboardList },
];

export default function MobileNav() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700 transition-colors"
      style={{
        touchAction: 'manipulation',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full text-stone-500 dark:text-stone-400 active:text-blue-700 dark:active:text-blue-400 min-w-[44px] cursor-pointer"
            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'rgba(59, 130, 246, 0.2)' }}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
          </a>
        ))}
        <button
          onClick={toggle}
          className="flex flex-col items-center justify-center w-full h-full text-stone-500 dark:text-stone-400 active:text-blue-700 dark:active:text-blue-400 min-w-[44px] cursor-pointer"
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'rgba(59, 130, 246, 0.2)' }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-6 h-6" strokeWidth={1.5} /> : <Moon className="w-6 h-6" strokeWidth={1.5} />}
          <span className="text-[10px] mt-0.5 font-medium">Theme</span>
        </button>
      </div>
    </nav>
  );
}
