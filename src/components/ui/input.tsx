import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-sm border border-primary/20 bg-card/50 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

// Solana-style search input with icon
export interface SearchInputProps extends InputProps {
	icon?: React.ReactNode;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
	({ className, icon, ...props }, ref) => {
		return (
			<div className="relative">
				{icon && (
					<div className="absolute left-3 top-0 flex h-9 items-center text-muted-foreground">
						{icon}
					</div>
				)}
				<Input
					className={cn(
						icon && "pl-9",
						"bg-background/50 border-primary/20 focus:border-primary text-foreground",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	},
);
SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
