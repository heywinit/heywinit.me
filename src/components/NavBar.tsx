import { Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex h-max w-full flex-row items-center justify-between space-x-2 bg-bg2 p-4 lg:px-32">
      <div className="flex text-3xl font-semibold">WINIT</div>
      <div className="text-stone flex flex-row items-center space-x-8">
        <div className="flex flex-row space-x-2 text-xl font-medium">
          {[
            {
              title: "About",
            },
            {
              title: "Projects",
            },
            {
              title: "Contact",
            },
          ].map((e, i) => {
            return (
              <Link
                to={e.title.toLowerCase()}
                key={i}
                className="px-1 hover:bg-p hover:text-black"
              >
                {e.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row space-x-4">
          {[
            { icon: <Github />, link: "https://github.com/heywinit" },
            { icon: <Youtube />, link: "https://youtube.com/@heywinit" },
          ].map((e, i) => {
            return (
              <a href={e.link} key={i} className="hover:text-p">
                {e.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
