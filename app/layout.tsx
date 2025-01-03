import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"

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

const { title, description: siteDescription, url } = site

export const metadata: Metadata = {
	title,
	description: siteDescription,
	authors: [{ name: author.name, url: "https://quangpham.dev" }],
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
		apple: "/favicon.ico",
	},
	openGraph: {
		title,
		description: siteDescription,
		images: ["/og-image.png"],
		locale: "en_US",
		type: "website",
		url,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description: siteDescription,
		images: ["/og-image.png"],
		creator: "@quangpham_dev",
	},
	keywords: ["quangpham.dev", "quangpham", "quangpn"],
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
					async
					src="https://www.googletagmanager.com/gtag/js?id=GTM-WSZPF43V"
				/>
				<Script id="google-analytics">
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
				<Analytics />
				<SpeedInsights />
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
