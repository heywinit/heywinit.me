import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FlickeringGrid from "./flickering-grid";

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {/* Flickering Grid Background */}
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={6}
          gridGap={8}
          flickerChance={0.4}
          color="white"
          maxOpacity={0.2}
        />
      </div>

      <div className="relative z-10">
        <div className="rounded-lg border-2 bg-black/50 p-8 backdrop-blur-sm">
          <pre className="mb-4 font-mono text-xl text-foreground">
            <code>
              <span className="text-[#CC7832]">while</span>
              <span className="text-[#A9B7C6]">(!</span>
              <span className="text-[#A9B7C6]">suspense</span>
              <span className="text-[#A9B7C6]">.</span>
              <span className="text-[#9876AA]">built</span>
              <span className="text-[#A9B7C6]">) {`{`}</span>
              {"\n    "}
              <span className="text-[#FFC66D]">hideContents</span>
              <span className="text-[#A9B7C6]">();</span>
              {"\n"}
              <span className="text-[#A9B7C6]">{`}`}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
