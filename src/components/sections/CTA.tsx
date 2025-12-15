"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, Rocket, Code2, Zap, Star, Check } from "lucide-react";

const features = [
  { icon: Rocket, text: "Fast Delivery", description: "2x faster than industry avg" },
  { icon: Code2, text: "Clean Code", description: "Maintainable & scalable" },
  { icon: Zap, text: "24/7 Support", description: "Always here to help" },
];

const benefits = [
  "Free initial consultation",
  "Dedicated project manager",
  "Transparent pricing",
  "Post-launch support included",
];

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-dark-950 to-accent-900/50" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)
            `,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-cyan/20 rounded-full blur-[80px]"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-5xl mx-auto"
        >
          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-3xl glass border border-white/10 overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-500/20 to-transparent rounded-tl-full" />

            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-primary-400 border border-primary-500/20 backdrop-blur-sm mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Limited Time: Free Consultation
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="heading-xl mb-6"
              >
                <span className="text-white">Let&apos;s Create Your</span>
                <br />
                <span className="gradient-text relative">
                  Digital Masterpiece
                  <motion.span
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="body-lg max-w-2xl mx-auto mb-8"
              >
                Join hundreds of companies who&apos;ve transformed their digital presence with us.
                From idea to launch, we&apos;re your trusted technology partner.
              </motion.p>

              {/* Benefits list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-dark-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    {benefit}
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="primary" size="lg" href="#contact" icon>
                    Start Your Project
                  </Button>
                </motion.div>
                <Button variant="secondary" size="lg" href="#services">
                  Explore Services
                </Button>
              </motion.div>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-8"
              >
                {features.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl glass border border-white/5 hover:border-primary-500/30 transition-all cursor-default"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(14, 165, 233, 0)",
                          "0 0 20px rgba(14, 165, 233, 0.3)",
                          "0 0 0 rgba(14, 165, 233, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </motion.div>
                    <div className="text-left">
                      <div className="font-semibold text-white text-sm">{item.text}</div>
                      <div className="text-xs text-dark-500">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-dark-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-dark-950 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>100+ happy clients</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="ml-1">5.0 average rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </section>
  );
}
