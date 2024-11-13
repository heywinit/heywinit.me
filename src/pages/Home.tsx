import NavBar from "@/components/NavBar";
import Hero from "./Home/Hero";
import AboutGrid from "./Home/AboutGrid/AboutGrid";
export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <NavBar />
      <Hero />
      <AboutGrid />
    </div>
  );
}
