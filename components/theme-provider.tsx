"use client"

import {
	ThemeProvider as NextThemesProvider,
	type ThemeProviderProps,
} from "next-themes"

// Constants
import { THEME_STORAGE_KEY } from "@/constants/theme"

export function ThemeProvider({
	children,
	...props
}: Readonly<ThemeProviderProps>) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			storageKey={THEME_STORAGE_KEY}
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	)
}
