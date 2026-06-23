# Colorado Trip Audit Fixes — Implementation Plan

**Date:** 2026-06-23  
**Status:** Ready for Kilo  
**Priority:** P0 (critical) → P2 (nice-to-have)

---

## Task 1: Add Map URLs and Addresses (P0)

**Goal:** Add Google Maps links to all attractions, hotels, and restaurants.

### Changes to `src/data/trip-data.ts`:

1. **Attraction type** — add `mapUrl?: string` field
2. **Restaurant type** — add `address?: string` and `mapUrl?: string` fields
3. **Populate data:**
   - All 19 attractions: add `mapUrl` (Google Maps URL)
   - All 6 hotels: add `mapUrl` (already have `address`)
   - All 14 restaurants: add `address` and `mapUrl`

**Acceptance Criteria:**
- TypeScript compiles without errors
- All attractions have `mapUrl` field populated
- All restaurants have `address` and `mapUrl` fields populated
- All hotels have `mapUrl` field populated

---

## Task 2: Render Map Links in Components (P0)

**Goal:** Display map links as clickable buttons in all card components.

### Changes:

1. **`src/components/attractions/AttractionCard.tsx`:**
   - Add map link button after website button (if `mapUrl` exists)
   - Style: blue border, external link icon, opens in new tab

2. **`src/components/hotels/HotelCard.tsx`:**
   - Add map link button after booking button (if `mapUrl` exists)
   - Style: blue border, external link icon, opens in new tab

3. **`src/components/dining/RestaurantCard.tsx`:**
   - Display `address` text (if exists)
   - Add map link button (if `mapUrl` exists)
   - Style: blue border, external link icon, opens in new tab

**Acceptance Criteria:**
- Map links appear on all attraction cards
- Map links appear on all hotel cards
- Map links appear on all restaurant cards
- All links open in new tab with `rel="noopener noreferrer"`
- TypeScript compiles without errors

---

## Task 3: Fix Responsive & Accessibility Issues (P1)

**Goal:** Fix touch targets, remove fixed widths, add footer, remove em dashes.

### Changes:

1. **Touch targets (44px minimum):**
   - Find all interactive elements < 44px height
   - Add `min-h-[44px]` or increase padding
   - Focus on: buttons, links, nav items, form controls

2. **Remove fixed pixel widths:**
   - Replace `w-[140px]` with responsive classes (`w-full md:w-[140px]`)
   - Replace `w-[44px]` with `min-w-[44px]`
   - Ensure mobile-first responsive design

3. **Add footer:**
   - Create `src/components/layout/Footer.tsx`
   - Add to `src/app/page.tsx` after `<main>`
   - Content: "Colorado Family Vacation • July 29 – Aug 4, 2026"
   - Style: compact, centered, muted text

4. **Remove em dashes:**
   - Search all `.tsx` and `.ts` files for `—` (em dash)
   - Replace with: commas, colons, or "to" (for ranges)
   - Examples: "Denver → Estes Park" not "Denver — Estes Park"

**Acceptance Criteria:**
- All interactive elements ≥ 44px height on mobile
- No fixed pixel widths on mobile (responsive only)
- Footer appears on all pages
- Zero em dashes in text content
- TypeScript compiles without errors
- Build succeeds

---

## Verification Checklist

After each task:

```bash
# 1. TypeScript
npx tsc --noEmit

# 2. Build
npm run build

# 3. What changed
git diff --stat HEAD

# 4. Browser test (after push)
# Navigate to https://einfodas.github.io/colorado-trip/
# Check: map links work, footer appears, touch targets, no em dashes
```

---

## Execution Order

1. **Task 1** (data) → commit → verify
2. **Task 2** (components) → commit → verify
3. **Task 3** (responsive/a11y) → commit → verify
4. **Final push** → GitHub Pages auto-deploy
5. **Browser verification** on live site

---

## Notes for Kilo

- Use `frontend-specialist` agent for component work
- Use `code` agent for data file changes
- Keep changes minimal and focused
- Match existing code style (Tailwind classes, component structure)
- Test TypeScript compilation after each change
- Do NOT modify unrelated files
- Do NOT add new dependencies
