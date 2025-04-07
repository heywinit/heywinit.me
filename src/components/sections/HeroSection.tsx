import PokemonCard from "../PokemonCard";
import { StarsBackground } from "../ui/stars-background";
import { Github, Twitter } from "lucide-react";

export default function HeroSection() {
	return (
		<div className="relative flex flex-col items-center justify-center h-[50%] w-full bg-black overflow-hidden border border-white">
			<StarsBackground starDensity={0.0001} />
			<div className="w-full h-full p-8 flex flex-row relative z-10">
				<div className="w-2/3 relative">
					<div className="mb-4">
						<span className="text-white/70">visitor@heywinit.me</span>
						<span className="text-white">:~$</span>
						<span className="text-white"> echo $about</span>
						<span className="animate-pulse">_</span>
					</div>
					<div className="font-bold mb-4 space-y-4">
						<div className="w-max max-w-[80%] p-4 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white rounded">
							in the sky, where dreams settle, we forge our fate with steel and
							metal.
							<br />
							like missiles soaring, we won't forget, the beauty in chaos, a
							fleeting petal.
							<br />
						</div>
						<h1 className="w-[80%]">
							hey! i'm winit. i{" "}
							<span className="underline hover:bg-white hover:text-black">
								code
							</span>
							,{" "}
							<span className="underline hover:bg-white hover:text-black">
								write
							</span>
							, and{" "}
							<span className="underline hover:bg-white hover:text-black">
								make things soar
							</span>
							.<br />
							<br />i explore tech that addresses real-world challenges and
							enhances user experience through collaboration and continuous
							learning.
						</h1>
						<div className="flex items-center gap-4 font-normal">
							<div className="flex items-center gap-4 font-normal">
								<a
									href="https://github.com/heywinit"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
								>
									<Github size={16} />
									GitHub
								</a>
								<a
									href="https://twitter.com/heywinit"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
								>
									<Twitter size={16} />
									Twitter
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-1/3 flex items-center justify-center">
					<PokemonCard
						name="winit"
						type="Full Stack Developer"
						imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
						abilities={[
							"Full Stack Dev",
							"Tech Enthusiast",
							"Defense Tech",
							"Problem Solver",
						]}
					/>
				</div>
			</div>
		</div>
	);
}

// Add keyframes for the flame animation
const style = document.createElement("style");
style.textContent = `
	@keyframes flame {
		0%, 100% { transform: scaleY(1); opacity: 0.8; }
		50% { transform: scaleY(1.5); opacity: 1; }
	}
`;
document.head.appendChild(style);
