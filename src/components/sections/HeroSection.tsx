import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { DrumPad } from "@/components/DrumPad";
import { TerminalProgress } from "@/components/ui/terminal-slider";

export default function HeroSection() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [ribbonTranslate, setRibbonTranslate] = useState(0);
	const [ribbonText, setRibbonText] = useState("--");
	const ribbonRef = useRef<HTMLDivElement>(null);
	const [terminal, setTerminal] = useState(">");
	const [volume, setVolume] = useState(() => {
		// Initialize from localStorage if available, otherwise use default value 0.8
		const savedVolume = localStorage.getItem("drumpad-volume");
		return savedVolume ? Number.parseFloat(savedVolume) : 0.8;
	});

	// Define the text segments for the ribbon with unique IDs
	const ribbonTexts = Array(50)
		.fill(null)
		.map(() => ({
			text: ribbonText,
			id: Math.random().toString(36).substring(2, 9),
		}));

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

	// Save volume to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("drumpad-volume", volume.toString());
	}, [volume]);

	const handleSoundPlay = (soundName: string) => {
		// Update ribbon text with the sound name
		setRibbonText(soundName);

		// Reset ribbon text after 500ms
		setTimeout(() => {
			setRibbonText("--");
		}, 500);
	};

	const handleVolumeChange = (newVolume: number) => {
		setVolume(newVolume / 100);
	};

	return (
		<div className="flex flex-col h-full">
			<div className="h-[55%] w-full grid grid-cols-5 grid-rows-4">
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
							<span className="text-white">winit</span>
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
					{ribbonTexts.map((item) => (
						<div key={item.id} className="flex">
							<span>{item.text}</span>
							<span className="mx-2 ">/-/</span>
						</div>
					))}
				</div>
			</div>
			<div className="flex-1 w-full">
				<div className="grid h-full grid-cols-5 grid-rows-5">
					<Card className="col-start-2 row-span-5 p-6 flex flex-col items-center justify-center">
						<DrumPad volume={volume} onSoundPlay={handleSoundPlay} />

						{/* Terminal-style text progress bar */}
						<div className="mt-6 w-full max-w-xs flex items-center gap-3 font-mono">
							<TerminalProgress
								value={volume * 100}
								min={0}
								max={100}
								step={5}
								width={20}
								fillChar="-"
								emptyChar=" "
								indicator="\\"
								brackets={["[", "]"]}
								onChange={handleVolumeChange}
								className="flex-1"
							/>
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
									an F-117 Nighthawk, stealthily delivering cutting-edge
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
					<div className="border border-border col-start-3 col-span-2 flex items-center justify-center p-4 font-mono text-sm overflow-hidden">
						<div className="ml-1 typing-effect overflow-hidden whitespace-nowrap border-r-2 animate-cursor pr-1">
							glory to none, just velocity and metal.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
