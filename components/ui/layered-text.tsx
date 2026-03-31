"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LayeredTextProps {
  text: string;
  layers?: string[];
  offsetX?: number;
  offsetY?: number;
  strokeWidth?: number;
  strokeColor?: string;
  animate?: boolean;
  animationDuration?: number;
  className?: string;
}

const LayeredText: React.FC<LayeredTextProps> = ({
  text,
  layers = ["#F9C6D0", "#C8A2C8"],
  offsetX = 6,
  offsetY = 6,
  strokeWidth = 3,
  strokeColor = "#3d1f3d",
  animate = true,
  animationDuration = 0.6,
  className,
}) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative select-none tracking-[-0.02em]">
        {layers.map((color, index) => (
          <motion.div
            key={`layer-${index}`}
            className="absolute top-0 left-0"
            style={{
              color,
              transform: `translate(${offsetX * (layers.length - index)}px, ${offsetY * (layers.length - index)}px)`,
              zIndex: index,
            }}
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={
              animate
                ? {
                    duration: animationDuration,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }
                : undefined
            }
          >
            {text}
          </motion.div>
        ))}

        <motion.div
          className={cn("relative", className)}
          style={{
            color: "#ffffff",
            WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
            paintOrder: "stroke fill",
            zIndex: layers.length,
          }}
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 1 } : undefined}
          transition={
            animate
              ? {
                  duration: animationDuration,
                  delay: layers.length * 0.1,
                  ease: "easeOut",
                }
              : undefined
          }
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
};

export { LayeredText };