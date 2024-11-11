import { useState } from "react";

function TechCard({
  name,
  icon,
  color,
  className,
}: {
  name: string;
  icon: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center p-2 transition-all duration-500 ${className}`}
    >
      <div className="bg-gray flex h-full w-full flex-col items-start justify-between rounded-lg p-2">
        <div
          className={`bg-[${color}] flex items-center justify-center rounded-lg p-2`}
        >
          <i className={[icon, ""].join("")}></i>
        </div>
        <span className="">{name}</span>
      </div>
    </div>
  );
}

export default function TechStack() {
  const [, setRerender] = useState(false);

  const techs = [
    {
      name: "Java",
      icon: "devicon-java-plain",
      color: "#007396",
      priority: "high",
    },
    {
      name: "Golang",
      icon: "devicon-go-plain",
      color: "#00ADD8",
      priority: "high",
    },
    {
      name: "Kotlin",
      icon: "devicon-kotlin-plain",
      color: "#7F52FF",
      priority: "low",
    },
    {
      name: "React",
      icon: "devicon-react-original",
      color: "#61DAFB",
      priority: "high",
    },
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain",
      color: "#000000",
      priority: "low",
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      color: "#38B2AC",
      priority: "low",
    },
    {
      name: "TypeScript/JavaScript",
      icon: "devicon-typescript-plain",
      color: "#3178C6",
      priority: "high",
    },
    {
      name: "ExpressJS",
      icon: "devicon-express-original",
      color: "#000000",
      priority: "high",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      color: "#3776AB",
      priority: "low",
    },
  ];

  return (
    <div className="flex h-[95vh] w-full flex-col items-center p-24">
      <div className="bg-gray flex w-full items-center justify-between rounded-t-lg p-2 px-4">
        <div className="space-x-2 font-mono text-xl font-medium">
          <span className="text-[#9876aa]">echo</span>
          <span className="text-p">$BIO</span>
        </div>
        <button
          className="rounded-full bg-blue-500 px-3 py-0.5 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setRerender((prev) => !prev);
          }}
        >
          Shuffle
        </button>
      </div>
      <div className="flex h-full w-full flex-row justify-between rounded-b-lg bg-bg2">
        <div className="flex w-1/2 flex-col pr-0.5">
          <div className="grid h-1/2 grid-cols-5 grid-rows-3">
            {techs
              .sort(() => Math.random() - 0.5)
              .map((tech, index) => (
                <TechCard
                  key={index}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  className={`${
                    tech.priority === "high"
                      ? Math.random() < 0.5
                        ? "col-span-2"
                        : "row-span-2"
                      : ""
                  }`}
                />
              ))}
          </div>
          <div className="grid h-1/2 p-2">
            <div className="bg-gray rounded-lg"></div>
          </div>
        </div>
        <div className="grid w-1/2 p-2 pl-0.5">
          <div className="bg-gray rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
