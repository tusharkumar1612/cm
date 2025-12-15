"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
  RefreshCw,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and target audience to create a strategic roadmap for success.",
    details: ["Stakeholder interviews", "Competitive analysis", "Goal definition", "Timeline planning"],
    color: "from-blue-500 to-cyan-500",
    bgGlow: "rgba(14, 165, 233, 0.2)",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Design",
    description:
      "Our team crafts intuitive designs and detailed technical architecture tailored to your specific needs.",
    details: ["Wireframing", "UI/UX design", "Prototyping", "User testing"],
    color: "from-purple-500 to-pink-500",
    bgGlow: "rgba(168, 85, 247, 0.2)",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "We build your solution using cutting-edge technologies with clean, scalable, and maintainable code.",
    details: ["Agile sprints", "Code reviews", "Daily updates", "Quality assurance"],
    color: "from-green-500 to-emerald-500",
    bgGlow: "rgba(34, 197, 94, 0.2)",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly across all devices.",
    details: ["Unit testing", "Integration testing", "Performance testing", "Security audit"],
    color: "from-yellow-500 to-orange-500",
    bgGlow: "rgba(234, 179, 8, 0.2)",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch",
    description:
      "We deploy your solution with zero downtime and ensure everything runs smoothly in production.",
    details: ["Staged rollout", "Monitoring setup", "Performance optimization", "Go-live support"],
    color: "from-red-500 to-rose-500",
    bgGlow: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Support & Growth",
    description:
      "Ongoing maintenance, updates, and optimization to help your product evolve and scale with your business.",
    details: ["24/7 monitoring", "Regular updates", "Feature additions", "Scale optimization"],
    color: "from-teal-500 to-cyan-500",
    bgGlow: "rgba(20, 184, 166, 0.2)",
  },
];

function ProcessStep({
  step,
  index,
  isActive,
  onClick,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`glass-card p-8 h-full transition-all duration-500 ${
          isActive
            ? "border-primary-500/50 shadow-glow"
            : "hover:border-primary-500/30"
        }`}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Number badge */}
        <motion.div
          className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-display font-bold text-white shadow-lg`}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {step.number}
        </motion.div>

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6`}
          animate={
            isActive
              ? {
                  boxShadow: `0 0 30px ${step.bgGlow}`,
                }
              : {}
          }
        >
          <div
            className={`w-full h-full rounded-2xl flex items-center justify-center transition-colors duration-300 ${
              isActive ? "bg-transparent" : "bg-dark-900 group-hover:bg-transparent"
            }`}
          >
            <step.icon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-white mb-3">
          {step.title}
        </h3>
        <p className="text-dark-400 text-sm leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Details (shown on active) */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-white/10">
            <ul className="space-y-2">
              {step.details.map((detail, i) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-dark-300"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Expand indicator */}
        <motion.div
          className="absolute bottom-4 right-4 text-primary-400"
          animate={{ rotate: isActive ? 90 : 0 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Connector line (for desktop) */}
      {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px">
          <motion.div
            className={`h-full bg-gradient-to-r ${step.color}`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-dark-950/50"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated background orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="How We Work"
          title="Our Proven Process"
          subtitle="A battle-tested methodology that ensures quality, transparency, and successful project delivery every time."
        />

        {/* Process visualization */}
        <div className="relative mb-16">
          {/* Connection line (horizontal on large screens) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Progress dots */}
          <div className="hidden lg:flex justify-between absolute top-[30px] left-0 right-0">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className={`w-4 h-4 rounded-full border-2 transition-all ${
                  activeStep === index
                    ? "bg-primary-500 border-primary-500 scale-150"
                    : "bg-dark-950 border-primary-500/50 hover:border-primary-500 hover:scale-125"
                }`}
                style={{ marginLeft: index === 0 ? "0" : "auto", marginRight: index === steps.length - 1 ? "0" : "auto" }}
              />
            ))}
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isActive={activeStep === index}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-400 mb-4">
            Average project timeline: <span className="text-primary-400 font-semibold">4-12 weeks</span>
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-400 transition-colors group"
            whileHover={{ x: 5 }}
          >
            Start your project today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
