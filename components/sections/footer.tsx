import { MY_NAME } from "@/config/site"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="w-full px-6 py-4 text-center text-sm text-muted-foreground border-t border-border/40">
			<div className="max-w-7xl mx-auto">
				&copy; {currentYear} {MY_NAME}. All rights reserved.
			</div>
		</footer>
	)
}
