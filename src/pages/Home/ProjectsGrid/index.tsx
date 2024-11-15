import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/Project";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export default function ProjectsGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const projects: Project[] = [
    {
      title: "Laksh",
      chip: "Work in Progress",
      description:
        "Laksh is an AI-equipped all in one manager & resource library for all your academic needs.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "ExpressJS",
        "Supabase",
        "NodeJS",
        "Python",
        "AI/ML",
      ],
      githubUrl: "https://github.com/LakshApp",
      featured: true,
    },
    {
      title: "DiscoDB",
      description:
        "A key value pair database offering unlimited storage stored on Discord.",
      technologies: ["Golang", "discord.go"],
      githubUrl: "https://github.com/heywinit/DiscoDB",
    },
    {
      title: "Jesensi",
      description:
        "A wikipedia like defence technology encyclopedia storing a wide range of data about fighter jets, missiles, ships, and much more",
      githubUrl: "https://github.com/heywinit/Jesensi",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "ExpressJS",
        "Mongo",
        "NodeJS",
      ],
    },
    {
      title: "minecomm",
      description:
        "A TUI client made to connect to Minecraft servers for chatting",
      technologies: ["Golang", "Charm", "Minecraft Protocol"],
      githubUrl: "https://github.com/heywinit/minecomm",
    },
    {
      title: "what-nxt",
      description:
        "Backend for What-NXT, an event booking app made for a hackathon.",
      technologies: ["TypeScript", "ExpressJS", "PostgreSQL", "Supabase"],
      githubUrl: "https://github.com/heywinit/what-nxt",
    },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        ref={sectionRef}
        id="projects-section"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative min-h-screen w-full bg-background px-4 pt-24 sm:px-8 lg:px-32"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
          <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} featured />
              ))}
          </motion.div>

          <h2 className="mb-4 mt-8 text-3xl font-bold">
            More Projects but less cool than Laksh.
          </h2>
          <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}

            {/* View All Projects Card */}
            <Link to="/projects" className="group">
              <motion.div
                className="flex h-full min-h-[200px] flex-col justify-center rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent"
                variants={containerVariants}
              >
                <h3 className="text-xl font-semibold group-hover:text-accent-foreground">
                  View All Projects
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Click to see all my projects and experiments
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
