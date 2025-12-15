"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <div ref={ref} className="relative">
      <Component
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ x: xSpring, y: ySpring }}
        className={cn(
          "relative inline-flex items-center justify-center",
          className
        )}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/50 to-accent-500/50 blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 0.5 : 0,
            scale: isHovered ? 1.2 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />
        {children}
      </Component>
    </div>
  );
}


