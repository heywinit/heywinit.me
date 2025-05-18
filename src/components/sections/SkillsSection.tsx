import { memo } from "react";
import { motion } from "framer-motion";

interface SkillsSectionProps {
	skills: Record<string, string>;
}

const SkillsSection = memo(({ skills }: SkillsSectionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
					#
				</span>
				Arsenal
			</h2>

			<div className="space-y-6">
				<div className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{Object.entries(skills).map(([skill, description]) => (
							<div
								key={skill}
								className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-none hover:border-primary/50 transition-colors"
							>
								<div className="font-medium flex items-center mb-1">
									<span className="text-accent mr-2 text-sm">$</span>
									{skill}
								</div>
								<p className="text-sm text-neutral-600 dark:text-neutral-400">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
