import { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import Hero from "./Home/Hero";
import AboutGrid from "./Home/AboutGrid/AboutGrid";
// import ProjectsGrid from "./Home/ProjectsGrid/ProjectsGrid";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [heroRef, aboutRef, projectsRef];
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const getNearestSection = () => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      let nearestSection = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        if (section.current) {
          const rect = section.current.getBoundingClientRect();
          const sectionMiddle = window.scrollY + rect.top + rect.height / 2;
          const distance = Math.abs(viewportMiddle - sectionMiddle);

          if (distance < minDistance) {
            minDistance = distance;
            nearestSection = index;
          }
        }
      });

      return nearestSection;
    };

    const handleScrollEnd = () => {
      if (isScrolling) return;

      const nearestSection = getNearestSection();
      isScrolling = true;

      sections[nearestSection].current?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col overflow-auto">
      <BackgroundBeams className="-z-1 fixed inset-0 opacity-50" />
      <NavBar />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <AboutGrid />
      </div>
      <div ref={projectsRef}>{/* <ProjectsGrid /> */}</div>
    </div>
  );
}
