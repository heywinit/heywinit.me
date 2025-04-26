import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [ribbonTranslate, setRibbonTranslate] = useState(0);
	const ribbonRef = useRef<HTMLDivElement>(null);
	const [terminal, setTerminal] = useState(">");
	const [cursorCount, setCursorCount] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	// Define the text segments for the ribbon
	const ribbonTexts = Array(50).fill("--");

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

	useEffect(() => {
		const terminalChars = [
			">_<",
			"-_-",
			"^_^",
			"T_T",
			"O_O",
			"x_x",
			"v_v",
			"Q_Q",
			"^.^",
			"o_o",
			"~_~",
			"._.",
			"._-",
		];
		let index = 0;
		const interval = setInterval(() => {
			setTerminal(terminalChars[index]);
			index = (index + 1) % terminalChars.length;
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		setCursorPosition({ x, y });
	};

	const handleCardClick = () => {
		setCursorCount((prev) => prev + 1);
	};

	return (
		<div className="flex flex-col h-screen">
			<div className="h-[55%] max-h-[55%] w-full grid grid-cols-5 grid-rows-4">
				<div className="col-start-2 col-span-3 row-start-2 row-span-3 flex flex-col">
					<Card className="h-20 flex">
						<div className="flex w-[80%] h-full items-center p-4 text-white/50">
							CRACKED_ENGINEER_FACTORY_PRESENTS
						</div>
						<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
							<span className="">{terminal}</span>
						</div>
					</Card>
					<Card className="text-8xl font-bold flex items-center justify-center flex-grow">
						<CardContent>
							<span>hey! i'm </span>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
								winit
							</span>
							<span>.</span>
						</CardContent>
					</Card>
				</div>
			</div>
			<div
				ref={ribbonRef}
				className="flex h-[5%] items-center text-lg w-full border border-x-0 overflow-hidden"
			>
				<div
					className="flex whitespace-nowrap transition-transform duration-300 ease-out"
					style={{ transform: `translateX(${ribbonTranslate}px)` }}
				>
					{/* Create ribbon by repeating text array */}
					{ribbonTexts.map((text) => (
						<div key={`ribbon-${text.replace(/\s+/g, "-")}`} className="flex">
							<span>{text}</span>
							<span className="mx-2 ">/-/</span>
						</div>
					))}
				</div>
			</div>
			<div className="flex-1 w-full">
				<div className="grid h-full grid-cols-5 grid-rows-5">
					<Card
						className="col-start-2 row-span-5 p-6 flex items-center justify-center relative overflow-hidden group"
						onMouseMove={handleMouseMove}
						onClick={handleCardClick}
					>
						<div
							className="absolute bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 rounded-full w-32 h-32 blur-xl transition-all duration-300 ease-out"
							style={{
								left: `${cursorPosition.x}%`,
								top: `${cursorPosition.y}%`,
								transform: "translate(-50%, -50%)",
							}}
						/>
						<div className="text-center relative z-10 select-none">
							<div className="text-2xl font-bold mb-2">Cursor Counter</div>
							<div className="text-4xl font-mono group-hover:scale-110 transition-transform duration-200">
								{cursorCount}
							</div>
							<div className="mt-4 text-sm text-gray-400">Click me!</div>
						</div>
					</Card>

					<Card className="col-start-3 col-span-2 row-span-4 p-6">
						<div className="prose text-xl prose-invert max-w-none">
							<p>
								i do <span className="text-cyan-400">fullstack dev</span>,{" "}
								<span className="text-emerald-400">web3</span>, and{" "}
								<span className="text-amber-400">machine learning</span>. or in
								recruiter-speak: "
								<span className="italic">
									an F-117 NightHawk, stealthily delivering cutting-edge
									solutions.
								</span>
								"
							</p>
							<br />
							<p>
								often you'll find me overthinking database schemas and
								pretending my side projects will{" "}
								<span className="text-rose-400 font-semibold">someday</span> see
								the light of day.
							</p>
						</div>
					</Card>
					<div className="border border-border col-start-3" />
					<div className="border border-border col-start-4" />
				</div>
			</div>
		</div>
	);
}
