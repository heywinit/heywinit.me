import { Button } from "@/components/ui/button";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLoaderStore } from "@/store/loader";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  const { isLoading } = useLoaderStore();

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
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
    <div className="relative flex min-h-[85vh] flex-col justify-between bg-background px-4 sm:px-8 lg:px-32">
      <BackgroundBeams className="opacity-30" />
      <div className="flex flex-col items-center justify-between pt-16 lg:flex-row lg:pt-28">
        <div className="max-w-4xl space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <WordPullUp delay={isLoading ? 3.2 : 0}>
                <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
                  Writing code that
                </h1>
              </WordPullUp>
              <WordPullUp delay={isLoading ? 3.6 : 0.4}>
                <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
                  changes the world.
                </h1>
              </WordPullUp>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoading ? 4 : 0.8, duration: 0.5 }}
              className="font-mono text-xl text-muted-foreground sm:text-2xl"
            >
              <p className="mt-4">Changing code, so it changes the world.</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: isLoading ? 4.2 : 1, duration: 0.5 }}
                className="mt-6 inline-flex cursor-pointer select-none items-center rounded-full border bg-zinc-200 px-3 py-1 text-base text-black hover:bg-zinc-300"
              >
                <PinIcon className="mr-2 h-4 w-4" />
                Located in India
              </motion.p>
            </motion.div>
          </div>

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

        <div className="hidden select-none items-center justify-center lg:-ml-20 lg:flex lg:pr-32 xl:-ml-32">
          <div className="relative">
            <motion.div
              animate={{
                ...breathingAnimation,
                transition: {
                  ...breathingAnimation.transition,
                  repeatType: "loop", // Fixing the type error by specifying a valid repeatType
                },
              }}
              className="flex h-[400px] w-[400px] items-center justify-center rounded-full border-4"
            >
              <motion.div
                animate={{
                  ...breathingAnimation,
                  transition: {
                    ...breathingAnimation.transition,
                    delay: 1,
                    repeatType: "loop", // Fixing the type error by specifying a valid repeatType
                  },
                }}
                className="flex h-[300px] w-[300px] items-center justify-center rounded-full border-4 bg-[hsl(var(--logo-ring)_/_0.05)]"
              >
                <span className="text-white] font-mono text-9xl font-bold">
                  {"W"}
                </span>
              </motion.div>
            </motion.div>
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
