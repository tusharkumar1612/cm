"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function InfiniteMarquee({
  children,
  direction = "left",
  speed = 20,
  className,
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden group",
        pauseOnHover && "[&:hover_.marquee-content]:pause",
        className
      )}
    >
      <motion.div
        className="marquee-content flex gap-8 shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="marquee-content flex gap-8 shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

