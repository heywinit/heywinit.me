import { memo } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skeleton from "@/components/ui/Skeleton";

interface Blog {
	title: string;
	date: string;
	summary: string;
	url: string;
}

interface BlogSectionProps {
	blogs: Blog[];
	isLoading: boolean;
	error?: string;
}

const BlogSection = memo(({ blogs, isLoading, error }: BlogSectionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="bg-primary/10 text-accent dark:text-primary px-2 py-1 rounded-none mr-2 text-sm">
					#
				</span>
				Blog
			</h2>

			{isLoading ? (
				// Skeleton loading state for blogs
				<div className="space-y-10">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="space-y-2 border-b border-neutral-200 dark:border-neutral-800 pb-6"
						>
							<Skeleton className="h-7 w-3/4 mb-2" />
							<Skeleton className="h-5 w-1/4 mb-2" />
							<Skeleton className="h-4 w-full mb-1" />
							<Skeleton className="h-4 w-5/6" />
							<Skeleton className="h-6 w-24 mt-1" />
						</div>
					))}
				</div>
			) : error ? (
				<div className="p-4 border border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-none">
					<p className="text-sm text-red-600 dark:text-red-400">{error}</p>
				</div>
			) : blogs.length === 0 ? (
				<p className="text-neutral-500 dark:text-neutral-400 italic">
					No blog posts available.
				</p>
			) : (
				<div className="space-y-10">
					{blogs.map((blog) => (
						<motion.div
							key={blog.title}
							className="space-y-2 group border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-0"
							data-party-target="true"
						>
							<Link
								to={blog.url}
								className="block group-hover:text-accent transition-colors"
							>
								<h3 className="text-xl font-medium flex items-center">
									<span className={"text-accent mr-2 transition-opacity"}>
										{">"}
									</span>
									{blog.title}
								</h3>
							</Link>
							<div className="text-sm inline-block bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-none text-neutral-600 dark:text-neutral-400">
								{blog.date}
							</div>
							<p className="text-neutral-600 dark:text-neutral-400">
								{blog.summary}
							</p>
							<div>
								<motion.div>
									<Link
										to={blog.url}
										className="text-sm text-accent hover:text-accent dark:hover:text-primary inline-flex items-center gap-1 mt-1 font-medium group"
									>
										Read more
										<ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Link>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			)}
		</motion.div>
	);
});

BlogSection.displayName = "BlogSection";

export default BlogSection;
