import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CollapsibleCard } from "@/components/ui/collapsible-card";

interface Project {
	id: string;
	title: string;
	description: string;
	techs: string[];
	githubUrl: string;
	siteUrl?: string;
}

const projects: Project[] = [
	{
		id: "portfolio",
		title: "heywinit.me",
		description:
			"my personal portfolio website built with modern web technologies.",
		techs: ["typescript", "react", "tailwind", "vite"],
		githubUrl: "https://github.com/heywinit/heywinit.me",
		siteUrl: "https://heywinit.me",
	},
];

const techColors: Record<string, string> = {
	typescript: "text-sky-500 dark:text-sky-400",
	javascript: "text-amber-500 dark:text-amber-400",
	golang: "text-cyan-600 dark:text-cyan-400",
	python: "text-amber-500 dark:text-amber-400",
	react: "text-sky-500 dark:text-sky-400",
	bun: "text-amber-500 dark:text-amber-400",
	postgres: "text-teal-600 dark:text-teal-400",
	drizzle: "text-indigo-500 dark:text-indigo-400",
	prisma: "text-primary dark:text-primary",
	sqlite: "text-neutral-500 dark:text-neutral-400",
	tailwind: "text-sky-500 dark:text-sky-400",
	vite: "text-purple-500 dark:text-purple-400",
	"machine learning": "text-primary dark:text-primary",
	nlp: "text-green-500 dark:text-green-400",
	solana: "text-purple-600 dark:text-purple-500",
	web3: "text-blue-500 dark:text-blue-400",
	api: "text-amber-600 dark:text-amber-500",
	rest: "text-gray-500 dark:text-gray-400",
};

export function ProjectsSection() {
	const [selectedTech, setSelectedTech] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	// Get all unique tech tags
	const allTechs = useMemo(() => {
		return Array.from(new Set(projects.flatMap((p) => p.techs))).sort();
	}, []);

	// Filter projects based on selected tech and search query
	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesTech = selectedTech
				? project.techs.includes(selectedTech)
				: true;
			const matchesSearch = searchQuery
				? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					project.description
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					project.techs.some((tech) =>
						tech.toLowerCase().includes(searchQuery.toLowerCase()),
					)
				: true;
			return matchesTech && matchesSearch;
		});
	}, [selectedTech, searchQuery]);

	return (
		<CollapsibleCard
			title="/projects"
			className="mb-6 border-border bg-background"
			defaultOpen={false}
		>
			<div className="mb-6 space-y-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="search-projects" className="text-sm">
						search projects:
					</label>
					<Input
						id="search-projects"
						type="text"
						placeholder="Search by name, description, or tech..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="max-w-md"
					/>
				</div>

				<div>
					<div className="text-sm mb-2">filter by tech:</div>
					<div className="flex flex-wrap gap-2">
						{allTechs.map((tech) => (
							<Badge
								key={tech}
								variant={selectedTech === tech ? "default" : "outline"}
								className={`cursor-pointer hover:opacity-80 ${selectedTech === tech ? "" : techColors[tech] || ""}`}
								onClick={() =>
									setSelectedTech(selectedTech === tech ? null : tech)
								}
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>
			</div>

			{filteredProjects.length === 0 ? (
				<div className="text-center py-8 text-muted-foreground">
					No projects match your filters. Try adjusting your search or filter
					criteria.
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{filteredProjects.map((project) => (
						<Card
							key={project.id}
							className="border-border bg-card hover:shadow-md transition-all"
						>
							<CardHeader className="pb-2">
								<CardTitle className="text-md">{project.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-1 mb-4">
									{project.techs.map((tech) => (
										<span
											key={tech}
											className={`text-xs px-2 py-0.5 rounded-full border border-border ${techColors[tech] || ""}`}
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-2 mt-2">
									<Button
										variant="outline"
										size="sm"
										className="text-xs"
										onClick={() => window.open(project.githubUrl, "_blank")}
									>
										github
									</Button>
									{project.siteUrl && (
										<Button
											variant="outline"
											size="sm"
											className="text-xs"
											onClick={() => window.open(project.siteUrl, "_blank")}
										>
											visit site
										</Button>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</CollapsibleCard>
	);
}
