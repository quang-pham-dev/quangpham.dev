import type { MetadataRoute } from "next"
import { SITE_URL } from "@/constants"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL.dev,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		},
	]
}
