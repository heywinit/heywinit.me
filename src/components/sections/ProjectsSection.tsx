import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
	name: string;
	description: string;
	tech: string;
	url: string;
	image?: string;
}

interface ProjectsSectionProps {
	projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
	const [filter, setFilter] = useState<string>("");

	// Extract unique technologies for filter options
	const technologies = useMemo(() => {
		const techSet = new Set<string>();
		projects.forEach((project) => {
			project.tech.split("•").forEach((tech) => {
				techSet.add(tech.trim());
			});
		});
		return Array.from(techSet);
	}, [projects]);

	// Filter projects based on selected technology
	const filteredProjects = useMemo(() => {
		if (!filter) return projects;
		return projects.filter((project) => project.tech.includes(filter));
	}, [projects, filter]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
					#
				</span>
				Projects
			</h2>

			<div className="flex flex-wrap gap-2 mb-4">
				<button
					onClick={() => setFilter("")}
					className={`px-3 py-1 text-sm rounded-none border transition-colors ${
						filter === ""
							? "border-primary bg-primary/10 text-primary"
							: "border-neutral-200 dark:border-neutral-800 hover:border-primary/50"
					}`}
				>
					All
				</button>
				{technologies.map((tech) => (
					<button
						key={tech}
						onClick={() => setFilter(tech)}
						className={`px-3 py-1 text-sm rounded-none border transition-colors ${
							filter === tech
								? "border-primary bg-primary/10 text-primary"
								: "border-neutral-200 dark:border-neutral-800 hover:border-primary/50"
						}`}
					>
						{tech}
					</button>
				))}
			</div>

			{filteredProjects.length === 0 ? (
				<p className="text-neutral-500 dark:text-neutral-400 italic">
					No projects match the selected filter.
				</p>
			) : (
				<div className="space-y-6">
					{filteredProjects.map((project) => (
						<motion.div
							key={project.name}
							className="p-5 rounded-none backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all duration-300 relative group"
							data-party-target="true"
						>
							<div className="flex justify-between">
								<h3 className="font-medium flex items-center">
									<span className="text-accent transition-opacity text-sm mr-2">
										{">"}
									</span>
									{project.name}
								</h3>
								{project.url && (
									<motion.a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ rotate: 15 }}
										whileTap={{ scale: 0.9 }}
									>
										<ExternalLink
											size={16}
											className="text-neutral-400 hover:text-accent dark:hover:text-primary"
										/>
									</motion.a>
								)}
							</div>

							{project.image && (
								<div className="mt-3 mb-2 overflow-hidden rounded-sm border border-neutral-200 dark:border-neutral-800">
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-32 object-cover object-center"
									/>
								</div>
							)}

							<p className="text-neutral-600 dark:text-neutral-400 mt-2">
								{project.description}
							</p>
							<div className="text-sm text-neutral-500 mt-3 flex gap-1 flex-wrap">
								{project.tech.split("•").map((tech) => (
									<span
										key={`${project.name}-tech-${tech.trim()}`}
										className="bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-none text-xs"
									>
										{tech.trim()}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			)}
		</motion.div>
	);
};

export default ProjectsSection;
