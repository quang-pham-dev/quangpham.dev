# PostHog Integration Guide

PostHog analytics integration for quangpham.dev portfolio.

## Setup

1. Get your PostHog project key from [PostHog Dashboard](https://app.posthog.com)
2. Add to `.env`:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

## Features Enabled

| Feature | Status |
|---------|--------|
| Pageview (auto) | ✅ |
| UTM/Referrer tracking | ✅ |
| GeoIP | ✅ |
| Custom events | ✅ |
| Feature flags | ✅ |
| Session recording | ❌ |
| Heatmaps | ❌ |

---

## Custom Event Tracking

### Available Events

```typescript
import { ANALYTICS_EVENTS, trackClick } from "@/lib/analytics"

// Events:
ANALYTICS_EVENTS.CLICK_VIEW_WORK     // "View My Work" button
ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV   // "Download Resume" link
ANALYTICS_EVENTS.CLICK_CONTACT       // Contact button
ANALYTICS_EVENTS.CLICK_SOCIAL        // Social links (with platform property)
```

### Usage

```typescript
// Simple click tracking
trackClick(ANALYTICS_EVENTS.CLICK_CONTACT)

// With properties
trackClick(ANALYTICS_EVENTS.CLICK_SOCIAL, { platform: "GitHub" })
```

---

## Feature Flags

### Basic Usage

```typescript
import { useFeatureFlag } from "@/hooks/use-feature-flag"

function Hero() {
  const showNewLayout = useFeatureFlag('new-hero-layout')

  return showNewLayout ? <NewHero /> : <OldHero />
}
```

### Multivariate Flags

```typescript
import { useFeatureFlagValue } from "@/hooks/use-feature-flag"

function Hero() {
  const variant = useFeatureFlagValue('hero-variant')

  switch (variant) {
    case 'minimal': return <MinimalHero />
    case 'animated': return <AnimatedHero />
    default: return <Hero />
  }
}
```

---

## A/B Testing Examples

### Theme Toggle Test

```typescript
const showDarkModeDefault = useFeatureFlag('default-dark-mode')
```

### Section Visibility

```typescript
const showTestimonials = useFeatureFlag('show-testimonials-section')
```

---

## PostHog Dashboard Setup

1. **Create Feature Flag**:
   - Go to PostHog → Feature Flags → New
   - Key: `new-hero-layout`
   - Rollout: 50% (for A/B test)

2. **View Events**:
   - Go to PostHog → Events
   - Filter by: `click_view_work`, `click_social`, etc.

3. **Create Insight**:
   - Go to PostHog → Insights → New
   - Select event and create funnel/trend

---

## Files Reference

| File | Purpose |
|------|---------|
| `lib/posthog.ts` | Client configuration |
| `components/posthog-provider.tsx` | React provider |
| `lib/analytics/events.ts` | Event constants |
| `lib/analytics/track.ts` | Track utilities |
| `hooks/use-feature-flag.ts` | Feature flag hooks |
