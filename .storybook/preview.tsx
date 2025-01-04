// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
import { getRouter } from "@storybook/nextjs/router.mock"
import type { Preview } from "@storybook/react"

const preview: Preview = {
	parameters: {
		nextjs: {
			// 👇 Override the default router properties
			router: {
				basePath: "/app/",
			},
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	async beforeEach() {
		// 👇 Manipulate the default router method mocks
		getRouter().push.mockImplementation(() => {
			/* ... */
		})
	},
}
export default preview
