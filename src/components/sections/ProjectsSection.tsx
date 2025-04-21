import { motion } from "framer-motion";

export default function ProjectsSection() {
	const projects = [
		{
			id: 1,
			title: "Neural Canvas",
			description:
				"An AI-powered creative tool that transforms text prompts into stunning visual art.",
			tech: ["React", "TensorFlow.js", "WebGL"],
			link: "#",
		},
		{
			id: 2,
			title: "Quantum Messenger",
			description:
				"End-to-end encrypted messaging platform with a focus on privacy and elegant UX.",
			tech: ["TypeScript", "Node.js", "Signal Protocol"],
			link: "#",
		},
		{
			id: 3,
			title: "EcoMetrics",
			description:
				"Visualizing environmental data to help users understand their carbon footprint.",
			tech: ["React", "D3.js", "Python"],
			link: "#",
		},
	];

	return (
		<motion.div
			className="flex items-center bg-primary flex-1 h-full p-1"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-col divide-y-2 divide-border bg-background w-full h-full">
				<div className="p-6">
					<motion.h2
						className="text-3xl font-bold text-foreground-accent mb-2"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.3 }}
					>
						Selected Projects
					</motion.h2>
					<motion.p
						className="text-foreground-secondary font-mono"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.15, duration: 0.3 }}
					>
						A glimpse into my digital craftsmanship
					</motion.p>
				</div>

				<div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="border border-border bg-background-secondary p-5 h-full flex flex-col justify-between"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
						>
							<div>
								<h3 className="text-xl text-primary font-bold mb-3">
									{project.title}
								</h3>
								<p className="text-foreground-secondary mb-4 font-mono">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-background text-foreground-secondary text-xs border border-border"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<a
								href={project.link}
								className="text-primary hover:text-accent border-b border-transparent hover:border-accent transition-colors inline-block font-mono"
							>
								view project <span className="ml-1">→</span>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
