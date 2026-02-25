"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { MY_NAME } from "@/config/site"
import { SOCIAL_LINKS } from "@/constants"

export default function Footer() {
	const currentYear = new Date().getFullYear()
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], [-150, 0])

	return (
		<footer className="relative w-full overflow-hidden bg-background text-foreground border-t border-border/10 pt-32 pb-8">
			<motion.div
				style={{ y }}
				className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col items-center"
			>
				<a
					href={SOCIAL_LINKS.email}
					className="group flex flex-col items-center justify-center text-center outline-none"
				>
					<span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
						Let's talk
					</span>
					<h2 className="text-[clamp(3rem,15vw,12rem)] leading-[0.8] font-display font-black tracking-tighter hover:text-accent transition-colors duration-500">
						HELLO
						<br />
						THERE
					</h2>
					<div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mt-12 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
						<ArrowUpRight className="w-8 h-8" />
					</div>
				</a>

				<div className="w-full flex items-center justify-center mt-32 pt-8 border-t border-border/20 text-sm font-medium text-muted-foreground uppercase tracking-wide">
					<div>
						&copy; {currentYear} {MY_NAME}.
					</div>
				</div>
			</motion.div>
		</footer>
	)
}
