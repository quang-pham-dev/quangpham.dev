import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/private/", "/api/"],
		},
		sitemap: "https://quangpham.dev/sitemap.xml",
		host: "https://quangpham.dev",
	}
}
