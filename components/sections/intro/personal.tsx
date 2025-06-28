import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"
import { useTranslations } from "@/hooks/use-translation"
import type { TranslationKey } from "@/i18n/type"
import AnimatedCards from "./animated-card"

const projectsUrl = "https://projects.quangpham.dev"
const blogUrl = "https://blog.quangpham.dev"
const resumeUrl =
	"https://drive.google.com/file/d/1iENqZzAUHFqjaBsGjQ1Tj9c5UxlQFtPx/view"

const PERSONAL_INFO = [
	{
		id: 1,
		url: resumeUrl,
		text: "myResume",
	},
	{
		id: 2,
		url: projectsUrl,
		text: "myProjects",
	},
	{
		id: 3,
		url: blogUrl,
		text: "myBlog",
		isDisabled: true,
	},
]

const currentCompanies = {
	name: "Glo Digital",
	link: "https://glo.com",
}

export default function Personal() {
	const { t } = useTranslations()

	return (
		<AnimatedFade direction="left" delay={0.6} className="mb-8 mt-6">
			<p className="text-base break-words font-medium">{t("description")}</p>
			<div className="flex flex-col gap-4 mt-2">
				<span className="text-base font-bold">
					{t("position")}{" "}
					<Link
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
						href={currentCompanies.link}
					>
						{currentCompanies.name}
					</Link>
				</span>

				<div className="grid gap-2 sm:grid-cols-3">
					{PERSONAL_INFO.map((item) => {
						const { url, text, isDisabled } = item
						return (
							<AnimatedCards
								key={text}
								url={url}
								text={text as TranslationKey}
								isDisabled={isDisabled}
							/>
						)
					})}
				</div>
			</div>
		</AnimatedFade>
	)
}
