"use client";

import { useEffect } from "react";

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  console.log('[ScrollHandler] scrollToHash:', { hash, id, elementFound: !!element });
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log('[ScrollHandler] scrollIntoView called');
    return true;
  }
  return false;
}

export default function ScrollHandler() {
  useEffect(() => {
    console.log('[ScrollHandler] Mounted and initialized');
    
    // Handle initial hash on page load
    // Multiple attempts to ensure DOM is fully rendered
    const tryScroll = (attempts: number) => {
      if (attempts <= 0) return;
      if (window.location.hash) {
        const success = scrollToHash(window.location.hash);
        console.log('[ScrollHandler] Initial scroll attempt:', { hash: window.location.hash, success });
        if (!success) {
          setTimeout(() => tryScroll(attempts - 1), 100);
        }
      }
    };
    
    setTimeout(() => tryScroll(5), 50);

    // Handle hash changes from anchor link clicks
    // This is the ONLY scroll handler needed - browser automatically
    // changes hash when clicking anchor links
    const handleHashChange = () => {
      console.log('[ScrollHandler] Hash changed:', window.location.hash);
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    console.log('[ScrollHandler] Hashchange listener attached');

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
