import { impactMetrics } from "@/lib/content/portfolio"

export default function ImpactStrip() {
	return (
		<section
			aria-labelledby="impact-heading"
			className="border-y border-border/30 py-12 lg:py-16"
		>
			<div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 gap-x-6 gap-y-10 px-6 lg:grid-cols-5 lg:px-12">
				<h2 id="impact-heading" className="sr-only">
					Selected impact
				</h2>
				{impactMetrics.map((metric) => (
					<div
						key={metric.label}
						data-featured={metric.value === "Millions" ? "true" : undefined}
						className={`min-w-0 ${metric.value === "Millions" ? "border-l-2 border-accent pl-5 lg:col-span-2" : ""}`}
					>
						<p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
							{metric.value}
						</p>
						<p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
							{metric.label}
						</p>
						<p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-muted-foreground">
							{metric.detail}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
