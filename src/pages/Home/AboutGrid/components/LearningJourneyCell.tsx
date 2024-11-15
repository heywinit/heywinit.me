import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export default function LearningJourneyCell() {
  return (
    <motion.div
      variants={containerVariants}
      className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="mb-4 font-mono font-semibold leading-none tracking-tight">
        Learning Journey
      </h3>
      <motion.div className="space-y-3" variants={containerVariants}>
        <div className="relative">
          <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-teal-500 via-red-500 via-yellow-500 to-blue-500"></div>
          <motion.div className="space-y-2 pl-4" variants={containerVariants}>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 rounded-md border-2 bg-gradient-to-r from-[#1E90FF] to-[#20B2AA] px-2 py-1 text-white"
            >
              <i className="devicon-go-plain text-xl"></i>
              <h3 className="font-medium">Golang</h3>
              <p className="text-sm text-zinc-200">
                - learning & building apis
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 rounded-md border-2 border-blue-500 px-2 py-1"
            >
              <i className="devicon-python-plain text-xl text-blue-500"></i>
              <h3 className="font-medium text-blue-500">Python</h3>
              <p className="text-sm text-zinc-500">
                - some scripting and ML testing
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 rounded-md border-2 border-yellow-500 px-2 py-1"
            >
              <i className="devicon-javascript-plain text-xl text-yellow-500"></i>
              <h3 className="font-medium text-yellow-500">JavaScript</h3>
              <p className="text-sm text-zinc-500">
                - made apps & discord bots
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 rounded-md border-2 border-red-500 px-2 py-1"
            >
              <i className="devicon-java-plain text-xl text-red-500"></i>
              <h3 className="font-medium text-red-500">Java</h3>
              <p className="text-sm text-zinc-500">
                - started off with minecraft plugins
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
