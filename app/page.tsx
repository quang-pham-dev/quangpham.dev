import { ScrollToTopButton } from "@/components/scroll-to-top"
import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import { AmbientBg } from "@/components/ui/ambient-bg"

export default function Home() {
	return (
		<main className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-white relative">
			<AmbientBg />
			<Header />
			<Hero />
			<ScrollToTopButton />
			<Footer />
		</main>
	)
}
