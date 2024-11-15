import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card p-4",
        featured
          ? "col-span-1 md:col-span-2 lg:col-span-1"
          : "transition-all hover:shadow-lg",
      )}
    >
      {project.image && (
        <div
          className={cn(
            "overflow-hidden",
            featured
              ? "aspect-video w-full"
              : "absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20",
          )}
        >
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "h-full w-full object-cover",
              featured &&
                "transition-transform duration-300 group-hover:scale-105",
            )}
          />
        </div>
      )}

      <div className="relative">
        <div className="flex h-full flex-row items-center justify-between">
          <h3 className={cn("font-bold", featured ? "text-2xl" : "text-xl")}>
            {project.title}
          </h3>

          <div className="flex items-center space-x-2">
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center rounded-full bg-white p-1"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </motion.div>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
            {featured && project.chip && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="select-none rounded-full bg-green-400/90 px-3 py-1 text-sm text-secondary"
              >
                {project.chip}
              </motion.span>
            )}
          </div>
        </div>

        <p className="mt-2 text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="select-none rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
