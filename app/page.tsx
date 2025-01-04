import { ScrollToTopButton } from "@/components/scroll-to-top"
import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import Information from "@/components/sections/information"
import Intro from "@/components/sections/intro"

export default function Home() {
	return (
		<>
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

			<main className="flex flex-col min-h-dvh text-foreground">
				<Header />
				<section className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8">
					<div className="max-w-md mx-auto">
						<Intro />
						<Information />
					</div>
				</section>
				<ScrollToTopButton />
				<Footer />
			</main>
		</>
	)
}
