"use client"

import Link from "next/link"
import { RESUME_URL, SITE_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"

const { projects, blogs } = SITE_URL

const navLinks = [
	{
		labelKey: "navProjects" as const,
		href: projects,
	},
	{
		labelKey: "navResume" as const,
		href: RESUME_URL,
	},
	{
		labelKey: "navBlog" as const,
		href: blogs,
	},
]

export const HeaderNav = () => {
	const { t } = useTranslations()

	return (
		<div className="hidden sm:flex items-center gap-6">
			{navLinks.map((link) => (
				<Link
					key={link.labelKey}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
				>
					{t(link.labelKey)}
				</Link>
			))}
		</div>
	)
}
