import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

type BlogCategory = "all" | "programming" | "philosophy" | "life";

interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	category: Exclude<BlogCategory, "all">;
	readTime: string;
	slug: string;
}

export default function BlogsSection() {
	const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

	const blogPosts: BlogPost[] = [
		{
			title: "Building Resilient Systems with Circuit Breakers",
			excerpt:
				"How to implement fault tolerance in distributed applications with the circuit breaker pattern.",
			date: "2023-12-05",
			category: "programming",
			readTime: "8 min",
			slug: "circuit-breakers",
		},
		{
			title: "The Paradox of Choice in Modern Software Development",
			excerpt:
				"Why having too many technologies and frameworks is making us less productive.",
			date: "2023-11-20",
			category: "programming",
			readTime: "6 min",
			slug: "paradox-of-choice",
		},
		{
			title: "Stoicism and Debugging: Accepting What You Cannot Control",
			excerpt:
				"Applying stoic philosophy to remain calm during challenging debugging sessions.",
			date: "2023-10-15",
			category: "philosophy",
			readTime: "7 min",
			slug: "stoicism-debugging",
		},
		{
			title: "The Joy of Being Perpetually Curious",
			excerpt:
				"How maintaining a childlike wonder can lead to greater happiness and fulfillment.",
			date: "2023-09-28",
			category: "life",
			readTime: "5 min",
			slug: "perpetual-curiosity",
		},
		{
			title: "Existentialism and Creative Coding",
			excerpt:
				"Finding meaning through creating digital art and generative systems.",
			date: "2023-08-12",
			category: "philosophy",
			readTime: "9 min",
			slug: "existentialism-coding",
		},
		{
			title: "Digital Minimalism: My Month Without Social Media",
			excerpt:
				"What I learned from taking a break from the constant stream of information.",
			date: "2023-07-19",
			category: "life",
			readTime: "6 min",
			slug: "digital-minimalism",
		},
	];

	const categoryColors = {
		programming: "text-cyan-400 border-cyan-400/30",
		philosophy: "text-amber-400 border-amber-400/30",
		life: "text-emerald-400 border-emerald-400/30",
		all: "text-white/70 border-white/30",
	};

	const filteredPosts =
		activeCategory === "all"
			? blogPosts
			: blogPosts.filter((post) => post.category === activeCategory);

	return (
		<div className="flex flex-col min-h-screen py-20">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-6 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						THOUGHTS_AND_RAMBLINGS
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">
							[{filteredPosts.length} post
							{filteredPosts.length !== 1 ? "s" : ""}]
						</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
					<Card className="lg:col-span-2 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">blogs</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-8">
							where i think out loud to the void of the internet
						</div>

						<div className="flex flex-wrap gap-3 mb-6">
							{(
								["all", "programming", "philosophy", "life"] as BlogCategory[]
							).map((category) => (
								<button
									key={category}
									type="button"
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 border rounded-full text-sm transition-all
                   					${
															activeCategory === category
																? `${categoryColors[category]} border-opacity-100 bg-black/30`
																: "border-white/10 hover:border-white/30"
														}`}
								>
									{category}
								</button>
							))}
						</div>

						<div className="prose prose-invert max-w-none mt-8">
							<p>
								a collection of <span className="text-cyan-400">thoughts</span>,
								<span className="text-amber-400"> reflections</span>, and
								<span className="text-emerald-400"> experiences</span> that
								don't fit neatly into 280 characters.
							</p>
						</div>

						<div className="mt-8 font-mono text-xs opacity-70 bg-black/20 p-3 rounded">
							<div className="mb-2">$ cat ~/stats/blog_info.txt</div>
							<div className="ml-2">- total posts: {blogPosts.length}</div>
							<div className="ml-2">
								- programming:{" "}
								{blogPosts.filter((p) => p.category === "programming").length}
							</div>
							<div className="ml-2">
								- philosophy:{" "}
								{blogPosts.filter((p) => p.category === "philosophy").length}
							</div>
							<div className="ml-2">
								- life: {blogPosts.filter((p) => p.category === "life").length}
							</div>
						</div>
					</Card>

					<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
						{filteredPosts.map((post) => (
							<Card
								key={post.slug}
								className="flex flex-col p-0 overflow-hidden transition-all hover:transform hover:scale-[1.02]"
							>
								<div
									className={`h-1 w-full ${categoryColors[post.category].split(" ")[0].replace("text", "bg")}`}
								/>
								<CardContent className="p-6 flex flex-col flex-grow">
									<div className="flex justify-between items-start mb-3">
										<div
											className={`text-xs px-2 py-1 rounded ${categoryColors[post.category].split(" ")[0]} bg-black/30`}
										>
											{post.category}
										</div>
										<div className="text-xs opacity-60">{post.date}</div>
									</div>
									<h3 className="text-xl font-bold mb-2">{post.title}</h3>
									<p className="text-sm opacity-80 mb-4">{post.excerpt}</p>
									<div className="mt-auto flex justify-between items-center">
										<span className="text-xs opacity-60">
											{post.readTime} read
										</span>
										<Link
											to={`/blog/${post.slug}`}
											className="text-sm underline hover:text-white transition-colors"
										>
											read post →
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
