import { useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Background from "@/components/Background";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden pt-24 pb-24"
    >
      <Background containerRef={containerRef} />

      <div className="max-w-3xl w-full space-y-8 relative z-10">
        <Header />

        <motion.h1
          className="text-6xl sm:text-7xl font-bold relative inline-block"
          transition={{ duration: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            winit.
          </span>
        </motion.h1>

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
              started with qbasic in 2018, thanks to my school curriculum. that
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
                className="text-accent dark:text-primary hover:text-accent dark:hover:text-primary/30 transition-all"
              >
                soldecoder.app
              </a>{" "}
              where i write code handling thousands of dollars. i cofound{" "}
              <a
                href="https://metf.in"
                className="text-accent dark:text-primary hover:text-accent dark:hover:text-primary/30 transition-all"
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
