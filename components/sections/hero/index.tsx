"use client"

import { HeroActions } from "./actions"
import { HeroBackground } from "./background"
import { HeroContent } from "./content"
import { HeroSocials } from "./socials"
import { HeroStatusBadge } from "./status-badge"

export default function Hero() {
	return (
		<section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center noise-bg overflow-hidden">
			<HeroBackground />

			<div className="relative z-10 flex-1 flex items-center px-6 lg:px-12">
				<div className="max-w-7xl mx-auto w-full">
					<div className="max-w-4xl space-y-8">
						<HeroStatusBadge />
						<HeroContent />
						<HeroActions />
						<HeroSocials />
					</div>
				</div>
			</div>
		</section>
	)
}
