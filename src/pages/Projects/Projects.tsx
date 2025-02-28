import NavBar from "@/components/NavBar";
import { HoverTypewriter } from "@/components/ui/hover-typewriter";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-black">
      <NavBar />

      <main className="relative flex h-[80vh] flex-1 items-center justify-center">
        <div className="z-10 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            <HoverTypewriter
              defaultText={"Coming Soon"}
              hoverText={"Projects"}
              className="font-mono"
            />
          </h1>
          <p className="text-gray-400 mx-auto max-w-md text-lg md:text-xl">
            Soon you will find a list of all my projects here. Keep an eye out
            for updates.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
