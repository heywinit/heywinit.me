import HeroSection from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<ProjectsSection />
		</div>
	);
}
