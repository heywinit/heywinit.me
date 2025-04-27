import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface TimelineEvent {
	id: string;
	year: string;
	title: string;
	description: string;
	category: "work" | "education" | "project" | "achievement";
}

export default function TimelineSection() {
	const [activeFilter, setActiveFilter] = useState<
		TimelineEvent["category"] | "all"
	>("all");
	const [expandedItem, setExpandedItem] = useState<string | null>(null);

	const timelineEvents: TimelineEvent[] = [
		{
			id: "event-1",
			year: "2023",
			title: "Senior Developer at Tech Innovators",
			description:
				"Leading full-stack development for enterprise SaaS applications, specializing in React, Node.js, and AWS infrastructure.",
			category: "work",
		},
		{
			id: "event-2",
			year: "2022",
			title: "Launched Neural Synth Project",
			description:
				"Created an AI-powered music generation tool using TensorFlow and React with the WebAudio API.",
			category: "project",
		},
		{
			id: "event-3",
			year: "2021",
			title: "Master's Degree in Computer Science",
			description:
				"Completed graduate studies with focus on machine learning and distributed systems.",
			category: "education",
		},
		{
			id: "event-4",
			year: "2020",
			title: "Software Engineer at Digital Solutions",
			description:
				"Designed and implemented scalable backend services using Python and Django, supporting 100K+ daily active users.",
			category: "work",
		},
		{
			id: "event-5",
			year: "2019",
			title: "Published Research Paper",
			description:
				"Co-authored 'Optimizing Neural Networks for Edge Computing' in the Journal of Applied AI.",
			category: "achievement",
		},
		{
			id: "event-6",
			year: "2018",
			title: "Frontend Developer at CreativeTech",
			description:
				"Developed responsive web applications with modern JavaScript frameworks focused on performance optimization.",
			category: "work",
		},
		{
			id: "event-7",
			year: "2017",
			title: "Bachelor's Degree in Computer Science",
			description:
				"Graduated with honors, specializing in algorithms and data structures.",
			category: "education",
		},
	];

	const categoryColors = {
		work: "border-cyan-400",
		education: "border-amber-400",
		project: "border-emerald-400",
		achievement: "border-rose-400",
		all: "border-white/30",
	};

	const categoryIcons = {
		work: "💼",
		education: "🎓",
		project: "🚀",
		achievement: "🏆",
	};

	const filteredEvents =
		activeFilter === "all"
			? timelineEvents
			: timelineEvents.filter((event) => event.category === activeFilter);

	return (
		<div className="flex flex-col min-h-screen py-20">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-6 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						MY_JOURNEY_SO_FAR
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">[{filteredEvents.length} events]</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					<Card className="lg:col-span-1 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">timeline</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-8">
							my journey through time and tech
						</div>

						<div className="flex flex-col gap-3">
							<button
								type="button"
								onClick={() => setActiveFilter("all")}
								className={`px-4 py-2 border rounded-lg text-sm transition-all text-left flex items-center
                  ${
										activeFilter === "all"
											? `${categoryColors.all} border-opacity-100 bg-black/30`
											: "border-white/10 hover:border-white/30"
									}`}
							>
								<span className="mr-2">🔍</span>
								all events
							</button>

							{(
								Object.keys(categoryIcons) as Array<keyof typeof categoryIcons>
							).map((category) => (
								<button
									key={category}
									type="button"
									onClick={() => setActiveFilter(category)}
									className={`px-4 py-2 border rounded-lg text-sm transition-all text-left flex items-center
                    ${
											activeFilter === category
												? `${categoryColors[category]} border-opacity-100 bg-black/30`
												: "border-white/10 hover:border-white/30"
										}`}
								>
									<span className="mr-2">{categoryIcons[category]}</span>
									{category}
								</button>
							))}
						</div>

						<div className="mt-8 font-mono text-xs opacity-70 bg-black/20 p-3 rounded">
							<div className="mb-2">$ cat timeline_stats.txt</div>
							<div className="ml-2">
								- years active: {timelineEvents[timelineEvents.length - 1].year}{" "}
								- {timelineEvents[0].year}
							</div>
							<div className="ml-2">
								- work:{" "}
								{timelineEvents.filter((e) => e.category === "work").length}
							</div>
							<div className="ml-2">
								- education:{" "}
								{
									timelineEvents.filter((e) => e.category === "education")
										.length
								}
							</div>
							<div className="ml-2">
								- projects:{" "}
								{timelineEvents.filter((e) => e.category === "project").length}
							</div>
							<div className="ml-2">
								- achievements:{" "}
								{
									timelineEvents.filter((e) => e.category === "achievement")
										.length
								}
							</div>
						</div>
					</Card>

					<Card className="lg:col-span-3 relative p-0 overflow-hidden">
						<div className="absolute w-px h-full bg-white/10 left-20 top-0 z-0" />

						<div className="relative z-10">
							{filteredEvents.map((event, index) => (
								<div
									key={event.id}
									className={`flex p-4 ${index !== filteredEvents.length - 1 ? "border-b border-white/5" : ""}`}
								>
									<div className="w-20 flex-shrink-0 flex justify-center">
										<div className="font-mono font-bold">{event.year}</div>
									</div>

									<div className="w-12 flex justify-center flex-shrink-0 relative">
										<div
											className={`w-4 h-4 rounded-full ${categoryColors[event.category].replace("border", "bg")} absolute top-1`}
										/>
									</div>

									<div className="flex-grow">
										<button
											type="button"
											onClick={() =>
												setExpandedItem(
													expandedItem === event.id ? null : event.id,
												)
											}
											className="w-full text-left"
										>
											<div className="flex items-center">
												<div className="text-lg font-bold">{event.title}</div>
												<div className="ml-3 opacity-50 text-xs px-2 py-1 rounded-full border border-white/10">
													{event.category}
												</div>
											</div>

											<div
												className={`mt-2 text-sm transition-all duration-300 overflow-hidden 
                        ${expandedItem === event.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
											>
												{event.description}
											</div>
										</button>
									</div>
								</div>
							))}

							{filteredEvents.length === 0 && (
								<div className="p-8 text-center opacity-70">
									No events found with the selected filter.
								</div>
							)}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
