import Footer from "@/components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import TechStack from "./pages/TechStack";

export default function Home() {
  const projects = [
    {
      name: "Laksh",
      desc: "A complete study companion empowering students with structured learning, practice, and community.",
      tech: [
        "react",
        "reactnative",
        "express",
        "node",
        "postgresql",
        "tailwindcss",
      ],
      status: "work in progress",
      github: "https://laksh.app",
    },
    {
      name: "QuatTar RGAM-1",
      desc: "A rocket built for delivering payloads with precision.",
      tech: ["c", "c++"],
      status: "work in progress",
      github: "https://github.com/heywinit/QT-MHK-26",
    },
    {
      name: "discodb",
      desc: "database that stores data in discord allowing for unlimited storage.",
      tech: ["golang", "discordgo"],
      status: "work in progress",
      github: "https://github.com/heywinit/discodb",
    },
    {
      name: "rootus",
      desc: "a one stop solution for all your commuting needs.",
      tech: [
        "golang",
        "reactnative",
        "react",
        "tailwindcss",
        "node",
        "express",
      ],
      status: "work in progress",
      github: "https://github.com/heywinit/rootus",
    },
    {
      name: "statisfy",
      desc: "music taste visualization app that presents your listening habits in fancy charts and graphs.",
      tech: [
        "golang",
        "spotify web api",
        "mysql",
        "react",
        "reactnative",
        "tailwindcss",
      ],
      status: "work in progress",
      github: "https://github.com/heywinit/statisfy",
    },
    {
      name: "stail",
      desc: "css as a configuration language.",
      tech: ["golang", "js/ts", "python", "java"],
      status: "work in progress",
      github: "https://github.com/heywinit/stail",
    },
    {
      name: "bgqr",
      desc: "qr code generator & scanner that generates qr codes with colors for increased storage capacity.",
      tech: ["golang"],
      status: "work in progress",
      github: "https://github.com/heywinit/bgqr",
    },
    {
      name: "jesensi",
      desc: "my own defence technology encyclopedia web app.",
      tech: ["springboot", "java", "mongodb", "react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/jesensi-api",
    },
    {
      name: "minechek",
      desc: "tui minecraft server management tool",
      tech: ["golang", "minecraft protocol", "spigot", "paper", "charm"],
      status: "work in progress",
      github: "https://github.com/heywinit/minechek",
    },
    {
      name: "goise",
      desc: "web app built with wasm that delivers a wide range of noises and textures using paramters.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Goise",
    },
    {
      name: "gort",
      desc: "web app for visualizing data structures, sorting and pathfinding algorithms.",
      tech: ["golang", "webassembly"],
      status: "work in progress",
      github: "https://github.com/heywinit/Gort",
    },
    {
      name: "heyhud",
      desc: "firefox extension that replaces new tab page with a more customized dashboard.",
      tech: ["js/ts", "webextension api", "react", "tailwindcss"],
      status: "work in progress",
      github: "https://github.com/heywinit/heyhud",
    },
  ];

  return (
    <div className="flex h-screen w-screen flex-col justify-between overflow-y-auto">
      <div className="flex flex-col">
        <NavBar />
        <div className="flex flex-col items-center justify-center space-y-4 pt-16">
          <Hero />
          <About />
          <TechStack />
        </div>
      </div>
      <Footer />
    </div>
  );
}
