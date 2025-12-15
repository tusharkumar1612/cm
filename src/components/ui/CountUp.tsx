"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springConfig = { damping: 30, stiffness: 100 };
  const motionValue = useSpring(0, springConfig);
  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest)
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(end);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, end, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// Animated counter with visual effects
export function AnimatedCounter({
  value,
  label,
  suffix = "",
  color = "primary",
}: {
  value: number;
  label: string;
  suffix?: string;
  color?: "primary" | "accent" | "cyan";
}) {
  const colorMap = {
    primary: "from-primary-500 to-primary-300",
    accent: "from-accent-500 to-accent-300",
    cyan: "from-neon-cyan to-primary-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className={`text-5xl md:text-6xl font-display font-bold bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent mb-2`}
      >
        <CountUp end={value} suffix={suffix} />
      </div>
      <div className="text-dark-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
