import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn(
			"relative h-2 w-full overflow-hidden rounded-sm bg-secondary",
			className,
		)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-full w-full flex-1 bg-primary transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// Solana-style progress bar
const SolanaProgress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
		showPercentage?: boolean;
		label?: string;
	}
>(({ className, value, showPercentage, label, ...props }, ref) => (
	<div className="w-full space-y-2">
		{label && (
			<div className="flex justify-between items-center">
				<span className="text-sm font-medium text-foreground">{label}</span>
				{showPercentage && (
					<span className="text-sm font-medium text-primary">{value}%</span>
				)}
			</div>
		)}
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				"relative h-1.5 w-full overflow-hidden bg-secondary/50",
				className,
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className="h-full w-full flex-1 bg-primary transition-all"
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	</div>
));
SolanaProgress.displayName = "SolanaProgress";

export { Progress, SolanaProgress };
