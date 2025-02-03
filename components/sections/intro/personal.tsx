import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"
import { useTranslations } from "@/hooks/use-translation"

export default function Personal() {
	const { t } = useTranslations()

	return (
		<AnimatedFade direction="left" delay={0.6} className="mb-8 mt-6">
			<p className="text-base break-words font-medium">{t("description")}</p>
			<div className="flex flex-col gap-2 mt-2">
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
				<a
					className="flex items-center underline font-semibold"
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("viewResume")} <ArrowUpRightIcon className="ml-2 size-5" />
				</a>
			</div>
		</AnimatedFade>
	)
}
