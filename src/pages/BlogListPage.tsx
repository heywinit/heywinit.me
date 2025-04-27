import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { blogPosts } from "../data/blogPosts";

export default function BlogListPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map((post) => (
						<Link
							key={post.slug}
							to={`/blog/${post.slug}`}
							className="block group"
						>
							<div className="bg-muted rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
								{/* <div className="aspect-video bg-primary/10 relative overflow-hidden">
									{post.image && (
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									)}
								</div> */}
								<div className="p-6">
									<h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
										{post.title}
									</h2>
									<p className="text-sm text-muted-foreground mb-3">
										{new Date(post.date).toLocaleDateString()}
									</p>
									<p className="text-muted-foreground line-clamp-2">
										{post.excerpt}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
}
