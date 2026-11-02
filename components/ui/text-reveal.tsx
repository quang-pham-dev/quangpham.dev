"use client"

import { motion, type Variants } from "framer-motion"
import { Fragment } from "react"
import { SPRING, STAGGER } from "@/lib/motion/spring"

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
			transition: {
				staggerChildren: STAGGER.word,
				delayChildren: delay * 0.1,
			},
		},
	}

	const child: Variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: SPRING.smooth,
		},
		hidden: {
			opacity: 0,
			y: 32,
		},
	}

	return (
		<motion.div
			className={`overflow-hidden flex flex-wrap ${className}`}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{words.map((word, i) => (
				<motion.span
					// biome-ignore lint/suspicious/noArrayIndexKey: index needed for duplicate words
					key={`${word}-${i}`}
					variants={child}
					style={{
						marginRight: "0.25em",
						willChange: "transform, opacity",
					}}
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
	const words = text.split(" ")

	const container: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: STAGGER.char,
				delayChildren: delay * 0.1,
			},
		},
	}

	const child: Variants = {
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: SPRING.heavy,
		},
		hidden: {
			opacity: 0,
			y: 60,
			rotateX: -45,
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
			{words.map((word, wordIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: index is needed for duplicate words
				<Fragment key={`${word}-${wordIndex}`}>
					<motion.span className="inline-block whitespace-nowrap">
						{word.split("").map((char, charIndex) => (
							<motion.span
								// biome-ignore lint/suspicious/noArrayIndexKey: index needed for duplicate chars
								key={`${char}-${charIndex}`}
								variants={child}
								className="inline-block transform-origin-bottom"
								style={{ willChange: "transform, opacity" }}
							>
								{char}
							</motion.span>
						))}
					</motion.span>
					{wordIndex < words.length - 1 ? " " : null}
				</Fragment>
			))}
		</motion.span>
	)
}
