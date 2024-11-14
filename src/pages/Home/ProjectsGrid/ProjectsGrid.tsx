export default function ProjectsGrid({
  ref,
}: {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  return <div ref={ref} className="mx-auto w-full max-w-5xl p-4 py-8"></div>;
}
