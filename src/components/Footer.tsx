import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <motion.footer className="relative flex min-h-[500px] w-full justify-center bg-background py-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex w-full flex-col justify-between gap-12 rounded-xl border-2 border-[hsl(var(--logo-ring)_/_0.2)] bg-background/95 p-8 shadow-[0_0_10px_rgba(var(--logo-ring),0.15)] backdrop-blur supports-[backdrop-filter]:bg-background/60 md:flex-row"
      >
        <div className="flex flex-col justify-between space-y-8 md:space-y-12">
          <div className="flex flex-col space-y-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
            >
              You know the business,
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
            >
              I know the chemistry
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-wrap gap-3">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/heywinit",
                  color: "bg-white text-black",
                },
                {
                  name: "Twitter",
                  url: "https://twitter.com/heywinit",
                  color: "bg-blue-500 text-white",
                },
                {
                  name: "Instagram",
                  url: "https://instagram.com/heywinit",
                  color: "bg-pink-500 text-white",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex select-none items-center gap-1 rounded-full ${item.color} cursor-pointer px-4 py-1.5 text-sm font-medium`}
                  >
                    {item.name}
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-between space-y-8 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-start space-y-4 md:items-end"
          >
            <div className="text-end text-lg text-muted-foreground">
              If you're scared of clicking buttons,
              <br /> mail me at{" "}
              <code
                className="relative inline-block hover:cursor-pointer"
                onClick={() => {
                  window.navigator.clipboard.writeText("heywinit@gmail.com");
                }}
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 transform bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="relative">heywinit@gmail.com</span>
              </code>
            </div>
            <Button
              size="lg"
              variant="default"
              className="group relative overflow-hidden"
              onClick={(e) => {
                window.navigator.clipboard.writeText("heywinit@gmail.com");
                e.preventDefault();
                const button = e.currentTarget;
                button.textContent = "Copied!";
                setTimeout(() => {
                  button.textContent = "Get in touch";
                }, 2000);
              }}
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-foreground/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-end text-sm text-muted-foreground"
          >
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
