"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    // Intercept clicks on anchor links to handle scroll manually
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Skip day-N anchors — TripCalendar handles those with accordion expand timing
      if (/^#day-\d+$/.test(href)) return;

      const id = href.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Prevent default to stop Next.js from interfering
        e.preventDefault();
        
        // Update URL hash without triggering navigation
        window.history.pushState(null, "", href);
        
        // Scroll to element
        const rect = element.getBoundingClientRect();
        const offset = 80; // Account for fixed header
        window.scrollTo({
          top: rect.top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    };
    
    // Handle initial hash on page load
    const handleInitialHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 80;
          window.scrollTo({
            top: rect.top + window.scrollY - offset,
            behavior: "instant" as ScrollBehavior,
          });
        }
      }
    };
    
    // Attach click listener to document
    document.addEventListener("click", handleClick);
    
    // Handle initial hash after a delay to ensure DOM is ready
    setTimeout(handleInitialHash, 100);
    
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
