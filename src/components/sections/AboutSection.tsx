import { motion } from "framer-motion";

export default function AboutSection() {
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
						<h2 className="text-3xl font-bold text-foreground-accent mb-4">
							The Journey So Far
						</h2>

						<div className="space-y-4 text-foreground-secondary font-mono">
							<div>
								<h3 className="text-xl text-primary mb-2">
									Creative Problem Solver
								</h3>
								<p>
									Approaching each challenge with both analytical precision and
									creative intuition. Finding elegant solutions where others see
									only obstacles.
								</p>
							</div>

							<div>
								<h3 className="text-xl text-primary mb-2">Digital Craftsman</h3>
								<p>
									Building websites and applications that are not just
									functional, but meaningful experiences that resonate with
									users on a deeper level.
								</p>
							</div>

							<div>
								<h3 className="text-xl text-primary mb-2">
									Continuous Learner
								</h3>
								<p>
									Embracing new technologies and methodologies with enthusiasm.
									The digital landscape is ever-changing, and so am I.
								</p>
							</div>
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
							<p className="text-primary mb-3">
								{/* Technical Proficiency */} Technical Proficiency
							</p>

							<div className="space-y-3">
								<div>
									<p className="text-foreground mb-1">Front-End Development</p>
									<div className="w-full bg-background h-2 rounded-sm">
										<div
											className="bg-primary h-full rounded-sm"
											style={{ width: "90%" }}
										/>
									</div>
								</div>

								<div>
									<p className="text-foreground mb-1">Back-End Systems</p>
									<div className="w-full bg-background h-2 rounded-sm">
										<div
											className="bg-primary h-full rounded-sm"
											style={{ width: "85%" }}
										/>
									</div>
								</div>

								<div>
									<p className="text-foreground mb-1">UI/UX Design</p>
									<div className="w-full bg-background h-2 rounded-sm">
										<div
											className="bg-primary h-full rounded-sm"
											style={{ width: "80%" }}
										/>
									</div>
								</div>

								<div>
									<p className="text-foreground mb-1">System Architecture</p>
									<div className="w-full bg-background h-2 rounded-sm">
										<div
											className="bg-primary h-full rounded-sm"
											style={{ width: "75%" }}
										/>
									</div>
								</div>
							</div>

							<p className="text-foreground-tertiary mt-4">
								<span className="text-primary">&gt;</span> Always exploring new
								horizons
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
