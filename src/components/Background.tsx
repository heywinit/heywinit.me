import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

export default function Background({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 dark:bg-primary/30 rounded-none filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/20 dark:bg-primary/20 rounded-none filter blur-3xl" />
    </motion.div>
  );
}
