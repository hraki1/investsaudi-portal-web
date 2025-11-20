
import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  poster?: string;
  priority?: boolean;
}

export default function BackgroundVideo({
  src,
  className = "",
  poster,
  priority = true,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays when component mounts
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Auto-play was prevented, which is expected in some browsers
        console.warn("Video autoplay prevented:", error);
      });
    }

    // Handle visibility change to pause/play when tab is hidden/visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Ignore play errors when tab becomes visible
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload={priority ? "auto" : "metadata"}
      className={`w-full h-full object-cover ${className}`}
      aria-hidden="true"
    />
  );
}

