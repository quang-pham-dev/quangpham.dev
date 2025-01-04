"use client" // Error boundaries must be Client Components

import { Button } from "@/components/ui/button"

const GlobalError = ({ reset }: { reset: () => void }) => (
	<>
		<h1>Something went wrong!</h1>
		<Button onClick={reset}>Try again</Button>
	</>
)

export default GlobalError
