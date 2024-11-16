import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useRef, useCallback } from "react";
import LocationCard from "./components/LocationCard";
import { motion, useInView } from "framer-motion";
import AboutMeCell from "./components/AboutMeCell";
import ExperienceCell from "./components/ExperienceCell";
import ConnectCell from "./components/ConnectCell";
import HotBarCell from "./components/HotBarCell";
import InventoryCell from "./components/InventoryCell";
import QuoteCell from "./components/QuoteCell";
import LearningJourneyCell from "./components/LearningJourneyCell";
import CurrentlyBuildingCell from "./components/CurrentlyBuildingCell";

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

export default function AboutGrid() {
  const socialLinks = [
    {
      platform: "GitHub",
      icon: "devicon-github-original",
      url: "https://github.com/heywinit",
      color: "hover:text-[#333]",
    },
    {
      platform: "Twitter",
      icon: "devicon-twitter-original",
      url: "https://twitter.com/hiwinit",
      color: "hover:text-[#1DA1F2]",
    },
    {
      platform: "LinkedIn",
      icon: "devicon-linkedin-plain",
      url: "https://www.linkedin.com/in/vinesh-rajpurohit/",
      color: "hover:text-[#0A66C2]",
    },
  ];

  const techStack = [
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      color:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 font-mono",
    },
    {
      name: "GoLang",
      icon: "devicon-go-plain",
      color:
        "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 font-mono",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
      color:
        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 font-mono",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      color:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 font-mono",
    },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      color:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 font-mono",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-mono",
    },
  ];

  const frameworks = [
    {
      name: "React",
      icon: "devicon-react-original",
      color:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 font-mono",
    },
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 font-mono",
    },
    {
      name: "Tailwind",
      icon: "devicon-tailwindcss-plain",
      color:
        "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300 font-mono",
    },
    {
      name: "Express",
      icon: "devicon-express-original",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 font-mono",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-mono",
    },
    {
      name: "Spring",
      icon: "devicon-spring-plain",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-mono",
    },
    {
      name: "TensorFlow",
      icon: "devicon-tensorflow-original",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 font-mono",
    },
    {
      name: "PyTorch",
      icon: "devicon-pytorch-original",
      color:
        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 font-mono",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain-wordmark",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 font-mono",
    },
    {
      name: "Azure",
      icon: "devicon-azure-plain",
      color:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 font-mono",
    },
    {
      name: "Git",
      icon: "devicon-git-plain",
      color:
        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 font-mono",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original",
      color:
        "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 font-mono",
    },
    {
      name: "Linux",
      icon: "devicon-linux-plain",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 font-mono",
    },
    {
      name: "Solana",
      icon: "devicon-solidity-plain",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 font-mono",
    },
    {
      name: "Solidity",
      icon: "devicon-solidity-plain",
      color:
        "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300 font-mono",
    },
    {
      name: "Supabase",
      icon: "devicon-postgresql-plain",
      color:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 font-mono",
    },
  ];

  const [emailCopied, setEmailCopied] = useState(false);
  const [logoKey, setLogoKey] = useState(0);

  const handleLogoHover = useCallback(() => {
    setLogoKey((prev) => prev + 1);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText("heywinit@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        ref={sectionRef}
        id="about-section"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative min-h-screen w-full bg-background px-4 pt-24 sm:px-8 lg:px-32"
      >
        <motion.div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          <AboutMeCell logoKey={logoKey} handleLogoHover={handleLogoHover} />
          <LocationCard />

          <div className="row-span-3 flex flex-col space-y-4 md:col-span-1">
            <ExperienceCell />
            <ConnectCell
              socialLinks={socialLinks}
              emailCopied={emailCopied}
              handleEmailClick={handleEmailClick}
            />
            <HotBarCell techStack={techStack} />
            <InventoryCell frameworks={frameworks} />
          </div>

          <QuoteCell />
          <LearningJourneyCell />
          <CurrentlyBuildingCell />
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
