"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Trophy,
  Zap,
  ArrowRight,
  Rocket,
  Shield,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and push boundaries to deliver exceptional solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work as an extension of your team.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We don't just meet expectations, we exceed them. Quality is non-negotiable.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description: "Fast iterations, quick deployments, and agile methodologies for rapid delivery.",
    color: "from-green-500 to-emerald-500",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a vision to transform digital experiences", icon: Rocket },
  { year: "2021", title: "50+ Projects", description: "Delivered solutions for startups to enterprises", icon: Target },
  { year: "2022", title: "Global Reach", description: "Expanded services to clients across 10+ countries", icon: Globe },
  { year: "2023", title: "100+ Clients", description: "Trusted by leading brands and innovative startups", icon: Shield },
  { year: "2024", title: "AI Integration", description: "Pioneering AI-powered development solutions", icon: Zap },
];

const stats = [
  { value: "5+", label: "Years" },
  { value: "150+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "99%", label: "Satisfaction" },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <SectionHeading
          tag="About Us"
          title="We Build The Future of Digital"
          subtitle="CodeMasheen is a full-service digital agency dedicated to creating impactful digital experiences that drive business growth."
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary-500/20"
                style={{ rotate }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-accent-500/20"
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -360]) }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border border-neon-cyan/20"
                style={{ rotate }}
              />
              
              {/* Center content with stats */}
              <motion.div
                className="absolute inset-20 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-dark-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badges with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 glass-card p-4 hover:border-primary-500/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Target className="w-6 h-6 text-primary-400 mb-2" />
                <div className="text-sm font-semibold text-white">Mission-Driven</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 glass-card p-4 hover:border-accent-500/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Eye className="w-6 h-6 text-accent-400 mb-2" />
                <div className="text-sm font-semibold text-white">Vision-Led</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 right-0 glass-card p-4 hover:border-rose-500/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Heart className="w-6 h-6 text-rose-400 mb-2" />
                <div className="text-sm font-semibold text-white">Passion-Fueled</div>
              </motion.div>

              {/* Decorative particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary-500/50"
                  style={{
                    left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 45}%`,
                    top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 45}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-white mb-6">
              Transforming Ideas Into <span className="gradient-text">Digital Excellence</span>
            </h3>
            <p className="body-md mb-6">
              Founded with a passion for technology and design, CodeMasheen has grown into a
              trusted partner for businesses seeking digital transformation. We combine
              creativity with technical expertise to deliver solutions that make an impact.
            </p>
            <p className="body-md mb-8">
              Our team of designers, developers, and strategists work collaboratively to
              bring your vision to life. From startups to enterprises, we&apos;ve helped
              organizations across industries achieve their digital goals.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Projects Delivered", value: "150+" },
                { label: "Countries Served", value: "10+" },
                { label: "Team Members", value: "25+" },
                { label: "Years Experience", value: "5+" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-display font-bold gradient-text">{item.value}</div>
                  <div className="text-sm text-dark-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
              whileHover={{ x: 5 }}
            >
              Let&apos;s work together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold text-white text-center mb-12"
          >
            Our Core <span className="gradient-text">Values</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 text-center group hover:border-primary-500/30 transition-all"
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} p-0.5`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-dark-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold text-white text-center mb-12"
          >
            Our <span className="gradient-text">Journey</span>
          </motion.h3>
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <motion.div
                      className="glass-card p-6 inline-block group hover:border-primary-500/30 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <milestone.icon className={`w-5 h-5 text-primary-400 ${index % 2 === 0 ? 'lg:order-2' : ''}`} />
                        <div className="text-primary-400 font-mono text-sm">{milestone.year}</div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{milestone.title}</h4>
                      <p className="text-dark-400 text-sm">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 ring-4 ring-dark-950"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
