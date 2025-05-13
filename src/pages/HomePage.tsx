import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section className="h-screen" id="hero">
				<HeroSection />
			</section>
		</div>
	);
}
