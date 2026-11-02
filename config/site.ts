import { SITE_URL } from "@/constants"

export const MY_NAME = "Quang Pham"
export const siteConfig = {
	author: {
		name: MY_NAME,
		label: "Senior Software Engineer",
		email: "quangpham.developer@gmail.com",
		github: "https://github.com/quang-pham-dev",
		twitter: "@quangpham_dev",
		linkedin: "https://linkedin.com/in/quang-pham-dev",
	},
	site: {
		title: `${MY_NAME} - Senior Software Engineer`,
		description:
			"Quang Pham is a senior software engineer and web platform leader building scalable products, high-performance systems, and engineering teams.",
		url: SITE_URL.dev,
		keywords: [
			MY_NAME,
			"quangpham.dev",
			"quangpham",
			"portfolio",
			"senior software engineer",
			"web platform leader",
			"web developer",
			"full stack developer",
			"react developer",
			"nextjs developer",
			"react native developer",
			"nodejs developer",
			"typescript",
			"javascript",
		],
		language: "en",
		charset: "UTF-8",
		themeColor: "#000000",
		alternates: {
			canonical: SITE_URL.dev,
		},
	},
}
