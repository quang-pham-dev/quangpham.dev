import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"

export const SOCIAL_INFORMATION = [
	{
		id: 1,
		title: "Connect on LinkedIn",
		icon: <Linkedin className="w-5 h-5" />,
		href: "https://linkedin.com/in/quang-pham-dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center space-x-2 p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors",
		},
	},
	{
		id: 2,
		title: "Follow me on Twitter",
		icon: <Twitter className="w-5 h-5" />,
		href: "https://twitter.com/quangpham_dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center space-x-2 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors",
		},
	},

	{
		id: 3,
		title: "Check out my GitHub",
		icon: <Github className="w-5 h-5" />,
		href: "https://github.com/quang-pham-dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center space-x-2 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors",
		},
	},
]

export default function Information() {
	return (
		<div className="space-y-4">
			{SOCIAL_INFORMATION.map((feature) => {
				const { id, href, icon, title, style } = feature
				return (
					<AnimatedFade key={id} {...style.animationConfig}>
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href={href}
							className={style.className}
						>
							{icon}
							<span>{title}</span>
						</Link>
					</AnimatedFade>
				)
			})}
		</div>
	)
}
