import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90 uppercase tracking-wide",
				outline:
					"border border-primary/50 bg-background hover:border-primary hover:bg-card hover:text-accent-foreground uppercase tracking-wide",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 uppercase tracking-wide",
				ghost:
					"hover:bg-card hover:text-accent-foreground uppercase tracking-wide",
				link: "text-primary underline-offset-4 hover:underline",
				solana:
					"bg-transparent border border-primary text-primary hover:bg-primary/10 uppercase tracking-wide",
				solanaFilled:
					"bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide font-semibold",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-10 px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
