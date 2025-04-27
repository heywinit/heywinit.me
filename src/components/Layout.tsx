import { Link } from "react-router-dom";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					<div>
						<Link
							to="/"
							className="font-bold text-xl hover:text-white/90 transition-colors"
						>
							winit
						</Link>
					</div>
					<nav className="flex items-center space-x-6">
						<Link
							to="/"
							className="text-sm hover:text-white/90 transition-colors"
						>
							home
						</Link>
						<Link
							to="/blog"
							className="text-sm hover:text-white/90 transition-colors"
						>
							blog
						</Link>
					</nav>
				</div>
			</header>

			<main className="pt-16">{children}</main>
		</div>
	);
}
