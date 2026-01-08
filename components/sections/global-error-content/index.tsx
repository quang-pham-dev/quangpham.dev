"use client"

import { RefreshCw } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

interface GlobalErrorContentProps {
	reset: () => void
}

export default function GlobalErrorContent({ reset }: GlobalErrorContentProps) {
	const t = useTranslations("errors")

	return (
		<section className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
			<h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
				{t("somethingWrong")}
			</h1>

			<p className="text-base text-muted-foreground max-w-md leading-relaxed mb-4">
				{t("errorDescription")}
			</p>

			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<Button onClick={reset}>
					<RefreshCw className="w-4 h-4" />
					{t("tryAgain")}
				</Button>
			</div>
		</section>
	)
}
