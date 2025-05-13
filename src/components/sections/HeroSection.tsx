import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

export default function HeroSection() {
	const greetings = ["hello there!", "bonjour!", "مرحبا!", "привет!", "ciao!"];

	const [greeting, setGreeting] = useState(greetings[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex h-screen w-screen justify-center items-center px-[20rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-start">
				{/* Left Column - Introduction */}
				<div className="flex flex-col space-y-4">
					<div>
						<p className="text-xl">{greeting}</p>
						<div className="flex items-end gap-4">
							<h1 className="text-5xl font-bold mt-2">winit.</h1>
						</div>
						<p className="mt-4">{"// todo: come up with a one line bio"}</p>

						<Button variant="outline" className="mt-6">
							msg me
						</Button>
					</div>

					{/* Social Links at the bottom on mobile */}
					<div className="mt-auto pt-12 md:hidden flex space-x-4">
						<a href="https://github.com" aria-label="GitHub">
							<Github size={24} />
						</a>
						<a href="https://twitter.com" aria-label="Twitter">
							<Twitter size={24} />
						</a>
						<a href="https://linkedin.com" aria-label="LinkedIn">
							<Linkedin size={24} />
						</a>
					</div>
				</div>

				{/* Right Column - Experience and Skills */}
				<div className="flex flex-col space-y-8">
					<div>
						<p>
							got into this rabbit hole when I wrote QBASIC{" "}
							{new Date().getFullYear() - 2013} years ago. spent time in unity
							without knowing what C# is, then started off as a Java + Minecraft
							Mod Dev in high school. shifted to web3 with solana and eth.
						</p>
						<br />
						<p>
							now I work at SOLDecoder as a software dev and I cofound Metfin.
							i'm found writing either golang or typescript.
						</p>
					</div>

					{/* Social Links at the bottom on desktop */}
					<div className="hidden md:flex mt-auto pt-12 justify-between">
						<div className="flex space-x-4">
							<a href="https://github.com/heywint" aria-label="GitHub">
								<Github size={24} />
							</a>
							<a href="https://twitter.com/hiwinit" aria-label="Twitter">
								<Twitter size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
