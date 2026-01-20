"use client"

import { MoveUp } from "lucide-react"

import { useScrollToTop } from "@/hooks"
import { Button } from "./ui/button"

export function ScrollToTopButton() {
	const { isVisible, scrollToTop } = useScrollToTop()

	return (
		<Button
			variant="outline"
			onClick={scrollToTop}
			className={`fixed bottom-8 right-8 p-2 rounded-full bg-secondary shadow-lg transition-all duration-200 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-2 pointer-events-none"
			}`}
			aria-label="Scroll to Top"
		>
			<MoveUp />
		</Button>
	)
}
