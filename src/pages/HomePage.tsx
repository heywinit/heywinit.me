import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WorkSection from "@/components/sections/WorkSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ComboSection from "@/components/sections/ComboSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<section className="min-h-screen" id="hero">
				<HeroSection />
			</section>
			<section className="min-h-screen" id="work">
				<WorkSection />
			</section>
			<section className="min-h-screen" id="projects">
				<ProjectsSection />
			</section>
			<section className="min-h-screen" id="blogs">
				<BlogsSection />
			</section>
			<section className="min-h-screen" id="combo">
				<ComboSection />
			</section>
			<section className="min-h-screen" id="contact">
				<ContactSection />
			</section>
		</div>
	);
}
