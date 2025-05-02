import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

// Define the sections based on the HomePage component
const sections = [
	{ id: "hero", name: "home", label: "home", shortcut: "1" },
	{ id: "work", name: "work", label: "work", shortcut: "2" },
	{ id: "projects", name: "projects", label: "projects", shortcut: "3" },
	{ id: "blogs", name: "blogs", label: "blogs", shortcut: "4" },
	// { id: "combo", name: "combo", label: "combo", shortcut: "5" },
	{ id: "contact", name: "contact", label: "contact", shortcut: "5" },
];

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("hero");
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	const [pulseActive, setPulseActive] = useState(true);

	// Create pulsing effect for active node
	useEffect(() => {
		const interval = setInterval(() => {
			setPulseActive((prev) => !prev);
		}, 1500);
		return () => clearInterval(interval);
	}, []);

	// Track active section using Intersection Observer
	useEffect(() => {
		const observerOptions = {
			threshold: 0.5, // Trigger when 50% of the section is visible
			rootMargin: "0px",
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			}
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);

		// Observe all sections
		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => {
			// Clean up observers
			for (const section of sections) {
				const element = document.getElementById(section.id);
				if (element) {
					observer.unobserve(element);
				}
			}
		};
	}, []);

	// Handle keyboard shortcuts
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Get the pressed key
			const key = event.key;

			// Handle both regular number keys and numpad keys
			// event.code would show "Numpad1" but event.key gives "1" for both number row and numpad
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
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
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

			{/* Right side circuit/data vis navbar */}
			<Card
				className={`fixed top-6 right-6 z-40 transform transition-all duration-300 border overflow-hidden backdrop-blur-sm bg-black/20 ${
					isNavOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
				} ${isMinimized ? "w-16 md:w-16" : "w-64 md:w-72"}`}
			>
				{/* Header */}
				<div className="h-10 bg-black/40 flex items-center justify-between px-3 border-b border-primary/30">
					<div className="text-xs font-mono text-primary/80 flex items-center">
						{isMinimized ? (
							<div className="flex items-center justify-center w-10 h-6">
								<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
							</div>
						) : (
							<>
								<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
								<span>navigation matrix</span>
							</>
						)}
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => setIsMinimized(!isMinimized)}
							className="text-xs text-primary/80 hover:text-primary transition-colors"
							aria-label={isMinimized ? "Expand" : "Minimize"}
						>
							{isMinimized ? "+" : "−"}
						</button>
					</div>
				</div>

				{/* Content */}
				<div className="font-mono text-sm">
					{!isMinimized && (
						<div className="px-3 pt-3 text-xs text-primary/60">
							<div className="flex items-center">
								<div className="w-1 h-1 bg-primary/40 rounded-full mr-1.5" />
								<span>connect to section</span>
							</div>
						</div>
					)}

					<div className="flex flex-col mt-2 relative">
						{/* Vertical "circuit line" */}
						{!isMinimized && (
							<div className="absolute left-7 top-2 bottom-2 w-px bg-primary/30" />
						)}

						{sections.map((section) => (
							<button
								type="button"
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className={`text-left transition-colors py-2.5 relative
									${isMinimized ? "px-0" : "px-3"}
									${
										activeSection === section.id
											? "text-primary"
											: "text-muted-foreground hover:text-primary/70"
									}`}
							>
								{isMinimized ? (
									// Minimized view - just show node
									<div className="flex items-center justify-center">
										<div
											className={`w-3 h-3 rounded-full border-2
												${
													activeSection === section.id
														? "border-primary bg-primary/20"
														: "border-primary/30"
												}`}
										>
											{activeSection === section.id && (
												<div
													className={`w-full h-full rounded-full bg-primary ${pulseActive ? "opacity-40" : "opacity-0"} transition-opacity duration-1000`}
												/>
											)}
										</div>
									</div>
								) : (
									// Full view with horizontal connectors
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											{/* Node */}
											<div
												className={`w-3 h-3 rounded-full border-2 z-10 relative
													${
														activeSection === section.id
															? "border-primary"
															: "border-primary/30"
													}`}
											>
												{activeSection === section.id && (
													<div
														className={`w-full h-full rounded-full bg-primary ${pulseActive ? "opacity-40" : "opacity-0"} transition-opacity duration-1000`}
													/>
												)}
											</div>

											{/* Horizontal connector */}
											<div
												className={`h-px w-3 
												${
													activeSection === section.id
														? "bg-primary"
														: "bg-primary/30"
												}`}
											/>

											{/* Section label */}
											<span className="ml-2">{section.name}</span>
										</div>

										{/* Shortcut indicator */}
										<span
											className={`text-[10px] px-1.5 py-0.5 rounded-sm 
											${
												activeSection === section.id
													? "border border-primary/40 text-primary"
													: "bg-black/20 text-primary/50"
											}`}
										>
											{section.shortcut}
										</span>
									</div>
								)}
							</button>
						))}
					</div>

					{!isMinimized && (
						<div className="p-3 text-xs text-primary/60 border-t border-primary/20 mt-2">
							<div className="flex items-center">
								<div className="w-1 h-1 bg-primary/40 rounded-full mr-1.5" />
								<span>keypad 1-5 to navigate</span>
							</div>
						</div>
					)}
				</div>
			</Card>
		</>
	);
}
