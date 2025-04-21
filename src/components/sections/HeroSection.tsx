import { motion } from "framer-motion";
import { HoverTypewriter } from "@/components/hover-typewriter";
import Globe from "@/components/cobe";
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
							hey, i'm{" "}
							<HoverTypewriter
								defaultText="winit."
								hoverText="Software Engineer"
							/>
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

				<div className="flex-1 h-full flex flex-col justify-center items-center bg-background-secondary">
					<Globe />
				</div>
			</div>
		</motion.div>
	);
}
