import { motion } from "framer-motion";

interface WordPullUpProps {
  children: React.ReactNode;
  delay?: number;
}

export function WordPullUp({ children, delay = 0 }: WordPullUpProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
