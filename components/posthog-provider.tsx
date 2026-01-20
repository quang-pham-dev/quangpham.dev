"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { Suspense, useEffect } from "react"
import { initPostHog, POSTHOG_KEY, posthog } from "@/lib/posthog"

// Initialize PostHog on module load
if (typeof window !== "undefined") {
	initPostHog()
}

/**
 * Tracks page views on route changes
 */
function PostHogPageView() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const ph = usePostHog()
	const searchParamsString = searchParams.toString()

	useEffect(() => {
		if (pathname && ph) {
			let url = window.origin + pathname
			if (searchParamsString) {
				url = `${url}?${searchParamsString}`
			}
			ph.capture("$pageview", { $current_url: url })
		}
	}, [pathname, searchParamsString, ph])

	return null
}

/**
 * Wrapped PageView component with Suspense for searchParams
 */
function SuspendedPageView() {
	return (
		<Suspense fallback={null}>
			<PostHogPageView />
		</Suspense>
	)
}

interface PostHogProviderProps {
	children: React.ReactNode
}

/**
 * PostHog provider component that wraps the app with analytics context.
 * Handles initialization and page view tracking.
 */
export function PostHogProvider({ children }: Readonly<PostHogProviderProps>) {
	// Don't render provider if no API key is configured
	if (!POSTHOG_KEY) {
		return <>{children}</>
	}

	return (
		<PHProvider client={posthog}>
			<SuspendedPageView />
			{children}
		</PHProvider>
	)
}
