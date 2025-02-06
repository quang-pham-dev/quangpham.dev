import { SITE_URL } from "@/constants"

export type SiteConfig = typeof siteConfig

export const MY_NAME = "Quang Pham"
export const siteConfig = {
	author: {
		name: MY_NAME,
		label: "Software Engineer",
		email: "quangpn.developer@gmail.com",
		github: "https://github.com/quang-pham-dev",
		twitter: "@quangpham_dev",
		linkedin: "https://linkedin.com/in/quang-pham-dev",
	},
	site: {
		title: `${MY_NAME} - Software Engineer`,
		description:
			"Software Engineer specializing in building exceptional digital experiences. Focused on creating innovative, user-centric solutions with modern web technologies.",
		url: SITE_URL.dev,
		keywords: [
			MY_NAME,
			"quangpham.dev",
			"quangpham",
			"portfolio",
			"software engineer",
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
