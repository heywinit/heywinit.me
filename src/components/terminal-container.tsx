"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface TerminalContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalContainer({
  children,
  className,
}: TerminalContainerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = scrollPosition / viewportHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate interpolated styles based on scroll progress
  const interpolatedStyles = {
    "--bg-opacity": `${Math.max(0, 1 - scrollProgress * 2)}`,
    "--ancient-opacity": `${Math.max(0, (scrollProgress - 0.5) * 2)}`,
    "--content-transform": `translateY(${scrollProgress * 20}px)`,
    "--blur-amount": `${scrollProgress * 2}px`,
    "--scale-factor": `${1 - Math.abs(scrollProgress - 0.5) * 0.1}`,
  } as React.CSSProperties;

  return (
    <>
      {/* Fixed background containers */}
      <div
        ref={containerRef}
        style={interpolatedStyles}
        className={cn(
          "fixed inset-0 w-full h-full",
          "transition-transform duration-300 ease-smooth-out",
          className
        )}
      >
        {/* Terminal Layer */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-smooth-out",
            "bg-black/90",
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(16,255,163,0.1),transparent)]",
            "after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,transparent_10%,transparent_90%,rgba(0,0,0,0.2)_100%)]",
            "opacity-[var(--bg-opacity)]"
          )}
        >
          {/* Scanlines */}
          <div
            className={cn(
              "absolute inset-0 overflow-hidden",
              "before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_3px)] before:animate-scanlines",
              "opacity-[var(--bg-opacity)]"
            )}
          />
        </div>

        {/* Ancient Layer */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-smooth-out",
            "bg-stone-100/95",
            'before:absolute before:inset-0 before:bg-[url("/parchment-texture.png")] before:opacity-20 before:mix-blend-overlay',
            "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(120,53,15,0.1),transparent)]",
            "opacity-[var(--ancient-opacity)]"
          )}
        />
      </div>

      {/* Scrollable content container */}
      <div
        style={{
          transform: "var(--content-transform)",
          filter: `blur(var(--blur-amount))`,
          scale: "var(--scale-factor)",
        }}
        className={cn(
          "relative z-10 transition-all duration-300 ease-smooth-out",
          scrollProgress < 0.5
            ? "font-terminal text-emerald-500"
            : "font-ancient text-amber-900"
        )}
      >
        {children}
      </div>
    </>
  );
}
