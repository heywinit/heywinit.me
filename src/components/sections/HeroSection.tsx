import { useState, useEffect, useRef } from "react";
import { Github, Twitter, Mail, ExternalLink, Key } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const skills = {
    TypeScript:
      "My primary language for web development and frontend applications.",
    Golang: "When I want to build fast and efficient backend services.",
    React: "Framework of choice for creating interactive user interfaces.",
    Solana: "Specialized in building dApps and tools for the Solana ecosystem.",
    Ethereum: "Experience with smart contracts and DeFi applications.",
  };

  const projects = [
    {
      name: "Project Alpha",
      description:
        "A Solana-based NFT marketplace focused on minimal gas fees.",
      tech: "TypeScript • React • Solana",
      url: "https://github.com/heywinit/project-alpha",
    },
    {
      name: "DeFi Dashboard",
      description:
        "Analytics dashboard for tracking DeFi investments across chains.",
      tech: "Go • Next.js • Ethereum",
      url: "https://github.com/heywinit/defi-dashboard",
    },
    {
      name: "CryptoTracker",
      description: "Real-time crypto price tracker with custom alerts.",
      tech: "TypeScript • React • WebSockets",
      url: "https://github.com/heywinit/crypto-tracker",
    },
  ];

  const blogs = [
    {
      title: "Understanding Solana's Programming Model",
      date: "May 15, 2023",
      summary:
        "A deep dive into how Solana's programming model differs from Ethereum and what that means for developers.",
      url: "/blog/understanding-solana-programming-model",
    },
    {
      title: "Building Type-Safe APIs with Go and TypeScript",
      date: "March 22, 2023",
      summary:
        "How to create end-to-end type safety between your Go backend and TypeScript frontend for a better developer experience.",
      url: "/blog/type-safe-apis-go-typescript",
    },
    {
      title: "Web3 Authentication Methods Compared",
      date: "January 10, 2023",
      summary:
        "A comparison of different web3 authentication methods including wallet connect, sign-in with Ethereum, and more.",
      url: "/blog/web3-authentication-methods",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden pt-24 pb-24"
    >
      {/* Keyboard shortcuts indicator */}
      <motion.div
        className="fixed bottom-4 right-4 flex items-center gap-2 text-xs text-neutral-500 bg-white/10 dark:bg-black/10 backdrop-blur-sm p-2 rounded border border-neutral-200 dark:border-neutral-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Key size={14} /> <span>Alt+C for code mode</span>
      </motion.div>

      <div className="max-w-2xl w-full space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <motion.div className="flex items-center gap-2 text-sm text-neutral-500">
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

          <motion.h1 className="text-5xl sm:text-6xl font-bold relative inline-block">
            winit.
          </motion.h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 pt-2">
            Software developer focused on Golang, TypeScript, and blockchain
            technologies.
          </p>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              Started with QBASIC {new Date().getFullYear() - 2013} years ago,
              dabbled in Unity, then shifted to Java for Minecraft modding in
              high school. Ventured into web3 through Solana and Ethereum
              ecosystems.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              Currently at SOLDecoder as a software dev and co-founding Metfin,
              working with Golang and TypeScript to create robust developer
              tools.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="p-4 border border-transparent rounded-lg hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <span className="text-green-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity text-sm">
                      {">"}
                    </span>
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      size={16}
                      className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                    />
                  </a>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                  {project.description}
                </p>
                <div className="text-sm text-neutral-500 mt-2">
                  {project.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4">
            {Object.entries(skills).map(([skill, description], index) => (
              <TooltipProvider key={skill}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="text-neutral-700 dark:text-neutral-300 font-medium cursor-pointer border border-transparent hover:border-green-500/30 p-2 rounded transition-colors flex items-center"
                      whileHover={{
                        color: "#22c55e",
                        backgroundColor: "rgba(34, 197, 94, 0.05)",
                      }}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-green-500 mr-2 opacity-50">$</span>
                      {skill}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>

        {/* Blogs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Blog</h2>
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                className="space-y-2 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={blog.url}
                  className="block group-hover:text-green-500 transition-colors"
                >
                  <h3 className="text-xl font-medium flex items-center">
                    <span className="text-green-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity">
                      {">"}
                    </span>
                    {blog.title}
                  </h3>
                </a>
                <div className="text-sm text-neutral-500">{blog.date}</div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {blog.summary}
                </p>
                <div>
                  <a
                    href={blog.url}
                    className="text-sm text-green-500 hover:underline inline-flex items-center gap-1"
                  >
                    Read more
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-5 pt-4"
        >
          <TooltipProvider>
            {[
              {
                id: "github",
                icon: <Github size={20} />,
                href: "https://github.com/heywinit",
                label: "GitHub",
              },
              {
                id: "twitter",
                icon: <Twitter size={20} />,
                href: "https://twitter.com/hiwinit",
                label: "Twitter",
              },
              {
                id: "email",
                icon: <Mail size={20} />,
                href: "mailto:heywinit@gmail.com",
                label: "Email",
              },
            ].map((item) => (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={item.href}
                    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors relative group"
                    aria-label={item.label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                    <motion.span
                      className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </motion.div>
      </div>
    </div>
  );
}
