import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import LocationCard from "./LocationCard";

export default function AboutGrid() {
  const socialLinks = [
    { platform: "GitHub", icon: "devicon-github-original", url: "#" },
    { platform: "Twitter", icon: "devicon-twitter-original", url: "#" },
    { platform: "LinkedIn", icon: "devicon-linkedin-plain", url: "#" },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div
        id="about-section"
        className="relative min-h-screen w-full bg-background px-4 pt-20 sm:px-8 lg:px-32"
      >
        <BentoGrid className="mx-auto max-w-7xl">
          {/* About Me - Tall Cell */}
          <BentoGridItem
            className="md:row-span-2"
            title="About Me"
            description={
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <p className="text-lg leading-relaxed">
                    I'm an 18-year-old full-stack developer passionate about
                    building innovative solutions. Currently exploring the
                    intersections of AI, web development, and cloud
                    technologies. When I'm not coding, you'll find me
                    contributing to open-source projects or learning new
                    technologies.
                  </p>
                </div>
                <div className="relative h-24 w-24 flex-shrink-0">
                  <div className="animate-spin-slow absolute inset-0 rounded-full border-b-2 border-neutral-200"></div>
                  <div className="absolute inset-[6px] rounded-full border-2 border-neutral-200 bg-background"></div>
                </div>
              </div>
            }
          />

          {/* Location */}
          <LocationCard />

          {/* Working On */}
          <BentoGridItem
            title="Experience"
            description={
              <div className="group relative overflow-hidden rounded-lg p-4">
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <div className="relative">
                      <span className="block text-4xl font-bold text-primary">
                        7.5
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Years Programming
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px flex-1 bg-border"></div>
                    <span className="text-xs text-muted-foreground">
                      including
                    </span>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>

                  <div className="text-center">
                    <div className="relative">
                      <span className="block text-3xl font-bold text-primary">
                        4
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Years Professionally
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Social Links */}
          <BentoGridItem
            title="Connect"
            description={
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={link.url}
                        className="text-3xl transition-colors hover:text-primary"
                      >
                        <i className={link.icon + " colored"}></i>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.platform}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            }
          />
        </BentoGrid>
      </div>
    </TooltipProvider>
  );
}
