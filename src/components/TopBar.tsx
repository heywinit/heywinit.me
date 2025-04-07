import { motion } from "framer-motion";
import { useState } from "react";

export default function TopBar() {
	const [copied, setCopied] = useState(false);

	return (
		<div className="flex justify-between items-center w-full px-8 py-4 bg-black bg-black font-mono border border-white">
			<div className="flex items-center gap-2">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<h1
					className="text-xl font-bold text-white cursor-pointer select-none"
					onClick={() => {
						navigator.clipboard.writeText("hey@winit.dev");
						setCopied(true);
						setTimeout(() => {
							setCopied(false);
						}, 1000);
					}}
				>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{copied ? "copied!" : "hey@winit.dev"}
					</motion.span>
				</h1>
			</div>
			<div className="flex items-center gap-4">
				{/* <ThemeToggle /> */}
				<nav className="flex items-center gap-4">
					{["/blogs", "/about", "/contact"].map((path) => (
						<a
							key={path}
							href={path}
							className="text-white hover:text-white hover:bg-white hover:text-black px-1 py-0.5 transition-colors"
						>
							{path}
						</a>
					))}
				</nav>
			</div>
		</div>
	);
}
