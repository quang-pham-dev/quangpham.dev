import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "@/hooks"
import type { TranslationKey } from "@/i18n/type"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"

interface AnimatedCardsProps {
	url: string
	text: TranslationKey
	isDisabled?: boolean
}

const AnimatedCards = ({ url, text, isDisabled }: AnimatedCardsProps) => {
	const { t } = useTranslations()
	console.log("isDisabled", url, isDisabled)
	return (
		<Card className="group relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-transparent to-primary animate-border-rotate" />
				<div className="absolute inset-[1px] rounded-lg bg-background" />
			</div>
			<CardContent className="relative px-1 py-2 flex items-center justify-center h-full">
				{isDisabled ? (
					<div
						className={cn(
							"flex items-center underline font-semibold cursor-not-allowed opacity-50"
						)}
						aria-disabled="true"
					>
						{t(text)}
						<ArrowUpRightIcon className="h-5 w-5" />
					</div>
				) : (
					<a
						className={cn(
							"flex items-center underline font-semibold"
						)}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{t(text)}
						<ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</a>
				)}
			</CardContent>
		</Card>
	)
}

export default AnimatedCards
