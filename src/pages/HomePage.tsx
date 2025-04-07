import HeroSection from "@/components/sections/HeroSection";
import TopBar from "@/components/TopBar";
import { StarsBackground } from "@/components/ui/stars-background";

export default function HomePage() {
	const settings = {
		density: 100,
		allTwinkle: true,
		twinkleProbability: 0.9,
		minSpeed: 0.5,
		maxSpeed: 1.0,
	};

	return (
		<div className="bg-black p-4 rounded-lg">
			{/* CRT scanlines effect - now only applied to the left section */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)",
					backgroundSize: "100% 4px",
					zIndex: 10,
				}}
			/>
			<StarsBackground
				starDensity={settings.density}
				allStarsTwinkle={settings.allTwinkle}
				twinkleProbability={settings.twinkleProbability}
				minTwinkleSpeed={settings.minSpeed}
				maxTwinkleSpeed={settings.maxSpeed}
			/>
			<div className="flex flex-col items-center h-screen w-[60%] mx-auto space-y-4">
				<TopBar />
				<HeroSection />
			</div>
		</div>
	);
}
