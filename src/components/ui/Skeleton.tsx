import { cn } from "@/lib/utils";

interface SkeletonProps {
	className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
	return (
		<div
			className={cn(
				"animate-pulse rounded-none bg-neutral-200 dark:bg-neutral-800",
				className,
			)}
		/>
	);
};

export default Skeleton;
