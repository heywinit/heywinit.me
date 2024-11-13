import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-4 sm:px-8 lg:px-32">
      <nav className="w-full rounded-xl border-2 border-border bg-background/95 px-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 w-full items-center justify-between">
          {/* Logo Section */}
          <div className="font-mono text-xl font-bold">Winit.</div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop Navigation Section */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Navigation Links */}
            <div className="flex items-center gap-4">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/guestbook">Guestbook</NavLink>
              <NavLink href="/arsenal">Arsenal</NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t lg:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/guestbook">Guestbook</NavLink>
              <NavLink href="/arsenal">Arsenal</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}
