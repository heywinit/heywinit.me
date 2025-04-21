import TopBar from "@/components/TopBar";
import HeroSection from "@/components/sections/HeroSection";
export default function HomePage() {
	return (
		<div className="flex flex-col rounded-lg min-h-screen h-screen">
			<TopBar />
			<HeroSection />
		</div>
	);
}
