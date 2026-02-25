"use client"

import { motion, useSpring } from "framer-motion"
import { useEffect } from "react"

export function AmbientBg() {
	const springConfig = { damping: 25, stiffness: 50, mass: 1 }
	const x = useSpring(0, springConfig)
	const y = useSpring(0, springConfig)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			x.set(e.clientX - 250) // center offset
			y.set(e.clientY - 250)
		}

		// Initial position
		x.set(window.innerWidth / 2 - 250)
		y.set(window.innerHeight / 2 - 250)

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [x, y])

	return (
		<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-40 dark:opacity-20 dark:mix-blend-lighten">
			<motion.div
				style={{ x, y }}
				className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 dark:bg-accent/40 blur-[120px] will-change-transform"
			/>
		</div>
	)
}
