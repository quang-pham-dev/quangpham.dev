# Plan: Add "Buy Me a Coffee" button

## Goal
Add a new UI button for the "Buy Me a Coffee" feature so visitors can support the site.

## Current touchpoints
- Header is rendered in `components/sections/header/index.tsx`.
- Existing CTA button: `components/sections/header/contact-button.tsx`.
- Links/constants in `constants/links.ts`.
- Translations in `i18n/messages/en.json` and `i18n/messages/ja.json`.
- Analytics events in `lib/analytics/events.ts`.

## Assumptions / open inputs
- Final support URL is not provided yet. I will need the exact URL to link (e.g. BuyMeACoffee, Ko-fi, or a custom page).
- Placement: likely next to the existing Contact button in the header unless you prefer footer or hero.

## Implementation plan
1. **Add support link constant**
   - Add a new field in `constants/links.ts` (e.g. `support` or `coffee`) for the support URL.
2. **Add translation keys**
   - Add `navSupport` (or `navCoffee`) label to `i18n/messages/en.json` and `i18n/messages/ja.json`.
3. **Add analytics event**
   - Add a new event to `lib/analytics/events.ts` (e.g. `CLICK_SUPPORT`).
4. **Create button component**
   - New component `components/sections/header/coffee-button.tsx` mirroring `contact-button.tsx` styling.
   - Use an icon (e.g. `Coffee` from `lucide-react`).
   - Use `trackClick` to log the new analytics event.
5. **Wire into header**
   - Import and render the new button in `components/sections/header/index.tsx` next to the current Contact button.

## Acceptance criteria
- New button is visible in the header on desktop and mobile.
- Button opens the provided support URL in a new tab (if external).
- Label is translated in EN/JA.
- Analytics event fires on click.

## Non-goals
- No payment flow implementation; just a link/button.
- No major visual redesign.

## Verification
- Manual: click the new button and verify link target + analytics event.
- Optional: run `bun check` if you want to validate lint/format.
