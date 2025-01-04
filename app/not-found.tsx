"use client"

import { CircleIcon } from "lucide-react"
import Link from "next/link"

import { useTranslations } from "@/hooks/use-translation"

export default function NotFound() {
	const { t } = useTranslations()

	return (
		<div className="flex items-center justify-center min-h-[100dvh]">
			<div className="max-w-md space-y-8 p-4 text-center">
				<div className="flex justify-center">
					<CircleIcon className="size-12 text-red-500" />
				</div>
				<h1 className="text-4xl font-bold tracking-tight">
					{t("errors.notFound")}
				</h1>
				<p className="text-base">{t("errors.description")}</p>
				<Link
					href="/"
					className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
				>
					{t("errors.backToHome")}
				</Link>
			</div>
		</div>
	)
}
