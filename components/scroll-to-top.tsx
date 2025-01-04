"use client"

import { AnimatePresence, motion } from "framer-motion"
import { MoveUp } from "lucide-react"

import { useScrollToTop } from "@/hooks"
import RenderWith from "@/lib/render-with"

export function ScrollToTopButton() {
	const { isVisible, scrollToTop } = useScrollToTop()

	return (
		<AnimatePresence>
			<RenderWith isTrue={isVisible}>
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-white shadow-lg"
					aria-label="Scroll to Top"
				>
					<MoveUp />
				</motion.button>
			</RenderWith>
		</AnimatePresence>
	)
}
