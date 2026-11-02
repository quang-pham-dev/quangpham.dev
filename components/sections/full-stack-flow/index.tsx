import { engineeringLayers } from "@/lib/content/portfolio"

export default function FullStackFlow() {
	return (
		<section
			id="full-stack"
			aria-labelledby="full-stack-heading"
			className="scroll-mt-24 border-t border-border/30 py-24 lg:py-32"
		>
			<div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
				<div className="max-w-2xl">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Engineering range
					</p>
					<h2
						id="full-stack-heading"
						className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl"
					>
						Full-stack ownership.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
						I move between product surfaces, service boundaries, and delivery
						systems to make complex software easier to ship and evolve.
					</p>
				</div>

				<ol
					aria-label="Engineering layers"
					className="mt-16 grid gap-0 border-t border-border/40 lg:grid-cols-4"
				>
					{engineeringLayers.map((layer, index) => (
						<li
							key={layer.id}
							data-layer={layer.id}
							className={`border-b border-border/40 py-7 lg:min-h-64 lg:border-b-0 lg:border-l lg:px-7 ${index === 1 ? "lg:bg-accent/[0.04]" : ""}`}
						>
							<div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
								<span aria-hidden="true">0{index + 1}</span>
								<span>{layer.label}</span>
							</div>
							<p className="mt-6 max-w-xs text-base font-medium leading-relaxed text-foreground">
								{layer.summary}
							</p>
							<ul className="mt-6 flex max-w-xs flex-wrap gap-2">
								{layer.technologies.map((technology) => (
									<li
										key={technology}
										className="rounded-full border border-border/50 px-3 py-1.5 text-xs text-muted-foreground"
									>
										{technology}
									</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
