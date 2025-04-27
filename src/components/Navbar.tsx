import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

// Define the sections based on the HomePage component
const sections = [
	{ id: "hero", name: "home", label: "home", shortcut: "1" },
	{ id: "work", name: "work", label: "work", shortcut: "2" },
	{ id: "projects", name: "projects", label: "projects", shortcut: "3" },
	{ id: "blogs", name: "blogs", label: "blogs", shortcut: "4" },
	{ id: "combo", name: "combo", label: "combo", shortcut: "5" },
	{ id: "contact", name: "contact", label: "contact", shortcut: "6" },
];

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("hero");
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	const [terminalCursor, setTerminalCursor] = useState(true);

	// Blink the terminal cursor
	useEffect(() => {
		const interval = setInterval(() => {
			setTerminalCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	// Track scroll position to highlight active section
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;

			// Get the section that occupies most of the screen
			const currentSectionIndex = Math.floor(scrollPosition / windowHeight);
			if (currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
				setActiveSection(sections[currentSectionIndex].id);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle keyboard shortcuts
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Check if pressed key is a number between 1-6
			const key = event.key;
			const section = sections.find((s) => s.shortcut === key);

			// Only trigger if not inside input field or textarea
			const activeElement = document.activeElement;
			const isInputActive =
				activeElement instanceof HTMLInputElement ||
				activeElement instanceof HTMLTextAreaElement;

			if (section && !isInputActive) {
				scrollToSection(section.id);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Scroll to section when clicking nav item
	const scrollToSection = (sectionId: string) => {
		const sectionIndex = sections.findIndex(
			(section) => section.id === sectionId,
		);
		if (sectionIndex !== -1) {
			window.scrollTo({
				top: sectionIndex * window.innerHeight,
				behavior: "smooth",
			});
		}
		setIsNavOpen(false);
	};

	return (
		<>
			{/* Mobile toggle button - fixed in top right */}
			<button
				type="button"
				onClick={() => setIsNavOpen(!isNavOpen)}
				className="fixed top-6 right-6 z-50 md:hidden bg-background border border-border h-10 w-10 flex items-center justify-center"
				aria-label="Toggle navigation"
			>
				<div className="flex flex-col gap-1.5">
					<div
						className={`h-0.5 w-5 bg-foreground transition-transform ${isNavOpen ? "rotate-45 translate-y-2" : ""}`}
					/>
					<div
						className={`h-0.5 w-5 bg-foreground transition-opacity ${isNavOpen ? "opacity-0" : ""}`}
					/>
					<div
						className={`h-0.5 w-5 bg-foreground transition-transform ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`}
					/>
				</div>
			</button>

			{/* Right side vertical terminal-style navbar */}
			<Card
				className={`fixed top-6 right-6 z-40 transform transition-all duration-300 border overflow-hidden ${
					isNavOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
				} ${isMinimized ? "w-16 md:w-16" : "w-64 md:w-72"}`}
			>
				{/* Terminal header */}
				<div className="h-10 bg-black/30 flex items-center justify-between px-3 border-b">
					<div className="text-xs font-mono text-muted-foreground">
						{isMinimized ? "nav" : "terminal: navigation.sh"}
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => setIsMinimized(!isMinimized)}
							className="text-xs hover:text-primary transition-colors"
							aria-label={isMinimized ? "Expand" : "Minimize"}
						>
							{isMinimized ? "+" : "-"}
						</button>
					</div>
				</div>

				{/* Terminal content */}
				<div className="p-3 font-mono text-sm">
					{!isMinimized && (
						<div className="mb-4 opacity-70">
							<div>$ welcome to navigation terminal</div>
							<div>$ select page to navigate:</div>
						</div>
					)}

					<div className="flex flex-col gap-1">
						{sections.map((section) => (
							<button
								type="button"
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className={`text-left transition-colors py-1.5 px-2 hover:bg-black/20 flex items-center ${
									activeSection === section.id
										? "text-primary bg-black/20"
										: "text-muted-foreground"
								}`}
							>
								{isMinimized ? (
									// Minimized view - just show shortcut key
									<div className="text-center w-full">{section.shortcut}</div>
								) : (
									// Full view - show with prefix and shortcut
									<div className="flex items-center overflow-hidden justify-between w-full">
										<div className="flex items-center">
											<span className="text-muted-foreground mr-2">$</span>
											<span className="mr-2">cd</span>
											<span className="text-primary-foreground">
												{activeSection === section.id ? (
													<>
														<span className="text-primary">{section.name}</span>
														<span
															className={
																terminalCursor ? "opacity-100" : "opacity-0"
															}
														>
															_
														</span>
													</>
												) : (
													section.name
												)}
											</span>
										</div>
										<span className="text-xs bg-black/30 px-1.5 py-0.5 rounded ml-2 opacity-70">
											{section.shortcut}
										</span>
									</div>
								)}
							</button>
						))}
					</div>

					{!isMinimized && (
						<div className="mt-4 text-xs opacity-60 border-t pt-2">
							<div>v1.0.0 | © 2023 winit</div>
							<div className="mt-1">tip: use number keys 1-6 to navigate</div>
						</div>
					)}
				</div>
			</Card>
		</>
	);
}
