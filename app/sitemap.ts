import { SITE_URL } from "@/constants"
import type { MetadataRoute } from "next"

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
