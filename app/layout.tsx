import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"

import { TranslationProvider } from "@/components/i18next-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const { author, site } = siteConfig

const { title, description: siteDescription } = site

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
}

export const metadata: Metadata = {
	metadataBase: new URL("https://quangpham.dev"),
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
	},
	icons: {
		icon: { url: "/icon.png", type: "image/png" },
	},
	manifest: "/manifest.json",
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
			},
		],
	},
	verification: {
		google: "your-google-site-verification",
		yandex: "your-yandex-verification",
		other: {
			"norton-safeweb-site-verification": "your-norton-verification",
		},
	},
	alternates: {
		canonical: site.alternates.canonical,
		languages: {
			"en-US": "/en-US",
			"vi-VN": "/vi-VN",
		},
	},
	category: "technology",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* https://tagmanager.google.com/#/container/accounts/6247383213/containers/194151229/workspaces/2 */}
				<Script
					strategy="afterInteractive"
					async
					src="https://www.googletagmanager.com/gtag/js?id=GTM-WSZPF43V"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-WSZPF43V');
          `}
				</Script>
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
				<ThemeProvider>
					<TranslationProvider>{children}</TranslationProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
