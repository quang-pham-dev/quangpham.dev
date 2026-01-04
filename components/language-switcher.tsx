"use client"

import { Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "@/hooks/use-translation"

const languages = [
	{ code: "en", name: "English" },
	{ code: "ja", name: "日本語" },
]

export function LanguageSwitcher() {
	const { changeLanguage, currentLanguage } = useTranslations()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Globe className="h-5 w-5" />
					<span className="sr-only">Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
					>
						<Check
							className={`mr-2 h-4 w-4 ${
								currentLanguage === lang.code ? "opacity-100" : "opacity-0"
							}`}
						/>
						{lang.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
