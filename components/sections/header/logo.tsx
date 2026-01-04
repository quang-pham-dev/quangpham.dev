"use client"

import Link from "next/link"

export const HeaderLogo = () => {
	return (
		<Link
			href="/"
			className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
		>
			QP<span className="text-muted-foreground">.</span>
		</Link>
	)
}
