import Link from "next/link"

export const HeaderLogo = () => {
	return (
		<Link
			href="/"
			className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity"
		>
			QP<span className="text-accent">.</span>
		</Link>
	)
}
