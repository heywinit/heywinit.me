import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[minmax(180px,auto)] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  parentClassName,
}: {
  className?: string;
  title?: string;
  description?: React.ReactNode;
  parentClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-neutral-200 bg-background p-4 transition-all hover:shadow-xl dark:border-neutral-800",
        className,
      )}
    >
      <div className={cn("relative z-10 h-full", parentClassName)}>
        <div className="mb-2">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        {description}
      </div>
    </div>
  );
};
