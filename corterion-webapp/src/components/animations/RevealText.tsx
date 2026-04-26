"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRevealed.current && containerRef.current) {
            hasRevealed.current = true;
            
            // Simple fade and slide up using anime.js
            animate(containerRef.current, {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: "easeOutCubic",
              delay: delay,
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      // Set initial state
      containerRef.current.style.opacity = "0";
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
