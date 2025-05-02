import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState(0);

	const projects = [
		{
			title: "Neural Synth",
			description:
				"AI-powered music generation tool that creates unique compositions based on user input parameters.",
			technologies: ["TensorFlow", "React", "WebAudio API"],
			link: "https://github.com/example/neural-synth",
			type: "ml",
		},
		{
			title: "DeFi Dashboard",
			description:
				"Comprehensive dashboard for tracking DeFi investments across multiple blockchains with real-time data visualization.",
			technologies: ["Ethers.js", "Next.js", "The Graph"],
			link: "https://github.com/example/defi-dashboard",
			type: "web3",
		},
		{
			title: "Collab Space",
			description:
				"Real-time collaborative workspace with document editing, video chat, and project management tools.",
			technologies: ["Socket.io", "MongoDB", "Redux"],
			link: "https://github.com/example/collab-space",
			type: "fullstack",
		},
	];

	const projectTypes = {
		ml: "text-amber-400",
		web3: "text-emerald-400",
		fullstack: "text-cyan-400",
	};

	return (
		<div className="h-full flex flex-col py-10">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-4 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						STUFF_I_SHIP
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
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

							<div className="mt-auto">
								<div className="text-sm opacity-70 mb-2">Technologies used</div>
								<div className="flex flex-wrap gap-2 mb-6">
									{projects[selectedProject].technologies.map((tech) => (
										<span
											key={`tech-${tech}`}
											className={`text-sm px-2 py-1 rounded
												${
													projects[selectedProject].type === "machine learning"
														? "bg-amber-900/30 text-amber-400"
														: projects[selectedProject].type === "web3"
															? "bg-emerald-900/30 text-emerald-400"
															: "bg-cyan-900/30 text-cyan-400"
												}`}
										>
											{tech}
										</span>
									))}
								</div>

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
						<div className="mt-auto p-4 bg-black/30 rounded flex justify-between items-center">
							<div className="text-sm opacity-70">more on github</div>
							<a
								href="https://github.com/heywinit"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm underline hover:text-white"
							>
								github.com/heywinit
							</a>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
