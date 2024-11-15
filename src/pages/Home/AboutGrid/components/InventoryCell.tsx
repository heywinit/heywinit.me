import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Framework {
  name: string;
  icon: string;
  color: string;
}

interface InventoryCellProps {
  frameworks: Framework[];
}

export default function InventoryCell({ frameworks }: InventoryCellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [visibleCount, setVisibleCount] = useState(frameworks.length);
  const [, setIsMobile] = useState(false);

  const inventoryRef = useRef(null);
  const isInventoryInView = useInView(inventoryRef, {
    once: true,
    margin: "-50px",
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflowAndDevice = () => {
      const mobile = window.innerWidth <= 768; // Standard mobile breakpoint
      setIsMobile(mobile);

      if (mobile) {
        setHasOverflow(false);
        setVisibleCount(frameworks.length);
        return;
      }

      const items = Array.from(container.children) as HTMLElement[];
      let totalWidth = 0;
      let visibleItems = items.length;

      for (let i = 0; i < items.length; i++) {
        totalWidth += items[i].offsetWidth + 4;
        if (totalWidth > container.offsetWidth - 100) {
          visibleItems = i;
          break;
        }
      }

      setHasOverflow(totalWidth > container.offsetWidth);
      setVisibleCount(visibleItems);
    };

    checkOverflowAndDevice();
    window.addEventListener("resize", checkOverflowAndDevice);
    return () => window.removeEventListener("resize", checkOverflowAndDevice);
  }, [frameworks.length]);

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
      ref={inventoryRef}
      variants={containerVariants}
      className="flex-grow cursor-default select-none rounded-[--radius] border bg-card p-6 shadow-sm"
    >
      <h3 className="mb-4 font-mono font-semibold leading-none tracking-tight">
        Inventory
      </h3>
      <motion.div
        ref={containerRef}
        className="flex flex-wrap gap-1"
        initial="hidden"
        animate={isInventoryInView ? "visible" : "hidden"}
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {frameworks
          .slice(0, hasOverflow ? visibleCount : frameworks.length)
          .map((framework, index) => (
            <motion.div
              key={index}
              variants={techItemVariants}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${framework.color}`}
            >
              <i className={framework.icon}></i>
              {framework.name}
            </motion.div>
          ))}
        {hasOverflow && (
          <motion.div
            variants={techItemVariants}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            much more...
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
