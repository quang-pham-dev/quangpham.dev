"use client"

import { motion, useSpring } from "framer-motion"
import { useEffect } from "react"

export function AmbientBg() {
	// Primary orb — follows mouse closely
	const primaryConfig = { damping: 25, stiffness: 50, mass: 1 }
	const x1 = useSpring(0, primaryConfig)
	const y1 = useSpring(0, primaryConfig)

	// Secondary orb — heavier mass, lags behind for depth
	const secondaryConfig = { damping: 40, stiffness: 30, mass: 2.5 }
	const x2 = useSpring(0, secondaryConfig)
	const y2 = useSpring(0, secondaryConfig)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			x1.set(e.clientX - 250)
			y1.set(e.clientY - 250)
			// Secondary orb slightly offset for a trailing effect
			x2.set(e.clientX - 320)
			y2.set(e.clientY - 180)
		}

		// Initial centred position
		x1.set(window.innerWidth / 2 - 250)
		y1.set(window.innerHeight / 2 - 250)
		x2.set(window.innerWidth / 2 - 320)
		y2.set(window.innerHeight / 2 - 180)

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [x1, y1, x2, y2])

	return (
		<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
			{/* Primary orb */}
			<motion.div
				style={{ x: x1, y: y1, willChange: "transform" }}
				className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 dark:bg-accent/30 blur-[120px] mix-blend-screen dark:mix-blend-lighten opacity-40 dark:opacity-25"
			/>
			{/* Secondary orb — slower, different hue offset for depth */}
			<motion.div
				style={{ x: x2, y: y2, willChange: "transform" }}
				className="absolute w-[380px] h-[380px] rounded-full bg-accent/10 dark:bg-accent/20 blur-[100px] mix-blend-screen dark:mix-blend-lighten opacity-30 dark:opacity-20"
			/>
		</div>
	)
}
