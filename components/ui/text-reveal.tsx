"use client"

import { motion, type Variants } from "framer-motion"

interface TextRevealProps {
	text: string
	className?: string
	delay?: number
}

export function TextReveal({
	text,
	className = "",
	delay = 0,
}: TextRevealProps) {
	const words = text.split(" ")

	const container: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.08, delayChildren: delay * 0.1 },
		},
	}

	const child: Variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			y: 40,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	}

	return (
		<motion.div
			className={`overflow-hidden flex flex-wrap ${className}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{words.map((word) => (
				<motion.span
					variants={child}
					style={{ marginRight: "0.25em" }}
					key={word}
					className="inline-block"
				>
					{word}
				</motion.span>
			))}
		</motion.div>
	)
}

export function CharReveal({
	text,
	className = "",
	delay = 0,
}: TextRevealProps) {
	const chars = text.split("")

	const container: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.04, delayChildren: delay * 0.1 },
		},
	}

	const child: Variants = {
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 80,
			},
		},
		hidden: {
			opacity: 0,
			y: 60,
			rotateX: -45,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 80,
			},
		},
	}

	return (
		<motion.span
			className={`inline-block overflow-hidden ${className}`}
			variants={container}
			initial="hidden"
			animate="visible"
			style={{ perspective: "1000px" }}
		>
			{chars.map((char) => (
				<motion.span
					variants={child}
					key={char}
					className="inline-block transform-origin-bottom"
					style={{ whiteSpace: char === " " ? "pre" : "normal" }}
				>
					{char}
				</motion.span>
			))}
		</motion.span>
	)
}
