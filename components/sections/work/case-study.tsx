import {
	type CaseStudy as CaseStudyData,
	engineeringLayers,
} from "@/lib/content/portfolio"

export default function CaseStudy({ study }: { study: CaseStudyData }) {
	return (
		<article className="grid gap-8 border-t border-border/40 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-14">
			<div className="min-w-0">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
					{study.eyebrow}
				</p>
				<h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{study.name}
				</h3>
				<p className="mt-4 max-w-[32rem] text-base leading-relaxed text-muted-foreground">
					{study.summary}
				</p>
				<p className="mt-6 text-sm font-semibold text-foreground">
					{study.role}
				</p>
				<div className="mt-7">
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
						Ownership layers
					</p>
					<ul
						aria-label="Ownership layers"
						className="mt-3 flex flex-wrap gap-2"
					>
						{study.layers.map((layerId) => {
							const layer = engineeringLayers.find(
								(candidate) => candidate.id === layerId
							)
							return layer ? (
								<li
									key={layer.id}
									className="rounded-full border border-accent/30 bg-accent/[0.05] px-3 py-1.5 text-xs text-foreground"
								>
									{layer.label}
								</li>
							) : null
						})}
					</ul>
				</div>
				{study.href ? (
					<a
						href={study.href}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-flex text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
					>
						Visit public product
					</a>
				) : null}
			</div>
			<div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
						Role & context
					</h4>
					<p className="mt-3 text-sm leading-relaxed text-foreground">
						{study.role}
					</p>
				</div>
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
						Decisions
					</h4>
					<ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground">
						{study.decisions.map((decision) => (
							<li key={decision}>{decision}</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
						Impact
					</h4>
					<ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground">
						{study.impact.map((impact) => (
							<li key={impact}>{impact}</li>
						))}
					</ul>
					<div className="mt-6 flex flex-wrap gap-2">
						{study.technologies.map((technology) => (
							<span
								key={technology}
								className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground"
							>
								{technology}
							</span>
						))}
					</div>
				</div>
			</div>
		</article>
	)
}
