import { motion } from "framer-motion";

interface AboutMeCellProps {
  logoKey: number;
  handleLogoHover: () => void;
}

export default function AboutMeCell({
  logoKey,
  handleLogoHover,
}: AboutMeCellProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1 md:row-span-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className="mb-4 font-mono font-semibold leading-none tracking-tight">
        About Me
      </h3>
      <div>
        <div
          className="relative float-right mb-2 ml-4 h-24 w-24"
          onMouseEnter={handleLogoHover}
        >
          <motion.div
            key={`outer-${logoKey}`}
            initial={{ rotate: 720, scale: 0.2, opacity: 0 }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
              borderColor: "hsl(var(--logo-ring) / 0.6)",
            }}
            transition={{
              duration: 2,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="absolute inset-0 rounded-full border-2"
          >
            <motion.div
              key={`inner-${logoKey}`}
              initial={{ rotate: -720, scale: 0.2, opacity: 0 }}
              animate={{
                rotate: 0,
                scale: 1,
                opacity: 1,
                borderColor: "hsl(var(--logo-ring) / 0.6)",
              }}
              transition={{
                duration: 2,
                delay: 0.2,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="absolute inset-[4px] flex items-center justify-center rounded-full border-2 bg-[hsl(var(--logo-ring)_/_0.05)]"
            >
              <span className="select-none font-mono text-2xl font-bold text-white">
                {"W"}
              </span>
            </motion.div>
          </motion.div>
        </div>
        <div className="space-y-2 text-lg leading-snug">
          <p>
            Hey there, I'm Winit, a 19 y/o software developer and avionics
            engineer. Currently pursuing a degree in computer science, driven by
            my interest in software development, aviation, and continuous
            learning.
          </p>
          <p>
            I've worked on a variety of projects ranging from web development to
            mobile apps and even some rocketry.
          </p>
          <p>
            My days are filled with coding and researching defence tech like
            fighter jets and missiles. If you're a fan of the F-117 Nighthawk or
            the Ilyushin IL-76, we're homies.
          </p>
          <p>
            Beyond tech and aviation, I'm an avid music enthusiast. You'll often
            find me listening to hip-hop, R&B and folk.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
