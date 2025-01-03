import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"
import { MY_NAME } from "@/config"

export default function Intro() {
	return (
		<>
			<AnimatedFade direction="left" delay={0.4}>
				<h1 className="text-5xl font-bold text-start">
					Hey <span className="text-4xl">&#128075;</span>, <br />
					I&apos;m {MY_NAME}!
				</h1>
			</AnimatedFade>
			<AnimatedFade direction="left" delay={0.6} className="mb-8 mt-6">
				<p className="text-base break-words font-medium">
					Passionate about coding and delivering high-quality, scalable products
					that meet business needs and exceed user expectations.
				</p>
				<span className="block mt-2 text-base font-bold">
					Senior Software Engineer at{" "}
					<Link
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
						href="https://restfulmind.co/"
					>
						Restful Mind
					</Link>
					<Link
						className="flex items-center"
						href="resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Resume <ArrowUpRightIcon className="ml-2 size-5" />
					</Link>
				</span>
			</AnimatedFade>
		</>
	)
}
