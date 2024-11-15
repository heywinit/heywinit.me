import { motion } from "framer-motion";

export default function CurrentlyBuildingCell() {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="mb-4 font-semibold leading-none tracking-tight">
          Currently Building
        </h3>
        <div className="space-y-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Laksh</h3>
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">
                Active Project
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Laksh is an AI-equipped all in one manager & resource library for
            all your academic needs. From routine management using automatic
            task sorting and scheduling to a comprehensive resource library with
            AI-powered research and study notes, Laksh is here to simplify your
            academic journey.
          </p>
        </div>
      </motion.div>
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
