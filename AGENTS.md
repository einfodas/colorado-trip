# Colorado Trip Website

<PORT value="3020" />

## Overview
Responsive mobile-first website for a 7-day Colorado family vacation (July 29 – August 4, 2026).
All trip data is in `src/data/trip-data.ts` — the single source of truth.

## Stack
- Next.js 16.2.9 + React 19.2.4 + TypeScript + Tailwind CSS v4
- Port: 3020
- No external APIs, no database — all data is static TypeScript constants

## Design Requirements
- Mobile-first responsive (primary use: iPhone during trip)
- Clean, readable typography — no condensed fonts
- Simple navigation — one tap to any section
- Consistent color system throughout
- No scrollbars — full content visible
- Fast load times (static site)

## Data Source
ALL information comes from `src/data/trip-data.ts`. Do NOT invent or hallucinate any data.
Every attraction, restaurant, hotel, price, time, and tip must come from this file.

## Sections
1. **Overview** — Trip summary (dates, family, budget, base cities)
2. **Calendar** — Visual 7-day calendar with day themes and locations
3. **Day Timeline** — Expandable day-by-day schedule with times, activities, notes, driving info
4. **Attractions** — Cards with location, pricing, tips, website links
5. **Hotels** — Cards by city with rates, amenities, booking links
6. **Dining** — Restaurant cards grouped by city with costs and notes
7. **Car Rental** — Comparison table + additional costs + tips
8. **Weather & Safety** — Weather table + safety rules
9. **Altitude & Health** — Elevation chart + symptoms + prevention + emergency rules
10. **Packing** — Interactive checklist grouped by category
11. **Budget** — Table with low/high estimates + cost-saving strategies
12. **Links** — Quick links grouped by category (attractions, hotels, car rental, safety)
13. **Action Items** — Pre-trip checklist with priority and deadlines
