import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Globe: any;
    tsunami: any;
    THREE: any;
  }
}

interface GlobeProps {
  initialLocation?: string;
  onLoaded?: (globe: any) => void;
  onRouteChange?: (location: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Globe({
  initialLocation = "branding-interstitial",
  onLoaded,
  onRouteChange,
  className = "",
  style = {},
}: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const routerRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const initGlobe = async () => {
      try {
        setIsLoading(true);
        console.log("Starting Globe initialization...");

        // Load Three.js
        console.log("Loading Three.js...");
        await loadScript("/globe/js/three.min.js");
        console.log("Three.js loaded");

        // Load Tsunami framework
        console.log("Loading Tsunami...");
        await loadScript("/globe/js/tsunami.js");
        console.log("Tsunami loaded");

        // Load Globe config and modules
        console.log("Loading Globe modules...");
        await loadScript("/globe/js/globe/GlobeConfig.js");
        await loadScript("/globe/js/globe/OrbitalCamera.js");
        await loadScript("/globe/js/globe/LatLngCamera.js");
        await loadScript("/globe/js/globe/FlyToDestination.js");
        await loadScript("/globe/js/globe/Outro.js");
        await loadScript("/globe/js/globe/Travel.js");
        await loadScript("/globe/js/globe/Gameboard.js");
        await loadScript("/globe/js/globe/GeneralTitle.js");
        await loadScript("/globe/js/globe/BrandingInterstitial.js");
        await loadScript("/globe/js/globe/Test.js");
        await loadScript("/globe/js/globe/SaudiArabia.js");
        await loadScript("/globe/js/globe/PlaneSphere.js");
        await loadScript("/globe/js/globe/PlaneSphereGeometry.js");
        await loadScript("/globe/js/globe/JoinUs.js");
        await loadScript("/globe/js/globe/Globe.js");
        // console.log("All Globe modules loaded");

        // Wait a bit for scripts to initialize
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Create globe container
        const globeDiv = document.createElement("div");
        globeDiv.className = "globe";
        globeDiv.style.width = "100%";
        globeDiv.style.height = "100%";
        containerRef.current!.appendChild(globeDiv);

        // Check if Globe and tsunami are available
        if (!window.Globe) {
          throw new Error("window.Globe is not defined. Check if Globe.js loaded correctly.");
        }
        if (!window.tsunami) {
          throw new Error("window.tsunami is not defined. Check if tsunami.js loaded correctly.");
        }
        if (!window.THREE) {
          throw new Error("window.THREE is not defined. Check if three.min.js loaded correctly.");
        }

        console.log("Initializing Globe...");
        // Initialize globe
        const globe = window.Globe(globeDiv);
        const router = new window.tsunami.Router(globe);
        console.log("Globe and router initialized");

        router.addEventListener("complete", () => {
          if (onRouteChange) {
            onRouteChange(router.getLocation());
          }
        });

        // Load assets and start
        globe.load()
          .then(() => {
            // console.log("Globe assets loaded successfully");
            
            // Start render loop
            function animate() {
              requestAnimationFrame(animate);
              globe.render();
            }
            animate();

            // Set initial location
            router.setLocation(initialLocation);

            globeRef.current = globe;
            routerRef.current = router;

            setIsLoading(false);

            if (onLoaded) {
              onLoaded({ globe, router });
            }
          })
          .catch((error: any) => {
            console.error("Failed to load globe assets:", error);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Failed to initialize globe:", error);
        setIsLoading(false);
      }
    };

    initGlobe();

    // Cleanup
    return () => {
      if (routerRef.current) {
        routerRef.current.destroy();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [initialLocation, onLoaded, onRouteChange]);

  return (
    <div
      ref={containerRef}
      className={`globe-container ${className}`}
      style={{ width: "100%", height: "100%", position: "relative", ...style }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        >
          Loading Globe...
        </div>
      )}
    </div>
  );
}
