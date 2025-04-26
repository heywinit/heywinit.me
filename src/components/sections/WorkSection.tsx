import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function WorkSection() {
	const [currentWork, setCurrentWork] = useState(0);
	const workExperiences = [
		{
			company: "metf.in",
			position: "founder",
			period: "2025 - present",
			description:
				"creating meteora's swissknife, a suite of tools that fills the needs of the best lps.",
		},
		{
			company: "soldecoder",
			position: "full stack engineer",
			period: "2025 - present",
			description:
				"i build and maintain tools that make money. usually around the solana and ethereum blockchains.",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWork((prev) => (prev + 1) % workExperiences.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col min-h-screen py-20">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-6 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						PROFESSIONAL_LORE
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">
							[{currentWork + 1}/{workExperiences.length}]
						</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card className="md:row-span-2 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">work</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-6">
							a glimpse into my professional journey
						</div>
						<div className="flex flex-col space-y-4">
							{workExperiences.map((work, index) => (
								<button
									key={`work-${work.company}-${index}`}
									type="button"
									className={`cursor-pointer py-2 border-l-4 pl-4 transition-all hover:border-white text-left
										${index === currentWork ? "border-white" : "border-gray-700"}`}
									onClick={() => setCurrentWork(index)}
									aria-pressed={index === currentWork}
								>
									<div className="font-bold">{work.company}</div>
									<div className="text-sm opacity-70">{work.period}</div>
								</button>
							))}
						</div>
					</Card>

					<Card className="md:col-span-2 md:row-span-2 p-6">
						<CardContent className="p-0 h-full flex flex-col">
							<div className="text-2xl font-bold mb-2">
								{workExperiences[currentWork].position}
							</div>
							<div className="text-lg text-white mb-4">
								{workExperiences[currentWork].company}
							</div>
							<div className="prose prose-invert text-xl max-w-none">
								<p>{workExperiences[currentWork].description}</p>
							</div>
							<div className="mt-auto grid grid-cols-2 gap-4 pt-6">
								<Card className="p-4 bg-black/30">
									<div className="text-sm opacity-70">Technologies</div>
									<div className="flex flex-wrap gap-2 mt-2">
										<span className="text-cyan-400 text-sm bg-cyan-900/30 px-2 py-1 rounded">
											React
										</span>
										<span className="text-emerald-400 text-sm bg-emerald-900/30 px-2 py-1 rounded">
											Node.js
										</span>
										<span className="text-amber-400 text-sm bg-amber-900/30 px-2 py-1 rounded">
											AWS
										</span>
									</div>
								</Card>
								<Card className="p-4 bg-black/30">
									<div className="text-sm opacity-70">Duration</div>
									<div className="text-lg font-mono mt-2">
										{workExperiences[currentWork].period}
									</div>
								</Card>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
