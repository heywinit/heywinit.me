import TopBar from "@/components/TopBar";
import SectionContainer from "@/components/SectionContainer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

export default function HomePage() {
	useEffect(() => {
		// Disable normal scrolling on the page
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const sections = [
		{ id: "hero", component: <HeroSection /> },
		{ id: "about", component: <AboutSection /> },
		{ id: "projects", component: <ProjectsSection /> },
		{ id: "contact", component: <ContactSection /> },
	];

	return (
		<div className="flex flex-col rounded-lg min-h-screen h-screen overflow-hidden">
			<TopBar />
			<SectionContainer sections={sections} />
		</div>
	);
}
