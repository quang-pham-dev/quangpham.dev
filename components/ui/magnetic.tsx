"use client"

import { motion } from "framer-motion"
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

export function Magnetic({
	children,
	intensity = 0.5,
}: {
	children: ReactNode
	intensity?: number
}) {
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouse = useCallback(
		(e: MouseEvent) => {
			const { clientX, clientY } = e
			if (ref.current) {
				const { height, width, left, top } = ref.current.getBoundingClientRect()
				const middleX = clientX - (left + width / 2)
				const middleY = clientY - (top + height / 2)
				setPosition({ x: middleX * intensity, y: middleY * intensity })
			}
		},
		[intensity]
	)

	const reset = useCallback(() => {
		setPosition({ x: 0, y: 0 })
	}, [])

	useEffect(() => {
		const current = ref.current
		if (!current) return

		const mouseMove = (e: MouseEvent) => handleMouse(e)
		const mouseLeave = () => reset()

		current.addEventListener("mousemove", mouseMove)
		current.addEventListener("mouseleave", mouseLeave)

		return () => {
			current.removeEventListener("mousemove", mouseMove)
			current.removeEventListener("mouseleave", mouseLeave)
		}
	}, [handleMouse, reset])

	return (
		<motion.div
			ref={ref}
			animate={{ x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
			className="inline-flex relative z-10"
		>
			{children}
		</motion.div>
	)
}
