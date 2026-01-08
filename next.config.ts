import withBundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const { ANALYZE, NODE_ENV } = process.env

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// Note: cacheComponents disabled due to conflict with next-intl's dynamic locale reading
	// This project uses localStorage-based locale without URL routing
	reactCompiler: true,
	// Optimize images
	images: {
		minimumCacheTTL: 60,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	// Optimize JavaScript
	compiler: {
		removeConsole:
			NODE_ENV === "production"
				? {
						exclude: ["error"],
					}
				: false,
	},
	// Enable experimental features
	experimental: {
		// This will add the correct 'as' attribute to preloaded resources
		optimizePackageImports: [
			"@components",
			"@radix-ui/react-slot",
			"lucide-react",
			"tailwindcss",
			"framer-motion",
		],
		// Add these optimizations
		serverActions: {
			allowedOrigins: [
				"https://quangpham.dev",
				"https://quangpham-dev.vercel.app",
			],
		},
	},
	async headers() {
		return [
			{
				source: "/:path*(svg|jpg|png|webp)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, must-revalidate", // This instructs the browser to cache those files for one year. So, if your Next.js site relies on some static resources, you should download and place them inside /public.
					},
				],
			},
		]
	},
	// Add these new configurations
	poweredByHeader: false, // false to remove the X-Powered-By header for security
	compress: true,
}

const withBundleAnalyzerWrapper = withBundleAnalyzer({
	enabled: ANALYZE === "true",
})

export default withBundleAnalyzerWrapper(withNextIntl(nextConfig))
