export default function ExperienceCell() {
  return (
    <div className="rounded-[--radius] border bg-card p-6 shadow-sm">
      <h3 className="font-semibold leading-none tracking-tight">Experience</h3>
      <div className="group relative overflow-hidden rounded-lg p-2">
        <div className="relative z-10 space-y-2">
          <div className="text-center">
            <div className="relative">
              <span className="block text-5xl font-bold text-primary">7.5</span>
              <span className="text-sm text-muted-foreground">
                Years Programming
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-border"></div>
            <span className="text-xs text-muted-foreground">including</span>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="text-center">
            <div className="relative">
              <span className="block text-4xl font-bold text-primary">4</span>
              <span className="text-sm text-muted-foreground">
                Years Professionally
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
