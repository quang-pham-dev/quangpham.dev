import { AnimatedFade } from "@/components/animated-fade"
import Link from "next/link"

interface InformationItemProps {
	id: number
	title: string
	label: string
	icon: React.ReactNode
	href: string
	style: {
		animationConfig: {
			delay: number
			duration: number
		}
		className: string
	}
}

export default function InformationItem({
	id,
	title,
	label,
	icon,
	href,
	style,
}: InformationItemProps) {
	return (
		<AnimatedFade key={id} {...style.animationConfig}>
			<Link
				target="_blank"
				rel="noopener noreferrer"
				href={href}
				className={style.className}
				aria-label={label}
			>
				{icon}
				<span className="text-base">{title}</span>
			</Link>
		</AnimatedFade>
	)
}
