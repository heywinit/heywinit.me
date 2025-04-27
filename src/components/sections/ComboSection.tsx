import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type TabType = "skills" | "testimonials" | "tools";

interface Skill {
	name: string;
	level: number;
	category: "frontend" | "backend" | "tools" | "languages" | "other";
	color: string;
}

interface Testimonial {
	quote: string;
	author: string;
	position: string;
	company: string;
}

interface Tool {
	name: string;
	description: string;
	category: "development" | "design" | "productivity";
	link?: string;
}

export default function ComboSection() {
	const [activeTab, setActiveTab] = useState<TabType>("skills");

	const skills: Skill[] = [
		{
			name: "JavaScript",
			level: 90,
			category: "languages",
			color: "bg-yellow-400",
		},
		{
			name: "TypeScript",
			level: 85,
			category: "languages",
			color: "bg-blue-400",
		},
		{ name: "React", level: 92, category: "frontend", color: "bg-cyan-400" },
		{ name: "Node.js", level: 88, category: "backend", color: "bg-green-500" },
		{ name: "Python", level: 75, category: "languages", color: "bg-blue-600" },
		{ name: "SQL", level: 80, category: "backend", color: "bg-orange-500" },
		{ name: "GraphQL", level: 78, category: "backend", color: "bg-pink-500" },
		{ name: "Docker", level: 72, category: "tools", color: "bg-blue-500" },
		{ name: "AWS", level: 70, category: "tools", color: "bg-yellow-600" },
		{
			name: "TensorFlow",
			level: 65,
			category: "other",
			color: "bg-orange-400",
		},
		{ name: "Git", level: 95, category: "tools", color: "bg-red-500" },
		{
			name: "CSS/SCSS",
			level: 85,
			category: "frontend",
			color: "bg-purple-500",
		},
	];

	const testimonials: Testimonial[] = [
		{
			quote:
				"One of the most talented developers I've ever worked with. Combines deep technical knowledge with a keen eye for design and user experience.",
			author: "Sarah Johnson",
			position: "CTO",
			company: "TechVentures Inc",
		},
		{
			quote:
				"Consistently delivers clean, well-documented code that exceeds expectations. A natural problem solver who can tackle complex challenges with elegant solutions.",
			author: "Michael Chen",
			position: "Lead Developer",
			company: "InnovateLabs",
		},
		{
			quote:
				"An exceptional collaborator who elevates the entire team. Brings both technical excellence and creative thinking to every project.",
			author: "Aisha Patel",
			position: "Product Manager",
			company: "DigitalCraft",
		},
		{
			quote:
				"Rare combination of technical depth and communication skills. Can translate complex technical concepts into terms anyone can understand.",
			author: "James Wilson",
			position: "CEO",
			company: "BuildFast",
		},
	];

	const tools: Tool[] = [
		{
			name: "Neovim",
			description:
				"Hyperextensible Vim-based text editor with custom lua config for maximum efficiency",
			category: "development",
			link: "https://neovim.io/",
		},
		{
			name: "tmux",
			description:
				"Terminal multiplexer for managing complex terminal workflows and sessions",
			category: "development",
			link: "https://github.com/tmux/tmux",
		},
		{
			name: "Arch Linux",
			description:
				"Lightweight and flexible Linux distribution for full customization",
			category: "development",
		},
		{
			name: "Figma",
			description:
				"Collaborative interface design tool for prototyping and design systems",
			category: "design",
			link: "https://www.figma.com/",
		},
		{
			name: "Notion",
			description:
				"All-in-one workspace for notes, tasks, wikis, and databases",
			category: "productivity",
			link: "https://www.notion.so/",
		},
		{
			name: "Obsidian",
			description:
				"Knowledge base that works on local Markdown files for personal knowledge management",
			category: "productivity",
			link: "https://obsidian.md/",
		},
		{
			name: "GitHub Copilot",
			description: "AI pair programmer that suggests code in real-time",
			category: "development",
			link: "https://github.com/features/copilot",
		},
		{
			name: "Docker",
			description:
				"Containerization platform for consistent development environments",
			category: "development",
			link: "https://www.docker.com/",
		},
	];

	const categoryColors = {
		frontend: "text-cyan-400",
		backend: "text-emerald-400",
		tools: "text-amber-400",
		languages: "text-purple-400",
		other: "text-rose-400",
		development: "text-cyan-400",
		design: "text-pink-400",
		productivity: "text-green-400",
	};

	return (
		<div className="flex flex-col min-h-screen justify-center py-20">
			<div className="mx-auto w-full max-w-6xl h-full flex flex-col">
				<Card className="mb-6 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						TOOLS_SKILLS_AND_KUDOS
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">[{activeTab}]</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow">
					{/* Sidebar */}
					<Card className="lg:col-span-1 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">combo</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-8">
							skills, praise & toolkit
						</div>

						<div className="flex flex-col gap-3">
							{(["skills", "testimonials", "tools"] as TabType[]).map((tab) => (
								<button
									key={tab}
									type="button"
									onClick={() => setActiveTab(tab)}
									className={`px-4 py-3 border rounded-lg text-sm transition-all text-left 
                    ${
											activeTab === tab
												? "border-white border-opacity-30 bg-black/30"
												: "border-white/10 hover:border-white/30"
										}`}
								>
									<div className="font-bold mb-1 capitalize">{tab}</div>
									<div className="text-xs opacity-70">
										{tab === "skills" && "What I'm good at"}
										{tab === "testimonials" && "What others say"}
										{tab === "tools" && "What I use daily"}
									</div>
								</button>
							))}
						</div>

						<div className="mt-8 font-mono text-xs opacity-70 bg-black/20 p-3 rounded">
							<div className="mb-2">$ cat highlights.txt</div>
							<div className="ml-2">- years of experience: 8+</div>
							<div className="ml-2">- projects completed: 50+</div>
							<div className="ml-2">- coffee consumed: ∞</div>
						</div>
					</Card>

					{/* Main Content */}
					<Card className="lg:col-span-3 p-6 overflow-auto">
						{/* Skills Tab */}
						{activeTab === "skills" && (
							<div>
								<h2 className="text-2xl font-bold mb-6">
									Technical Proficiency
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
									{skills.map((skill) => (
										<div key={skill.name} className="bg-black/20 p-4 rounded">
											<div className="flex justify-between items-center mb-2">
												<div className="font-bold">{skill.name}</div>
												<div
													className={`text-xs ${categoryColors[skill.category]}`}
												>
													{skill.category}
												</div>
											</div>
											<div className="h-3 bg-black/30 rounded-full overflow-hidden">
												<div
													className={`h-full ${skill.color} transition-all duration-1000`}
													style={{ width: `${skill.level}%` }}
												/>
											</div>
											<div className="mt-1 text-right text-xs opacity-70">
												{skill.level}%
											</div>
										</div>
									))}
								</div>

								<div className="bg-black/10 p-4 rounded border border-white/5">
									<p className="italic text-sm opacity-80">
										"The capacity to learn is a gift; the ability to learn is a
										skill; the willingness to learn is a choice." — Brian
										Herbert
									</p>
								</div>
							</div>
						)}

						{/* Testimonials Tab */}
						{activeTab === "testimonials" && (
							<div>
								<h2 className="text-2xl font-bold mb-6">What People Say</h2>
								<div className="grid grid-cols-1 gap-6">
									{testimonials.map((testimonial, index) => (
										<Card
											key={`testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, "-")}`}
											className="p-0 overflow-hidden transition-transform hover:transform hover:scale-[1.01]"
										>
											<div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 w-full" />
											<CardContent className="p-6">
												<p className="italic text-lg mb-4">
													"{testimonial.quote}"
												</p>
												<div className="flex items-center justify-between">
													<div>
														<div className="font-bold">
															{testimonial.author}
														</div>
														<div className="text-sm opacity-70">
															{testimonial.position} at {testimonial.company}
														</div>
													</div>
													<div className="text-4xl opacity-20">"</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						)}

						{/* Tools Tab */}
						{activeTab === "tools" && (
							<div>
								<h2 className="text-2xl font-bold mb-6">My Toolkit</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{tools.map((tool) => (
										<div
											key={tool.name}
											className="bg-black/20 p-4 rounded flex flex-col"
										>
											<div className="flex justify-between items-start mb-2">
												<div className="font-bold">{tool.name}</div>
												<div
													className={`text-xs ${categoryColors[tool.category]} px-2 py-1 rounded bg-black/30`}
												>
													{tool.category}
												</div>
											</div>
											<p className="text-sm opacity-80 flex-grow mb-3">
												{tool.description}
											</p>
											{tool.link && (
												<a
													href={tool.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-xs underline self-end hover:text-white transition-colors"
												>
													Learn more
												</a>
											)}
										</div>
									))}
								</div>

								<div className="mt-8 font-mono text-xs">
									<div className="opacity-70 mb-2">$ echo $SHELL</div>
									<div className="ml-2">/usr/bin/zsh with oh-my-zsh</div>
									<div className="opacity-70 mb-2 mt-4">$ echo $EDITOR</div>
									<div className="ml-2">nvim</div>
								</div>
							</div>
						)}
					</Card>
				</div>
			</div>
		</div>
	);
}
