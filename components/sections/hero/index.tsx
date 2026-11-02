import { HeroActions } from "./actions"
import { HeroBackground } from "./background"
import { HeroContent } from "./content"
import { HeroSocials } from "./socials"
import { HeroStatusBadge } from "./status-badge"

export default function Hero() {
	return (
		<section
			id="top"
			className="relative flex min-h-[calc(100dvh-80px)] flex-col justify-center overflow-hidden py-20 scroll-mt-24 lg:py-24"
		>
			<HeroBackground />

			<div className="relative z-10 mx-auto grid h-full w-full max-w-[1600px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-20 lg:px-12">
				<div className="space-y-12">
					<HeroContent />
				</div>
				<div className="flex flex-col items-start gap-8 lg:items-end lg:justify-end">
					<HeroStatusBadge />
					<HeroActions />
					<HeroSocials />
				</div>
			</div>
		</section>
	)
}
