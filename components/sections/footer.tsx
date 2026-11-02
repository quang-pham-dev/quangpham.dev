import { MY_NAME } from "@/config/site"

export default function Footer() {
	return (
		<footer className="border-t border-border/30 py-8">
			<div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-6 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-12">
				<p>
					© {new Date().getFullYear()} {MY_NAME}
				</p>
				<p>Build thoughtfully. Use AI effectively. Ship great software.</p>
			</div>
		</footer>
	)
}
