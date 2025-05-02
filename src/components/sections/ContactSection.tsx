import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
	const [copied, setCopied] = useState(false);
	// To configure Formspree:
	// 1. Go to https://formspree.io and sign up
	// 2. Create a new form and get the form ID (it looks like "abcdefgh")
	// 3. Replace "YOUR_FORMSPREE_FORM_ID" below with your form ID
	const [formState, handleSubmit] = useForm("mblogogg");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Reset form when submission is successful
	if (formState.succeeded) {
		setTimeout(() => {
			setFormData({ name: "", email: "", message: "" });
		}, 500);
	}

	const copyEmail = () => {
		navigator.clipboard.writeText("mail@heywinit.me");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks = [
		{ name: "github", url: "https://github.com/heywinit", icon: "github.svg" },
		{
			name: "twitter",
			url: "https://twitter.com/hiwinit",
			icon: "twitter.svg",
		},
		{
			name: "discord",
			url: "https://discord.com/users/1272156033896153113",
			icon: "discord.svg",
		},
		{
			name: "youtube",
			url: "https://youtube.com/@heywinit",
			icon: "youtube.svg",
		},
	];

	const availabilityStatus = {
		status: "limited",
		message: "limited availability for new projects",
		nextAvailable: "December 2025",
	};

	const statusColors = {
		available: "text-emerald-400",
		limited: "text-amber-400",
		unavailable: "text-rose-400",
	};

	const handleReset = () => {
		setFormData({ name: "", email: "", message: "" });
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

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-h-[calc(100vh-10rem)] overflow-auto">
					{/* Contact Form */}
					<Card className="lg:col-span-6 p-6">
						<div className="text-4xl font-bold mb-2">
							<span className="text-white">contact</span>
							<span>.</span>
						</div>
						<div className="text-lg opacity-70 mb-8">
							let's connect and make something cool
						</div>

						{formState.succeeded ? (
							<div className="bg-emerald-500/20 border border-emerald-500/30 rounded p-6 mb-8">
								<div className="text-xl font-bold mb-2 text-emerald-400">
									Message sent successfully!
								</div>
								<p className="opacity-70">
									Thanks for reaching out. I'll get back to you as soon as
									possible.
								</p>
								<button
									type="button"
									onClick={handleReset}
									className="mt-4 bg-white/10 hover:bg-white/20 px-6 py-3 rounded transition-colors"
								>
									Send another message
								</button>
							</div>
						) : (
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
										value={formData.name}
										onChange={handleInputChange}
										className="w-full bg-black/30 border border-white/10 rounded p-3 focus:border-white/30 focus:outline-none transition-colors"
										required
									/>
									<ValidationError
										prefix="Name"
										field="name"
										errors={formState.errors}
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
										value={formData.email}
										onChange={handleInputChange}
										className="w-full bg-black/30 border border-white/10 rounded p-3 focus:border-white/30 focus:outline-none transition-colors"
										required
									/>
									<ValidationError
										prefix="Email"
										field="email"
										errors={formState.errors}
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
										value={formData.message}
										onChange={handleInputChange}
										className="w-full bg-black/30 border border-white/10 rounded p-3 min-h-[120px] focus:border-white/30 focus:outline-none transition-colors"
										required
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={formState.errors}
									/>
								</div>

								{formState.errors && (
									<div className="text-rose-400 text-sm mt-2">
										There was an error with your submission. Please try again.
									</div>
								)}

								<button
									type="submit"
									disabled={formState.submitting}
									className="self-start mt-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded transition-colors flex items-center disabled:opacity-50"
								>
									{formState.submitting ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												/>
											</svg>
											sending...
										</>
									) : (
										"send message"
									)}
								</button>
							</form>
						)}
					</Card>

					{/* Social Links and Info */}
					<div className="lg:col-span-6 flex flex-col gap-4">
						{/* Social Links */}
						<Card className="p-6">
							<div className="text-2xl font-bold mb-4">
								<span className="text-white">connect</span>
								<span>.</span>
							</div>

							<div className="grid grid-cols-2 gap-4 mb-6">
								{socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center p-3 rounded bg-black/30 hover:bg-black/50 transition-colors"
									>
										<div className="w-6 h-6 mr-3 flex items-center justify-center">
											<div className="w-4 h-4 bg-white/70" aria-hidden="true" />
										</div>
										<span>{link.name}</span>
									</a>
								))}
							</div>

							<div className="mt-4">
								<div className="text-lg mb-2">direct email</div>
								<button
									type="button"
									className="flex items-center justify-between w-full p-3 rounded bg-black/20 hover:bg-black/30 cursor-pointer text-left transition-colors"
									onClick={copyEmail}
									aria-pressed={copied}
								>
									<span className="font-mono">mail@heywinit.me</span>
									<span className="text-xs">
										{copied ? "copied!" : "click to copy"}
									</span>
								</button>
							</div>
						</Card>

						{/* Availability */}
						<Card className="p-6">
							<div className="text-2xl font-bold mb-4">
								<span className="text-white">availability</span>
								<span>.</span>
							</div>

							<div
								className={`text-xl font-bold mb-2 ${statusColors[availabilityStatus.status as keyof typeof statusColors]}`}
							>
								{availabilityStatus.message}
							</div>
							<div className="mb-4 text-sm opacity-70">
								next opening: {availabilityStatus.nextAvailable}
							</div>

							<div className="grid grid-cols-2 gap-4 mt-4">
								<div className="bg-black/20 rounded p-3">
									<div className="text-sm opacity-70 mb-1">
										location (one day)
									</div>
									<div className="font-mono">skunk works</div>
								</div>
								<div className="bg-black/20 rounded p-3">
									<div className="text-sm opacity-70 mb-1">timezone</div>
									<div className="font-mono">GMT+5:30</div>
								</div>
							</div>
						</Card>

						{/* Response Info */}
						<Card className="p-4">
							<div className="flex items-center space-x-6">
								<div className="flex-1">
									<div className="text-sm font-bold mb-1">response time</div>
									<div className="text-xs opacity-70">12-24 hours</div>
								</div>
								<div className="w-px h-10 bg-white/10" />
								<div className="flex-1">
									<div className="text-sm font-bold mb-1">
										preferred contact
									</div>
									<div className="text-xs opacity-70">
										discord, twitter, mail
									</div>
								</div>
								<div className="w-px h-10 bg-white/10" />
								<div className="flex-1">
									<div className="text-sm font-bold mb-1">languages</div>
									<div className="text-xs opacity-70">
										english, hindi, russian, french
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
