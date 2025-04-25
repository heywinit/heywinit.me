// import { ThemeToggle } from "../components/theme-toggle";
import { ProjectsSection } from "../components/ProjectsSection";
import { WorkSection } from "../components/WorkSection";
import { CollapsibleCard } from "../components/ui/collapsible-card";

const Header = () => (
	<h1 className="text-4xl md:text-5xl font-bold mb-6">
		<span className="dark:text-primary-foreground">alo,</span>{" "}
		<span className="dark:text-primary-foreground">i'm</span>{" "}
		<span className="text-primary">winit.</span>
	</h1>
);

const AboutSection = () => (
	<CollapsibleCard
		defaultOpen={true}
		title="/about"
		className="mb-6 border-border bg-background"
	>
		<p>i do fullstack dev, web3, and machine learning.</p>
	</CollapsibleCard>
);

const ContactSection = () => (
	<CollapsibleCard
		title="/contact"
		className="mb-6 border-border bg-background"
	>
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<p
			onClick={() => navigator.clipboard.writeText("hey@heywinit.me")}
			className="cursor-pointer"
		>
			drop me a mail at <span className="font-semibold">hey@heywinit.me</span>
		</p>
		<p>
			or find me wandering around on{" "}
			<a
				href="https://github.com/heywinit"
				className="text-primary hover:text-white hover:bg-primary"
				target="_blank"
				rel="noopener noreferrer"
			>
				github
			</a>{" "}
			or{" "}
			<a
				href="https://twitter.com/hiwinit"
				className="text-blue-400 dark:text-blue-400 hover:text-white hover:bg-blue-400 dark:hover:text-white dark:hover:bg-blue-400"
				target="_blank"
				rel="noopener noreferrer"
			>
				x/twitter
			</a>
			.
		</p>
	</CollapsibleCard>
);

const TechStackSection = () => (
	<CollapsibleCard
		title="/techstack"
		className="mb-6 border-border bg-background"
	>
		<p>
			i excel in{" "}
			<span className="text-sky-500 dark:text-sky-400">typescript</span>/
			<span className="text-amber-500 dark:text-amber-400">javascript</span>,{" "}
			<span className="text-cyan-600 dark:text-cyan-400">golang</span>,{" "}
			<span className="text-purple-500 dark:text-purple-400">kotlin</span>, and{" "}
			<span className="text-amber-500 dark:text-amber-400">python</span>.
		</p>
		<p>
			i'm currently diving into{" "}
			<span className="text-primary dark:text-primary">machine learning</span>
			{"."}
		</p>
		<p>
			my work primarily involves{" "}
			<span className="text-sky-500 dark:text-sky-400">react</span>,{" "}
			<span className="text-amber-500 dark:text-amber-400">bun</span>,{" "}
			<span className="text-teal-600 dark:text-teal-400">postgres</span>,{" "}
			<span className="text-indigo-500 dark:text-indigo-400">drizzle</span>,{" "}
			<span className="text-primary dark:text-primary">prisma</span>, and{" "}
			<span className="text-neutral-500 dark:text-neutral-400">sqlite</span>.
		</p>
	</CollapsibleCard>
);

export default function HomePage() {
	return (
		<div className="flex flex-col p-8 md:p-12 min-h-screen bg-background text-foreground font-mono">
			<div className="max-w-3xl mx-auto w-full">
				<Header />
				<AboutSection />
				<WorkSection />
				<ProjectsSection />
				<ContactSection />
				<TechStackSection />
			</div>
			{/* <ThemeToggle /> */}
		</div>
	);
}
