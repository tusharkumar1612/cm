"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  icon = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full",
    "overflow-hidden transition-all duration-300 group",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    {
      // Variants
      "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-glow hover:scale-105":
        variant === "primary",
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary-500/50":
        variant === "secondary",
      "bg-transparent text-white hover:bg-white/5": variant === "ghost",
      "border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10":
        variant === "outline",
      // Sizes
      "px-4 py-2 text-sm gap-2": size === "sm",
      "px-6 py-3 text-base gap-2": size === "md",
      "px-8 py-4 text-lg gap-3": size === "lg",
    },
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}

