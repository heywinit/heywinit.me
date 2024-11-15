import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  color: string;
}

interface ConnectCellProps {
  socialLinks: SocialLink[];
  emailCopied: boolean;
  handleEmailClick: () => void;
}

export default function ConnectCell({
  socialLinks,
  emailCopied,
  handleEmailClick,
}: ConnectCellProps) {
  return (
    <div className="rounded-[--radius] border bg-card p-6 shadow-sm">
      <h3 className="mb-4 font-mono font-semibold leading-none tracking-tight">
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
          <Tooltip>
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
  );
}
