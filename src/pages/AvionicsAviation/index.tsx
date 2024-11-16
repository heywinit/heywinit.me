import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HoverTypewriter } from "@/components/ui/hover-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Project {
  name: string;
  description: string;
  status: "In Development" | "Testing" | "Completed";
  details: string[];
}

export default function AvionicsAviation() {
  const projects: Project[] = [
    {
      name: "RGAM",
      description: "Short-range surface launched payload delivery system",
      status: "In Development",
      details: [
        "5 kilometer operational range",
        "Surface-to-surface payload delivery",
        "Precision guidance system",
        "Integrated with JASNET communication network",
      ],
    },
    {
      name: "QuadNode",
      description: "Autonomous mesh network drone system",
      status: "In Development",
      details: [
        "Compact drone design",
        "Mesh network capabilities",
        "JASNET integration",
        "Autonomous flight control",
      ],
    },
    {
      name: "JASNET",
      description: "Advanced mesh network communication system",
      status: "In Development",
      details: [
        "Distributed communication network",
        "Real-time data transmission",
        "Inter-vehicle connectivity",
        "Scalable architecture",
      ],
    },
  ];
  // Add useEffect to ensure body is scrollable
  useEffect(() => {
    // Remove any classes that might prevent scrolling
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-black"
      style={{ overflow: "auto", height: "auto" }}
    >
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40"
          >
            <source src="/videos/drone-footage.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-7xl">
              <HoverTypewriter
                defaultText={"QuatTar Aviation"}
                hoverText={"QuatTar Aviation"}
                className="font-mono"
              />
            </h1>
            <p className="text-gray-300 mx-auto max-w-2xl text-lg md:text-xl">
              Pioneering the future of autonomous aviation systems and advanced
              communication networks for aerospace applications.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer text-white"
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="bg-gray-900 w-full py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Flight Control Systems",
                description:
                  "Design and implementation of autonomous flight control systems, including PID controllers, state estimation, and sensor fusion algorithms.",
                icon: "🎮",
              },
              {
                title: "Communication Networks",
                description:
                  "Development of robust mesh networks for real-time data transmission between aerial vehicles and ground stations.",
                icon: "📡",
              },
              {
                title: "Navigation Systems",
                description:
                  "Integration of GPS, IMU, and computer vision for precise navigation and positioning.",
                icon: "🛰️",
              },
              {
                title: "System Architecture",
                description:
                  "Design of scalable and modular avionics architectures for various aerial platforms.",
                icon: "⚙️",
              },
              {
                title: "Embedded Systems",
                description:
                  "Programming microcontrollers and FPGA systems for real-time avionics applications.",
                icon: "💻",
              },
              {
                title: "Testing & Validation",
                description:
                  "Development of comprehensive testing procedures and simulation environments.",
                icon: "🔍",
              },
            ].map((competency, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-black/50 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 text-4xl">{competency.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {competency.title}
                </h3>
                <p className="text-gray-400">{competency.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Slider Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            My Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                className="bg-gray-900 border-gray-800 hover:border-gray-600 rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:transform"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="mb-2 text-2xl font-bold text-white">
                  {project.name}
                </h2>
                <div className="mb-3">
                  <span className="rounded-full bg-blue-900 px-3 py-1 text-sm text-blue-200">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="text-gray-500 space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-t from-blue-900/50 to-transparent py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Interested in Collaboration?
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects and technological
            challenges in the field of avionics and autonomous systems.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
