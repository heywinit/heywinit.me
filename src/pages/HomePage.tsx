import HeroSection from "@/components/sections/HeroSection";
import TopBar from "@/components/TopBar";

export default function HomePage() {
	return (
		<div className="bg-black p-4 rounded-lg min-h-screen">
			<div className="container mx-auto max-w-6xl flex flex-col items-center space-y-4">
				<TopBar />
				<HeroSection />
			</div>
		</div>
	);
}
