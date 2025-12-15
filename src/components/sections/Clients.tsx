"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/CountUp";

// Client logos (using placeholder initials)
const clients = [
  { name: "TechCorp", logo: "TC", color: "#0ea5e9" },
  { name: "StartupX", logo: "SX", color: "#d946ef" },
  { name: "InnovateCo", logo: "IC", color: "#00fff5" },
  { name: "DigitalFirst", logo: "DF", color: "#ff0080" },
  { name: "CloudNet", logo: "CN", color: "#00ff88" },
  { name: "DataFlow", logo: "DF", color: "#ff6b00" },
  { name: "AppWorks", logo: "AW", color: "#0ea5e9" },
  { name: "FutureTech", logo: "FT", color: "#d946ef" },
  { name: "NextGen", logo: "NG", color: "#00fff5" },
  { name: "SmartSys", logo: "SS", color: "#ff0080" },
  { name: "CyberX", logo: "CX", color: "#00ff88" },
  { name: "Quantum", logo: "QT", color: "#ff6b00" },
];

const techStack = {
  frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "Vue", color: "#42B883" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Framer Motion", color: "#FF0080" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Go", color: "#00ADD8" },
    { name: "GraphQL", color: "#E10098" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
  ],
  cloud: [
    { name: "AWS", color: "#FF9900" },
    { name: "GCP", color: "#4285F4" },
    { name: "Azure", color: "#0078D4" },
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Terraform", color: "#7B42BC" },
  ],
  mobile: [
    { name: "React Native", color: "#61DAFB" },
    { name: "Flutter", color: "#02569B" },
    { name: "Swift", color: "#F05138" },
    { name: "Kotlin", color: "#7F52FF" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Expo", color: "#000020" },
  ],
};

const stats = [
  { value: 150, label: "Projects Completed", suffix: "+", color: "primary" as const },
  { value: 50, label: "Happy Clients", suffix: "+", color: "accent" as const },
  { value: 99, label: "Client Satisfaction", suffix: "%", color: "cyan" as const },
  { value: 5, label: "Years Experience", suffix: "+", color: "primary" as const },
];

function TechCategory({
  title,
  techs,
  delay,
}: {
  title: string;
  techs: { name: string; color: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: `0 10px 30px ${tech.color}30`,
            }}
            className="relative group"
          >
            <div
              className="px-4 py-2 rounded-xl glass border border-white/10 cursor-default transition-all group-hover:border-opacity-30"
              style={{ borderColor: `${tech.color}30` }}
            >
              <span
                className="font-medium text-sm"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
              style={{
                background: `radial-gradient(circle, ${tech.color}15 0%, transparent 70%)`,
                filter: "blur(8px)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <section
      id="work"
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-dark-950/50"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
            />
          ))}
        </motion.div>

        <SectionHeading
          tag="Trusted By"
          title="Companies We've Worked With"
          subtitle="From ambitious startups to established enterprises, we've partnered with organizations that dare to innovate."
        />

        {/* Client Logos - Infinite Scroll */}
        <div className="relative mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  onMouseEnter={() => setHoveredClient(`${client.name}-${index}`)}
                  onMouseLeave={() => setHoveredClient(null)}
                  className="flex-shrink-0"
                >
                  <motion.div
                    className="w-44 h-24 glass-card flex items-center justify-center group transition-all cursor-pointer"
                    animate={{
                      borderColor:
                        hoveredClient === `${client.name}-${index}`
                          ? `${client.color}50`
                          : "rgba(255,255,255,0.1)",
                      boxShadow:
                        hoveredClient === `${client.name}-${index}`
                          ? `0 0 30px ${client.color}20`
                          : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg"
                        style={{
                          background: `linear-gradient(135deg, ${client.color}20, ${client.color}10)`,
                          color: client.color,
                        }}
                        animate={{
                          scale:
                            hoveredClient === `${client.name}-${index}` ? 1.1 : 1,
                        }}
                      >
                        {client.logo}
                      </motion.div>
                      <span className="text-dark-300 font-medium text-sm group-hover:text-white transition-colors">
                        {client.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h3>
            <p className="text-dark-400 max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, performant, and
              future-proof applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechCategory title="Frontend" techs={techStack.frontend} delay={0} />
            <TechCategory title="Backend" techs={techStack.backend} delay={0.1} />
            <TechCategory title="Cloud & DevOps" techs={techStack.cloud} delay={0.2} />
            <TechCategory title="Mobile" techs={techStack.mobile} delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}
