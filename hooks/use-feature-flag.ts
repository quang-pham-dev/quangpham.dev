"use client"

import { usePostHog } from "posthog-js/react"
import { useEffect, useState } from "react"

/**
 * Custom hook to check if a feature flag is enabled
 * @param flagKey - The feature flag key from PostHog dashboard
 * @param defaultValue - Default value if flag not loaded yet
 * @returns boolean indicating if the flag is enabled
 *
 * @example
 * ```tsx
 * const showNewHero = useFeatureFlag('new-hero-layout')
 *
 * return showNewHero ? <NewHero /> : <Hero />
 * ```
 */
export function useFeatureFlag(flagKey: string, defaultValue = false): boolean {
	const posthog = usePostHog()
	const [isEnabled, setIsEnabled] = useState(defaultValue)

	useEffect(() => {
		if (!posthog) return

		// Get initial value
		const value = posthog.isFeatureEnabled(flagKey)
		if (typeof value === "boolean") {
			setIsEnabled(value)
		}

		// Subscribe to flag changes
		const unsubscribe = posthog.onFeatureFlags(() => {
			const updatedValue = posthog.isFeatureEnabled(flagKey)
			if (typeof updatedValue === "boolean") {
				setIsEnabled(updatedValue)
			}
		})

		return () => {
			unsubscribe?.()
		}
	}, [posthog, flagKey])

	return isEnabled
}

/**
 * Custom hook to get a feature flag value (for multivariate flags)
 * @param flagKey - The feature flag key from PostHog dashboard
 * @returns The flag value (string, boolean, or undefined)
 *
 * @example
 * ```tsx
 * const heroVariant = useFeatureFlagValue('hero-variant')
 *
 * if (heroVariant === 'minimal') return <MinimalHero />
 * if (heroVariant === 'animated') return <AnimatedHero />
 * return <Hero />
 * ```
 */
export function useFeatureFlagValue(
	flagKey: string
): string | boolean | undefined {
	const posthog = usePostHog()
	const [value, setValue] = useState<string | boolean | undefined>(undefined)

	useEffect(() => {
		if (!posthog) return

		// Get initial value
		const flagValue = posthog.getFeatureFlag(flagKey)
		setValue(flagValue)

		// Subscribe to flag changes
		const unsubscribe = posthog.onFeatureFlags(() => {
			const updatedValue = posthog.getFeatureFlag(flagKey)
			setValue(updatedValue)
		})

		return () => {
			unsubscribe?.()
		}
	}, [posthog, flagKey])

	return value
}
