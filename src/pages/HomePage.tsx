import { ThemeToggle } from "../components/theme-toggle";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<ThemeToggle />
			<h1 className="text-5xl font-bold">winit.</h1>
			<p className="text-xl">glory to no one, just velocity and metal.</p>
		</div>
	);
}
