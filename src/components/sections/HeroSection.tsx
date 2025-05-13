import { useState, useEffect } from "react";
import {
	Github,
	Twitter,
	ExternalLink,
	ChevronDown,
	Mail,
	MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function HeroSection() {
	const greetings = [
		"hello",
		"bonjour",
		"مرحبا",
		"привет",
		"ciao",
		"hola",
		"你好",
		"नमस्ते",
	];
	const [greetingIndex, setGreetingIndex] = useState(0);

	// Cycle through greetings
	useEffect(() => {
		const interval = setInterval(() => {
			setGreetingIndex((prev) => (prev + 1) % greetings.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-32">
			{/* Top Section */}
			<div className="flex-1 flex items-center justify-center">
				<div className="max-w-3xl w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-10"
					>
						<motion.span
							key={greetingIndex}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="text-lg text-neutral-500 block mb-1"
						>
							{greetings[greetingIndex]}
						</motion.span>

						<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
							winit.
						</h1>

						<p className="text-xl max-w-xl leading-relaxed mb-6">
							Crafting digital experiences with code. Software developer focused
							on web3, blockchain, and interactive interfaces.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						<div className="space-y-4">
							<h2 className="text-sm uppercase tracking-wider text-neutral-500">
								Background
							</h2>
							<p>
								got into this rabbit hole when I wrote QBASIC{" "}
								{new Date().getFullYear() - 2013} years ago. spent time in unity
								without knowing what C# is, then started off as a Java +
								Minecraft Mod Dev in high school. shifted to web3 with solana
								and eth.
							</p>
							<p>
								now I work at SOLDecoder as a software dev and I cofound Metfin.
								I'm found writing either golang or typescript.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-sm uppercase tracking-wider text-neutral-500">
								Tech Stack
							</h2>
							<div className="flex flex-wrap gap-2">
								{["TypeScript", "Golang", "React", "Web3"].map((tech) => (
									<span
										key={tech}
										className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex flex-col gap-4">
								<h2 className="text-sm uppercase tracking-wider text-neutral-500">
									Get in touch
								</h2>
								<div className="flex gap-4 items-center">
									<div className="flex gap-4 items-center">
										<motion.a
											href="https://github.com/heywint"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="GitHub"
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="hover:text-neutral-600 transition-colors"
										>
											<Github size={20} />
										</motion.a>
										<motion.a
											href="https://twitter.com/hiwinit"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Twitter"
											whileHover={{ scale: 1.1, rotate: -5 }}
											className="hover:text-neutral-600 transition-colors"
										>
											<Twitter size={20} />
										</motion.a>
										<motion.a
											href="https://discord.com/users/yourusername"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Discord"
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="hover:text-neutral-600 transition-colors"
										>
											<MessageSquare size={20} />
										</motion.a>
										<motion.a
											href="mailto:your.email@example.com"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Email"
											whileHover={{ scale: 1.1, rotate: -5 }}
											className="hover:text-neutral-600 transition-colors"
										>
											<Mail size={20} />
										</motion.a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="flex justify-center pb-8"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
				>
					<ChevronDown size={20} className="text-neutral-400" />
				</motion.div>
			</motion.div>
		</div>
	);
}
