import Container from "@/components/container";

export default function Home() {
  return (
    <Container>
      <div className="relative min-h-screen">
        {/* Decorative background elements */}
        <div className="absolute inset-0 grid grid-cols-[1fr,2px,1fr] opacity-20 pointer-events-none">
          <div className="border-r border-[#1E1E1E]" />
          <div className="bg-[#1E1E1E]" />
          <div className="border-l border-[#1E1E1E]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 p-8">
          {/* Header section with asymmetric design */}
          <header className="grid grid-cols-[2fr,1fr] gap-12 mb-24">
            <div className="pt-24">
              <div className="space-y-6">
                <h1 className="text-7xl font-terminal text-white tracking-tight">
                  <span className="text-[#4A4A4A]">&gt;</span> w
                  <span className="text-[#FFA657]">.</span>
                  <span className="text-[#4A4A4A]">init()</span>
                </h1>
                <p className="font-ancient text-lg pl-8 border-l-2 border-[#1E1E1E] text-[#8B8B8B] italic">
                  crafting digital experiences at the intersection of retro and
                  modern
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end pb-12 text-right">
              <div className="inline-flex flex-col items-end gap-2 p-4 bg-[#111111] border border-[#1E1E1E]">
                <span className="text-[#4A4A4A] font-terminal text-sm">
                  location
                </span>
                <span className="text-[#8B8B8B]">ahmedabad, india</span>
              </div>
            </div>
          </header>

          {/* Content sections with creative layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="font-terminal text-2xl text-white flex items-center gap-3">
                  <span className="text-[#4A4A4A]">~/</span>about
                </h2>
                <div className="font-ancient text-lg leading-relaxed pl-6 text-[#8B8B8B]">
                  a 19 y/o undergraduate student majoring in computer science.
                  i&apos;m a big enthusiast of all things old school and{" "}
                  <span className="text-[#FFA657]">retro</span>. i find joy in
                  learning low level technology and delving into new tech.
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-terminal text-2xl text-white flex items-center gap-3">
                  <span className="text-[#4A4A4A]">~/</span>experience
                </h2>
                <div className="pl-6 space-y-8">
                  <div className="group relative">
                    <div className="absolute -left-6 top-0 h-full w-px bg-[#1E1E1E] group-hover:bg-[#FFA657] transition-colors" />
                    <h3 className="text-xl text-white font-terminal">
                      devknit
                    </h3>
                    <p className="text-[#4A4A4A] mt-1 font-ancient">
                      cofounder and cto | (aug 2024 - present)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Navigation */}
            <div className="col-span-4 relative">
              <div className="sticky top-8 space-y-4 p-4 bg-[#111111] border border-[#1E1E1E]">
                <h2 className="font-terminal text-xl text-white mb-6">
                  <span className="text-[#4A4A4A]">~/</span>navigation
                </h2>
                <nav className="space-y-3 font-terminal">
                  {["Home", "Projects", "Blogs", "Socials"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-[#8B8B8B] hover:text-white hover:bg-[#1E1E1E] p-2 transition-all"
                    >
                      <span className="text-[#4A4A4A]">$</span>{" "}
                      {item.toLowerCase()}
                    </a>
                  ))}
                  <div className="h-px bg-[#1E1E1E] my-4" />
                  {["x.com", "github", "linkedin"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-[#8B8B8B] hover:text-white hover:bg-[#1E1E1E] p-2 transition-all"
                    >
                      <span className="text-[#4A4A4A]">&gt;</span> {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
