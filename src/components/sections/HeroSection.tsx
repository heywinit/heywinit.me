import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<motion.div
			className="flex items-center bg-primary flex-1 h-full p-1"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-border bg-background w-full h-full">
				<div className="flex-1 p-6 h-full flex flex-col justify-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.3 }}
					>
						<h1 className="text-4xl font-bold text-foreground-accent mb-2">
							Win Thurein
						</h1>
						<h2 className="text-2xl text-foreground-secondary mb-6">
							{/* Software Architect */}
							Software Architect
						</h2>

						<p className="text-xl mb-4 text-foreground-secondary">
							<span className="text-primary">19-year-old</span> builder of
							digital worlds
						</p>

						<div className="font-mono text-foreground-secondary space-y-3">
							<p>Crafting elegant solutions from chaos.</p>
							<p>Transforming complex problems into elegant code poetry.</p>
							<p>Where imagination meets technical precision.</p>
						</div>
					</motion.div>
				</div>

				<div className="flex-1 p-6 h-full flex flex-col justify-center bg-background-secondary">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.3 }}
						className="font-mono"
					>
						<div className="border border-border p-4 bg-background-muted">
							<p className="text-primary mb-2">
								{/* Core competencies */}
								Core competencies
							</p>
							<ul className="space-y-1 text-foreground-secondary">
								<li>
									<span className="text-foreground-accent">const</span>{" "}
									fullstack ={" "}
									<span className="text-primary">
										"React | Node | TypeScript"
									</span>
									;
								</li>
								<li>
									<span className="text-foreground-accent">const</span>{" "}
									architect ={" "}
									<span className="text-primary">
										"System Design | Optimization"
									</span>
									;
								</li>
								<li>
									<span className="text-foreground-accent">const</span>{" "}
									innovation ={" "}
									<span className="text-primary">
										"Always learning | Ever evolving"
									</span>
									;
								</li>
							</ul>
							<p className="text-foreground-tertiary mt-4">
								<span className="text-primary">&gt;</span> Ready to build
								something legendary together
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
