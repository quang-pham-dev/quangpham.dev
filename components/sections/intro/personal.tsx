import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { AnimatedFade } from "@/components/animated-fade"
import { useTranslations } from "@/hooks/use-translation"

export default function Personal() {
	const { t } = useTranslations()

	return (
		<AnimatedFade direction="left" delay={0.6} className="mb-8 mt-6">
			<p className="text-base break-words font-medium">{t("description")}</p>
			<span className="block mt-2 text-base font-bold">
				{t("position")}{" "}
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
					{t("viewResume")} <ArrowUpRightIcon className="ml-2 size-5" />
				</Link>
			</span>
		</AnimatedFade>
	)
}
