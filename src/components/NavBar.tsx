import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/aviation", label: "Aviation/Avionics" },
  { href: "/blog", label: "Blog" },
  { href: "/arsenal", label: "Arsenal" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      // Update scroll state
      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={`fixed left-0 right-0 top-0 z-40 px-4 py-4 transition-all duration-200 sm:px-8 lg:px-32 ${
          isScrolled ? "bg-background/50 backdrop-blur-lg" : ""
        }`}
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full rounded-xl border-2 bg-background/95 px-6 shadow-sm backdrop-blur transition-all duration-200 supports-[backdrop-filter]:bg-background/60 ${
            isScrolled
              ? "border-[hsl(var(--logo-ring)_/_0.4)] shadow-[0_0_15px_rgba(var(--logo-ring),0.3)]"
              : "border-[hsl(var(--logo-ring)_/_0.2)] shadow-[0_0_10px_rgba(var(--logo-ring),0.15)]"
          }`}
        >
          <div className="flex h-16 w-full items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-2xl font-bold tracking-tight"
            >
              Winit.
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="hidden items-center gap-6 lg:flex">
              <div className="flex items-center gap-6">
                {navigationLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t lg:hidden"
              >
                <div className="flex flex-col space-y-5 py-6">
                  {navigationLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
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
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground/90"
    >
      {children}
    </motion.a>
  );
}
