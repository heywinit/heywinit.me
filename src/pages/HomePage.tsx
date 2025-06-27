import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { getBlogs } from "@/services/blogService";
import Header from "@/components/Header";
import Background from "@/components/Background";
import EasterEggs from "@/components/EasterEggs";
import EmploymentSection from "@/components/sections/EmploymentSection";
import SkillsSection from "@/components/sections/SkillsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

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
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogError, setBlogError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setBlogLoading(true);
        const fetchedBlogs = await getBlogs();
        setBlogs(fetchedBlogs);
        setBlogError(undefined);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogError("Failed to load blog posts. Please try again later.");
      } finally {
        setBlogLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const skills = useMemo(
    () => ({
      TypeScript:
        "My primary language for web development and frontend applications.",
      Golang: "When I want to build fast and efficient backend services.",
      React: "Framework of choice for creating interactive user interfaces.",
      Solana:
        "Specialized in building dApps and tools for the Solana ecosystem.",
      Ethereum: "Experience with smart contracts and DeFi applications.",
    }),
    []
  );

  const projects = useMemo(
    () => [
      {
        name: "DiscoDB",
        description:
          "A lightweight database hosted on discord servers enabling theoretically infinite storage.",
        tech: "Go • Discord",
        url: "https://github.com/heywinit/discodb",
      },
      {
        name: "mercon",
        description:
          "An all in one library for downloading on-chain data related to Meteora Transactions, Positions and Pools.",
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
    ],
    []
  );

  const employment = useMemo(
    () => [
      {
        company: "Metfin",
        role: "Co-Founder",
        period: "2025 - Present",
        description:
          "Developing financial tools and infrastructure for the Meteora, leveraging Golang for backend services and TypeScript for client applications.",
        tech: "Go • TypeScript • Solana",
      },
      {
        company: "SOLDecoder",
        role: "Software Engineer",
        period: "2024 - Present (again, yes)",
        description:
          "Building blockchain automation tools for the Solana and Ethereum ecosystem. Working on code handling hundreds of thousands of dollars daily through Meteora DLMM Automation.",
        tech: "TypeScript • React • Solana",
        url: "https://soldecoder.app",
      },
      {
        company: "SOLDecoder",
        role: "Software Engineer",
        period: "2022 - 2023",
        description:
          "Worked on NFT launchpad automations and tools for moderating NFT projects.",
        tech: "TypeScript • React • Solana",
        url: "https://soldecoder.app",
      },
      {
        company: "Freelance",
        role: "Software Engineer",
        period: "2020 - 2023",
        description:
          "Freelanced as a Software Engineer and Minecraft Mod Developer for 3 years.",
        tech: "Java • TypeScript • Solana",
      },
    ],
    []
  );

  // Add scroll to top functionality
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <h1 className="text-6xl sm:text-7xl font-bold relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              winit.
            </span>
          </h1>

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
        <div id="about">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
                #
              </span>
              About
            </h2>
            <div className="space-y-4 border-l-2 border-primary/20 pl-5 py-2">
              <p className="text-neutral-700 dark:text-neutral-300">
                i'm 19. Started with QBASIC {new Date().getFullYear() - 2018}{" "}
                years ago, dabbled in Unity, then shifted to Java for Minecraft
                modding in high school. i wrote firmware for a TV set top box to
                enable a recording option and i realized this is how i'll spend
                the rest of my life. then in 10th grade I ventured into web3
                through Solana and Ethereum ecosystems, been there ever since.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300">
                i recently joined my 4 year old employer back and now i work at
                SOLDecoder as a SWE again and i'm co-founding Metfin, working
                with Golang and TypeScript to create robust developer tools.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-accent hover:underline group mt-2"
              >
                Read my full story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Employment */}
        <div id="employment">
          <EmploymentSection employment={employment} />
        </div>

        {/* Projects - KEEPING ORIGINAL */}
        <div id="projects">
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
                    {project.url && (
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
                    )}
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
        </div>

        {/* Skills */}
        <div id="skills">
          <SkillsSection skills={skills} />
        </div>

        {/* Blogs */}
        <div id="blog">
          <BlogSection
            blogs={blogs}
            isLoading={blogLoading}
            error={blogError}
          />
        </div>

        <ContactSection />

        {/* Footer */}
        <div className="text-center text-neutral-500 text-sm pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <p>© {new Date().getFullYear()} winit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
