import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = memo(() => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.6 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
					#
				</span>
				Contact
			</h2>

			<div className="">
				<div className="space-y-4">
					<p className="text-neutral-700 dark:text-neutral-300">
						I'm always open to new opportunities and collaborations. Feel free
						to reach out!
					</p>
				</div>
			</div>
			<div className="flex space-x-4 pt-2">
				<motion.a
					href="https://github.com/heywinit"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all"
					whileHover={{ y: -5 }}
				>
					<Github className="h-5 w-5" />
				</motion.a>
				<motion.a
					href="https://linkedin.com/in/username"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all"
					whileHover={{ y: -5 }}
				>
					<Linkedin className="h-5 w-5" />
				</motion.a>
				<motion.a
					href="mailto:winit@example.com"
					className="p-2 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all"
					whileHover={{ y: -5 }}
				>
					<Mail className="h-5 w-5" />
				</motion.a>
			</div>
		</motion.div>
	);
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
