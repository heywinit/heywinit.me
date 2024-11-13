import { Button } from "@/components/ui/button";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative flex min-h-[90vh] flex-col justify-between bg-background px-4 sm:px-8 lg:px-32">
      {/* Main content wrapper */}
      <div className="flex flex-col items-center justify-between pt-16 lg:flex-row lg:pt-32">
        {/* Left content */}
        <div className="max-w-3xl space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <WordPullUp>
                <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                  Full Stack Developer &
                </h1>
              </WordPullUp>
              <WordPullUp delay={0.4}>
                <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                  Avionics Engineer
                </h1>
              </WordPullUp>
            </div>

            {/* Subtitle with typing animation */}
            <div className="font-mono text-xl text-muted-foreground sm:text-2xl">
              <p className="mt-4">Changing code, so it changes the world.</p>
              <p className="mt-6 inline-flex items-center rounded-full border px-3 py-1 text-base">
                <PinIcon className="mr-2 h-4 w-4" />
                Located in India
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-6">
            <Button
              asChild
              size="lg"
              variant="default"
              className="flex-1 font-mono sm:flex-none"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1 font-mono sm:flex-none"
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Right side developer icon */}
        <div className="hidden select-none items-center justify-center lg:flex">
          <div className="relative">
            <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full border-4 border-primary/40">
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-primary/60 bg-primary/5">
                <span className="font-mono text-8xl font-bold text-primary">
                  {"W"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge element */}
      <div className="pb-8 sm:pb-16">
        <div className="rounded-lg bg-muted/50 p-4 text-center">
          <code className="font-mono text-sm sm:text-xl">
            <span className="text-[#A9B7C6]">i</span>{" "}
            <span className="text-[#6A8759]">{"`"}</span>
            <span className="text-[#CC7832]">code</span>
            <span className="text-[#CC7832]">++</span>
            <span className="text-[#6A8759]">{"`"}</span>{" "}
            <span className="text-[#A9B7C6]">until</span>{" "}
            <span className="text-[#6A8759]">{"`"}</span>
            <span className="text-[#9876AA]">mom</span>
            <span className="text-[#A9B7C6]">.</span>
            <span className="text-[#FFC66D]">worry_level</span>
            <span className="text-[#6A8759]">{"`"}</span>{" "}
            <span className="text-[#A9B7C6]">triggers</span>{" "}
            <span className="text-[#6A8759]">{"`"}</span>
            <span className="text-[#9876AA]">console</span>
            <span className="text-[#A9B7C6]">.</span>
            <span className="text-[#FFC66D]">log</span>
            <span className="text-[#A9B7C6]">(</span>
            <span className="text-[#6A8759]">"take a break"</span>
            <span className="text-[#A9B7C6]">)</span>
            <span className="text-[#6A8759]">{"`"}</span>
          </code>
        </div>
      </div>
    </div>
  );
}
