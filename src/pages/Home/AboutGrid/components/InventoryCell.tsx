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

  const inventoryRef = useRef(null);
  const isInventoryInView = useInView(inventoryRef, {
    once: true,
    margin: "-50px",
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      const items = Array.from(container.children) as HTMLElement[];
      let totalWidth = 0;
      let visibleItems = items.length;

      for (let i = 0; i < items.length; i++) {
        totalWidth += items[i].offsetWidth + 4; // 4px for gap
        if (totalWidth > container.offsetWidth - 100) {
          // Leave space for "much more"
          visibleItems = i;
          break;
        }
      }

      setHasOverflow(totalWidth > container.offsetWidth);
      setVisibleCount(visibleItems);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const inventoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const chipVariants = {
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
    <div className="flex-grow cursor-default select-none rounded-[--radius] border bg-card p-6 shadow-sm">
      <h3 className="mb-4 font-semibold leading-none tracking-tight">
        Inventory
      </h3>
      <motion.div
        ref={containerRef}
        className="flex flex-wrap gap-1"
        variants={inventoryVariants}
        initial="hidden"
        animate={isInventoryInView ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
      >
        {frameworks
          .slice(0, hasOverflow ? visibleCount : frameworks.length)
          .map((framework, index) => (
            <motion.div
              key={index}
              variants={chipVariants}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${framework.color}`}
            >
              <i className={framework.icon}></i>
              {framework.name}
            </motion.div>
          ))}
        {hasOverflow && (
          <motion.div
            variants={chipVariants}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            much more...
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
