import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
	return (
		<div className="flex flex-col h-screen">
			<div className="h-[55%] w-full grid grid-cols-5 grid-rows-4">
				<Card className="col-start-2 row-start-2 row-span-3 col-span-3">
					<div className="flex flex-col h-full justify-between">asd</div>
				</Card>
				<Card className="col-start-2 row-start-3 row-span-3 col-span-3 text-8xl font-bold flex items-center justify-center text-justify">
					<CardContent>hey! i'm winit.</CardContent>
				</Card>
			</div>
			<div className="flex h-[5%] items-center text-lg space-x-2 w-full border border-white border-x-0">
				<span>glory to none but the metal that soars fast</span>
				<span>/-/</span>
				<span>glory to none but the metal that soars fast</span>
				<span>/-/</span>
				<span>glory to none but the metal that soars fast</span>
				<span>/-/</span>
			</div>
			<div className="flex-1 w-full">
				<div className="grid h-full grid-cols-2 grid-rows-5">
					<div className="border border-border col-start-2" />
					<Card className="col-start-2 row-start-2 row-span-4">asd</Card>
				</div>
			</div>
		</div>
	);
}
