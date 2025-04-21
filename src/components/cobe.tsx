import { useEffect, useRef, useState, useCallback } from "react";
import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";
import { hslToRgb } from "../lib/color-utils";

interface Location {
	latitude: number;
	longitude: number;
	name: string;
}

interface IpapiResponse {
	latitude: number;
	longitude: number;
	city: string;
	country_name: string;
}

// Function to calculate distance between two points using Haversine formula
function calculateDistance(
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number,
) {
	const R = 6371; // Earth's radius in kilometers
	const dLat = ((lat2 - lat1) * Math.PI) / 180;
	const dLon = ((lon2 - lon1) * Math.PI) / 180;
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos((lat1 * Math.PI) / 180) *
			Math.cos((lat2 * Math.PI) / 180) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return Math.round(R * c);
}

export default function Globe() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef(0);
	const [userLocation, setUserLocation] = useState<Location | null>(null);
	const fadeMask =
		"radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)";
	const [distance, setDistance] = useState<number | null>(null);
	const WINIT_LOCATION = { latitude: 23.0225, longitude: 72.5714 };
	const [distanceText, setDistanceText] = useState<string>("");
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	// Array of distance messages in sci-fi style
	const distanceMessages = [
		"apparently, we're ____ away",
		"scanners indicate ____ of separation",
		"quantum calculations: ____ apart",
		"interstellar distance: ____ units",
		"spatial gap detected: ____",
		"cosmic displacement: ____",
		"dimensional separation: ____",
		"____ of void between us",
		"transmission delay: ____ light-seconds",
		"space-time differential: ____",
	];

	const [{ phi }, api] = useSpring(() => ({
		phi: 0,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}));

	// Function to convert CSS HSL variable to normalized RGB for cobe
	const getCSSVariableColor = useCallback(
		(variableName: string): [number, number, number] => {
			// Get the HSL value from CSS variable
			const style = getComputedStyle(document.documentElement);
			const hslValue = style.getPropertyValue(variableName).trim();

			if (!hslValue) {
				// Fallback colors if variable not found
				return [0.3, 0.5, 0.5]; // Default base color
			}

			// Parse HSL values (format: "H S% L%")
			const [h, s, l] = hslValue
				.split(" ")
				.map((val) => Number.parseFloat(val.replace("%", "")));

			// Convert HSL to RGB (normalized 0-1)
			return hslToRgb(h / 360, s / 100, l / 100);
		},
		[],
	);

	// Check for theme changes
	useEffect(() => {
		const checkTheme = () => {
			// Check if the document has a 'dark' class or data-theme="dark" attribute
			const isDark =
				document.documentElement.classList.contains("dark") ||
				document.documentElement.getAttribute("data-theme") === "dark";
			setIsDarkTheme(isDark);
		};

		// Initial check
		checkTheme();

		// Set up a mutation observer to detect theme changes
		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "data-theme"],
		});

		return () => observer.disconnect();
	}, []);

	// Updated location fetching logic
	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const isDevMode = process.env.NODE_ENV === "development";

				if (isDevMode) {
					const mockLocation = {
						latitude: -14.235004,
						longitude: -51.92528,
						name: "South America",
					};
					setUserLocation(mockLocation);
					const dist = calculateDistance(
						WINIT_LOCATION.latitude,
						WINIT_LOCATION.longitude,
						mockLocation.latitude,
						mockLocation.longitude,
					);
					setDistance(dist);

					// Set a random distance message
					const randomIndex = Math.floor(
						Math.random() * distanceMessages.length,
					);
					setDistanceText(
						distanceMessages[randomIndex].replace("____", `${dist} km`),
					);
					return;
				}

				// Fetch location from IP
				const response = await fetch("https://ipapi.co/json/");
				const data: IpapiResponse = await response.json();

				const userLoc = {
					latitude: data.latitude,
					longitude: data.longitude,
					name: `${data.city}, ${data.country_name}`,
				};

				setUserLocation(userLoc);

				// Calculate and set distance
				const dist = calculateDistance(
					WINIT_LOCATION.latitude,
					WINIT_LOCATION.longitude,
					userLoc.latitude,
					userLoc.longitude,
				);
				setDistance(dist);

				// Set a random distance message
				const randomIndex = Math.floor(Math.random() * distanceMessages.length);
				setDistanceText(
					distanceMessages[randomIndex].replace("____", `${dist} km`),
				);
			} catch (error) {
				console.error("Error fetching location:", error);
				// Fallback to a default location if IP geolocation fails
				const defaultLocation = {
					latitude: 0,
					longitude: 0,
					name: "Unknown Location",
				};
				setUserLocation(defaultLocation);
				setDistanceText("distance calculation failed");
			}
		};

		fetchLocation();
	}, []);

	useEffect(() => {
		let width = 0;

		const onResize = () => {
			const currentWidth = canvasRef.current?.offsetWidth;
			if (canvasRef.current && currentWidth) {
				width = currentWidth;
				window.addEventListener("resize", onResize);
			}
		};
		onResize();

		if (!canvasRef.current) return;

		let rotation = 0;

		const markers = [
			{
				location: [23.0225, 72.5714] as [number, number],
				size: 0.1,
			},
		];

		// Add user's location marker if available
		if (userLocation) {
			markers.push({
				location: [userLocation.latitude, userLocation.longitude] as [
					number,
					number,
				],
				size: 0.1,
			});
		}

		// Use theme colors from CSS variables
		const baseColor = isDarkTheme
			? getCSSVariableColor("--foreground")
			: ([1, 1, 1] as [number, number, number]); // Light gray for light mode
		const markerColor = getCSSVariableColor("--primary");
		const glowColor = getCSSVariableColor("--primary");

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0,
			dark: isDarkTheme ? 1 : 0,
			diffuse: 2,
			mapSamples: 12000,
			mapBrightness: 2,
			baseColor,
			markerColor,
			glowColor,
			markers,
			scale: 1.05,
			onRender: (state) => {
				state.phi = rotation + phi.get();
				state.width = width * 2;
				state.height = width * 2;
				rotation += 0.005;
			},
		});

		return () => {
			globe.destroy();
			window.removeEventListener("resize", onResize);
		};
	}, [phi, userLocation, getCSSVariableColor, isDarkTheme]);

	return (
		<div className="relative aspect-square w-full p-2">
			<div
				style={{
					width: "90%",
					height: "90%",
					WebkitMaskImage: fadeMask,
					maskImage: fadeMask,
					margin: "auto",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<canvas
					ref={canvasRef}
					onPointerDown={(e) => {
						pointerInteracting.current =
							e.clientX - pointerInteractionMovement.current;
						if (canvasRef.current) {
							canvasRef.current.style.cursor = "grabbing";
						}
					}}
					onPointerUp={() => {
						pointerInteracting.current = null;
						if (canvasRef.current) {
							canvasRef.current.style.cursor = "grab";
						}
					}}
					onPointerOut={() => {
						pointerInteracting.current = null;
						if (canvasRef.current) {
							canvasRef.current.style.cursor = "grab";
						}
					}}
					onMouseMove={(e) => {
						if (pointerInteracting.current !== null) {
							const delta = e.clientX - pointerInteracting.current;
							pointerInteractionMovement.current = delta;
							api.start({
								phi: delta / 100,
							});
						}
					}}
					onTouchMove={(e) => {
						if (pointerInteracting.current !== null && e.touches[0]) {
							const delta = e.touches[0].clientX - pointerInteracting.current;
							pointerInteractionMovement.current = delta;
							api.start({
								phi: delta / 50,
							});
						}
					}}
					style={{
						width: "100%",
						height: "100%",
						contain: "layout paint size",
						cursor: "grab",
						userSelect: "none",
					}}
				/>
			</div>
			{distanceText && (
				<div className="absolute bottom-8 right-2">
					<div
						className="inline-block bg-background-secondary text-primary text-base md:text-lg font-mono px-4 py-2 rounded-sm border border-primary/30"
						style={{ boxShadow: "0 0 8px hsla(var(--primary), 0.3)" }}
					>
						<span className="text-primary">[</span> {distanceText}{" "}
						<span className="text-primary">]</span>
					</div>
				</div>
			)}
		</div>
	);
}
