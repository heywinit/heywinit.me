import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function ContactSection() {
	const [activeTab, setActiveTab] = useState<
		"message" | "links" | "availability"
	>("message");
	const [copied, setCopied] = useState(false);

	// Mock form state
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission (e.g., send to API)
		console.log("Form submitted:", formState);
		// Reset form
		setFormState({ name: "", email: "", message: "" });
		// Show success message or transition
	};

	const copyEmail = () => {
		navigator.clipboard.writeText("hello@winit.dev");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks = [
		{ name: "github", url: "https://github.com/heywinit", icon: "github.svg" },
		{
			name: "twitter",
			url: "https://twitter.com/heywinit",
			icon: "twitter.svg",
		},
		{
			name: "linkedin",
			url: "https://linkedin.com/in/winit",
			icon: "linkedin.svg",
		},
		{
			name: "dribbble",
			url: "https://dribbble.com/winit",
			icon: "dribbble.svg",
		},
	];

	const availabilityStatus = {
		status: "limited",
		message: "limited availability for new projects",
		nextAvailable: "January 2024",
	};

	const statusColors = {
		available: "text-emerald-400",
		limited: "text-amber-400",
		unavailable: "text-rose-400",
	};

	return (
		<div className="h-full flex flex-col py-10">
			<div className="mx-auto w-full max-w-6xl">
				<Card className="mb-4 h-16 flex">
					<div className="flex w-[80%] h-full items-center p-4 text-white/50">
						SAY_HELLO_OR_WHATEVER
					</div>
					<div className="flex w-[20%] border-l h-full items-center justify-center p-4 font-mono bg-black/20">
						<span className="">[connect]</span>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-7 gap-4 max-h-[calc(100vh-10rem)] overflow-hidden">
					<Card className="lg:col-span-3 lg:row-span-3 p-0 overflow-auto flex flex-col">
						{/* Left Panel */}
						<div className="h-16 flex border-b border-white/10 font-mono">
							{(["message", "links", "availability"] as const).map((tab) => (
								<button
									key={tab}
									type="button"
									className={`flex-1 h-full border-r border-white/10 transition-colors text-sm
                    ${activeTab === tab ? "bg-white/5" : "hover:bg-white/5"}`}
									onClick={() => setActiveTab(tab)}
								>
									{tab}.sh
								</button>
							))}
						</div>

						<div className="flex-grow p-6">
							{activeTab === "message" && (
								<div className="h-full">
									<div className="text-4xl font-bold mb-2">
										<span className="text-white">contact</span>
										<span>.</span>
									</div>
									<div className="text-lg opacity-70 mb-8">
										let's connect and make something cool
									</div>

									<form onSubmit={handleSubmit} className="flex flex-col gap-4">
										<div>
											<label
												htmlFor="name"
												className="block text-sm opacity-70 mb-1"
											>
												your name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formState.name}
												onChange={handleInputChange}
												className="w-full bg-black/30 border border-white/10 rounded p-3 focus:border-white/30 focus:outline-none transition-colors"
												required
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm opacity-70 mb-1"
											>
												your email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formState.email}
												onChange={handleInputChange}
												className="w-full bg-black/30 border border-white/10 rounded p-3 focus:border-white/30 focus:outline-none transition-colors"
												required
											/>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm opacity-70 mb-1"
											>
												message
											</label>
											<textarea
												id="message"
												name="message"
												value={formState.message}
												onChange={handleInputChange}
												className="w-full bg-black/30 border border-white/10 rounded p-3 min-h-[120px] focus:border-white/30 focus:outline-none transition-colors"
												required
											/>
										</div>

										<button
											type="submit"
											className="self-start mt-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded transition-colors"
										>
											send message
										</button>
									</form>
								</div>
							)}

							{activeTab === "links" && (
								<div className="h-full">
									<div className="text-4xl font-bold mb-2">
										<span className="text-white">links</span>
										<span>.</span>
									</div>
									<div className="text-lg opacity-70 mb-8">
										find me around the web
									</div>

									<div className="grid grid-cols-2 gap-4">
										{socialLinks.map((link) => (
											<a
												key={link.name}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center p-4 rounded bg-black/30 hover:bg-black/50 transition-colors"
											>
												<div className="w-8 h-8 mr-3 flex items-center justify-center">
													<div className="w-5 h-5 bg-white/70" />
												</div>
												<span>{link.name}</span>
											</a>
										))}
									</div>

									<div className="mt-8">
										<div className="text-lg mb-2">direct email</div>
										<button
											type="button"
											className="flex items-center justify-between w-full p-4 rounded bg-black/20 cursor-pointer text-left"
											onClick={copyEmail}
											aria-pressed={copied}
										>
											<span className="font-mono">hello@winit.dev</span>
											<span className="text-xs">
												{copied ? "copied!" : "click to copy"}
											</span>
										</button>
									</div>
								</div>
							)}

							{activeTab === "availability" && (
								<div className="h-full">
									<div className="text-4xl font-bold mb-2">
										<span className="text-white">status</span>
										<span>.</span>
									</div>

									<div className="flex flex-col gap-6 mt-8">
										<Card className="p-6 bg-black/20">
											<div className="text-lg mb-1">current availability</div>
											<div
												className={`text-2xl font-bold ${statusColors[availabilityStatus.status as keyof typeof statusColors]}`}
											>
												{availabilityStatus.message}
											</div>
											<div className="mt-4 text-sm opacity-70">
												next opening: {availabilityStatus.nextAvailable}
											</div>
										</Card>

										<Card className="p-6 bg-black/20">
											<div className="text-lg mb-3">project types</div>
											<div className="space-y-3">
												<div className="flex items-center">
													<span className="w-3 h-3 bg-emerald-400 mr-2 rounded-full" />
													<span>fullstack development</span>
												</div>
												<div className="flex items-center">
													<span className="w-3 h-3 bg-amber-400 mr-2 rounded-full" />
													<span>web3 applications</span>
												</div>
												<div className="flex items-center">
													<span className="w-3 h-3 bg-cyan-400 mr-2 rounded-full" />
													<span>machine learning integration</span>
												</div>
											</div>
										</Card>

										<Card className="p-6 bg-black/20">
											<div className="text-lg mb-3">preferred tech stack</div>
											<div className="flex flex-wrap gap-2">
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													TypeScript
												</span>
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													React
												</span>
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													Node.js
												</span>
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													Python
												</span>
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													TensorFlow
												</span>
												<span className="text-xs bg-white/10 px-2 py-1 rounded">
													Solidity
												</span>
											</div>
										</Card>
									</div>
								</div>
							)}
						</div>
					</Card>

					<Card className="lg:col-span-4 lg:row-span-2 p-6 flex flex-col">
						<div className="flex-grow flex items-center justify-center h-full">
							<div className="w-full max-w-lg">
								<div className="font-mono text-xs opacity-70 mb-4">
									$ ./render_ascii_art.sh
								</div>
								<div className="font-mono text-xs leading-5 whitespace-pre">
									{`
  __      __.__       .__  __   
 /  \\    /  \\__| ____ |__|/  |_ 
 \\   \\/\\/   /  |/    \\|  \\   __\\
  \\        /|  |   |  \\  ||  |  
   \\__/\\  / |__|___|  /__||__|  
        \\/          \\/          
                               
 let's make something awesome.
`}
								</div>
								<div className="font-mono text-xs opacity-70 mt-8">
									$ echo "I'm always open to discussing interesting projects and
									ideas."
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-6">
							<div className="bg-black/20 rounded p-4">
								<div className="text-sm opacity-70 mb-1">location</div>
								<div className="font-mono">earth.tech_hub</div>
							</div>
							<div className="bg-black/20 rounded p-4">
								<div className="text-sm opacity-70 mb-1">timezone</div>
								<div className="font-mono">UTC+[redacted]</div>
							</div>
						</div>
					</Card>

					<Card className="lg:col-span-4 lg:row-span-1 p-6">
						<div className="flex h-full items-center space-x-8">
							<div className="flex-1">
								<div className="text-lg font-bold mb-1">response time</div>
								<div className="text-sm opacity-70">
									usually within 24-48 hours
								</div>
							</div>
							<div className="w-px h-12 bg-white/10" />
							<div className="flex-1">
								<div className="text-lg font-bold mb-1">preferred contact</div>
								<div className="text-sm opacity-70">
									email or form submission
								</div>
							</div>
							<div className="w-px h-12 bg-white/10" />
							<div className="flex-1">
								<div className="text-lg font-bold mb-1">languages</div>
								<div className="text-sm opacity-70">
									english, javascript, python
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
