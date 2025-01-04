"use client" // Error boundaries must be Client Components

import { t } from "i18next"

import { Button } from "@/components/ui/button"

const GlobalError = ({ reset }: { reset: () => void }) => {
	return (
		<>
			<h1>{t("greeting")}</h1>
			<Button onClick={reset}>{t("tryAgain")}</Button>
		</>
	)
}

export default GlobalError
