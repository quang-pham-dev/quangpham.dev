"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

import { useTranslations } from "@/hooks/use-translation"
import InformationItem from "./item"

const SOCIAL_INFORMATION = [
	{
		id: 1,
		type: "linkedin" as const,
		icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
		href: "https://linkedin.com/in/quang-pham-dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors font-semibold",
		},
	},
	{
		id: 2,
		type: "twitter" as const,
		icon: <Twitter className="w-5 h-5" aria-hidden="true" />,
		href: "https://twitter.com/quangpham_dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 transition-colors font-semibold",
		},
	},
	{
		id: 3,
		type: "github" as const,
		icon: <Github className="w-5 h-5" aria-hidden="true" />,
		href: "https://github.com/quang-pham-dev",
		style: {
			animationConfig: {
				delay: 0.2,
				duration: 0.6,
			},
			className:
				"flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 transition-colors font-semibold",
		},
	},
] as const

export default function Information() {
	const { t } = useTranslations()
	return (
		<section className="space-y-4" aria-label="Social media links">
			{SOCIAL_INFORMATION.map((feature) => {
				const { id, type } = feature
				return (
					<InformationItem
						key={id}
						{...feature}
						title={t(`social.${type}.title`)}
						label={t(`social.${type}.label`)}
					/>
				)
			})}
		</section>
	)
}
