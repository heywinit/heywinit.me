import { useState, useEffect } from "react";
import {
	Github,
	Twitter,
	ChevronDown,
	Mail,
	MessageSquare,
	Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
	const greetings = ["hello", "bonjour", "مرحبا", "привет", "ciao", "नमस्ते"];
	const [greetingIndex, setGreetingIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	// Cycle through greetings
	useEffect(() => {
		if (!isHovering) {
			const interval = setInterval(() => {
				setGreetingIndex((prev) => (prev + 1) % greetings.length);
			}, 3000);
			return () => clearInterval(interval);
		}
	}, [isHovering]);

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
							<div
								className="flex overflow-hidden"
								onMouseEnter={() => setIsHovering(true)}
								onMouseLeave={() => setIsHovering(false)}
							>
								<motion.span
									key={greetingIndex}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									className="text-lg text-neutral-500 mr-2"
								>
									{greetings[greetingIndex]}
								</motion.span>

								{isHovering && (
									<div className="flex">
										{greetings
											.filter((_, i) => i !== greetingIndex)
											.map((greeting) => (
												<motion.span
													key={greeting}
													initial={{ opacity: 0, x: -10 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.3,
														delay: greetings.indexOf(greeting) * 0.1,
													}}
													className="text-lg text-neutral-500 mr-2"
												>
													{greeting}
												</motion.span>
											))}
									</div>
								)}
							</div>
							<div className="h-[1px] flex-grow bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-700" />
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
						{/* Top box - Background */}
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

						{/* Bottom box - Skills & Contact */}
						<div className="space-y-5 backdrop-blur-sm bg-white/20 dark:bg-black/20 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
							{/* Content */}
							<div className="space-y-6">
								{/* Tech Stack Section */}
								<div>
									<h3 className="text-neutral-600 dark:text-neutral-400 mb-2 text-sm font-medium">
										tech stack
									</h3>
									<div className="grid grid-cols-2 gap-2">
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>TypeScript</span>
										</div>
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>Golang</span>
										</div>
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>React</span>
										</div>
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>Web3</span>
										</div>
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>Node.js</span>
										</div>
										<div className="flex items-center">
											<span className="text-neutral-500 mr-2">-</span>
											<span>Solidity</span>
										</div>
									</div>
								</div>

								{/* Get In Touch Section */}
								<div>
									<h3 className="text-neutral-600 dark:text-neutral-400 mb-2 text-sm font-medium">
										get in touch
									</h3>
									<div className="grid grid-cols-2 gap-2">
										<a
											href="https://github.com/heywint"
											className="flex items-center group hover:text-blue-500 transition-colors duration-200"
										>
											<Github size={16} className="mr-2" />
											<span>GitHub</span>
										</a>
										<a
											href="https://twitter.com/hiwinit"
											className="flex items-center group hover:text-blue-500 transition-colors duration-200"
										>
											<Twitter size={16} className="mr-2" />
											<span>Twitter</span>
										</a>
										<a
											href="https://discord.com/users/1272156033896153113"
											className="flex items-center group hover:text-blue-500 transition-colors duration-200"
										>
											<MessageSquare size={16} className="mr-2" />
											<span>Discord</span>
										</a>
										<a
											href="mailto:hello@winit.me"
											className="flex items-center group hover:text-blue-500 transition-colors duration-200"
										>
											<Mail size={16} className="mr-2" />
											<span>Email</span>
										</a>
									</div>

									{/* Additional contact options */}
									<div className="mt-4 grid grid-cols-1 gap-2">
										<div className="flex flex-col">
											<span className="text-neutral-600 dark:text-neutral-400 text-sm">
												Location
											</span>
											<span className="text-sm">India - GMT+5:30</span>
											<span className="text-sm">
												right now, it's{" "}
												{new Date().toLocaleTimeString("in", {
													hour: "2-digit",
													minute: "2-digit",
												})}{" "}
												for me
											</span>
										</div>
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
