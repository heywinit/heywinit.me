import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        terminal: ["IBM Plex Mono", "monospace"],
        ancient: ["Cinzel", "serif"],
        "ancient-body": ["Crimson Text", "serif"],
      },
      keyframes: {
        scanlines: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(3px)" },
        },
        "terminal-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px rgba(16, 255, 163, 0.3), 0 0 10px rgba(16, 255, 163, 0.2), 0 0 15px rgba(16, 255, 163, 0.1)",
          },
          "50%": {
            textShadow:
              "0 0 5px rgba(16, 255, 163, 0.4), 0 0 10px rgba(16, 255, 163, 0.3), 0 0 15px rgba(16, 255, 163, 0.2)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "ancient-reveal": {
          "0%": {
            opacity: "0",
            filter: "brightness(1.2) blur(10px)",
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
            transform: "scale(1)",
          },
        },
        "terminal-hide": {
          "0%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            filter: "brightness(1.2) blur(10px)",
            transform: "scale(0.9)",
          },
        },
      },
      animation: {
        scanlines: "scanlines 1s linear infinite",
        "terminal-glow": "terminal-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "ancient-reveal": "ancient-reveal 1s cubic-bezier(0.19, 1, 0.22, 1)",
        "terminal-hide": "terminal-hide 1s cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionTimingFunction: {
        "smooth-out": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
