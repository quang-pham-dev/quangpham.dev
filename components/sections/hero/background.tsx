export const HeroBackground = () => {
	return (
		<div
			className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
			aria-hidden="true"
		>
			<div className="absolute right-0 top-0 w-full h-[500px] bg-gradient-to-b from-background via-background/80 to-transparent dark:from-background dark:to-transparent z-10" />
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
		</div>
	)
}
