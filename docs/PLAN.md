# Colorado Trip Website — Implementation Plan

> **For Kilo:** Build a responsive, mobile-first vacation planning website. All data is in `src/data/trip-data.ts`. Do NOT invent data. Every piece of information must come from that file.

## Architecture

Single-page app with smooth scroll navigation. No routing needed — all sections on one page with anchor links.

```
src/
├── data/
│   └── trip-data.ts          # ALL trip data (DO NOT MODIFY)
├── app/
│   ├── layout.tsx             # Root layout with nav
│   ├── page.tsx               # Main page composing all sections
│   └── globals.css            # Tailwind + custom styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky header with trip title + nav toggle
│   │   ├── MobileNav.tsx      # Bottom nav bar (mobile) / sidebar (desktop)
│   │   └── Section.tsx        # Reusable section wrapper with id + title
│   ├── overview/
│   │   └── Overview.tsx       # Trip summary card
│   ├── calendar/
│   │   └── TripCalendar.tsx   # 7-day visual calendar strip
│   ├── timeline/
│   │   ├── DayTimeline.tsx    # Expandable day accordion
│   │   └── TimelineItem.tsx   # Single activity row
│   ├── attractions/
│   │   └── AttractionCard.tsx # Card with details + link
│   ├── hotels/
│   │   └── HotelCard.tsx      # Hotel card with booking link
│   ├── dining/
│   │   └── RestaurantCard.tsx # Restaurant card
│   ├── transport/
│   │   └── CarRental.tsx      # Car rental comparison + tips
│   ├── safety/
│   │   ├── WeatherSafety.tsx  # Weather table + safety rules
│   │   └── AltitudeHealth.tsx # Elevation chart + symptoms + prevention
│   ├── packing/
│   │   └── PackingChecklist.tsx # Interactive checklist (localStorage)
│   ├── budget/
│   │   └── BudgetBreakdown.tsx  # Budget table + savings tips
│   ├── links/
│   │   └── QuickLinks.tsx     # Grouped external links
│   └── actions/
│       └── ActionItems.tsx    # Pre-trip checklist with priorities
```

## Design System

### Colors
- Background: `#FAFAF9` (warm white / stone-50)
- Surface: `#FFFFFF` (cards)
- Primary: `#1D4ED8` (blue-700) — navigation, links, active states
- Accent: `#059669` (emerald-600) — free items, savings, positive
- Warning: `#D97706` (amber-600) — important alerts, altitude warnings
- Danger: `#DC2626` (red-600) — critical alerts, emergency info
- Text primary: `#1C1917` (stone-900)
- Text secondary: `#57534E` (stone-600)
- Border: `#E7E5E4` (stone-200)

### Typography
- Headings: `font-semibold`, tracking-tight
- Body: `text-base` (16px minimum for mobile readability)
- No condensed fonts. Use system font stack or Inter.

### Spacing
- Section padding: `px-4 py-8` (mobile), `px-8 py-12` (desktop)
- Card padding: `p-4` (mobile), `p-6` (desktop)
- Gap between cards: `gap-4`

### Components
- Cards: `bg-white rounded-xl border border-stone-200 shadow-sm`
- Buttons/Links: `text-blue-700 underline-offset-2 hover:underline`
- Tags/Badges: `inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium`
- Priority badges: critical=red, important=amber, nice=green

## Component Specifications

### Header.tsx
- Sticky top, `bg-white/95 backdrop-blur border-b`
- Left: "Colorado Trip" title
- Right: hamburger menu (mobile) / nav links (desktop)
- Height: 56px

### MobileNav.tsx
- Mobile: Fixed bottom bar with 5 icon buttons (Itinerary, Places, Stay, Info, Checklist)
- Desktop: Hidden (use header nav instead)
- Active state: blue highlight

### TripCalendar.tsx
- Horizontal scrollable strip of 7 day cards
- Each card: day number, date, day name, theme (truncated), location
- Today highlight (if applicable)
- Tap card → smooth scroll to that day's timeline section
- Cards: `min-w-[140px] snap-center`

### DayTimeline.tsx
- Accordion: each day is collapsible
- Header: "Day N — Date | DayName" + theme + location badge
- Expanded: list of TimelineItems + driving info at bottom
- Day 4 has critical alert banner (red background) about RMNP permit
- Default: Day 1 expanded, rest collapsed

### TimelineItem.tsx
- Left: time badge (e.g., "9:00 AM")
- Right: activity name (bold) + notes (secondary text)
- Vertical line connecting items (timeline visual)

### AttractionCard.tsx
- Name (heading), city badge, FREE badge if applicable
- Location, duration, pricing list
- "Why for Aria" callout (green accent)
- Tips as bullet list
- Website link button (opens in new tab)

### HotelCard.tsx
- Name, city badge, highlight badge if exists
- Address, rate, "why" text
- Distance to attraction if available
- Booking link button (opens in new tab)

### RestaurantCard.tsx
- Compact card: name, cuisine, cost, notes
- Grouped by city with city header

### CarRental.tsx
- Comparison table (company, rate, total, notes)
- Additional costs section
- Booking tips
- Total estimated cost callout

### WeatherSafety.tsx
- Weather table (location, high, low, rain, notes)
- Safety rules as expandable cards or accordion

### AltitudeHealth.tsx
- Visual elevation bar chart (horizontal bars, color-coded by risk)
- Symptoms list
- Aria-specific watch signs
- Prevention steps (numbered)
- "Descend Immediately" emergency section (red background)

### PackingChecklist.tsx
- Grouped by category (Aria, Adults, Documents)
- Each item has checkbox
- State persisted in localStorage
- Progress indicator ("12/14 packed for Aria")

### BudgetBreakdown.tsx
- Table: category, low, high, notes
- Total row (bold)
- Cost-saving strategies as bullet list below

### QuickLinks.tsx
- Grouped by category (Attractions, Hotels, Car Rental, Weather & Safety)
- Each link: label + external link icon
- Opens in new tab

### ActionItems.tsx
- Priority-coded list (critical=red dot, important=amber, nice=green)
- Task + deadline
- Interactive checkboxes (localStorage)

## Responsive Breakpoints
- Mobile: < 768px (primary target — iPhone during trip)
- Tablet: 768px – 1024px
- Desktop: > 1024px

## Key UX Patterns
1. **One-tap navigation** — bottom nav on mobile, header nav on desktop
2. **Expandable sections** — don't overwhelm with all info at once
3. **External links open in new tab** — `target="_blank" rel="noopener noreferrer"`
4. **Smooth scroll** — `scroll-behavior: smooth` + `scroll-margin-top` for sticky header offset
5. **No horizontal scroll** — everything fits viewport width
6. **Touch-friendly** — minimum 44px tap targets
7. **Readable** — 16px minimum text, high contrast

## Verification
After building, verify:
1. `npm run build` succeeds with no errors
2. `npm run dev` — site loads at localhost:3020
3. All 7 days render in timeline
4. All attractions, hotels, restaurants render with correct data
5. External links work (open in new tab)
6. Packing checklist persists in localStorage
7. Mobile responsive (test at 375px width)
8. No data hallucinated — cross-check against trip-data.ts
