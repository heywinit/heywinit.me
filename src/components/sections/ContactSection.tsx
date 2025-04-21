import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
	const [activeCommand, setActiveCommand] = useState(0);

	const contactMethods = [
		{ id: "email", label: "Email", value: "hey@winit.dev" },
		{ id: "github", label: "GitHub", value: "github.com/winnelson" },
		{ id: "twitter", label: "Twitter", value: "@heywinnelson" },
		{ id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/winnelson" },
	];

	// Terminal line animation
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: -20 },
		show: { opacity: 1, x: 0 },
	};

	const terminalCursor = {
		blink: {
			opacity: [0, 1, 0],
			transition: {
				duration: 0.8,
				repeat: Number.POSITIVE_INFINITY,
			},
		},
	};

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
						<h2 className="text-3xl font-bold text-foreground-accent mb-6">
							Let's Connect
						</h2>

						<p className="text-foreground-secondary font-mono mb-8">
							Ready to collaborate on something extraordinary? I'm just a
							message away. Looking forward to discussing how we can bring your
							ideas to life.
						</p>

						<motion.div
							className="border border-border bg-background-secondary p-4 font-mono"
							variants={container}
							initial="hidden"
							animate="show"
						>
							<p className="text-primary mb-4">{/* Terminal */} Terminal</p>

							{contactMethods.map((method, index) => (
								<motion.div
									key={method.id}
									variants={item}
									className={`flex items-center py-2 ${
										activeCommand === index
											? "text-foreground"
											: "text-foreground-secondary"
									}`}
									onMouseEnter={() => setActiveCommand(index)}
								>
									<span className="text-primary mr-2">$</span>
									<span className="mr-2">{method.label}:</span>
									<span className="text-accent">{method.value}</span>
									{activeCommand === index && (
										<motion.span
											className="inline-block w-2 h-4 bg-primary ml-1"
											variants={terminalCursor}
											animate="blink"
										/>
									)}
								</motion.div>
							))}
						</motion.div>
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
							<p className="text-primary mb-4">{/* Message */} Message</p>

							<form className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-foreground-secondary mb-1"
									>
										Name:
									</label>
									<input
										id="name"
										type="text"
										className="w-full bg-background border border-border p-2 text-foreground focus:border-primary focus:outline-none transition-colors"
										placeholder="Enter your name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-foreground-secondary mb-1"
									>
										Email:
									</label>
									<input
										id="email"
										type="email"
										className="w-full bg-background border border-border p-2 text-foreground focus:border-primary focus:outline-none transition-colors"
										placeholder="Enter your email"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-foreground-secondary mb-1"
									>
										Message:
									</label>
									<textarea
										id="message"
										className="w-full bg-background border border-border p-2 text-foreground focus:border-primary focus:outline-none transition-colors h-24"
										placeholder="What would you like to discuss?"
									/>
								</div>

								<button
									type="button"
									className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary-hover transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
