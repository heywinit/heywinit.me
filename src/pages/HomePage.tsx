import { ProjectsSection } from "../components/ProjectsSection";
import { WorkSection } from "../components/WorkSection";
import { CollapsibleCard } from "../components/ui/collapsible-card";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/theme-toggle";
import { Search } from "lucide-react";

const Header = () => {
	const [displayText, setDisplayText] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	const fullText = "winit.";

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex <= fullText.length) {
				setDisplayText(fullText.substring(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 200);

		return () => clearInterval(interval);
	}, []);

	// Blinking cursor effect
	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);

		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<h1 className="text-4xl md:text-5xl font-bold mb-6">
			<span className="dark:text-primary-foreground">alo,</span>{" "}
			<span className="dark:text-primary-foreground">i'm</span>{" "}
			<span className="text-primary inline-block min-w-[2ch]">
				{displayText}
			</span>
			<span
				className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
			>
				|
			</span>
		</h1>
	);
};

const AboutSection = () => (
	<CollapsibleCard
		defaultOpen={true}
		title="/about"
		className="mb-6 border-border bg-background"
	>
		<p>i do fullstack dev, web3, and machine learning.</p>
		<p className="mt-2">
			or in recruiter-speak: "a technical swiss army knife with a concerning
			amount of github commits."
		</p>
		<p className="mt-2">
			often you'll find me overthinking database schemas and pretending my side
			projects will someday see the light of day.
		</p>
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
			drop me a mail at <span className="font-semibold">hey@heywinit.me</span>{" "}
			<span className="text-xs text-muted-foreground">
				(click to copy, and yes, i'll actually respond)
			</span>
		</p>
		<p className="mt-2">
			or find me wandering around on{" "}
			<a
				href="https://github.com/heywinit"
				className="text-primary hover:text-white hover:bg-primary"
				target="_blank"
				rel="noopener noreferrer"
			>
				github
			</a>{" "}
			(staring at issues I opened 6 months ago) or{" "}
			<a
				href="https://twitter.com/hiwinit"
				className="text-blue-400 dark:text-blue-400 hover:text-white hover:bg-blue-400 dark:hover:text-white dark:hover:bg-blue-400"
				target="_blank"
				rel="noopener noreferrer"
			>
				x/twitter
			</a>{" "}
			(where I occasionally have thoughts worth sharing).
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
		<p className="mt-2">
			i'm currently diving into{" "}
			<span className="text-primary dark:text-primary">machine learning</span>{" "}
			(teaching computers to make the same mistakes I do, but faster).
		</p>
		<p className="mt-2">
			my work primarily involves{" "}
			<span className="text-sky-500 dark:text-sky-400">react</span>,{" "}
			<span className="text-amber-500 dark:text-amber-400">bun</span>,{" "}
			<span className="text-teal-600 dark:text-teal-400">postgres</span>,{" "}
			<span className="text-indigo-500 dark:text-indigo-400">drizzle</span>,{" "}
			<span className="text-primary dark:text-primary">prisma</span>, and{" "}
			<span className="text-neutral-500 dark:text-neutral-400">sqlite</span>.
		</p>
		<p className="mt-2 text-sm text-muted-foreground">
			translation: i enjoy tools that make me feel productive while
			simultaneously creating technical debt that future-me will resent.
		</p>
	</CollapsibleCard>
);

export default function HomePage() {
	const [konami, setKonami] = useState<number[]>([]);
	const [showEasterEgg, setShowEasterEgg] = useState(false);
	const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // up up down down left right left right b a
	const [shortcutInfo, setShortcutInfo] = useState(false);
	const [showCommandPalette, setShowCommandPalette] = useState(false);
	const [commandInput, setCommandInput] = useState("");
	const [show404, setShow404] = useState(false);
	const [showStats, setShowStats] = useState(false);
	const [visitorCount, setVisitorCount] = useState(() => {
		// Generate a random but believable number that will increment
		return Math.floor(Math.random() * 300) + 42;
	});

	const commands = [
		{
			id: "about",
			name: "Toggle About Section",
			action: () => toggleSection(0),
		},
		{ id: "work", name: "Toggle Work Section", action: () => toggleSection(1) },
		{
			id: "projects",
			name: "Toggle Projects Section",
			action: () => toggleSection(2),
		},
		{
			id: "contact",
			name: "Toggle Contact Section",
			action: () => toggleSection(3),
		},
		{
			id: "tech",
			name: "Toggle Tech Stack Section",
			action: () => toggleSection(4),
		},
		{
			id: "help",
			name: "Show Keyboard Shortcuts",
			action: () => setShortcutInfo(true),
		},
		{
			id: "theme",
			name: "Toggle Dark/Light Mode",
			action: () => {
				const themeButton = document.querySelector(
					'button[aria-label="Toggle theme"]',
				);
				if (themeButton instanceof HTMLButtonElement) themeButton.click();
			},
		},
		{
			id: "stats",
			name: "Show Visitor Stats",
			action: () => setShowStats(true),
		},
	];

	const filteredCommands =
		commandInput === ""
			? commands
			: commands.filter(
					(cmd) =>
						cmd.name.toLowerCase().includes(commandInput.toLowerCase()) ||
						cmd.id.toLowerCase().includes(commandInput.toLowerCase()),
				);

	const toggleSection = (index: number) => {
		const buttons = document.querySelectorAll("button[aria-expanded]");
		if (buttons[index]) (buttons[index] as HTMLButtonElement).click();
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const newKonami = [...konami, e.keyCode].slice(-10);
			setKonami(newKonami);

			if (newKonami.join(",") === konamiCode.join(",")) {
				setShowEasterEgg(true);
				setTimeout(() => setShowEasterEgg(false), 5000);
			}

			// Command palette shortcut
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setShowCommandPalette((prev) => !prev);
				return;
			}

			// Close command palette with Escape
			if (e.key === "Escape" && showCommandPalette) {
				setShowCommandPalette(false);
				return;
			}

			// Handle numeric shortcuts for collapsible cards
			// Only trigger if not inside an input field and command palette is not open
			if (
				!(
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement
				) &&
				!showCommandPalette
			) {
				// Find all collapsible card toggle buttons
				const buttons = document.querySelectorAll("button[aria-expanded]");

				switch (e.key) {
					case "0":
						setShow404(true);
						break;
					case "1":
						if (buttons[0]) (buttons[0] as HTMLButtonElement).click();
						break;
					case "2":
						if (buttons[1]) (buttons[1] as HTMLButtonElement).click();
						break;
					case "3":
						if (buttons[2]) (buttons[2] as HTMLButtonElement).click();
						break;
					case "4":
						if (buttons[3]) (buttons[3] as HTMLButtonElement).click();
						break;
					case "5":
						if (buttons[4]) (buttons[4] as HTMLButtonElement).click();
						break;
					case "?":
						setShortcutInfo((prev) => !prev);
						break;
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [konami, showCommandPalette]);

	useEffect(() => {
		// Focus the command input when the palette opens
		if (showCommandPalette) {
			const inputEl = document.querySelector(".command-input");
			if (inputEl instanceof HTMLInputElement) {
				inputEl.focus();
			}
		}
	}, [showCommandPalette]);

	useEffect(() => {
		// Increment visitor count randomly
		const timer = setInterval(() => {
			if (Math.random() > 0.7) {
				// 30% chance to increment
				setVisitorCount((prev) => prev + 1);
			}
		}, 10000); // Every 10 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col p-8 md:p-12 min-h-screen bg-background text-foreground font-mono relative">
			{showEasterEgg && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
					<div className="text-center p-6 bg-background rounded-lg shadow-xl max-w-md">
						<h2 className="text-2xl font-bold mb-4">👾 secret unlocked! 👾</h2>
						<p>
							you found the konami code easter egg! certified cool person status
							achieved.
						</p>
						<button
							onClick={() => setShowEasterEgg(false)}
							className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
							type="button"
						>
							close
						</button>
					</div>
				</div>
			)}

			{shortcutInfo && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
					<div className="text-center p-6 bg-background rounded-lg shadow-xl max-w-md">
						<h2 className="text-xl font-bold mb-4">keyboard shortcuts</h2>
						<ul className="text-left space-y-2">
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">1</kbd> - toggle
								about section
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">2</kbd> - toggle
								work section
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">3</kbd> - toggle
								projects section
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">4</kbd> - toggle
								contact section
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">5</kbd> - toggle
								tech stack section
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">?</kbd> - show/hide
								this help
							</li>
							<li>
								<kbd className="px-2 py-1 bg-muted rounded">ctrl/cmd + k</kbd> -
								open command palette
							</li>
						</ul>
						<button
							onClick={() => setShortcutInfo(false)}
							className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
							type="button"
						>
							close
						</button>
					</div>
				</div>
			)}

			{showCommandPalette && (
				<div className="fixed inset-0 flex items-start justify-center pt-[30vh] bg-black bg-opacity-70 z-50">
					<div className="bg-background rounded-lg shadow-xl w-full max-w-md">
						<div className="flex items-center border-b border-border p-4">
							<Search className="w-5 h-5 mr-2 text-muted-foreground" />
							<input
								type="text"
								placeholder="Type a command..."
								className="bg-transparent border-none outline-none flex-1 text-foreground command-input"
								value={commandInput}
								onChange={(e) => setCommandInput(e.target.value)}
							/>
							<kbd className="px-2 py-1 bg-muted rounded text-xs ml-2">esc</kbd>
						</div>
						<ul className="max-h-96 overflow-auto">
							{filteredCommands.map((cmd) => (
								<li key={cmd.id}>
									<button
										onClick={() => {
											cmd.action();
											setShowCommandPalette(false);
											setCommandInput("");
										}}
										className="w-full text-left px-4 py-2 hover:bg-muted flex items-center"
										type="button"
									>
										{cmd.name}
									</button>
								</li>
							))}
							{filteredCommands.length === 0 && (
								<li className="px-4 py-6 text-center text-muted-foreground">
									No commands found
								</li>
							)}
						</ul>
					</div>
				</div>
			)}

			{show404 && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
					<div className="text-center p-6 bg-background rounded-lg shadow-xl max-w-md">
						<h2 className="text-4xl font-bold mb-4 text-red-500">404</h2>
						<div className="text-left space-y-4 mb-4">
							<p className="font-bold">ERROR: PERSONALITY_NOT_FOUND</p>
							<p>
								The requested personality could not be located on this server.
							</p>
							<p className="font-mono bg-muted p-2 text-sm">
								&gt; Attempted to load "social_skills.exe"
								<br />
								&gt; Failed: File not found
								<br />
								&gt; Loading fallback: "awkward_developer_mode.exe"
								<br />
								&gt; Success!
							</p>
						</div>
						<button
							onClick={() => setShow404(false)}
							className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
							type="button"
						>
							reboot human interaction module
						</button>
					</div>
				</div>
			)}

			{showStats && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
					<div className="text-center p-6 bg-background rounded-lg shadow-xl max-w-md">
						<h2 className="text-xl font-bold mb-4">site stats</h2>
						<div className="space-y-4 mb-4">
							<div className="bg-muted p-4 rounded-lg">
								<p className="text-2xl font-bold text-primary">
									{visitorCount}
								</p>
								<p className="text-sm text-muted-foreground">
									visitors so far*
								</p>
							</div>
							<div className="flex justify-between text-sm">
								<div>
									<p className="font-bold">42</p>
									<p className="text-muted-foreground">bugs fixed</p>
								</div>
								<div>
									<p className="font-bold">∞</p>
									<p className="text-muted-foreground">bugs created</p>
								</div>
								<div>
									<p className="font-bold">{Math.floor(visitorCount * 0.03)}</p>
									<p className="text-muted-foreground">job offers</p>
								</div>
							</div>
							<p className="text-xs text-muted-foreground italic">
								* number may be complete fiction
							</p>
						</div>
						<button
							onClick={() => setShowStats(false)}
							className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
							type="button"
						>
							ok, weird flex but ok
						</button>
					</div>
				</div>
			)}

			<div className="max-w-3xl mx-auto w-full">
				<Header />
				<AboutSection />
				<WorkSection />
				<ProjectsSection />
				<ContactSection />
				<TechStackSection />
				<div className="text-xs text-muted-foreground mt-6 mb-2 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<p>
							press <kbd className="px-1 bg-muted rounded">?</kbd> for keyboard
							shortcuts
						</p>
						<p className="text-muted-foreground/50">
							or <kbd className="px-1 bg-muted rounded">0</kbd> to break stuff
						</p>
					</div>
					<button
						onClick={() => setShowCommandPalette(true)}
						className="text-right text-xs flex items-center bg-transparent border-none cursor-pointer text-muted-foreground hover:text-foreground"
						type="button"
					>
						<kbd className="px-1 mr-1 bg-muted rounded">ctrl/⌘</kbd>+
						<kbd className="px-1 ml-1 bg-muted rounded">K</kbd> to open command
						palette
					</button>
				</div>
			</div>
			<div className="absolute top-8 right-8">
				<ThemeToggle />
			</div>
		</div>
	);
}
