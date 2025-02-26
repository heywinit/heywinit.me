"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"ancient" | "modern">("modern");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<Element[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const sectionElements = Array.from(scrollRef.current.children);
      setSections(sectionElements);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || sections.length === 0) return;

    const container = scrollRef.current;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;

    // Find which section is most visible
    const sectionIndex = Math.floor(scrollPosition / containerHeight);
    const newTheme = sectionIndex % 2 === 0 ? "modern" : "ancient";

    setTheme(newTheme);
  };

  function whichOne(ancient: string, modern: string) {
    return !mounted ? modern : theme === "ancient" ? ancient : modern;
  }

  return (
    <div
      className={cn([
        whichOne(
          "bg-gradient-to-b from-stone-900 via-amber-950 to-stone-900 font-ancient-body text-amber-200/90",
          "bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-amber-400/90 font-sora"
        ),
        "h-screen w-screen max-h-screen min-h-screen p-4 fixed inset-0 flex flex-col gap-2",
        "transition-all duration-1000 ease-in-out",
      ])}
    >
      <div
        className={cn([
          "border-2 p-4 shrink-0 backdrop-blur-sm",
          whichOne(
            "border-amber-900/40 bg-stone-900/40 font-ancient shadow-inner shadow-amber-900/20",
            "border-amber-800/30 bg-stone-900/30 shadow-amber-500/5"
          ),
          "transition-all duration-1000 ease-in-out",
        ])}
      ></div>
      <div
        className={cn([
          "border-2 flex-1 min-h-0 backdrop-blur-sm",
          whichOne(
            "border-amber-900/40 bg-stone-900/40 shadow-inner shadow-amber-900/20",
            "border-amber-800/30 bg-stone-900/30 shadow-amber-500/5"
          ),
          "transition-all duration-1000 ease-in-out",
        ])}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={cn([
            "h-full w-full overflow-y-auto",
            whichOne(
              "scrollbar-thin scrollbar-track-stone-800/30 scrollbar-thumb-amber-900/50",
              "scrollbar-thin scrollbar-track-stone-800/20 scrollbar-thumb-amber-700/50"
            ),
            "transition-colors duration-1000 ease-in-out",
          ])}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
