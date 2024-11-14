import NavBar from "@/components/NavBar";
import Hero from "./Home/Hero";
import AboutGrid from "./Home/AboutGrid/AboutGrid";
import ProjectsGrid from "./Home/ProjectsGrid/ProjectsGrid";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col pt-24">
      <BackgroundBeams className="-z-1 fixed inset-0 opacity-50" />
      <NavBar />
      <Hero />
      <AboutGrid />
      <ProjectsGrid />
    </div>
  );
}
