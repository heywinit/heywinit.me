import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import MarkdownContent from "@/components/MarkdownContent";

export default function BlogPage() {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		// In a real app, you would fetch this from an API
		const foundPost = blogPosts.find((p) => p.slug === slug);
		setPost(foundPost || null);
	}, [slug]);

	const categoryColors = {
		programming: "text-cyan-400 border-cyan-400",
		philosophy: "text-amber-400 border-amber-400",
		life: "text-emerald-400 border-emerald-400",
	};

	if (!post) {
		return (
			<div className="flex flex-col min-h-screen py-20">
				<div className="mx-auto w-full max-w-4xl text-center">
					<h1 className="text-3xl font-bold mb-4">Post not found</h1>
					<p className="mb-8">
						The blog post you're looking for doesn't exist.
					</p>
					<Link
						to="/blog"
						className="text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded transition-colors"
					>
						View all posts
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen py-20">
			<div className="mx-auto w-full max-w-4xl">
				<Link
					to="/blog"
					className="inline-flex items-center mb-8 opacity-70 hover:opacity-100 transition-opacity"
				>
					<span className="mr-2">←</span> Back to all posts
				</Link>

				<div className="mb-8">
					<div
						className={`inline-block px-3 py-1 rounded ${categoryColors[post.category].split(" ")[0]} bg-black/30 text-sm mb-2`}
					>
						{post.category}
					</div>
					<h1 className="text-4xl font-bold mb-2">{post.title}</h1>
					<div className="flex items-center text-sm opacity-70">
						<span>{post.date}</span>
						<span className="mx-2">•</span>
						<span>{post.readTime} read</span>
					</div>
				</div>

				<Card className="mb-8 overflow-hidden">
					<div
						className={`h-1 w-full ${categoryColors[post.category].split(" ")[0].replace("text", "bg")}`}
					/>
					<CardContent className="p-8">
						<div className="prose prose-invert prose-lg max-w-none">
							{/* In a real app, you would use a markdown parser here */}
							<MarkdownContent content={post.content || ""} />
						</div>
					</CardContent>
				</Card>

				<div className="border-t border-white/10 pt-8 mt-12">
					<h3 className="text-xl font-bold mb-4">More posts</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{blogPosts
							.filter((p) => p.slug !== post.slug)
							.slice(0, 2)
							.map((relatedPost) => (
								<Card
									key={relatedPost.slug}
									className="flex flex-col p-0 overflow-hidden hover:transform hover:scale-[1.02] transition-transform"
								>
									<div
										className={`h-1 w-full ${categoryColors[relatedPost.category].split(" ")[0].replace("text", "bg")}`}
									/>
									<CardContent className="p-4">
										<div
											className={`text-xs inline-block px-2 py-1 rounded ${categoryColors[relatedPost.category].split(" ")[0]} bg-black/30 mb-2`}
										>
											{relatedPost.category}
										</div>
										<h3 className="text-lg font-bold mb-1">
											{relatedPost.title}
										</h3>
										<p className="text-sm opacity-80 mb-3 line-clamp-2">
											{relatedPost.excerpt}
										</p>
										<Link
											to={`/blog/${relatedPost.slug}`}
											className="text-sm underline hover:text-white transition-colors"
										>
											Read post →
										</Link>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
