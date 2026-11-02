import { ArrowUpRight } from "lucide-react"
import { RESUME_URL, SOCIAL_LINKS } from "@/constants"

const profileLinks = [
	{ label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
	{ label: "GitHub", href: SOCIAL_LINKS.github },
]

export default function Contact() {
	return (
		<section
			id="contact"
			className="scroll-mt-24 border-t border-border/30 py-24 lg:py-36"
		>
			<div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
						Next conversation
					</p>
					<h2 className="mt-4 max-w-xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
						Let’s build something that matters.
					</h2>
				</div>
				<div className="flex flex-col items-start justify-between gap-12 lg:items-end">
					<a
						href={SOCIAL_LINKS.email}
						className="group inline-flex items-center gap-4 text-2xl font-semibold tracking-tight text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background md:text-4xl"
					>
						Start a conversation
						<ArrowUpRight
							className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
							aria-hidden="true"
						/>
					</a>
					<div className="flex flex-wrap gap-6 text-sm font-semibold text-muted-foreground">
						{profileLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
							>
								{link.label}
							</a>
						))}
						<a
							href={RESUME_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
						>
							Download resume
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
