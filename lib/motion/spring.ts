/**
 * Remotion-inspired spring presets for Framer Motion.
 *
 * These presets mirror Remotion's named physical configurations
 * so animations feel intentional, physically grounded, and consistent.
 *
 * Usage:
 *   import { SPRING, STAGGER, ENTRANCE } from "@/lib/motion/spring"
 *   transition={{ ...SPRING.snappy }}
 *   transition={{ ...SPRING.snappy, delay: ENTRANCE.actions }}
 */

import type { Transition } from "framer-motion"

// ---------------------------------------------------------------------------
// Spring physics presets (Remotion-inspired)
// ---------------------------------------------------------------------------

export const SPRING = {
	/** Smooth, zero-bounce reveal — great for text/opacity entrances */
	smooth: {
		type: "spring",
		damping: 60,
		stiffness: 400,
		mass: 1,
	} satisfies Transition,

	/** Snappy, minimal bounce — great for UI elements like badges/buttons */
	snappy: {
		type: "spring",
		damping: 20,
		stiffness: 300,
		mass: 0.5,
	} satisfies Transition,

	/** Bouncy entrance — playful, great for icons/socials */
	bouncy: {
		type: "spring",
		damping: 10,
		stiffness: 200,
		mass: 0.8,
	} satisfies Transition,

	/** Heavy, slow, small bounce — great for large display typography */
	heavy: {
		type: "spring",
		damping: 25,
		stiffness: 80,
		mass: 1.5,
	} satisfies Transition,

	/** Navigation / layout animations — fast settle, no bounce */
	nav: {
		type: "spring",
		damping: 30,
		stiffness: 350,
		mass: 0.3,
	} satisfies Transition,
} as const

// ---------------------------------------------------------------------------
// Stagger timing (delays between sequential children in seconds)
// ---------------------------------------------------------------------------

export const STAGGER = {
	/** Tight stagger between characters */
	char: 0.04,
	/** Medium stagger between words */
	word: 0.08,
	/** Loose stagger between larger blocks */
	block: 0.12,
} as const

// ---------------------------------------------------------------------------
// Page-load entrance timeline (in seconds)
// Mirrors Remotion's Sequence.from pattern — each section starts at a fixed
// offset so the page "plays" in a choreographed sequence on load.
// ---------------------------------------------------------------------------

export const ENTRANCE = {
	/** Hero background/grid fades in first */
	background: 0,
	/** Status badge appears early */
	badge: 0.1,
	/** Large display name reveals */
	name: 0.15,
	/** Role / subtitle follows */
	role: 0.5,
	/** Description paragraph */
	description: 0.7,
	/** CTAs appear after content */
	actions: 0.85,
	/** Socials last */
	socials: 1.0,
	/** Header fades in slightly after */
	header: 0.2,
} as const
