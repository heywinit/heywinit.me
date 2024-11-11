import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const roles = useMemo(
    () => ["SOFTWARE_DEV", "AVIONICS_ENTHUSIAST", "MUSIC_ENJOYER", "POLYGOT"],
    [],
  );

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    setCurrentRole(roles[roleIndex]);
  }, [roles, roleIndex]);

  return (
    <div className="flex w-full flex-col items-center space-y-4 px-32">
      <div className="flex w-full flex-row justify-between px-16">
        <div className="flex h-[80vh] w-[100%] flex-col justify-between space-y-8">
          <div className="flex h-full flex-col space-y-8">
            <div className="space-x-1 font-mono text-3xl font-medium">
              <span className="text-[#9876aa]">{`{`}</span>
              <span>
                <span className="text-[#9876aa]">roles</span>
                <span className="text-white">.</span>
                <span className="text-p">{currentRole}</span>
              </span>
              <span className="text-[#9876aa]">{`}`}</span>
            </div>
            <div className="space-x-2 text-6xl font-medium">
              <span className="px-0.5 font-mono">
                <span className="text-[#9876aa]">{`{`}</span>
                <span className="text-[#6a8759]">greeting</span>
                <span className="text-[#9876aa]">{`}`}</span>
              </span>
              ,<span className="font-semibold">I'm Winit</span>
            </div>
            <div className="h-[50%] w-[40%] bg-bg2 text-lg font-medium">
              <div className="space-x-2 p-2 py-1 font-mono">
                <span className="text-[#9876aa]">echo</span>
                <span className="text-p">$BIO</span>
              </div>
              <hr className="text-stone" />
              <div className="text-stone p-2 font-mono">
                Full stack developer with a focus on creating efficient and
                powerful web applications. From designing user interfaces to
                building backend systems, I get the job done. Let's innovate and
                push boundaries.
              </div>
            </div>
          </div>
          <div className="j4ustify-center flex flex-col items-center space-y-4">
            <div className="text-3xl leading-snug">
              <hr className="text-stone mb-4 w-full border-t-2 border-gray-200" />
              i{" "}
              <span className="bg-bg2 px-0.5 font-mono font-medium text-p">
                code++
              </span>{" "}
              enough for my mom to{" "}
              <span className="bg-bg2 px-0.5 font-mono font-medium">
                <span className="text-[#9876aa]">console</span>
                .log(
                <span className="text-[#6a8759]">
                  `take a break from the damn computer please`
                </span>
                );
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
