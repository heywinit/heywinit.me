import { useEffect, useRef } from "react";

// Define type for Web Audio API
interface WindowWithWebAudio extends Window {
	webkitAudioContext?: typeof AudioContext;
}

// Define type for drum pad sounds
export interface DrumPadSound {
	name: string;
	label: string;
	synthFn: string;
}

// DrumPad component props
interface DrumPadProps {
	volume: number;
	onSoundPlay: (soundName: string) => void;
}

export function DrumPad({ volume, onSoundPlay }: DrumPadProps) {
	const audioContextRef = useRef<AudioContext | null>(null);

	// Drum pad sounds configuration
	const drumPadSounds: DrumPadSound[] = [
		{ name: "Kick", label: "KCK", synthFn: "kick" },
		{ name: "Snare", label: "SNR", synthFn: "snare" },
		{ name: "Clap", label: "CLP", synthFn: "clap" },
		{
			name: "Hi-Hat",
			label: "HHT",
			synthFn: "hihat",
		},
		{ name: "Tom", label: "TOM", synthFn: "tom" },
		{ name: "Rim", label: "RIM", synthFn: "rim" },
		{ name: "Cowbell", label: "CBL", synthFn: "cowbell" },
		{ name: "Cymbal", label: "CYM", synthFn: "cymbal" },
		{
			name: "Perc 1",
			label: "P1",
			synthFn: "perc1",
		},
		{ name: "Perc 2", label: "P2", synthFn: "perc2" },
		{
			name: "Perc 3",
			label: "P3",
			synthFn: "perc3",
		},
		{
			name: "Perc 4",
			label: "P4",
			synthFn: "perc4",
		},
		{ name: "Synth 1", label: "S1", synthFn: "synth1" },
		{ name: "Synth 2", label: "S2", synthFn: "synth2" },
		{
			name: "Synth 3",
			label: "S3",
			synthFn: "synth3",
		},
		{ name: "808", label: "808", synthFn: "bass" },
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

	const playSound = (sound: DrumPadSound) => {
		// Initialize audio context if needed (needs user interaction)
		if (!audioContextRef.current) {
			audioContextRef.current = new (
				window.AudioContext || (window as WindowWithWebAudio).webkitAudioContext
			)();
		}

		createSound(sound.synthFn);
		onSoundPlay(sound.name);
	};

	return (
		<>
			<div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-xs aspect-square">
				{drumPadSounds.map((sound) => (
					<button
						key={`drum-pad-${sound.name}`}
						type="button"
						className="aspect-square rounded-lg bg-background border border-border hover:opacity-80 active:scale-95 transition-all duration-150 shadow-md focus:outline-none flex items-center justify-center text-white text-xs font-medium"
						onClick={() => playSound(sound)}
					>
						{sound.label}
					</button>
				))}
			</div>
		</>
	);
}
