import { HeroActions } from "./actions"
import { HeroBackground } from "./background"
import { HeroContent } from "./content"
import { HeroSocials } from "./socials"
import { HeroStatusBadge } from "./status-badge"

export default function Hero() {
	return (
		<section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden pt-20 pb-32">
			<HeroBackground />

			<div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end h-full">
				<div className="lg:col-span-8 space-y-12">
					<HeroContent />
				</div>
				<div className="lg:col-span-4 flex flex-col gap-10 items-start lg:items-end justify-end pb-8">
					<HeroStatusBadge />
					<HeroActions />
					<HeroSocials />
				</div>
			</div>
		</section>
	)
}
