import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface HotBarCellProps {
  techStack: TechStack[];
}

export default function HotBarCell({ techStack }: HotBarCellProps) {
  const hotBarRef = useRef(null);
  const isHotBarInView = useInView(hotBarRef, {
    once: true,
    margin: "-50px",
  });

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

  const techItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={hotBarRef}
      variants={containerVariants}
      className="cursor-default select-none rounded-[--radius] border bg-card p-6 font-mono shadow-sm"
    >
      <h3 className="mb-4 font-semibold leading-none tracking-tight">
        Hot Bar
      </h3>
      <motion.div
        className="flex flex-wrap gap-1"
        initial="hidden"
        animate={isHotBarInView ? "visible" : "hidden"}
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={techItemVariants}
            whileHover={{ scale: 1.1 }}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${tech.color}`}
          >
            <i className={tech.icon}></i>
            {tech.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
