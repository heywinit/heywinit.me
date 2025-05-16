import { useState, useEffect } from "react";
import { Github, Twitter, Mail, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
	const [currentTime, setCurrentTime] = useState(new Date());
	const [expandedSection, setExpandedSection] = useState<string>("about");

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const toggleSection = (section: string) => {
		if (expandedSection === section) {
			setExpandedSection("");
		} else {
			setExpandedSection(section);
		}
	};

	const skills = {
		TypeScript:
			"My primary language for web development and frontend applications.",
		Golang: "When I want to build fast and efficient backend services.",
		React: "Framework of choice for creating interactive user interfaces.",
		Solana: "Specialized in building dApps and tools for the Solana ecosystem.",
		Ethereum: "Experience with smart contracts and DeFi applications.",
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white">
			<div className="max-w-2xl w-full space-y-12">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-2"
				>
					<motion.div
						className="flex items-center gap-2 text-sm text-neutral-500"
						whileHover={{ scale: 1.01 }}
					>
						<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
						<span>
							{currentTime.toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</span>
						<span className="text-neutral-300 dark:text-neutral-700">|</span>
						<span>India (GMT+5:30)</span>
					</motion.div>

					<motion.h1 className="text-5xl sm:text-6xl font-bold">
						winit.
					</motion.h1>

					<p className="text-lg text-neutral-600 dark:text-neutral-400 pt-2">
						Software developer focused on Golang, TypeScript, and blockchain
						technologies.
					</p>
				</motion.div>

				{/* About */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="space-y-4"
				>
					<button
						className="flex items-center justify-between w-full text-left"
						onClick={() => toggleSection("about")}
						aria-expanded={expandedSection === "about"}
						type="button"
					>
						<h2 className="text-xl font-semibold">About</h2>
						<motion.div
							animate={{ rotate: expandedSection === "about" ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown size={18} className="text-neutral-500" />
						</motion.div>
					</button>

					<AnimatePresence>
						{expandedSection === "about" && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="overflow-hidden"
							>
								<p className="text-neutral-700 dark:text-neutral-300">
									Started with QBASIC {new Date().getFullYear() - 2013} years
									ago, dabbled in Unity, then shifted to Java for Minecraft
									modding in high school. Ventured into web3 through Solana and
									Ethereum ecosystems.
								</p>

								<p className="text-neutral-700 dark:text-neutral-300 mt-4">
									Currently at SOLDecoder as a software dev and co-founding
									Metfin, working with Golang and TypeScript to create robust
									developer tools.
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Projects */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="space-y-4"
				>
					<button
						className="flex items-center justify-between w-full text-left"
						onClick={() => toggleSection("projects")}
						aria-expanded={expandedSection === "projects"}
						type="button"
					>
						<h2 className="text-xl font-semibold">Projects</h2>
						<motion.div
							animate={{ rotate: expandedSection === "projects" ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown size={18} className="text-neutral-500" />
						</motion.div>
					</button>

					<AnimatePresence>
						{expandedSection === "projects" && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="overflow-hidden space-y-6"
							>
								<motion.div className="p-4 border border-transparent rounded-lg hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
									<div className="flex justify-between">
										<h3 className="font-medium">Project Alpha</h3>
										<ExternalLink
											size={16}
											className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
										/>
									</div>
									<p className="text-neutral-600 dark:text-neutral-400 mt-1">
										A Solana-based NFT marketplace focused on minimal gas fees.
									</p>
									<div className="text-sm text-neutral-500 mt-2">
										TypeScript • React • Solana
									</div>
								</motion.div>

								<motion.div className="p-4 border border-transparent rounded-lg hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
									<div className="flex justify-between">
										<h3 className="font-medium">DeFi Dashboard</h3>
										<ExternalLink
											size={16}
											className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
										/>
									</div>
									<p className="text-neutral-600 dark:text-neutral-400 mt-1">
										Analytics dashboard for tracking DeFi investments across
										chains.
									</p>
									<div className="text-sm text-neutral-500 mt-2">
										Go • Next.js • Ethereum
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Skills */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4"
				>
					<button
						className="flex items-center justify-between w-full text-left"
						onClick={() => toggleSection("skills")}
						aria-expanded={expandedSection === "skills"}
						type="button"
					>
						<h2 className="text-xl font-semibold">Skills</h2>
						<motion.div
							animate={{ rotate: expandedSection === "skills" ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown size={18} className="text-neutral-500" />
						</motion.div>
					</button>

					<AnimatePresence>
						{expandedSection === "skills" && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="overflow-hidden"
							>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4">
									{Object.entries(skills).map(([skill, description]) => (
										<TooltipProvider key={skill}>
											<Tooltip>
												<TooltipTrigger asChild>
													<motion.p
														className="text-neutral-700 dark:text-neutral-300 font-medium cursor-pointer"
														whileHover={{ color: "#3b82f6" }}
													>
														{skill}
													</motion.p>
												</TooltipTrigger>
												<TooltipContent>
													<p>{description}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Contact */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex gap-5 pt-4"
				>
					<TooltipProvider>
						{[
							{
								id: "github",
								icon: <Github size={20} />,
								href: "https://github.com/heywinit",
								label: "GitHub",
							},
							{
								id: "twitter",
								icon: <Twitter size={20} />,
								href: "https://twitter.com/hiwinit",
								label: "Twitter",
							},
							{
								id: "email",
								icon: <Mail size={20} />,
								href: "mailto:heywinit@gmail.com",
								label: "Email",
							},
						].map((item) => (
							<Tooltip key={item.id}>
								<TooltipTrigger asChild>
									<motion.a
										href={item.href}
										className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
										aria-label={item.label}
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}
									>
										{item.icon}
									</motion.a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</motion.div>
			</div>
		</div>
	);
}
