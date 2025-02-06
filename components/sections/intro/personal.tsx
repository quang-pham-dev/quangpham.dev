import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "@/hooks/use-translation"

const projectsUrl = "https://projects.quangpham.dev"
const blogsUrl = "https://blogs.quangpham.dev"

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
						href="https://restfulmind.co/"
					>
						Restful Mind
					</Link>
				</span>

				<div className="grid gap-2 sm:grid-cols-3">
					<Card className="group relative overflow-hidden transition-colors hover:bg-accent">
						<CardContent className="px-1 py-2 flex items-center justify-center h-full">
							<a
								className="flex items-center underline font-semibold"
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("myResume")}
								<ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</a>
						</CardContent>
					</Card>
					<Card className="group relative overflow-hidden transition-colors hover:bg-accent">
						<CardContent className="px-1 py-2 flex items-center justify-center h-full">
							<a
								className="flex items-center underline font-semibold"
								href={projectsUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("myProjects")}
								<ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</a>
						</CardContent>
					</Card>
					<Card className="group relative overflow-hidden transition-colors hover:bg-accent">
						<CardContent className="px-1 py-2 flex items-center justify-center h-full">
							<a
								className="flex items-center underline font-semibold"
								href={blogsUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("myBlogs")}
								<ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</a>
						</CardContent>
					</Card>
				</div>
			</div>
		</AnimatedFade>
	)
}
