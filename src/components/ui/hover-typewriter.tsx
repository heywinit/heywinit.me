import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface HoverTypewriterProps {
  defaultText: string;
  hoverText: string;
  className?: string;
}

export function HoverTypewriter({
  defaultText,
  hoverText,
  className = "",
}: HoverTypewriterProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const defaultRef = useRef<HTMLSpanElement>(null);
  const hoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !defaultRef.current || !hoverRef.current)
      return;

    const updateWidth = () => {
      if (defaultRef.current && hoverRef.current && containerRef.current) {
        const paddingWidth = 8;
        const width = isHovered
          ? hoverRef.current.offsetWidth + paddingWidth
          : defaultRef.current.offsetWidth + paddingWidth;
        containerRef.current.style.width = `${width}px`;
      }
    };

    const resizeObserver = new ResizeObserver(updateWidth);

    // Observe both text elements
    resizeObserver.observe(defaultRef.current);
    resizeObserver.observe(hoverRef.current);

    // Initial width update
    updateWidth();

    return () => resizeObserver.disconnect();
  }, [isHovered]); // Re-run when hover state changes

  return (
    <motion.span
      ref={containerRef}
      className={`cursor-pointer px-1 py-0 underline ${className}`}
      initial={{ backgroundColor: "hsl(var(--logo-ring) / 0.2)" }}
      whileHover={{ backgroundColor: "hsl(var(--logo-ring) / 0.5)" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: "inline-block",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <span className="relative inline-block">
        <span
          ref={defaultRef}
          className={`inline-block whitespace-nowrap transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {defaultText}
        </span>
        <span
          ref={hoverRef}
          className={`absolute left-0 top-0 inline-block whitespace-nowrap transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            clipPath: isHovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 0.3s ease-in-out",
          }}
        >
          {hoverText}
        </span>
      </span>
    </motion.span>
  );
}
