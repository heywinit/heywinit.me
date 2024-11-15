export default function QuoteCell() {
  return (
    <div className="flex flex-col rounded-[--radius] border bg-[#0eb1f1]/30 p-6 font-mono shadow-lg backdrop-blur-md md:col-span-1">
      <span className="text-xl font-medium text-white">
        "A day without sunshine is like, you know, night."
      </span>
      <span className="mt-4 self-end text-lg text-white">- Steve Martin</span>
    </div>
  );
}
