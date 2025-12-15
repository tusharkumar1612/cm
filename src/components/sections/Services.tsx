"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Palette,
  Code2,
  Server,
  Cloud,
  Smartphone,
  GitBranch,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Crafting intuitive and visually stunning interfaces that captivate users and drive engagement.",
    color: "from-pink-500 to-rose-500",
    bgColor: "rgba(244, 63, 94, 0.1)",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    stats: { projects: "50+", satisfaction: "99%" },
    techCount: 12,
  },
  {
    icon: Code2,
    title: "Frontend Development",
    slug: "frontend-development",
    description:
      "Building blazing-fast, responsive web applications with modern frameworks and cutting-edge technologies.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "rgba(14, 165, 233, 0.1)",
    features: ["React/Next.js", "Vue/Nuxt", "TypeScript", "Tailwind CSS"],
    stats: { projects: "100+", performance: "95+" },
    techCount: 16,
  },
  {
    icon: Server,
    title: "Backend Development",
    slug: "backend-development",
    description:
      "Scalable and secure server-side solutions. APIs, microservices, and robust architectures.",
    color: "from-green-500 to-emerald-500",
    bgColor: "rgba(34, 197, 94, 0.1)",
    features: ["Node.js", "Python/Django", "Go", "GraphQL"],
    stats: { apis: "200+", uptime: "99.9%" },
    techCount: 16,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Enterprise-grade cloud infrastructure on AWS, GCP, and Azure. Scalable and secure.",
    color: "from-orange-500 to-amber-500",
    bgColor: "rgba(249, 115, 22, 0.1)",
    features: ["AWS", "Google Cloud", "Azure", "Serverless"],
    stats: { deployments: "500+", savings: "40%" },
    techCount: 16,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    slug: "mobile-development",
    description:
      "Native and cross-platform mobile apps delivering exceptional experiences on iOS and Android.",
    color: "from-purple-500 to-violet-500",
    bgColor: "rgba(168, 85, 247, 0.1)",
    features: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin"],
    stats: { apps: "30+", downloads: "1M+" },
    techCount: 16,
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    slug: "devops-cicd",
    description:
      "Streamlined development workflows with automated testing, deployment, and monitoring.",
    color: "from-red-500 to-orange-500",
    bgColor: "rgba(239, 68, 68, 0.1)",
    features: ["Docker/K8s", "GitHub Actions", "Jenkins", "Terraform"],
    stats: { pipelines: "150+", faster: "80%" },
    techCount: 16,
  },
  {
    icon: Cpu,
    title: "GPU & AI Solutions",
    slug: "gpu-ai-solutions",
    description:
      "Harness the power of GPU computing and AI/ML for intelligent applications.",
    color: "from-yellow-500 to-lime-500",
    bgColor: "rgba(234, 179, 8, 0.1)",
    features: ["TensorFlow", "PyTorch", "CUDA", "AI Integration"],
    stats: { models: "25+", accuracy: "95%" },
    techCount: 16,
  },
  {
    icon: Rocket,
    title: "Deployment & Hosting",
    slug: "deployment-hosting",
    description:
      "Zero-downtime deployments and managed hosting. Your applications, always online.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "rgba(20, 184, 166, 0.1)",
    features: ["Vercel", "Netlify", "DigitalOcean", "Custom VPS"],
    stats: { sites: "200+", uptime: "99.99%" },
    techCount: 16,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group perspective-1000"
    >
      <Link href={`/services/${service.slug}`}>
        <div
          className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 h-full cursor-pointer ${
            isHovered ? "border-primary-500/30 shadow-glow" : ""
          }`}
        >
          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 transition-opacity`}
            animate={{ opacity: isHovered ? 0.05 : 0 }}
          />

          {/* Spotlight effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: isHovered
                ? `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${
                    (y.get() + 0.5) * 100
                  }%, ${service.bgColor}, transparent 50%)`
                : "transparent",
            }}
          />

          {/* Icon */}
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}
            style={{ transform: "translateZ(40px)" }}
            animate={{
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full rounded-2xl bg-dark-900 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <service.icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors"
            style={{ transform: "translateZ(30px)" }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-dark-400 text-sm leading-relaxed mb-4"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            style={{ transform: "translateZ(10px)" }}
          >
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-dark-300 border border-white/5 group-hover:border-primary-500/20 transition-colors"
              >
                {feature}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-6 pt-4 border-t border-white/5"
            style={{ transform: "translateZ(25px)" }}
          >
            {Object.entries(service.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-lg font-display font-bold text-white">
                  {value}
                </div>
                <div className="text-xs text-dark-500 capitalize">{key}</div>
              </div>
            ))}
          </motion.div>

          {/* View tech stack indicator */}
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-2 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: isHovered ? 0 : -10 }}
          >
            <span>{service.techCount}+ technologies</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>

          {/* Corner badge */}
          <motion.div
            className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
            animate={{ scale: isHovered ? 1 : 0.8, rotate: isHovered ? 0 : -45 }}
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Our Expertise"
          title="Full-Stack Digital Solutions"
          subtitle="From concept to deployment, we provide end-to-end digital services. Click on any service to explore our complete tech stack."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl glass border border-white/10"
            whileHover={{ scale: 1.02, borderColor: "rgba(14, 165, 233, 0.3)" }}
          >
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold mb-1">
                Need a custom solution?
              </p>
              <p className="text-dark-400 text-sm">
                Let&apos;s discuss your project and explore possibilities.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
              <Zap className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
