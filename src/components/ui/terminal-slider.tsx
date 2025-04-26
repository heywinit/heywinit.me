import * as React from "react";
import { cn } from "@/lib/utils";

interface TerminalProgressProps {
	value: number;
	min?: number;
	max?: number;
	step?: number;
	className?: string;
	width?: number;
	brackets?: string[];
	indicator?: string;
	fillChar?: string;
	emptyChar?: string;
	onChange?: (value: number) => void;
}

const TerminalProgress = React.forwardRef<
	HTMLDivElement,
	TerminalProgressProps
>(
	(
		{
			className,
			brackets = ["[", "]"],
			indicator = "\\",
			fillChar = "-",
			emptyChar = " ",
			width = 10,
			value = 0,
			min = 0,
			max = 100,
			step = 1,
			onChange,
			...props
		},
		ref,
	) => {
		// Calculate position based on value
		const range = max - min;
		const normalizedValue = (value - min) / range;
		const indicatorPosition = Math.round(normalizedValue * width);

		// Build the progress bar text representation
		const renderProgressBar = () => {
			let progressText = "";

			// Add left bracket
			progressText += brackets[0];

			// Fill in progress
			for (let i = 0; i < width; i++) {
				if (i === indicatorPosition) {
					progressText += indicator;
				} else if (i < indicatorPosition) {
					progressText += fillChar;
				} else {
					progressText += emptyChar;
				}
			}

			// Add right bracket
			progressText += brackets[1];

			return progressText;
		};

		// Handle button clicks
		const handleDecrease = () => {
			if (onChange && value > min) {
				onChange(Math.max(min, value - step));
			}
		};

		const handleIncrease = () => {
			if (onChange && value < max) {
				onChange(Math.min(max, value + step));
			}
		};

		return (
			<div
				ref={ref}
				className={cn(
					"flex items-center justify-between select-none w-full font-mono text-lg",
					className,
				)}
				{...props}
			>
				<button
					type="button"
					onClick={handleDecrease}
					className="flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors focus:outline-none"
					aria-label="Decrease"
				>
					-
				</button>

				<div className="flex-1 mx-2 text-center whitespace-pre">
					{renderProgressBar()}
				</div>

				<button
					type="button"
					onClick={handleIncrease}
					className="flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors focus:outline-none"
					aria-label="Increase"
				>
					+
				</button>
			</div>
		);
	},
);

TerminalProgress.displayName = "TerminalProgress";

export { TerminalProgress };
