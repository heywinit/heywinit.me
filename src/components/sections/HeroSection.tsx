import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [ribbonTranslate, setRibbonTranslate] = useState(0);
	const ribbonRef = useRef<HTMLDivElement>(null);

	// Define the text segments for the ribbon
	const ribbonTexts = [
		"glory to none but the metal that soars fast",
		"glory to none but the metal that soars fast",
		"glory to none but the metal that soars fast",
		"glory to none but the metal that soars fast",
		"glory to none but the metal that soars fast",
	];

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;

			// Determine scroll direction
			if (currentPosition > scrollPosition) {
				// Scrolling down - move ribbon left
				setRibbonTranslate((prev) => prev - 2);
			} else if (currentPosition < scrollPosition) {
				// Scrolling up - move ribbon right
				setRibbonTranslate((prev) => prev + 2);
			}

			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);

	return (
		<div className="flex flex-col h-screen">
			<div className="h-[55%] w-full grid grid-cols-5 grid-rows-4">
				<Card className="col-start-2 row-start-2 row-span-3 col-span-3">
					<div className="flex flex-col h-full justify-between">asd</div>
				</Card>
				<Card className="col-start-2 row-start-3 row-span-3 col-span-3 text-8xl font-bold flex items-center justify-center text-justify">
					<CardContent>hey! i'm winit.</CardContent>
				</Card>
			</div>
			<div
				ref={ribbonRef}
				className="flex h-[5%] items-center text-lg w-full border border-white border-x-0 overflow-hidden"
			>
				<div
					className="flex whitespace-nowrap transition-transform duration-300 ease-out"
					style={{ transform: `translateX(${ribbonTranslate}px)` }}
				>
					{/* Create ribbon by repeating text array */}
					{ribbonTexts.map((text) => (
						<div key={`ribbon-${text.replace(/\s+/g, "-")}`} className="flex">
							<span>{text}</span>
							<span className="mx-2">/-/</span>
						</div>
					))}
				</div>
			</div>
			<div className="flex-1 w-full">
				<div className="grid h-full grid-cols-2 grid-rows-5">
					<div className="border border-border col-start-2" />
					<Card className="col-start-2 row-start-2 row-span-4">asd</Card>
				</div>
			</div>
		</div>
	);
}
