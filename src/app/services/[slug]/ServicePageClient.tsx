"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Palette,
  Code2,
  Server,
  Cloud,
  Smartphone,
  GitBranch,
  Cpu,
  Rocket,
  CheckCircle2,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const iconMap = {
  Palette,
  Code2,
  Server,
  Cloud,
  Smartphone,
  GitBranch,
  Cpu,
  Rocket,
};

interface ServicePageClientProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    color: string;
    icon: string;
    stats: Record<string, string>;
    techStack: Array<{
      name: string;
      description: string;
      color: string;
      level: number;
    }>;
    process: Array<{
      step: string;
      description: string;
    }>;
  };
  slug: string;
}

function TechCard({
  tech,
  index,
}: {
  tech: { name: string; description: string; color: string; level: number };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 h-full transition-all duration-300 hover:border-primary-500/30"
        whileHover={{ y: -8, scale: 1.02 }}
        style={{
          boxShadow: isHovered ? `0 20px 40px ${tech.color}20` : "none",
        }}
      >
        {/* Tech icon/initial */}
        <motion.div
          className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-display font-bold text-lg"
          style={{
            background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
            color: tech.color,
          }}
          animate={{ rotate: isHovered ? 10 : 0 }}
        >
          {tech.name.charAt(0)}
        </motion.div>

        {/* Name */}
        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {tech.name}
        </h4>

        {/* Description */}
        <p className="text-dark-400 text-sm mb-4">{tech.description}</p>

        {/* Proficiency bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-dark-500">Proficiency</span>
            <span style={{ color: tech.color }}>{tech.level}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: tech.color }}
              initial={{ width: 0 }}
              animate={{ width: isHovered ? `${tech.level}%` : "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 0 1px ${tech.color}40`
              : "inset 0 0 0 0px transparent",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;

  return (
    <div ref={containerRef} className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/50 to-dark-950" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        {/* Animated orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-[150px]`}
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <motion.div style={{ y, opacity }} className="container-custom relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-8`}
            >
              <div className="w-full h-full rounded-2xl bg-dark-900/80 backdrop-blur-xl flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              {service.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-300 leading-relaxed mb-8"
            >
              {service.longDescription}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              {Object.entries(service.stats).map(([key, value], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold gradient-text">{value}</div>
                  <div className="text-sm text-dark-400 capitalize">{key}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Our team has extensive experience with these technologies, ensuring we deliver
              the best solutions for your project.
            </p>
          </motion.div>

          {/* Tech grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.techStack.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-dark-950/50">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              How We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Our proven process ensures quality delivery and client satisfaction every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-500/30 transition-all"
              >
                {/* Step number */}
                <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center font-display font-bold text-white text-sm`}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{step.step}</h4>
                    <p className="text-dark-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-primary-400 border border-primary-500/20 mb-8"
            >
              <Zap className="w-4 h-4" />
              Ready to Start?
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let&apos;s Build Your <span className="gradient-text">{service.title}</span> Project
            </h2>

            <p className="text-xl text-dark-300 mb-10">
              Get a free consultation and discover how we can help transform your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/#contact" icon>
                Start Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/#work">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


