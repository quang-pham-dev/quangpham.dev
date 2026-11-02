import { ScrollToTopButton } from "@/components/scroll-to-top"
import Approach from "@/components/sections/approach"
import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Footer from "@/components/sections/footer"
import FullStackFlow from "@/components/sections/full-stack-flow"
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import ImpactStrip from "@/components/sections/impact"
import Toolkit from "@/components/sections/toolkit"
import SelectedWork from "@/components/sections/work"
import { AmbientBg } from "@/components/ui/ambient-bg"

export default function Home() {
	return (
		<main
			id="main-content"
			className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-white relative"
		>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
			>
				Skip to content
			</a>
			<AmbientBg />
			<Header />
			<Hero />
			<ImpactStrip />
			<FullStackFlow />
			<SelectedWork />
			<Experience />
			<Approach />
			<Toolkit />
			<Contact />
			<ScrollToTopButton />
			<Footer />
		</main>
	)
}
