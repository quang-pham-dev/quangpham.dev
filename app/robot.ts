import { SITE_URL } from "@/constants"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/private/", "/api/"],
		},
		sitemap: `${SITE_URL.dev}/sitemap.xml`,
		host: SITE_URL.dev,
	}
}
