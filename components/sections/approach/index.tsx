import { engineeringPrinciples } from "@/lib/content/portfolio"

export default function Approach() {
	return (
		<section
			id="approach"
			className="scroll-mt-24 bg-foreground py-24 text-background lg:py-36"
		>
			<div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Engineering approach
					</p>
					<h2 className="mt-4 max-w-md font-display text-4xl font-bold tracking-tight md:text-6xl">
						How I make complex work clearer.
					</h2>
				</div>
				<div className="grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2">
					{engineeringPrinciples.map((principle) => (
						<article key={principle.title} className="bg-foreground p-6 lg:p-8">
							<h3 className="font-display text-xl font-bold tracking-tight">
								{principle.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-background/65">
								{principle.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
