import { DockIcon } from "@/components/dock"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
	return (
		<DockIcon className="fixed gap-3 top-4 right-4">
			<ThemeToggle />
			<LanguageSwitcher />
		</DockIcon>
	)
}
