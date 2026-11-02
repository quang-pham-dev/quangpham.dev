import { experienceEntries } from "@/lib/content/portfolio"

export default function Experience() {
	return (
		<section
			id="experience"
			className="scroll-mt-24 border-t border-border/30 py-24 lg:py-36"
		>
			<div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Experience
					</p>
					<h2 className="mt-4 max-w-md font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
						The work behind the work.
					</h2>
				</div>
				<div>
					{experienceEntries.map((entry) => (
						<article
							key={entry.company}
							className="border-t border-border/40 py-8 first:pt-0"
						>
							<div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8">
								<div>
									<h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
										{entry.company}
									</h3>
									<p className="mt-1 text-sm font-medium text-accent">
										{entry.role}
									</p>
									<time className="mt-2 block text-sm text-muted-foreground">
										{entry.period}
									</time>
								</div>
								<ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
									{entry.outcomes.map((outcome) => (
										<li key={outcome}>{outcome}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
