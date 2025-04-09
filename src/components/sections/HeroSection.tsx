import { Github, Twitter, Rocket } from "lucide-react";
import { CardContent, SolanaCard } from "../ui/card";
import { useEffect, useState, Fragment } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
	const [typedText, setTypedText] = useState("");
	const aboutText = "echo $about";

	useEffect(() => {
		const typeText = async () => {
			for (let i = 0; i <= aboutText.length; i++) {
				setTypedText(aboutText.substring(0, i));
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		};

		typeText();
	}, []);

	return (
		<div className="relative flex flex-col items-center justify-center w-full bg-card overflow-hidden border border-border rounded-sm backdrop-blur-sm transition-all hover:shadow-md">
			<div className="w-full h-full p-4 md:p-8 flex flex-row relative z-10">
				<div className="w-full relative">
					<div
						className="mb-6 text-primary/70 font-mono"
						style={{ animation: "fadeIn 0.5s ease-out" }}
					>
						<span>visitor@heywinit.me</span>
						<span className="text-primary">:~$</span>
						<span className="text-foreground"> {typedText}</span>
						<span className="animate-pulse text-primary">_</span>
					</div>
					<div className="font-bold flex flex-col gap-6 justify-between">
						<SolanaCard
							className="w-max max-w-[90%] sm:max-w-[80%] p-2 bg-background/80 border border-primary/20 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] hover:border-primary/40"
							style={{ animation: "fadeIn 0.7s ease-out" }}
						>
							<CardContent className="p-4">
								<div className="relative">
									<p className="italic text-foreground/90">
										in the sky, where dreams settle, we forge our fate with
										steel and metal.
										<br />
										like missiles soaring, we won't forget, the beauty in chaos,
										a fleeting petal.
									</p>
								</div>
							</CardContent>
						</SolanaCard>
						<h1
							className="w-full md:w-[80%] text-foreground leading-relaxed items-center"
							style={{ animation: "fadeIn 0.9s ease-out" }}
						>
							hey! i'm winit. i{" "}
							{["/projects", "/blogs", "https://jalalab.ad"].map(
								(link, index) => (
									<Fragment key={link}>
										{index > 0 && ", "}
										<span className="inline-flex items-center text-primary hover:bg-primary hover:text-black px-2 py-1 rounded-sm transition-all group">
											{link.startsWith("http") ? (
												<a
													href={link}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline"
												>
													jalalab.ad<span className="text-white">.</span>
												</a>
											) : (
												<Link to={link} className="hover:underline">
													{link === "/projects" ? "projects" : "blogs"}
												</Link>
											)}
										</span>
									</Fragment>
								),
							)}
							<br />
							<br />i explore tech that addresses real-world challenges and
							enhances user experience through collaboration and continuous
							learning.
						</h1>

						<div className="flex gap-4 my-4">
							<Button
								variant="solana"
								className="group"
								style={{ animation: "fadeIn 1.2s ease-out" }}
							>
								<span className="mr-1">See my work</span>
								<Rocket
									className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
									size={16}
								/>
							</Button>

							<div
								className="flex items-center gap-3"
								style={{ animation: "fadeIn 1.3s ease-out" }}
							>
								<Button
									variant="solana"
									size="icon"
									onClick={() => {
										window.open("https://github.com/heywinit", "_blank");
									}}
								>
									<Github size={20} className="text-primary" />
								</Button>
								<Button
									variant="solana"
									size="icon"
									onClick={() => {
										window.open("https://twitter.com/hiwinit", "_blank");
									}}
								>
									<Twitter size={20} className="text-primary" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
