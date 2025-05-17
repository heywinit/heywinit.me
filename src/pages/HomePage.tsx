import { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getBlogs } from "@/services/blogService";
import Header from "@/components/Header";
import Background from "@/components/Background";
import EasterEggs from "@/components/EasterEggs";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blogs, setBlogs] = useState<
    {
      title: string;
      date: string;
      summary: string;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
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
      name: "baylag",
      description:
        "A minimal, offline-first personal finance app built for anyone who wants full control over their money.",
      tech: "TypeScript • React • Bun",
      url: "https://github.com/heywinit/baylag",
    },
    {
      name: "mercon",
      description:
        "An all in one library for downloading data related to Meteora Transactions, Positions and Pools.",
      tech: "Go • Solana • Postgres",
      url: "https://github.com/heywinit/mercon",
    },
    {
      name: "lopnur",
      description:
        "A tool for benchmarking various Solana RPC Providers for Meteora and its programs",
      tech: "TypeScript • Bun • Solana",
      url: "https://github.com/heywinit/lopnur",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden pt-24 pb-24"
    >
      <Background containerRef={containerRef} />
      <EasterEggs />

      <div className="max-w-3xl w-full space-y-16 relative z-10">
        <div>
          <Header />

          <motion.h1
            className="text-6xl sm:text-7xl font-bold relative inline-block"
            transition={{ duration: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              winit.
            </span>
          </motion.h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 pt-2 max-w-xl">
            Software developer focused on Golang, TypeScript, and blockchain
            technologies.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 pt-2">
            co-founder @{" "}
            <a
              href="https://metf.in"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              metf.in
            </a>
            . full-stack dev @{" "}
            <a
              href="https://soldecoder.app"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              soldecoder.app
            </a>
            .
          </p>
        </div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
              #
            </span>
            About
          </h2>
          <div className="space-y-4 border-l-2 border-primary/20 pl-5 py-2">
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

            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-accent hover:underline group mt-2"
            >
              Read my full story
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
              #
            </span>
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                className="p-5 rounded-none backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 hover:border-primary/70 dark:hover:border-primary/30 transition-all duration-300 relative group"
                data-party-target="true"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <span className="text-accent transition-opacity text-sm mr-2">
                      {">"}
                    </span>
                    {project.name}
                  </h3>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink
                      size={16}
                      className="text-neutral-400 hover:text-accent dark:hover:text-primary"
                    />
                  </motion.a>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                  {project.description}
                </p>
                <div className="text-sm text-neutral-500 mt-3 flex gap-1 flex-wrap">
                  {project.tech.split("•").map((tech) => (
                    <span
                      key={`${project.name}-tech-${tech.trim()}`}
                      className="bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-none text-xs"
                    >
                      {tech.trim()}
                    </span>
                  ))}
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
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
              #
            </span>
            Arsenal
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([skill, description]) => (
                  <div
                    key={skill}
                    className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-none"
                  >
                    <div className="font-medium flex items-center mb-1">
                      <span className="text-accent mr-2 text-sm">$</span>
                      {skill}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blogs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
              #
            </span>
            Blog
          </h2>
          <div className="space-y-10">
            {blogs.map((blog) => (
              <motion.div
                key={blog.title}
                className="space-y-2 group border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-0"
                data-party-target="true"
              >
                <Link
                  to={blog.url}
                  className="block group-hover:text-accent transition-colors"
                >
                  <h3 className="text-xl font-medium flex items-center">
                    <span className={"text-accent mr-2 transition-opacity"}>
                      {">"}
                    </span>
                    {blog.title}
                  </h3>
                </Link>
                <div className="text-sm inline-block bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-none text-neutral-600 dark:text-neutral-400">
                  {blog.date}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {blog.summary}
                </p>
                <div>
                  <motion.div>
                    <Link
                      to={blog.url}
                      className="text-sm text-accent hover:text-accent dark:hover:text-primary inline-flex items-center gap-1 mt-1 font-medium group"
                    >
                      Read more
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-neutral-500 text-sm pt-10 border-t border-neutral-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>© {new Date().getFullYear()} winit. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
