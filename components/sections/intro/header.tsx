import { AnimatedFade } from "@/components/animated-fade"
import { useTranslations } from "@/hooks/use-translation"

export default function Header() {
	const { t } = useTranslations()

	return (
		<AnimatedFade direction="left" delay={0.4}>
			<h1 className="text-5xl font-bold text-start">
				{t("greeting")} <br />
				{t("intro")}
			</h1>
		</AnimatedFade>
	)
}
