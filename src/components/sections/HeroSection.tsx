import { useState, useEffect } from "react";
import {
	Github,
	Twitter,
	ExternalLink,
	ChevronDown,
	Mail,
	MessageSquare,
	Code,
	Terminal,
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
		<div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl" />
			<div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-300/10 to-pink-300/10 rounded-full blur-3xl" />

			{/* Top Section */}
			<div className="flex-1 flex items-center justify-center z-10">
				<div className="max-w-3xl w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-12"
					>
						<div className="flex items-center mb-3">
							<motion.span
								key={greetingIndex}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								className="text-lg text-neutral-500 mr-2"
							>
								{greetings[greetingIndex]}
							</motion.span>
							<div className="h-[1px] flex-grow bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-700"></div>
						</div>

						<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
								winit.
							</span>
						</h1>

						<div className="relative pl-4 border-l-2 border-neutral-300 dark:border-neutral-700 mb-8">
							<p className="text-xl italic text-neutral-700 dark:text-neutral-300">
								"God's temple is finished. Now God needs helpers."
							</p>
							<span className="text-sm text-neutral-500 mt-2 block">
								— Terry A. Davis
							</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-10"
					>
						<div className="space-y-5 backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
							<div className="flex items-center gap-2">
								<Terminal size={18} className="text-neutral-500" />
								<h2 className="text-sm uppercase tracking-wider text-neutral-500">
									Background
								</h2>
							</div>
							<p className="leading-relaxed">
								got into this rabbit hole when I wrote QBASIC{" "}
								{new Date().getFullYear() - 2013} years ago. spent time in unity
								without knowing what C# is, then started off as a Java +
								Minecraft Mod Dev in high school. shifted to web3 with solana
								and eth.
							</p>
							<p className="leading-relaxed">
								now I work at SOLDecoder as a software dev and I cofound Metfin.
								I'm found writing either golang or typescript.
							</p>
						</div>
						<div className="space-y-5 backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
							<div className="flex items-center gap-2">
								<Code size={18} className="text-neutral-500" />
								<h2 className="text-sm uppercase tracking-wider text-neutral-500">
									Tech Stack
								</h2>
							</div>
							<div className="flex flex-wrap gap-2">
								{[
									"TypeScript",
									"Golang",
									"React",
									"Web3",
									"Node.js",
									"Solidity",
								].map((tech) => (
									<span
										key={tech}
										className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-default"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex flex-col gap-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
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
											className="hover:text-neutral-600 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
										>
											<Github size={20} />
										</motion.a>
										<motion.a
											href="https://twitter.com/hiwinit"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Twitter"
											whileHover={{ scale: 1.1, rotate: -5 }}
											className="hover:text-neutral-600 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
										>
											<Twitter size={20} />
										</motion.a>
										<motion.a
											href="https://discord.com/users/yourusername"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Discord"
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="hover:text-neutral-600 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
										>
											<MessageSquare size={20} />
										</motion.a>
										<motion.a
											href="mailto:your.email@example.com"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Email"
											whileHover={{ scale: 1.1, rotate: -5 }}
											className="hover:text-neutral-600 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
					className="bg-white/50 dark:bg-black/50 rounded-full p-2 backdrop-blur-sm"
				>
					<ChevronDown size={20} className="text-neutral-400" />
				</motion.div>
			</motion.div>
		</div>
	);
}
