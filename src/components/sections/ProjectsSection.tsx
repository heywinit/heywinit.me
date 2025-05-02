import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Github } from "lucide-react";

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState(0);

	const projects = [
		{
			title: "baylag",
			description:
				"A minimal, offline-first personal finance app built for students, freelancers, and anyone who wants full control over their money.",
			technologies: ["React", "Dexie.js"],
			link: "https://github.com/heywinit/baylag",
			type: "webdev",
		},
		{
			title: "mercon",
			description:
				"An all in one library for downloading data related to Meteora Transactions, Positions and Pools. Inspired by @GeekLad's meteora-dlmm-db.",
			technologies: ["Bun", "TypeScript", "SQLite", "PostgreSQL"],
			link: "https://github.com/heywinit/mercon",
			type: "web3",
		},
		{
			title: "discodb",
			description: "A database that stores data in Discord channels.",
			technologies: ["GoLang"],
			link: "https://github.com/heywinit/discodb",
			type: "databases",
		},
		{
			title: "jalalabad",
			description: "My defence technology yapping spot.",
			technologies: ["NextJS"],
			link: "https://github.com/heywinit/jalalabad",
			type: "fullstack",
		},
	];

	const projectTypes = {
		ml: "text-amber-400",
		web3: "text-emerald-400",
		webdev: "text-cyan-400",
		fullstack: "text-cyan-400",
		databases: "text-blue-400",
	};

	return (
		<div className="h-full flex flex-col py-10">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-4 h-16 flex">
					<div className="flex w-[70%] h-full items-center p-4 text-white/50">
						STUFF_I_SHIP
					</div>
					<div className="flex w-[15%] border-l h-full items-center justify-center p-4 font-mono">
						<a
							href="https://github.com/heywinit"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
						>
							<Github size={18} />
							<span>GitHub</span>
						</a>
					</div>
					<div className="flex w-[15%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">
							[{selectedProject + 1}/{projects.length}]
						</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-h-[calc(100vh-10rem)] overflow-auto">
					<Card className="lg:col-span-2 lg:row-span-1 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">projects</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-6">
							things I've built when procrastinating on other things
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{projects.map((project, index) => (
								<button
									key={`project-${project.title}`}
									type="button"
									className={`p-4 rounded transition-all text-left
										${
											index === selectedProject
												? "bg-white/10 shadow-lg"
												: "bg-black/20 hover:bg-white/5"
										}`}
									onClick={() => setSelectedProject(index)}
								>
									<div className="font-bold truncate">{project.title}</div>
									<div
										className={`text-sm ${projectTypes[project.type as keyof typeof projectTypes]}`}
									>
										{project.type}
									</div>
								</button>
							))}
						</div>
					</Card>

					<Card className="lg:col-span-2 lg:row-span-2 p-6">
						<CardContent className="p-0 h-full flex flex-col">
							<div className="text-2xl font-bold mb-2">
								{projects[selectedProject].title}
							</div>
							<div
								className={`text-sm ${projectTypes[projects[selectedProject].type as keyof typeof projectTypes]} mb-4`}
							>
								{projects[selectedProject].type}
							</div>

							<div className="prose prose-invert max-w-none mb-8">
								<p className="text-lg">
									{projects[selectedProject].description}
								</p>
							</div>

							<div className="mt-auto flex justify-between items-end">
								<div className="flex flex-col">
									<div className="text-sm opacity-70 mb-2">
										Technologies used
									</div>
									<div className="flex flex-wrap gap-2">
										{projects[selectedProject].technologies.map((tech) => (
											<span
												key={`tech-${tech}`}
												className={`text-sm px-2 py-1 rounded
												${
													projects[selectedProject].type === "machine learning"
														? "bg-amber-900/30 text-amber-400"
														: projects[selectedProject].type === "web3"
															? "bg-emerald-900/30 text-emerald-400"
															: projects[selectedProject].type === "fullstack"
																? "bg-cyan-900/30 text-cyan-400"
																: projects[selectedProject].type === "databases"
																	? "bg-blue-900/30 text-blue-400"
																	: "bg-cyan-900/30 text-cyan-400"
												}`}
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div>
									<a
										href={projects[selectedProject].link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
									>
										<span className="mr-2">View project</span>
										<span className="text-xs">→</span>
									</a>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="lg:col-span-2 lg:row-span-1 p-6 flex flex-col">
						<div className="prose prose-invert max-w-none">
							<p>
								i build projects to explore new technologies and solve
								interesting problems. each one is a
								<span className="italic text-white">
									{" "}
									playground for experimentation
								</span>{" "}
								and learning.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
