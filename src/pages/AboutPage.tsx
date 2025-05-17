import { useState, useEffect, useRef } from "react";
import { Github, Twitter, Mail, ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  // Hide copied tooltip after a delay
  useEffect(() => {
    if (showCopiedTooltip) {
      const timer = setTimeout(() => {
        setShowCopiedTooltip(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopiedTooltip]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden pt-24 pb-24"
    >
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/30 dark:bg-green-900/30 rounded-none filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400/20 dark:bg-green-900/20 rounded-none filter blur-3xl" />
      </motion.div>

      <div className="max-w-3xl w-full space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3"
        >
          <div className="flex flex-row justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-neutral-500 backdrop-blur-sm w-fit px-3 py-1 rounded-none border border-neutral-200 dark:border-neutral-800 hover:border-green-400 dark:hover:border-green-400/30 transition-all"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                {
                  id: "github",
                  icon: <Github size={20} />,
                  label: "GitHub",
                  href: "https://github.com/heywinit",
                },
                {
                  id: "twitter",
                  icon: <Twitter size={20} />,
                  label: "Twitter",
                  href: "https://twitter.com/hiwinit",
                },
                {
                  id: "email",
                  icon: <Mail size={20} />,
                  label: "Email",
                  href: "mailto:heywinit@gmail.com",
                  onClick: (e: { preventDefault: () => void }) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("heywinit@gmail.com");
                    setShowCopiedTooltip(true);
                  },
                },
              ].map((item) => (
                <motion.div key={item.id} className="relative">
                  <TooltipProvider>
                    <Tooltip
                      open={item.id === "email" ? showCopiedTooltip : undefined}
                    >
                      <TooltipTrigger asChild>
                        <motion.a
                          href={item.href}
                          className="text-neutral-600 dark:text-neutral-400 hover:text-green-500 dark:hover:text-green-400 flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={item.onClick}
                        >
                          {item.icon}
                        </motion.a>
                      </TooltipTrigger>
                      {item.id === "email" && (
                        <TooltipContent className="bg-black text-white px-2 py-1 text-xs rounded-sm">
                          Copied!
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.h1
            className="text-5xl sm:text-6xl font-bold relative inline-block"
            transition={{ duration: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              the lore.
            </span>
          </motion.h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 pt-2">
            from qbasic on a sony vaio to code that handles thousands of
            dollars.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=""
        >
          <div className="space-y-4 py-2">
            <p className="text-neutral-700 dark:text-neutral-300">
              i'm winit, 19, "co-founder", software dev, avionics enthusiast.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              i wrote code before i wrote essays. been at it for nearly a
              decade. i'm a lifelong student of life. i enjoy studying
              languages—programming and human. curiosity might kill the cat, but
              i'd trade the cat's life for the high that comes from learning
              something new.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              started with qbasic in 2013, thanks to my school curriculum. that
              led to a dream of recreating gta in unity without knowing c#.
              pivoted to blender, tried making 3d models (s/o blender guru), but
              it didn't click. then came minecraft. figured out how to mod it
              before learning java itself. spigot, forge, fabric—all of it.
              learning the outer layer before the core became my thing.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              same story with web dev. picked up react native before touching
              react or javascript. adapted what i knew from java to js, stumbled
              a bit, but once i truly understood javascript, it all just...
              clicked. and yeah, all this happened before i even knew what
              calculus was.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              now i juggle uni, as much as i hate it. i freelance at{" "}
              <a
                href="https://soldecoder.app"
                className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-400/30 transition-all"
              >
                soldecoder.app
              </a>{" "}
              where i write code handling thousands of dollars. i cofound{" "}
              <a
                href="https://metf.in"
                className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-400/30 transition-all"
              >
                metf.in
              </a>{" "}
              along with friends from my uni. and i work on my projects because
              i love them.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              when i'm not coding, which is rare nowadays, i'm usually watching
              videos about missiles or fighter jets. glory to none but the metal
              and the velocity. i'm learning languages often—farsi, arabic,
              russian, french, mongolian, pashto. throw what you have, i will
              find it amusing and try to learn it.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-neutral-500 text-sm pt-10 border-t border-neutral-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>© {new Date().getFullYear()} winit. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
