import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";
import { TooltipProvider } from "@/components/ui/tooltip";

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

export default function LocationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)";
  const [distance, setDistance] = useState<number | null>(null);
  const WINIT_LOCATION = { latitude: 23.0225, longitude: 72.5714 };

  const [{ phi }, api] = useSpring(() => ({
    phi: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

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
      } catch (error) {
        console.error("Error fetching location:", error);
        // Fallback to a default location if IP geolocation fails
        const defaultLocation = {
          latitude: 0,
          longitude: 0,
          name: "Unknown Location",
        };
        setUserLocation(defaultLocation);
      }
    };

    fetchLocation();
  }, [WINIT_LOCATION.latitude, WINIT_LOCATION.longitude]);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
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

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12000,
      mapBrightness: 2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
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
  }, [phi, userLocation]);

  return (
    <TooltipProvider>
      <div className="relative flex h-96 flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-[18px] w-[18px] text-primary" />
            <h2 className="text-sm font-light">India</h2>
          </div>
          {distance !== null && (
            <p className="text-sm font-light text-muted-foreground">
              We're {distance.toLocaleString()} kms far
            </p>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-[-100px] mx-auto aspect-square h-[400px] [@media(max-width:420px)]:bottom-[-50px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              overflow: "visible",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                maxWidth: 800,
                WebkitMaskImage: fadeMask,
                maskImage: fadeMask,
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
                    const delta =
                      e.touches[0].clientX - pointerInteracting.current;
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
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
