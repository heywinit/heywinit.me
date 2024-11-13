import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AboutGrid() {
  const primaryTools = [
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Go", icon: "devicon-go-original-wordmark" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "NodeJS", icon: "devicon-nodejs-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Spring", icon: "devicon-spring-plain" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
    { name: "PyTorch", icon: "devicon-pytorch-original" },
  ];

  const secondaryTools = [
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "GraphQL", icon: "devicon-graphql-plain" },
    { name: "Selenium", icon: "devicon-selenium-original" },
    { name: "Redux", icon: "devicon-redux-original" },
    { name: "Vercel", icon: "devicon-vercel-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "AWS", icon: "devicon-amazonwebservices-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
    { name: "Jenkins", icon: "devicon-jenkins-plain" },
    { name: "Azure", icon: "devicon-azure-plain" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Webpack", icon: "devicon-webpack-plain" },
    { name: "Babel", icon: "devicon-babel-plain" },
    { name: "Nginx", icon: "devicon-nginx-original" },
  ];

  const socialLinks = [
    { platform: "GitHub", icon: "devicon-github-original", url: "#" },
    { platform: "Twitter", icon: "devicon-twitter-original", url: "#" },
    { platform: "LinkedIn", icon: "devicon-linkedin-plain", url: "#" },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="mx-auto w-full max-w-5xl p-4 py-8">
        <div className="grid grid-cols-4 gap-6">
          {/* Introduction - spans 3 columns */}
          <section className="col-span-3 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-4 text-2xl font-bold">About Me</h2>
            <p className="text-lg">
              Full Stack Developer passionate about building end-to-end
              solutions
            </p>
          </section>

          {/* Coding Hours - 1 column */}
          <section className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-2 text-2xl font-bold">Coding Hours</h2>
            <p className="text-xl">18,923 hrs</p>
          </section>

          {/* Primary Toolkit - spans full width */}
          <section className="col-span-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-4 text-2xl font-bold">Primary Toolkit</h2>
            <div className="overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block"
              >
                {[...primaryTools, ...primaryTools].map((tool, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <span className="mx-4 inline-block cursor-pointer text-2xl">
                        <i className={tool.icon + " colored"}></i>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tool.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Working On - spans 2 columns */}
          <section className="col-span-2 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-2 text-2xl font-bold">Working On</h2>
            <p className="text-xl">LAKSH</p>
          </section>

          {/* Connect - spans 2 columns */}
          <section className="col-span-2 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-4 text-2xl font-bold">Connect</h2>
            <div className="overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block"
              >
                {[...socialLinks, ...socialLinks].map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={link.url}
                        className="mx-4 inline-block cursor-pointer text-2xl transition-colors hover:text-blue-500"
                      >
                        <i className={link.icon + " colored"}></i>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.platform}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Secondary Toolkit - spans full width */}
          <section className="col-span-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="mb-4 text-2xl font-bold">Secondary Toolkit</h2>
            <div className="overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block"
              >
                {[...secondaryTools, ...secondaryTools].map((tool, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <span className="mx-4 inline-block cursor-pointer text-2xl">
                        <i className={tool.icon + " colored"}></i>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tool.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </TooltipProvider>
  );
}
