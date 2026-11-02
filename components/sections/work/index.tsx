import { caseStudies } from "@/lib/content/portfolio"
import CaseStudy from "./case-study"

export default function SelectedWork() {
	return (
		<section id="work" className="scroll-mt-24 py-24 lg:py-36">
			<div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
				<div className="max-w-2xl">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Selected work
					</p>
					<h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
						Proof over promises.
					</h2>
					<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
						A few examples of product, platform, and performance decisions made
						in the real world.
					</p>
				</div>
				<div className="mt-16">
					{caseStudies.map((study) => (
						<CaseStudy key={study.slug} study={study} />
					))}
				</div>
			</div>
		</section>
	)
}
