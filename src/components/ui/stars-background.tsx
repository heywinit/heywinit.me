"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, useCallback } from "react";
import type { RefObject } from "react";

interface StarProps {
	x: number;
	y: number;
	radius: number;
	opacity: number;
	twinkleSpeed: number | null;
}

interface StarBackgroundProps {
	starDensity?: number;
	allStarsTwinkle?: boolean;
	twinkleProbability?: number;
	minTwinkleSpeed?: number;
	maxTwinkleSpeed?: number;
	className?: string;
}

export const StarsBackground = ({
	starDensity = 0.00015,
	allStarsTwinkle = true,
	twinkleProbability = 0.7,
	minTwinkleSpeed = 0.5,
	maxTwinkleSpeed = 1,
}: StarBackgroundProps) => {
	const [stars, setStars] = useState<StarProps[]>([]);
	const canvasRef: RefObject<HTMLCanvasElement> =
		useRef<HTMLCanvasElement>(null);

	const generateStars = useCallback(
		(width: number, height: number): StarProps[] => {
			const area = width * height;
			const maxStars = 700; // Reasonable maximum to prevent performance issues
			const numStars = Math.min(Math.floor(area * starDensity), maxStars);
			return Array.from({ length: numStars }, () => {
				const shouldTwinkle =
					allStarsTwinkle || Math.random() < twinkleProbability;
				return {
					x: Math.random() * width,
					y: Math.random() * height,
					radius: Math.random() * 0.05 + 0.5,
					opacity: Math.random() * 0.5 + 0.5,
					twinkleSpeed: shouldTwinkle
						? minTwinkleSpeed +
							Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
						: null,
				};
			});
		},
		[
			starDensity,
			allStarsTwinkle,
			twinkleProbability,
			minTwinkleSpeed,
			maxTwinkleSpeed,
		],
	);

	useEffect(() => {
		const updateStars = () => {
			if (canvasRef.current) {
				const canvas = canvasRef.current;
				const ctx = canvas.getContext("2d");
				if (!ctx) return;

				const { width, height } = canvas.getBoundingClientRect();
				canvas.width = width;
				canvas.height = height;
				setStars(generateStars(width, height));
			}
		};

		updateStars();

		const resizeObserver = new ResizeObserver(updateStars);
		if (canvasRef.current) {
			resizeObserver.observe(canvasRef.current);
		}

		return () => {
			if (canvasRef.current) {
				resizeObserver.unobserve(canvasRef.current);
			}
		};
	}, [generateStars]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;

		const render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const star of stars) {
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
				ctx.fill();

				if (star.twinkleSpeed !== null) {
					star.opacity =
						0.5 +
						Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
				}
			}

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [stars]);

	return (
		<canvas
			ref={canvasRef}
			className={cn(
				"h-full w-full absolute inset-0 dark:bg-[#00000030] pointer-events-none",
			)}
		/>
	);
};
