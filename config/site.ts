export type SiteConfig = typeof siteConfig

export const MY_NAME = "Quang Pham"
export const siteConfig = {
	author: {
		name: MY_NAME,
		label: "Software Engineer",
	},
	site: {
		title: `${MY_NAME} Portfolio`,
		description: "My portfolio built with next.",
		url: "https://quangpham.dev",
		keywords: [
			MY_NAME,
			"quangpham.dev",
			"quangpham",
			"portfolio",
			"software engineer",
		],
		language: "en",
		charset: "UTF-8",
	},
}
