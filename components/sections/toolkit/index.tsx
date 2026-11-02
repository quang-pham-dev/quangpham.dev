import { toolkitGroups } from "@/lib/content/portfolio"

export default function Toolkit() {
	return (
		<section id="toolkit" className="scroll-mt-24 py-24 lg:py-36">
			<div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Toolkit
					</p>
					<h2 className="mt-4 max-w-md font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
						Range with a point of view.
					</h2>
				</div>
				<div className="grid gap-x-6 border-t border-border/40 sm:grid-cols-2 lg:grid-cols-4">
					{toolkitGroups.map((group) => (
						<div key={group.label} className="border-b border-border/40 py-6">
							<h3 className="font-display text-xl font-bold tracking-tight text-foreground">
								{group.label}
							</h3>
							<ul className="mt-5 space-y-3 text-sm text-muted-foreground">
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
