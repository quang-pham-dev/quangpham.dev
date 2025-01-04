"use client"

import { type Variant, motion, useReducedMotion } from "framer-motion"
import { type ReactNode, memo, useMemo } from "react"

type Direction = "up" | "down" | "left" | "right"

interface AnimatedFadeProps {
	children: ReactNode
	direction?: Direction
	delay?: number
	duration?: number
	className?: string
}

// Memoize static variants object
const VARIANTS = {
	up: { y: 15, x: 0 },
	down: { y: -15, x: 0 },
	left: { x: 15, y: 0 },
	right: { x: -15, y: 0 },
} as const

// Base transition config
const BASE_TRANSITION = {
	type: "spring",
	damping: 20,
	stiffness: 100,
} as const

export const AnimatedFade = memo(function AnimatedFade({
	children,
	direction = "up",
	delay = 0,
	duration = 0.5,
	className,
}: AnimatedFadeProps) {
	// Respect user's motion preferences
	const prefersReducedMotion = useReducedMotion()

	// Memoize fade variants
	const fadeVariants = useMemo(
		(): Record<"hidden" | "visible", Variant> => ({
			hidden: {
				opacity: 0,
				...VARIANTS[direction],
			},
			visible: {
				opacity: 1,
				x: 0,
				y: 0,
			},
		}),
		[direction]
	)

	// If user prefers reduced motion, only fade without translation
	if (prefersReducedMotion) {
		return (
			<motion.div
				className={className}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay, duration }}
			>
				{children}
			</motion.div>
		)
	}

	return (
		<motion.div
			className={className}
			variants={fadeVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{
				...BASE_TRANSITION,
				delay,
				duration,
			}}
		>
			{children}
		</motion.div>
	)
})
