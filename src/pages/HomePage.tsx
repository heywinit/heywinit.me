import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { ThemeToggle } from "../components/theme-toggle";

export default function HomePage() {
	return (
		<div className="flex flex-col p-8 md:p-12 min-h-screen bg-background text-foreground font-mono">
			<div className="max-w-3xl mx-auto w-full">
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					<span className="dark:text-primary-foreground">alo,</span>{" "}
					<span className="dark:text-primary-foreground">i'm</span>{" "}
					<span className="text-primary">winit.</span>
				</h1>

				<Card className="mb-6 border-border/50 bg-background">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg">/about</CardTitle>
					</CardHeader>
					<CardContent>
						<p>i do fullstack dev, web3, and machine learning.</p>
						<p>
							right now I'm working on my startup,{" "}
							<a
								href="https://metf.in"
								className="text-primary hover:text-white hover:bg-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								metf.in
							</a>
							.
						</p>
						<p>
							i'm also a dev at{" "}
							<a
								href="https://soldecoder.app"
								className="text-primary hover:text-white hover:bg-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								soldecoder
							</a>
							. i do web3 stuff around eth and sol there.
						</p>
					</CardContent>
				</Card>
				<Card className="mb-6 border-border/50 bg-background">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg">/contact</CardTitle>
					</CardHeader>
					<CardContent>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<p
							onClick={() => navigator.clipboard.writeText("hey@heywinit.me")}
							className="cursor-pointer"
						>
							drop me a mail at{" "}
							<span className="font-semibold">hey@heywinit.me</span>
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
					</CardContent>
				</Card>

				<Card className="mb-6 border-border/50 bg-background">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg">/techstack</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							i excel in{" "}
							<span className="text-sky-500 dark:text-sky-400">typescript</span>
							/
							<span className="text-amber-500 dark:text-amber-400">
								javascript
							</span>
							, <span className="text-cyan-600 dark:text-cyan-400">golang</span>
							,{" "}
							<span className="text-purple-500 dark:text-purple-400">
								kotlin
							</span>
							, and{" "}
							<span className="text-amber-500 dark:text-amber-400">python</span>
							.
						</p>
						<p>
							i'm currently diving into{" "}
							<span className="text-primary dark:text-primary">
								machine learning
							</span>
							{"."}
						</p>
						<p>
							my work primarily involves{" "}
							<span className="text-sky-500 dark:text-sky-400">react</span>,{" "}
							<span className="text-amber-500 dark:text-amber-400">bun</span>,{" "}
							<span className="text-teal-600 dark:text-teal-400">postgres</span>
							,{" "}
							<span className="text-indigo-500 dark:text-indigo-400">
								drizzle
							</span>
							, <span className="text-primary dark:text-primary">prisma</span>,
							and{" "}
							<span className="text-neutral-500 dark:text-neutral-400">
								sqlite
							</span>
							.
						</p>
					</CardContent>
				</Card>

				<Card className="mb-6 border-border/50 bg-background">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg">/site/stack</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							this site is built with{" "}
							<span className="text-cyan-600 dark:text-cyan-400">react</span>,{" "}
							<span className="text-purple-500 dark:text-purple-400">vite</span>
							, <span className="text-sky-500 dark:text-sky-400">tailwind</span>
							, and{" "}
							<span className="text-primary dark:text-primary">shadcn/ui</span>.
						</p>
					</CardContent>
				</Card>
			</div>
			<ThemeToggle />
		</div>
	);
}
