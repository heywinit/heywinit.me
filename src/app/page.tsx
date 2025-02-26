import Container from "@/components/container";

export default function Home() {
  return (
    <Container>
      {/* First Viewport - Terminal Content */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-6">
          <div className="space-y-4">
            <p className="text-4xl font-bold font-terminal mb-8">
              {">"} WINIT.INIT()
            </p>
            <p className="text-xl font-terminal opacity-80">
              {">"} Loading neural pathways...
            </p>
            <p className="text-xl font-terminal opacity-60">
              {">"} Accessing the digital realm...
            </p>
            <p className="text-xl font-terminal opacity-40">
              {">"} Bridging ancient wisdom with modern tech...
            </p>
          </div>
          <div className="mt-12 text-sm opacity-70 animate-pulse">
            <p>Scroll to unlock the ancient knowledge...</p>
          </div>
        </div>
      </section>

      {/* Second Viewport - Ancient Content */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl font-ancient font-semibold mb-8">
            The Digital Scrolls
          </h1>
          <div className="font-ancient-body text-xl leading-relaxed space-y-6">
            <p>
              In the realm where silicon meets soul, there exists a bridge
              between the ancient and the digital. Here, algorithms dance with
              philosophical truths, and code becomes poetry.
            </p>
            <p>
              As the binary flows through the veins of our machines, it carries
              with it the wisdom of ages past, transformed into a new language
              of creation.
            </p>
            <blockquote className="border-l-4 border-amber-900/30 pl-6 my-8 italic">
              &ldquo;For in the beginning was the Algorithm, and the Algorithm
              was with the Machine, and the Algorithm was the Machine.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </Container>
  );
}
