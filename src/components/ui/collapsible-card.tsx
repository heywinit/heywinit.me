import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardTitle } from "./card";
import { cn } from "@/lib/utils";

interface CollapsibleCardProps {
	title: string;
	defaultOpen?: boolean;
	className?: string;
	contentClassName?: string;
	titleClassName?: string;
	children?: ReactNode;
	[key: string]: unknown;
}

export function CollapsibleCard({
	title,
	defaultOpen = false,
	children,
	className,
	contentClassName,
	titleClassName,
	...props
}: CollapsibleCardProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<Card className={cn("transition-all duration-200", className)} {...props}>
			<button
				className={cn(
					"w-full text-left p-4",
					isOpen ? "pb-2" : "pb-4",
					"cursor-pointer bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 font-inherit text-foreground",
				)}
				onClick={toggleOpen}
				aria-expanded={isOpen}
				type="button"
			>
				<div className="flex flex-row items-center justify-between">
					<CardTitle className={cn("text-lg", titleClassName)}>
						{title}
					</CardTitle>
					<div className="bg-accent/50 p-2 flex items-center justify-center">
						{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
					</div>
				</div>
			</button>
			{isOpen && (
				<CardContent
					className={cn("animate-in fade-in-50 duration-300", contentClassName)}
				>
					{children}
				</CardContent>
			)}
		</Card>
	);
}
