import NavBar from "@/components/NavBar";
import Hero from "./Home/Hero";
import AboutGrid from "./Home/AboutGrid/AboutGrid";
import ProjectsGrid from "./Home/ProjectsGrid/ProjectsGrid";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <NavBar />
      <Hero />
      <AboutGrid />
      <ProjectsGrid />
    </div>
  );
}
