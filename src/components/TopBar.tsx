import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

export default function TopBar() {
	const [copied, setCopied] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className="flex justify-between items-center w-full px-8 py-4 bg-card backdrop-blur-sm font-mono border border-primary rounded-sm">
			<div className="flex items-center gap-2">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<h1
					className="text-xl font-bold text-primary cursor-pointer select-none"
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
				<nav className="flex items-center gap-4">
					{["/blogs", "/about", "/contact"].map((path) => (
						<Link
							key={path}
							to={path}
							className="text-foreground hover:text-primary border border-transparent hover:border-primary/50 px-3 py-1 rounded-sm uppercase tracking-wide text-sm transition-colors"
						>
							<span className="underline">{path.charAt(1)}</span>
							{path.slice(2)}
						</Link>
					))}
					<Button variant="solana" size="sm" onClick={toggleTheme}>
						{theme === "light" ? "D" : "L"}
					</Button>
				</nav>
			</div>
		</div>
	);
}
