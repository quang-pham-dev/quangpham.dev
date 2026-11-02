export type ImpactMetric = {
	value: string
	label: string
	detail: string
}

export type CaseStudy = {
	slug: string
	name: string
	eyebrow: string
	summary: string
	role: string
	decisions: string[]
	impact: string[]
	technologies: string[]
	layers: EngineeringLayerId[]
	href?: string
}

export type EngineeringLayerId =
	| "product"
	| "backend"
	| "platform"
	| "leadership"

export type EngineeringLayer = {
	id: EngineeringLayerId
	label: string
	summary: string
	technologies: string[]
}

export type ExperienceEntry = {
	company: string
	role: string
	period: string
	location?: string
	outcomes: string[]
}

export type Principle = {
	title: string
	description: string
}

export type ToolkitGroup = {
	label: string
	items: string[]
}

export const engineeringLayers: readonly EngineeringLayer[] = [
	{
		id: "product",
		label: "Product surface",
		summary: "Turn product intent into fast, understandable user experiences.",
		technologies: ["React", "Next.js", "React Native", "TypeScript"],
	},
	{
		id: "backend",
		label: "APIs & data",
		summary:
			"Design services, API boundaries, and data flows that stay useful as products grow.",
		technologies: ["Node.js", "NestJS", "GraphQL", "API design", "Golang"],
	},
	{
		id: "platform",
		label: "Platform & delivery",
		summary:
			"Make reliability, performance, and delivery leverage part of the product.",
		technologies: ["AWS", "CI/CD", "Monorepos", "Performance", "Reliability"],
	},
	{
		id: "leadership",
		label: "Engineering leadership",
		summary:
			"Raise team standards and connect technical decisions to business outcomes.",
		technologies: [
			"Technical direction",
			"Mentoring",
			"Code quality",
			"Incident response",
		],
	},
]

export const impactMetrics: readonly ImpactMetric[] = [
	{
		value: "12+",
		label: "years engineering",
		detail: "Building products, platforms, and teams across the full stack.",
	},
	{
		value: "Millions",
		label: "users on the Glo platform",
		detail:
			"A large-scale health and wellness product with over one million active subscriptions.",
	},
	{
		value: "250K+",
		label: "family users",
		detail: "EarlyBird product experience at meaningful consumer scale.",
	},
	{
		value: "600+",
		label: "enterprise screens",
		detail: "Frontend architecture and data-flow work for a large HRM system.",
	},
]

export const caseStudies: readonly CaseStudy[] = [
	{
		slug: "glo-platform",
		name: "Glo platform",
		eyebrow: "Platform modernization",
		summary:
			"Modernizing a legacy web platform while making the engineering system easier to evolve.",
		role: "Web Platform Leader",
		decisions: [
			"Moved core experiences from Ember.js toward Next.js and TypeScript.",
			"Replaced JWPlayer with Video.js to remove recurring licensing cost and increase flexibility.",
			"Raised standards around testing, documentation, security, and production response.",
		],
		impact: [
			"Reduced technical risk across critical user-facing experiences.",
			"Created a more maintainable platform for faster feature delivery.",
			"Improved the team's ability to debug and ship predictably.",
		],
		technologies: ["Next.js", "TypeScript", "Ember.js", "Video.js"],
		layers: ["product", "platform"],
	},
	{
		slug: "restful-mind",
		name: "Restful Mind",
		eyebrow: "Product from zero to launch",
		summary:
			"Turning an early product idea into a production-ready mobile and backend platform.",
		role: "Technical Lead",
		decisions: [
			"Led a team of 6 engineers through product discovery and delivery.",
			"Designed a monorepo architecture for cross-platform mobile and backend work.",
			"Established authentication, authorization, subscriptions, CI/CD, and quality workflows.",
		],
		impact: [
			"Moved the product from idea to an MVP used by real customers.",
			"Created a scalable foundation for future product growth.",
			"Connected product, design, and engineering decisions throughout delivery.",
		],
		technologies: ["React Native", "Node.js", "TypeScript", "Monorepo"],
		layers: ["product", "backend", "platform", "leadership"],
		href: "https://apps.apple.com/us/app/the-restful-mind/id6738620498",
	},
	{
		slug: "earlybird",
		name: "EarlyBird",
		eyebrow: "Performance at consumer scale",
		summary:
			"Improving a financial mobile product used by more than 250K families.",
		role: "Senior Software Engineer",
		decisions: [
			"Restructured the React Native architecture and reduced technical debt.",
			"Applied GraphQL to reduce redundant client requests and data retrieval.",
			"Used memoization, bundle splitting, and asset delivery improvements for large list screens.",
		],
		impact: [
			"Reduced iOS and Android app size from 180+ MB to approximately 135 MB.",
			"Improved launch speed and interaction quality on large data-heavy screens.",
			"Raised TypeScript and linting standards for safer releases.",
		],
		technologies: ["React Native", "GraphQL", "TypeScript", "AWS"],
		layers: ["product", "backend", "platform"],
		href: "https://www.getearlybird.io",
	},
	{
		slug: "centz",
		name: "Centz",
		eyebrow: "Financial product architecture",
		summary:
			"Helping shape a new financial product with a scalable frontend foundation.",
		role: "Senior Software Engineer",
		decisions: [
			"Built the frontend architecture around predictable data and state flows.",
			"Integrated financial capabilities with Plaid SDK and React Query.",
			"Contributed product ideas alongside implementation decisions.",
		],
		impact: [
			"Created a foundation designed for performance across web and mobile.",
			"Kept technical decisions connected to user and product outcomes.",
		],
		technologies: ["React", "React Native", "Next.js", "Plaid", "Zustand"],
		layers: ["product", "platform"],
		href: "https://www.mycentz.com/home",
	},
]

export const experienceEntries: readonly ExperienceEntry[] = [
	{
		company: "Glo",
		role: "Web Platform Leader",
		period: "March 2025 — Present",
		outcomes: [
			"Led platform modernization from Ember.js toward Next.js and TypeScript.",
			"Owned architecture, performance, security, incident response, and engineering standards.",
		],
	},
	{
		company: "Restful Mind",
		role: "Technical Lead",
		period: "April 2024 — April 2025",
		outcomes: [
			"Led 6 engineers and delivered a mobile/backend MVP from the initial idea.",
			"Established architecture, CI/CD, quality practices, and sustainable delivery workflows.",
		],
	},
	{
		company: "AgilityIO",
		role: "Senior Software Engineer",
		period: "April 2021 — July 2024",
		outcomes: [
			"Contributed to EarlyBird and Centz across mobile, web, backend, and platform architecture.",
			"Focused on performance, technical debt reduction, GraphQL, TypeScript, and product outcomes.",
		],
	},
	{
		company: "FPT Software",
		role: "Team Leader",
		period: "August 2017 — April 2021",
		outcomes: [
			"Led an offshore team of 5 and supported delivery quality with client-facing collaboration.",
			"Helped architect frontend data flow for an enterprise HRM system with 600+ screens.",
		],
	},
]

export const engineeringPrinciples: readonly Principle[] = [
	{
		title: "Build for the next decision",
		description:
			"Choose architecture that keeps future product changes understandable and affordable.",
	},
	{
		title: "Start with the user and the system",
		description:
			"Connect product intent, system boundaries, and implementation detail before writing code.",
	},
	{
		title: "Use AI with engineering judgment",
		description:
			"Use Claude Code and Codex to explore, implement, test, refactor, and debug without outsourcing responsibility.",
	},
	{
		title: "Make quality part of delivery",
		description:
			"Treat testing, documentation, observability, and security as part of the feature, not a later phase.",
	},
	{
		title: "Raise the team's leverage",
		description:
			"Improve standards, feedback loops, and developer experience so good delivery becomes repeatable.",
	},
]

export const toolkitGroups: readonly ToolkitGroup[] = [
	{
		label: "Frontend & product engineering",
		items: [
			"React",
			"Next.js",
			"React Native",
			"TypeScript",
			"Node.js",
			"NestJS",
		],
	},
	{
		label: "Backend & APIs",
		items: ["Node.js", "NestJS", "GraphQL", "API design", "Golang"],
	},
	{
		label: "Platform & delivery",
		items: ["AWS", "CI/CD", "Monorepos", "Performance", "Reliability"],
	},
	{
		label: "Engineering leadership",
		items: [
			"Technical direction",
			"Code quality",
			"Team mentoring",
			"Product collaboration",
			"Incident response",
		],
	},
]
