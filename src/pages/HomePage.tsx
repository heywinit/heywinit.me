import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WorkSection from "@/components/sections/WorkSection";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<WorkSection />
			<ProjectsSection />
		</div>
	);
}
