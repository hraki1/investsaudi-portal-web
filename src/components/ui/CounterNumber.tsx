import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterNumberProps {
  value: string | number;
  suffix?: string;
  className?: string;
  suffixClassName?: string;
  enableScaleAnimation?: boolean;
  animationDuration?: number;
}

export default function CounterNumber({ 
  value, 
  suffix = '', 
  className = '',
  suffixClassName = '',
  enableScaleAnimation = true,
  animationDuration = 0.6
}: CounterNumberProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Extract numeric value from string (e.g., "~600" -> 600, "2.4" -> 2.4)
  const numericValue = typeof value === 'string' 
    ? parseFloat(value.replace(/[^\d.]/g, '')) || 0 
    : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = Math.max(0.1, Math.ceil(numericValue / 50)); // Count up in 50 steps, minimum 0.1
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= numericValue - 0.01) { // Small tolerance for decimal values
          clearInterval(interval);
          // Trigger completion animation after a small delay (debounce effect) only if enabled
          if (enableScaleAnimation) {
            setTimeout(() => {
              setIsComplete(true);
            }, 100);
          }
          return numericValue;
        }
        return prev + increment;
      });
    }, 40); // Update every 40ms

    return () => clearInterval(interval);
  }, [isVisible, numericValue]);

  // Format the display value
  const displayValue = (() => {
    if (typeof value === 'string' && value.includes('~')) {
      return `~${count}`;
    }
    // Handle decimal values properly
    if (typeof numericValue === 'number' && numericValue % 1 !== 0) {
      return count.toFixed(1);
    }
    return count.toString();
  })();

  return (
    <motion.span 
      id={`counter-${value}`}
      className={className}
      animate={isComplete && enableScaleAnimation ? {
        scale: [1, 1.2, 1],
        transition: {
          duration: animationDuration,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      } : {}}
      initial={{ scale: 1 }}
    >
      {displayValue}
      {suffix && (
        <span className={suffixClassName}>
          {suffix}
        </span>
      )}
    </motion.span>
  );
}
