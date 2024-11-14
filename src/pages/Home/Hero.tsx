import { Button } from "@/components/ui/button";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLoaderStore } from "@/store/loader";
import { motion } from "framer-motion";
import { HoverTypewriter } from "@/components/ui/hover-typewriter";

export default function Hero() {
  const { isLoading } = useLoaderStore();

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const rollInAnimation = {
    rotate: [720, 0], // Make 2 full rotations and stop
    scale: [0.2, 1], // Start small and scale up
    opacity: [0, 1],
    transition: {
      duration: 2,
      delay: isLoading ? 3.8 : 0.6,
      ease: [0.19, 1, 0.22, 1], // Custom easing for natural motion
    },
  };

  const breathingAnimation = {
    borderColor: [
      "hsl(var(--logo-ring) / 0.4)",
      "hsl(var(--logo-ring) / 0.8)",
      "hsl(var(--logo-ring) / 0.4)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative flex min-h-[90vh] flex-col justify-between bg-background/30 px-4 sm:px-8 lg:px-32">
      <div className="flex h-full flex-col items-center justify-between lg:flex-row lg:pl-8 lg:pt-16">
        <div className="flex h-full max-w-2xl flex-col justify-between space-y-12 pb-24 text-center lg:text-left">
          <div className="space-y-6">
            <div className="font-mono text-5xl font-bold leading-tight tracking-tight sm:text-3xl md:text-6xl">
              <WordPullUp delay={isLoading ? 3.2 : 0}>
                <h1>Writing code that</h1>
              </WordPullUp>
              <WordPullUp delay={isLoading ? 3.6 : 0.4}>
                <h1>has an impact.</h1>
              </WordPullUp>
            </div>

            <div className="font-mono text-lg text-muted-foreground sm:text-2xl">
              <p className="mt-4 leading-relaxed">
                Usually writing code for{" "}
                <HoverTypewriter defaultText="screens" hoverText="(software)" />
                , <br /> sometimes it also makes{" "}
                <HoverTypewriter
                  defaultText="stuff fly"
                  hoverText="(model rockets)"
                />
                .
              </p>
            </div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: isLoading ? 4.2 : 1, duration: 0.5 }}
              className="mt-6 inline-flex cursor-pointer select-none items-center justify-center rounded-full border border-[hsl(var(--logo-ring)_/_0.5)] bg-[hsl(var(--logo-ring)_/_0.1)] px-3 py-1 text-sm text-foreground hover:bg-[hsl(var(--logo-ring)_/_0.15)]"
            >
              <PinIcon className="mr-2 h-4 w-4" />
              <span>Located in India</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoading ? 4.4 : 1.2, duration: 0.5 }}
              className="flex gap-6 pt-8"
            >
              <Button
                asChild
                size="lg"
                variant="default"
                className="flex-1 bg-primary font-mono text-primary-foreground hover:bg-primary/90 sm:flex-none"
              >
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 font-mono sm:flex-none"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center lg:pr-32">
          <div className="hidden select-none items-center justify-center lg:flex">
            <div className="relative">
              <motion.div
                initial={{ rotate: 720, scale: 0.2, opacity: 0 }}
                animate={{
                  ...rollInAnimation,
                  ...breathingAnimation,
                  transition: {
                    ...breathingAnimation.transition,
                    repeatType: "loop",
                    rotate: {
                      ...rollInAnimation.transition,
                    },
                    scale: {
                      ...rollInAnimation.transition,
                    },
                    opacity: {
                      ...rollInAnimation.transition,
                    },
                  },
                }}
                className="flex h-[400px] w-[400px] items-center justify-center rounded-full border-4"
              >
                <motion.div
                  initial={{ rotate: -720, scale: 0.2, opacity: 0 }}
                  animate={{
                    ...rollInAnimation,
                    ...breathingAnimation,
                    transition: {
                      ...breathingAnimation.transition,
                      repeatType: "loop",
                      delay: isLoading ? 4 : 0.8,
                      rotate: {
                        ...rollInAnimation.transition,
                        delay: isLoading ? 4 : 0.8,
                      },
                      scale: {
                        ...rollInAnimation.transition,
                        delay: isLoading ? 4 : 0.8,
                      },
                      opacity: {
                        ...rollInAnimation.transition,
                        delay: isLoading ? 4 : 0.8,
                      },
                    },
                  }}
                  className="flex h-[300px] w-[300px] items-center justify-center rounded-full border-4 bg-[hsl(var(--logo-ring)_/_0.05)]"
                >
                  <span className="font-mono text-9xl font-bold text-white">
                    {"W"}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isLoading ? 4.8 : 1.6, duration: 0.5 }}
        className="pb-6 sm:pb-12"
      >
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
      </motion.div>
    </div>
  );
}
