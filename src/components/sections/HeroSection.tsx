import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Volume2 } from "lucide-react";

// Define type for Web Audio API
interface WindowWithWebAudio extends Window {
	webkitAudioContext?: typeof AudioContext;
}

// Define type for drum pad sounds
interface DrumPadSound {
	name: string;
	color: string;
	synthFn: string;
}

export default function HeroSection() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [ribbonTranslate, setRibbonTranslate] = useState(0);
	const ribbonRef = useRef<HTMLDivElement>(null);
	const [terminal, setTerminal] = useState(">");
	const audioContextRef = useRef<AudioContext | null>(null);
	const [volume, setVolume] = useState(0.8); // Default volume at 80%

	// Define the text segments for the ribbon
	const ribbonTexts = Array(50).fill("--");

	// Drum pad sounds configuration
	const drumPadSounds: DrumPadSound[] = [
		{ name: "Kick", color: "from-blue-500 to-blue-700", synthFn: "kick" },
		{ name: "Snare", color: "from-red-500 to-red-700", synthFn: "snare" },
		{ name: "Clap", color: "from-green-500 to-green-700", synthFn: "clap" },
		{
			name: "Hi-Hat",
			color: "from-yellow-500 to-yellow-700",
			synthFn: "hihat",
		},
		{ name: "Tom", color: "from-purple-500 to-purple-700", synthFn: "tom" },
		{ name: "Rim", color: "from-pink-500 to-pink-700", synthFn: "rim" },
		{ name: "Cowbell", color: "from-cyan-500 to-cyan-700", synthFn: "cowbell" },
		{ name: "Cymbal", color: "from-amber-500 to-amber-700", synthFn: "cymbal" },
		{
			name: "Perc 1",
			color: "from-emerald-500 to-emerald-700",
			synthFn: "perc1",
		},
		{ name: "Perc 2", color: "from-rose-500 to-rose-700", synthFn: "perc2" },
		{
			name: "Perc 3",
			color: "from-indigo-500 to-indigo-700",
			synthFn: "perc3",
		},
		{
			name: "Perc 4",
			color: "from-orange-500 to-orange-700",
			synthFn: "perc4",
		},
		{ name: "Synth 1", color: "from-sky-500 to-sky-700", synthFn: "synth1" },
		{ name: "Synth 2", color: "from-lime-500 to-lime-700", synthFn: "synth2" },
		{
			name: "Synth 3",
			color: "from-violet-500 to-violet-700",
			synthFn: "synth3",
		},
		{ name: "808", color: "from-fuchsia-500 to-fuchsia-700", synthFn: "bass" },
	];

	useEffect(() => {
		// Create audio context on component mount
		audioContextRef.current = new (
			window.AudioContext || (window as WindowWithWebAudio).webkitAudioContext
		)();

		return () => {
			// Clean up audio context on unmount
			if (audioContextRef.current) {
				audioContextRef.current.close();
			}
		};
	}, []);

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

	const createSound = (type: string) => {
		if (!audioContextRef.current) return;

		const ctx = audioContextRef.current;
		const now = ctx.currentTime;

		// Create gain node for volume control
		const gainNode = ctx.createGain();
		gainNode.connect(ctx.destination);

		switch (type) {
			case "kick": {
				// Bass drum
				const osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(150, now);
				osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.3);

				gainNode.gain.setValueAtTime(1 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.3);
				break;
			}
			case "snare": {
				// Snare drum
				const noise = ctx.createBufferSource();
				const bufferSize = ctx.sampleRate * 0.2;
				const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
				const data = buffer.getChannelData(0);

				for (let i = 0; i < bufferSize; i++) {
					data[i] = Math.random() * 2 - 1;
				}

				noise.buffer = buffer;

				const noiseFilter = ctx.createBiquadFilter();
				noiseFilter.type = "highpass";
				noiseFilter.frequency.value = 1000;

				gainNode.gain.setValueAtTime(0.8 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

				noise.connect(noiseFilter);
				noiseFilter.connect(gainNode);
				noise.start(now);
				noise.stop(now + 0.2);
				break;
			}
			case "hihat": {
				// Hi-hat
				const bufferSize = ctx.sampleRate * 0.1;
				const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
				const data = buffer.getChannelData(0);

				for (let i = 0; i < bufferSize; i++) {
					data[i] = Math.random() * 2 - 1;
				}

				const noise = ctx.createBufferSource();
				noise.buffer = buffer;

				const noiseFilter = ctx.createBiquadFilter();
				noiseFilter.type = "highpass";
				noiseFilter.frequency.value = 5000;

				gainNode.gain.setValueAtTime(0.3 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

				noise.connect(noiseFilter);
				noiseFilter.connect(gainNode);
				noise.start(now);
				noise.stop(now + 0.1);
				break;
			}
			case "clap": {
				// Clap sound
				const noise = ctx.createBufferSource();
				const bufferSize = ctx.sampleRate * 0.2;
				const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
				const data = buffer.getChannelData(0);

				for (let i = 0; i < bufferSize; i++) {
					data[i] = Math.random() * 2 - 1;
				}

				noise.buffer = buffer;

				const filter = ctx.createBiquadFilter();
				filter.type = "bandpass";
				filter.frequency.value = 1500;
				filter.Q.value = 0.5;

				gainNode.gain.setValueAtTime(0, now);
				gainNode.gain.linearRampToValueAtTime(0.8 * volume, now + 0.01);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

				noise.connect(filter);
				filter.connect(gainNode);
				noise.start(now);
				noise.stop(now + 0.3);
				break;
			}
			case "tom": {
				// Tom drum
				const osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(100, now);
				osc.frequency.linearRampToValueAtTime(45, now + 0.2);

				gainNode.gain.setValueAtTime(0.8 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.2);
				break;
			}
			case "rim": {
				// Rim shot
				const osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(300, now);

				gainNode.gain.setValueAtTime(0.8 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.1);
				break;
			}
			case "cowbell": {
				// Cowbell
				const osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(800, now);

				gainNode.gain.setValueAtTime(0.6 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.3);
				break;
			}
			case "cymbal": {
				// Cymbal
				const bufferSize = ctx.sampleRate * 0.5;
				const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
				const data = buffer.getChannelData(0);

				for (let i = 0; i < bufferSize; i++) {
					data[i] = Math.random() * 2 - 1;
				}

				const noise = ctx.createBufferSource();
				noise.buffer = buffer;

				const filter = ctx.createBiquadFilter();
				filter.type = "highpass";
				filter.frequency.value = 8000;

				gainNode.gain.setValueAtTime(0.3 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

				noise.connect(filter);
				filter.connect(gainNode);
				noise.start(now);
				noise.stop(now + 0.5);
				break;
			}
			case "perc1": {
				// Percussion 1
				const osc = ctx.createOscillator();
				osc.type = "triangle";
				osc.frequency.setValueAtTime(250, now);

				gainNode.gain.setValueAtTime(0.5 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.1);
				break;
			}
			case "perc2": {
				// Percussion 2
				const osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(350, now);
				osc.frequency.linearRampToValueAtTime(250, now + 0.15);

				gainNode.gain.setValueAtTime(0.5 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.15);
				break;
			}
			case "perc3": {
				// Percussion 3
				const osc = ctx.createOscillator();
				osc.type = "sawtooth";
				osc.frequency.setValueAtTime(200, now);

				const filter = ctx.createBiquadFilter();
				filter.type = "lowpass";
				filter.frequency.value = 500;

				gainNode.gain.setValueAtTime(0.4 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

				osc.connect(filter);
				filter.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.2);
				break;
			}
			case "perc4": {
				// Percussion 4
				const osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(180, now);
				osc.frequency.linearRampToValueAtTime(80, now + 0.2);

				gainNode.gain.setValueAtTime(0.5 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.2);
				break;
			}
			case "synth1": {
				// Synth tone 1
				const osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(440, now);

				gainNode.gain.setValueAtTime(0.5 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.2);
				break;
			}
			case "synth2": {
				// Synth tone 2
				const osc = ctx.createOscillator();
				osc.type = "sawtooth";
				osc.frequency.setValueAtTime(330, now);

				const filter = ctx.createBiquadFilter();
				filter.type = "lowpass";
				filter.frequency.value = 1000;

				gainNode.gain.setValueAtTime(0.4 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

				osc.connect(filter);
				filter.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.3);
				break;
			}
			case "synth3": {
				// Synth tone 3
				const osc = ctx.createOscillator();
				osc.type = "square";
				osc.frequency.setValueAtTime(220, now);

				gainNode.gain.setValueAtTime(0.4 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.3);
				break;
			}
			case "bass": {
				// 808-style bass
				const osc = ctx.createOscillator();
				osc.type = "sine";
				osc.frequency.setValueAtTime(60, now);
				osc.frequency.exponentialRampToValueAtTime(30, now + 0.5);

				gainNode.gain.setValueAtTime(0.9 * volume, now);
				gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

				osc.connect(gainNode);
				osc.start(now);
				osc.stop(now + 0.5);
				break;
			}
			default:
				break;
		}
	};

	const playSound = (synthFn: string) => {
		// Initialize audio context if needed (needs user interaction)
		if (!audioContextRef.current) {
			audioContextRef.current = new (
				window.AudioContext || (window as WindowWithWebAudio).webkitAudioContext
			)();
		}

		createSound(synthFn);
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
					<Card className="col-start-2 row-span-5 p-6 flex flex-col items-center justify-center">
						<div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-xs aspect-square">
							{drumPadSounds.map((sound) => (
								<button
									key={`drum-pad-${sound.name}`}
									type="button"
									className={`aspect-square rounded-lg bg-gradient-to-br ${sound.color} hover:opacity-80 active:scale-95 transition-all duration-150 shadow-md focus:outline-none flex items-center justify-center text-white text-xs font-medium`}
									onClick={() => playSound(sound.synthFn)}
								/>
							))}
						</div>

						{/* Volume slider */}
						<div className="mt-6 w-full max-w-xs flex items-center gap-3">
							<Volume2 className="w-5 h-5 text-foreground/70" />
							<Slider
								value={[volume * 100]}
								min={0}
								max={100}
								step={1}
								onValueChange={(value) => setVolume(value[0] / 100)}
								className="flex-1"
							/>
							<span className="text-xs text-foreground/70 w-8 text-right">
								{Math.round(volume * 100)}%
							</span>
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
