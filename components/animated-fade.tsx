"use client"

import { type Variant, motion } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right"

interface AnimatedFadeProps {
	children: ReactNode
	direction?: Direction
	delay?: number
	duration?: number
	className?: string
}

const variants = {
	up: { y: 15, x: 0 },
	down: { y: -15, x: 0 },
	left: { x: 15, y: 0 },
	right: { x: -15, y: 0 },
}

export function AnimatedFade({
	children,
	direction = "up",
	delay = 0,
	duration = 0.5,
	className,
}: AnimatedFadeProps) {
	const fadeVariants: Record<"hidden" | "visible", Variant> = {
		hidden: {
			opacity: 0,
			...variants[direction],
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	}

	return (
		<motion.div
			className={className}
			variants={fadeVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{
				delay,
				duration,
				type: "spring",
				damping: 20,
				stiffness: 100,
			}}
		>
			{children}
		</motion.div>
	)
}
