# Fix All Interactive Elements + Add Dark Theme

## Context
This is a simple static Next.js site for a Colorado family vacation. It must work flawlessly on iOS Safari (iPhone). The user has reported that hamburger menu, accordions, and calendar taps don't work on their phone.

## Root Causes Identified (via thorough testing)

### 1. Hamburger Menu — BROKEN ON iOS
- **Current**: CSS checkbox hack using `peer-checked:block` with Tailwind v4
- **Generated CSS**: `.peer-checked\:block:is(:where(.peer):checked~*){display:block}`
- **Problem**: The `:is(:where(.peer):checked~*)` selector chain is unreliable on iOS Safari WebKit. The `:where()` inside `:is()` with sibling combinator `~` creates a complex specificity chain that WebKit sometimes fails to evaluate correctly.
- **Fix**: Replace with a minimal inline JavaScript toggle. No React state needed — just a simple `onclick` that toggles a class. This works on every browser including iOS Safari.

### 2. Accordions (details/summary) — NEEDS iOS TOUCH FIX
- **Current**: Native HTML `<details>/<summary>` elements (correct approach)
- **Problem**: iOS Safari intercepts taps on `<summary>` as scroll gestures when inside scrollable containers or when touch-action isn't set
- **Fix**: Add `touch-action: manipulation` and `-webkit-tap-highlight-color: transparent` to all `<summary>` elements. Also add `cursor: pointer` explicitly.

### 3. Calendar Date Taps — NEEDS VERIFICATION
- **Current**: Native `<a href="#day-N">` anchor links
- **Should work**: These are native browser anchor links, no JS needed
- **Fix**: Add `touch-action: manipulation` to calendar links as well

### 4. Dark Theme — MISSING
- Need a complete dark theme with toggle next to hamburger
- Must use CSS custom properties for all colors
- Toggle must persist preference in localStorage
- Must work on both desktop and mobile

## Tasks for Kilo

### Task 1: Fix Hamburger Menu (Header.tsx)
Replace the CSS checkbox hack with a simple JS toggle:
- Remove: `<input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />`
- Remove: `peer-checked:block` from mobile nav className
- Add: `id="mobile-nav"` to the mobile nav element
- Add: `onclick` handler to the label that toggles `mobile-nav` visibility
- Use `document.getElementById('mobile-nav').classList.toggle('hidden')` — pure DOM, no React state
- The mobile nav should start hidden and toggle on each tap

### Task 2: Fix Summary Touch Events (globals.css)
Add to globals.css:
```css
summary {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
```

### Task 3: Fix Calendar Link Touch (globals.css or TripCalendar.tsx)
Add to calendar links:
```css
#calendar a {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
```

### Task 4: Add Dark Theme
1. Create a theme system using CSS custom properties in globals.css
2. Add `[data-theme="dark"]` selector that overrides all color variables
3. Add a theme toggle button in the header next to the hamburger (desktop: next to nav links)
4. Toggle should:
   - Switch `data-theme` attribute on `<html>` element
   - Save preference to localStorage
   - Load preference on page load (inline script in layout.tsx to prevent flash)
5. Dark theme colors:
   - Background: stone-900 (#1c1917)
   - Surface/cards: stone-800 (#292524)
   - Text primary: stone-100 (#f5f5f4)
   - Text secondary: stone-400 (#a6a09b)
   - Borders: stone-700 (#44403b)
   - Accent: blue-500 for links/active states
6. Ensure ALL components respond to dark theme:
   - Header (bg-white → bg-stone-900, text-stone-900 → text-stone-100)
   - Cards (bg-white → bg-stone-800, borders)
   - All text colors (stone-900 → stone-100, stone-600 → stone-400, etc.)
   - All background colors (stone-50 → stone-800, blue-50 → blue-900/20, etc.)
   - Badges, pills, status indicators
   - Timeline items
   - Budget table
   - Checklist/tasks

### Task 5: Theme Toggle UI
- Sun/moon icon toggle
- Position: In header, left of hamburger on mobile, left of nav links on desktop
- Size: 44x44px touch target (minimum for iOS)
- Smooth transition between themes (transition: background-color 0.2s, color 0.2s)

### Task 6: Prevent Flash of Wrong Theme
Add inline script in `layout.tsx` `<head>`:
```html
<script>
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

## CRITICAL RULES
1. DO NOT use React state for hamburger menu — use pure DOM manipulation
2. DO NOT skip any component when applying dark theme — every single element must respond
3. DO NOT use backdrop-blur on sticky elements (iOS Safari WebKit bug)
4. DO use `touch-action: manipulation` on ALL interactive elements
5. DO test that all 7 accordion days expand/collapse
6. DO test that all 7 calendar dates scroll to correct day
7. DO test that hamburger opens/closes nav menu
8. DO test that theme toggle switches all colors
9. DO NOT change any trip data — only fix UI/UX
10. All external links (42 total) must remain intact with target="_blank" and rel="noopener"

## Verification After Implementation
After making changes, verify:
- [ ] `npm run build` succeeds with zero errors
- [ ] All 7 accordions expand/collapse (click each summary)
- [ ] All 7 calendar links scroll to correct day section
- [ ] Hamburger menu opens and closes on mobile viewport
- [ ] Theme toggle switches between light and dark
- [ ] Dark theme persists after page reload (localStorage)
- [ ] No flash of wrong theme on page load
- [ ] All 42 external links still work (target="_blank", rel="noopener")
- [ ] All 12 nav links scroll to correct sections
- [ ] No console errors
- [ ] Mobile viewport (390x844): no horizontal overflow
- [ ] All touch targets are at least 44x44px
