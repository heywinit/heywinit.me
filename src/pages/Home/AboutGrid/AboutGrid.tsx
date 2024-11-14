import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useRef, useEffect, useCallback } from "react";
import LocationCard from "./LocationCard";
import { motion } from "framer-motion";

export default function AboutGrid({
  ref,
}: {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  const socialLinks = [
    {
      platform: "GitHub",
      icon: "devicon-github-original",
      url: "#",
      color: "hover:text-[#333]",
    },
    {
      platform: "Twitter",
      icon: "devicon-twitter-original",
      url: "#",
      color: "hover:text-[#1DA1F2]",
    },
    {
      platform: "LinkedIn",
      icon: "devicon-linkedin-plain",
      url: "#",
      color: "hover:text-[#0A66C2]",
    },
  ];

  const techStack = [
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "GoLang",
      icon: "devicon-go-plain",
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      color:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
  ];

  const frameworks = [
    {
      name: "React",
      icon: "devicon-react-original",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    },
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
    },
    {
      name: "Tailwind",
      icon: "devicon-tailwindcss-plain",
      color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    },
    {
      name: "Express",
      icon: "devicon-express-original",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "Spring",
      icon: "devicon-spring-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "TensorFlow",
      icon: "devicon-tensorflow-original",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      name: "PyTorch",
      icon: "devicon-pytorch-original",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-original",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      name: "Azure",
      icon: "devicon-azure-plain",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "Git",
      icon: "devicon-git-plain",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300",
    },
    {
      name: "Linux",
      icon: "devicon-linux-plain",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      name: "Solana",
      icon: "devicon-solidity-plain",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      name: "Solidity",
      icon: "devicon-solidity-plain",
      color:
        "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    },
    {
      name: "Supabase",
      icon: "devicon-postgresql-plain",
      color:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    },
  ];

  const [emailCopied, setEmailCopied] = useState(false);
  const [logoKey, setLogoKey] = useState(0);

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText("heywinit@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleLogoHover = useCallback(() => {
    setLogoKey((prev) => prev + 1);
  }, []);

  const InventoryContent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverflow] = useState(false);
    const [visibleCount, setVisibleCount] = useState(frameworks.length);

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

    return (
      <div ref={containerRef} className="flex flex-wrap gap-1">
        {frameworks
          .slice(0, hasOverflow ? visibleCount : frameworks.length)
          .map((framework, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${framework.color} transition-all duration-200 hover:scale-105`}
            >
              <i className={framework.icon}></i>
              {framework.name}
            </div>
          ))}
        {hasOverflow && (
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-all duration-200 hover:scale-105">
            much more...
          </div>
        )}
      </div>
    );
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div
        ref={ref}
        id="about-section"
        className="relative min-h-screen w-full bg-background px-4 pt-28 sm:px-8 lg:px-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          {/* About Me - Tall Cell */}
          <div className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1 md:row-span-2">
            <h3 className="mb-4 font-semibold leading-none tracking-tight">
              About Me
            </h3>
            <div>
              <div
                className="relative float-right mb-2 ml-4 h-24 w-24"
                onMouseEnter={handleLogoHover}
              >
                <motion.div
                  key={`outer-${logoKey}`}
                  initial={{ rotate: 720, scale: 0.2, opacity: 0 }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    borderColor: "hsl(var(--logo-ring) / 0.6)",
                  }}
                  transition={{
                    duration: 2,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="absolute inset-0 rounded-full border-2"
                >
                  <motion.div
                    key={`inner-${logoKey}`}
                    initial={{ rotate: -720, scale: 0.2, opacity: 0 }}
                    animate={{
                      rotate: 0,
                      scale: 1,
                      opacity: 1,
                      borderColor: "hsl(var(--logo-ring) / 0.6)",
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.2,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="absolute inset-[4px] flex items-center justify-center rounded-full border-2 bg-[hsl(var(--logo-ring)_/_0.05)]"
                  >
                    <span className="select-none font-mono text-2xl font-bold text-white">
                      {"W"}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
              <div className="space-y-2 text-lg leading-snug">
                <p>
                  Hey there, I'm Winit, a 19 y/o software developer and avionics
                  engineer. Currently pursuing a degree in computer science,
                  driven by my interest in software development, aviation, and
                  continuous learning.
                </p>
                <p>
                  I've worked on a variety of projects ranging from web
                  development to mobile apps and even some rocketry.
                </p>
                <p>
                  My days are filled with coding and researching defence tech
                  like fighter jets and missiles. If you're a fan of the F-117
                  Nighthawk or the Ilyushin IL-76, we're homies.
                </p>
                <p>
                  Beyond tech and aviation, I'm an avid music enthusiast. You'll
                  often find me listening to hip-hop, R&B and folk.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <LocationCard />
          </div>

          <div className="row-span-3 flex flex-col space-y-4 md:col-span-1">
            <div className="rounded-[--radius] border bg-card p-6 shadow-sm">
              <h3 className="font-semibold leading-none tracking-tight">
                Experience
              </h3>
              <div className="group relative overflow-hidden rounded-lg p-2">
                <div className="relative z-10 space-y-2">
                  <div className="text-center">
                    <div className="relative">
                      <span className="block text-5xl font-bold text-primary">
                        7.5
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Years Programming
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px flex-1 bg-border"></div>
                    <span className="text-xs text-muted-foreground">
                      including
                    </span>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>

                  <div className="text-center">
                    <div className="relative">
                      <span className="block text-4xl font-bold text-primary">
                        4
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Years Professionally
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[--radius] border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-semibold leading-none tracking-tight">
                Connect
              </h3>
              <div className="flex flex-grow flex-col justify-center">
                <div className="flex flex-wrap justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <a
                          href={link.url}
                          className={`transform text-4xl transition-all duration-200 hover:scale-110 ${link.color}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={link.icon}></i>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.platform}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  <Tooltip open={emailCopied}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleEmailClick}
                        className="transform text-4xl transition-all duration-200 hover:scale-110 hover:text-[#EA4335]"
                      >
                        <i className="devicon-google-plain"></i>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className={emailCopied ? "text-green-500" : ""}>
                        {emailCopied ? "Copied email!" : "Copy email"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* Hot Bar */}
            <div className="cursor-default select-none rounded-[--radius] border bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-semibold leading-none tracking-tight">
                Hot Bar
              </h3>
              <div className="flex flex-wrap gap-1">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${tech.color} transition-all duration-200 hover:scale-105`}
                  >
                    <i className={tech.icon}></i>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Section */}
            <div className="flex-grow cursor-default select-none rounded-[--radius] border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-semibold leading-none tracking-tight">
                Inventory
              </h3>
              <InventoryContent />
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col rounded-[--radius] border bg-white/80 p-6 shadow-sm md:col-span-1">
            <span className="text-lg font-medium text-zinc-800">
              "A day without sunshine is like, you know, night."
            </span>
            <span className="mt-4 self-end text-lg text-zinc-800">
              - Steve Martin
            </span>
          </div>

          {/* Learning fourney */}
          <div className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1">
            <h3 className="mb-4 font-semibold leading-none tracking-tight">
              Learning Journey
            </h3>
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-teal-500 via-red-500 via-yellow-500 to-blue-500"></div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2 rounded-md border-2 bg-gradient-to-r from-[#1E90FF] to-[#20B2AA] px-2 py-1 text-white">
                    <i className="devicon-go-plain text-xl"></i>
                    <h3 className="font-medium">Golang</h3>
                    <p className="text-sm text-zinc-200">
                      - learning & building apis
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border-2 border-blue-500 px-2 py-1">
                    <i className="devicon-python-plain text-xl text-blue-500"></i>
                    <h3 className="font-medium text-blue-500">Python</h3>
                    <p className="text-sm text-zinc-500">
                      - some scripting and ML testing
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border-2 border-yellow-500 px-2 py-1">
                    <i className="devicon-javascript-plain text-xl text-yellow-500"></i>
                    <h3 className="font-medium text-yellow-500">JavaScript</h3>
                    <p className="text-sm text-zinc-500">
                      - made apps & discord bots
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border-2 border-red-500 px-2 py-1">
                    <i className="devicon-java-plain text-xl text-red-500"></i>
                    <h3 className="font-medium text-red-500">Java</h3>
                    <p className="text-sm text-zinc-500">
                      - started off with minecraft plugins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Building (moved down) */}
          <div className="rounded-[--radius] border bg-card p-6 shadow-sm md:col-span-1">
            <h3 className="mb-4 font-semibold leading-none tracking-tight">
              Currently Building
            </h3>
            <div className="space-y-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Laksh</h3>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm text-muted-foreground">
                    Active Project
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Laksh is an AI-equipped all in one manager & resource library
                for all your academic needs. From routine management using
                automatic task sorting and scheduling to a comprehensive
                resource library with AI-powered research and study notes, Laksh
                is here to simplify your academic journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
