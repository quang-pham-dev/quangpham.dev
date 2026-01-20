"use client"

import dynamic from "next/dynamic"

const PostHogProvider = dynamic(
	() =>
		import("@/components/posthog-provider").then(
			(module) => module.PostHogProvider
		),
	{
		ssr: false,
	}
)

export function PostHogProviderLoader({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <PostHogProvider>{children}</PostHogProvider>
}
