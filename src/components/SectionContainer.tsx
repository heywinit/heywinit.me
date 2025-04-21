import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface Section {
	id: string;
	component: ReactNode;
}

interface SectionContainerProps {
	sections: Section[];
}

export default function SectionContainer({ sections }: SectionContainerProps) {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		// Prevent default scrolling behavior
		const preventDefault = (e: WheelEvent) => {
			e.preventDefault();

			if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
				setDirection(1);
				setCurrentSectionIndex((prev) => prev + 1);
			} else if (e.deltaY < 0 && currentSectionIndex > 0) {
				setDirection(-1);
				setCurrentSectionIndex((prev) => prev - 1);
			}
		};

		window.addEventListener("wheel", preventDefault, { passive: false });

		return () => {
			window.removeEventListener("wheel", preventDefault);
		};
	}, [currentSectionIndex, sections.length]);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
				setDirection(1);
				setCurrentSectionIndex((prev) => prev + 1);
			} else if (e.key === "ArrowUp" && currentSectionIndex > 0) {
				setDirection(-1);
				setCurrentSectionIndex((prev) => prev - 1);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentSectionIndex, sections.length]);

	const variants = {
		enter: (direction: number) => ({
			y: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			y: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			y: direction < 0 ? "100%" : "-100%",
			opacity: 0,
		}),
	};

	return (
		<div className="relative h-full w-full overflow-hidden">
			<AnimatePresence initial={false} custom={direction} mode="wait">
				<motion.div
					key={currentSectionIndex}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="absolute inset-0 h-full w-full"
				>
					{sections[currentSectionIndex].component}
				</motion.div>
			</AnimatePresence>

			<div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
				{sections.map((section, index) => (
					<button
						type="button"
						key={section.id}
						onClick={() => {
							setDirection(index > currentSectionIndex ? 1 : -1);
							setCurrentSectionIndex(index);
						}}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${
							index === currentSectionIndex
								? "bg-primary w-4"
								: "bg-foreground-tertiary hover:bg-foreground-secondary"
						}`}
						aria-label={`Go to section ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
