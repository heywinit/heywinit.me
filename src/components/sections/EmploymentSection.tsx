import { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Job {
	company: string;
	role: string;
	period: string;
	description: string | ReactNode;
	tech: string;
	url?: string;
}

interface EmploymentSectionProps {
	employment: Job[];
}

const EmploymentSection = ({ employment }: EmploymentSectionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.35 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
					#
				</span>
				Employment
			</h2>
			<div className="space-y-6">
				{employment.map((job, index) => (
					<>
						<motion.div
							key={`${job.company}-${job.period}`}
							className="p-5 rounded-none backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all duration-300 relative group"
							data-party-target="true"
						>
							<div className="flex justify-between">
								<div>
									<h3 className="font-medium flex items-center">
										<span className="text-accent transition-opacity text-sm mr-2">
											{">"}
										</span>
										{job.company}
									</h3>
									<div className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
										{job.role} • {job.period}
									</div>
								</div>
								{job.url && (
									<motion.a
										href={job.url}
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
							<div className="text-neutral-600 dark:text-neutral-400 mt-2">
								{job.description}
							</div>
							<div className="text-sm text-neutral-500 mt-3 flex gap-1 flex-wrap">
								{job.tech.split("•").map((tech) => (
									<span
										key={`${job.company}-tech-${tech.trim()}`}
										className="bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-none text-xs"
									>
										{tech.trim()}
									</span>
								))}
							</div>
						</motion.div>
						{index === 1 && (
							<div className="p-5 py-2 rounded-none bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
								<p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
									Haitus due to high school
								</p>
							</div>
						)}
					</>
				))}
			</div>
		</motion.div>
	);
};

export default EmploymentSection;
