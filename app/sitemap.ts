import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://quangpham.dev",
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		},
	]
}
