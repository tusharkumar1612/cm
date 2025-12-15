"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Scene } from "@/components/3d/Scene";
import { Play, Sparkles, Zap, Code2, Rocket } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered", icon: Rocket },
  { value: "50+", label: "Happy Clients", icon: Sparkles },
  { value: "99%", label: "Client Satisfaction", icon: Zap },
  { value: "24/7", label: "Support Available", icon: Code2 },
];

const floatingWords = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes"
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Scene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-dark-950 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Floating tech words */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingWords.map((word, i) => (
          <motion.span
            key={word}
            className="absolute text-white/5 font-mono text-sm md:text-base"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 pt-24 pb-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-400 border border-primary-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              We Build Digital Excellence
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>

          {/* Main Heading with staggered animation */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              className="heading-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <motion.span
                className="block text-white"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Transform Your Ideas Into
              </motion.span>
              <motion.span
                className="block gradient-text relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Digital Reality
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0, x: "-50%" }}
                  animate={{ width: "60%", x: "-50%" }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-lg max-w-2xl mx-auto mb-10"
          >
            We are a full-stack digital agency specializing in{" "}
            <span className="text-primary-400 font-medium">UI/UX Design</span>,{" "}
            <span className="text-accent-400 font-medium">Web & Mobile Development</span>,{" "}
            <span className="text-neon-cyan font-medium">Cloud & DevOps</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg" href="#contact" icon>
              Start Your Project
            </Button>
            <Button variant="secondary" size="lg" href="#work">
              <Play className="w-4 h-4 mr-2" />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="glass-card p-4 md:p-6 text-center group hover:border-primary-500/30 transition-all relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Icon */}
                <motion.div
                  className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </motion.div>

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#services"
            className="flex flex-col items-center gap-2 text-dark-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-current"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating blobs */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
