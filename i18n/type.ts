export interface Translations {
	common: {
		errors: {
			somethingWrong: string
			tryAgain: string
			notFound: string
			description: string
			backToHome: string
		}
		greeting: string
		intro: string
		description: string
		position: string
		myResume: string
		myProjects: string
		myBlog: string
		connect: {
			linkedin: string
			twitter: string
			github: string
		}
		social: {
			linkedin: {
				title: string
				label: string
			}
			twitter: {
				title: string
				label: string
			}
			github: {
				title: string
				label: string
			}
		}
	}
}

export type TranslationKey =
	| keyof Translations["common"]
	| `errors.${keyof Translations["common"]["errors"]}`
	| `connect.${keyof Translations["common"]["connect"]}`
	| `social.${keyof Translations["common"]["social"]}.${keyof Translations["common"]["social"]["linkedin"]}`
