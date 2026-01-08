import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-provider"
import { siteConfig } from "@/config/site"
import { SITE_URL } from "@/constants"
import type { Locale } from "@/i18n/config"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
})

const { author, site } = siteConfig

const { title, description: siteDescription } = site

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
}

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL.dev),
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description: siteDescription,
	authors: [
		{
			name: author.name,
			url: site.url,
		},
	],
	generator: "Next.js",
	applicationName: title,
	referrer: "origin-when-cross-origin",
	keywords: site.keywords,
	creator: author.name,
	publisher: author.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
		notranslate: true,
	},
	icons: {
		icon: [
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon/favicon.ico", type: "image/x-icon" },
		],
		apple: [
			{
				url: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
	manifest: "/site.webmanifest",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: site.url,
		title,
		description: siteDescription,
		siteName: title,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: title,
				type: "image/png",
				secureUrl: `${site.url}/og-image.png`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description: siteDescription,
		site: author.twitter,
		creator: author.twitter,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: title,
				type: "image/png",
			},
		],
	},

	category: "technology",
	other: {
		"msapplication-TileColor": "#000000",
		"theme-color": "#000000",
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// Get locale and messages for next-intl
	const locale = (await getLocale()) as Locale
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* https://vercel.com/docs/analytics/package */}
				{/* Load analytics after page load */}
				<Analytics mode="auto" />
				<SpeedInsights />
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider>
						<TranslationProvider initialLocale={locale}>
							{children}
						</TranslationProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
