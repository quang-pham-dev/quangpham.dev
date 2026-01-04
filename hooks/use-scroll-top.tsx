"use client"

import { useCallback, useEffect, useState } from "react"

export const useScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = useCallback(() => {
		if (window.scrollY > 30) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}, [])

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}, [])

	// biome-ignore lint/correctness/useExhaustiveDependencies: toggleVisibility is stable and does not need to be in deps
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility)
		return () => {
			window.removeEventListener("scroll", toggleVisibility)
		}
	}, [])

	return { isVisible, scrollToTop }
}
