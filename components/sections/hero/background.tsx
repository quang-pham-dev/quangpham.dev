"use client"

export const HeroBackground = () => {
	return (
		<>
			<div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
		</>
	)
}
