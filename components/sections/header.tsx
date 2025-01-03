import { DockIcon } from "@/components/dock"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
	return (
		<DockIcon className="fixed top-4 right-4">
			<ThemeToggle />
		</DockIcon>
	)
}
