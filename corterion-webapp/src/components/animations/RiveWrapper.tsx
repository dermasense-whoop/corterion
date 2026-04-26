"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect } from "react";

interface RiveWrapperProps {
  src: string;
  stateMachines?: string;
  className?: string;
}

export function RiveWrapper({ src, stateMachines, className = "" }: RiveWrapperProps) {
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachines,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  // Ensure it resizes correctly
  useEffect(() => {
    if (rive) {
      rive.resizeToCanvas();
    }
  }, [rive]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
