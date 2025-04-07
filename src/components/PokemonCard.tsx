import type { FC } from "react";

interface PokemonCardProps {
	name: string;
	type: string;
	imageUrl: string;
	description?: string;
	stats?: {
		code: number;
		debug: number;
		design: number;
		agility: number;
	};
	abilities?: string[];
}

const PokemonCard: FC<PokemonCardProps> = ({
	name,
	type,
	imageUrl,
	description,
	stats,
	abilities = [],
}: PokemonCardProps) => {
	return (
		<div className="bg-card text-card-foreground border border-white w-full h-full p-4 flex flex-col">
			{/* Card Header */}
			<div className="flex items-center justify-between border-b-2 border-border pb-2">
				<div className="flex items-center gap-2">
					<span className="text-xs font-mono bg-white text-black px-2 py-0.5">
						{String(new Date().getFullYear() - 2005)} y/o
					</span>
					<h3 className="text-lg font-bold uppercase tracking-wider">{name}</h3>
				</div>
				<div className="text-xs font-mono">HP 100</div>
			</div>

			{/* Pokemon Image */}
			<div className="relative w-full aspect-square border-2 border-border my-3 overflow-hidden bg-muted">
				<img
					src={imageUrl}
					alt={name}
					className="w-full h-full object-contain p-2 grayscale"
				/>
			</div>

			{/* Type and Description */}
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<span className="text-xs font-mono uppercase">Type:</span>
					<span className="text-xs font-mono bg-white text-black border border-border px-2 py-0.5">
						{type}
					</span>
				</div>

				{description && (
					<div className="text-xs font-mono border-2 border-border p-2 min-h-[60px]">
						{description}
					</div>
				)}
			</div>

			{/* Stats */}
			{stats && (
				<div className="mt-2 space-y-1">
					<div className="text-xs font-mono uppercase border-b border-border pb-1">
						Stats
					</div>
					<div className="grid grid-cols-2 gap-1 text-xs font-mono">
						{Object.entries(stats).map(([stat, value]) => (
							<div
								key={stat}
								className="flex justify-between border border-border px-2 py-0.5"
							>
								<span className="uppercase">{stat}:</span>
								<span>{value}</span>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Abilities */}
			{abilities.length > 0 && (
				<div className="mt-2">
					<div className="text-xs font-mono uppercase border-b border-border pb-1">
						Abilities
					</div>
					<div className="grid grid-cols-2 gap-1 mt-1">
						{abilities.map((ability) => (
							<div
								key={ability}
								className="text-xs font-mono border border-border px-2 py-0.5 truncate"
							>
								{ability}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default PokemonCard;
