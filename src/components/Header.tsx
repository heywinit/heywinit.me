import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showCopiedTooltip) {
      const timer = setTimeout(() => {
        setShowCopiedTooltip(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopiedTooltip]);

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-3"
      >
        <div className="flex flex-row justify-between items-center">
          <motion.div className="flex items-center gap-2 text-sm text-neutral-500 backdrop-blur-sm w-fit px-3 py-1 rounded-none border border-neutral-200 dark:border-neutral-800">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span>India (GMT+5:30)</span>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            {[
              {
                id: "github",
                icon: <Github size={20} />,
                label: "GitHub",
                href: "https://github.com/heywinit",
              },
              {
                id: "twitter",
                icon: <Twitter size={20} />,
                label: "Twitter",
                href: "https://twitter.com/hiwinit",
              },
              {
                id: "email",
                icon: <Mail size={20} />,
                label: "Email",
                href: "mailto:heywinit@gmail.com",
                onClick: (e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("heywinit@gmail.com");
                  setShowCopiedTooltip(true);
                },
              },
            ].map((item) => (
              <motion.div key={item.id} className="relative">
                <TooltipProvider>
                  <Tooltip
                    open={item.id === "email" ? showCopiedTooltip : undefined}
                  >
                    <TooltipTrigger asChild>
                      <motion.a
                        href={item.href}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-green-500 dark:hover:text-green-400 flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={item.onClick}
                      >
                        {item.icon}
                      </motion.a>
                    </TooltipTrigger>
                    {item.id === "email" && (
                      <TooltipContent className="bg-black text-white px-2 py-1 text-xs rounded-sm">
                        Copied!
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
