import { Button } from "@/components/ui/button";
import { CollapsibleCard } from "@/components/ui/collapsible-card";

// Define work project type
interface WorkProject {
	id: string;
	title: string;
	description: string;
	role: string;
	techs: string[];
	siteUrl: string;
}

// Work projects data
const workProjects: WorkProject[] = [
	{
		id: "metfin",
		title: "metf.in",
		description:
			"A fintech startup focused on making financial tools accessible.",
		role: "Founder",
		techs: ["TypeScript", "React", "PostgreSQL", "Prisma"],
		siteUrl: "https://metf.in",
	},
	{
		id: "soldecoder",
		title: "SolDecoder",
		description: "Tools for decoding and analyzing Solana transactions.",
		role: "Developer",
		techs: ["TypeScript", "React", "Solana", "Web3"],
		siteUrl: "https://soldecoder.app",
	},
];

// Tech stack color mapping
const techColors: Record<string, string> = {
	TypeScript: "text-sky-500 dark:text-sky-400",
	JavaScript: "text-amber-500 dark:text-amber-400",
	React: "text-sky-500 dark:text-sky-400",
	PostgreSQL: "text-teal-600 dark:text-teal-400",
	Prisma: "text-primary dark:text-primary",
	Solana: "text-purple-600 dark:text-purple-500",
	Web3: "text-blue-500 dark:text-blue-400",
};

export function WorkSection() {
	return (
		<CollapsibleCard
			title="/work"
			className="mb-6 border-border bg-background"
			defaultOpen={false}
		>
			<div className="space-y-6">
				{workProjects.map((project) => (
					<div
						key={project.id}
						className="border-b border-border pb-6 last:border-0 last:pb-0"
					>
						<div className="flex flex-col md:flex-row justify-between mb-2">
							<h3 className="text-lg font-medium">{project.title}</h3>
							<span className="text-sm text-muted-foreground">
								{project.role}
							</span>
						</div>
						<p className="mb-3">{project.description}</p>
						<div className="flex flex-wrap gap-2 mb-3">
							{project.techs.map((tech) => (
								<span
									key={tech}
									className={`text-xs px-2 py-1 rounded-md border border-border ${techColors[tech] || ""}`}
								>
									{tech}
								</span>
							))}
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() => window.open(project.siteUrl, "_blank")}
						>
							visit site
						</Button>
					</div>
				))}
			</div>
		</CollapsibleCard>
	);
}
