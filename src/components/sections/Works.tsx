"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, Github, ArrowRight, Eye, Star, TrendingUp } from "lucide-react";

const categories = ["All", "Web Apps", "Mobile", "E-Commerce", "SaaS", "AI/ML"];

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "SaaS",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, AI-powered insights, and multi-currency support for enterprise clients.",
    image: "/projects/fintech.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
    stats: { users: "50K+", uptime: "99.9%", growth: "+200%" },
    featured: true,
  },
  {
    id: 2,
    title: "HealthCare Mobile App",
    category: "Mobile",
    description:
      "Cross-platform healthcare application connecting patients with doctors, featuring video consultations, appointment scheduling, and prescription management.",
    image: "/projects/healthcare.jpg",
    tags: ["React Native", "Firebase", "WebRTC"],
    color: "from-green-500 to-emerald-500",
    stats: { downloads: "100K+", rating: "4.8★", consultations: "50K+" },
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Scalable multi-vendor marketplace with advanced inventory management, payment processing, and real-time analytics dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
    color: "from-purple-500 to-pink-500",
    stats: { transactions: "$2M+", merchants: "500+", orders: "10K/day" },
    featured: true,
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "AI/ML",
    description:
      "GPT-powered content creation platform with custom model fine-tuning, multi-language support, and brand voice optimization for marketing teams.",
    image: "/projects/ai-content.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "GCP"],
    color: "from-yellow-500 to-orange-500",
    stats: { generations: "1M+", accuracy: "95%", languages: "50+" },
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Portal",
    category: "Web Apps",
    description:
      "Property listing and management platform with virtual tours, mortgage calculator, and neighborhood insights powered by AI.",
    image: "/projects/realestate.jpg",
    tags: ["Vue.js", "Django", "PostgreSQL", "Mapbox"],
    color: "from-red-500 to-rose-500",
    stats: { listings: "10K+", users: "200K+", inquiries: "5K/mo" },
    featured: false,
  },
  {
    id: 6,
    title: "EdTech Learning Platform",
    category: "SaaS",
    description:
      "Interactive online learning platform with live classes, progress tracking, gamified learning experiences, and AI-powered tutoring.",
    image: "/projects/edtech.jpg",
    tags: ["React", "Go", "WebSocket", "AWS"],
    color: "from-teal-500 to-cyan-500",
    stats: { students: "75K+", courses: "500+", completion: "85%" },
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: (typeof projects)[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <motion.div
        className="glass-card overflow-hidden h-full"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Image/Placeholder */}
        <div
          className={`relative ${
            project.featured ? "h-72" : "h-48"
          } bg-gradient-to-br ${project.color} overflow-hidden`}
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid-pattern" />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: isHovered ? -20 : 0,
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`text-8xl font-display font-bold text-white/10 ${project.featured ? 'text-9xl' : ''}`}>
              {project.title.charAt(0)}
            </div>
          </motion.div>

          {/* Animated geometric shapes */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-lg"
            animate={{
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              x: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-dark-950/70 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white hover:shadow-glow transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4"
            animate={{ y: isHovered ? -5 : 0 }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
              {project.category}
            </span>
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                <Star className="w-3 h-3 fill-yellow-400" />
                Featured
              </span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${project.featured ? 'md:p-8' : ''}`}>
          <motion.h3
            className={`font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors ${
              project.featured ? 'text-2xl' : 'text-xl'
            }`}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            {project.title}
          </motion.h3>
          <p className={`text-dark-400 mb-4 ${project.featured ? 'text-base' : 'text-sm'} line-clamp-2`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-dark-300 border border-white/5 group-hover:border-primary-500/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <div className={`flex gap-4 pt-4 border-t border-white/5 ${project.featured ? 'gap-6' : ''}`}>
            {Object.entries(project.stats).map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <div className={`font-display font-semibold text-white ${project.featured ? 'text-lg' : 'text-sm'}`}>
                  {value}
                </div>
                <div className="text-xs text-dark-500 capitalize">{key}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover gradient border */}
        <motion.div
          className={`absolute inset-0 rounded-2xl pointer-events-none`}
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 0 2px rgba(14, 165, 233, 0.3)`
              : "inset 0 0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Works() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, 100, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, -100, 0], opacity: [0.15, 0.1, 0.15] }}
        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Our Work"
          title="Projects That Speak for Themselves"
          subtitle="Explore our portfolio of successful projects that have helped businesses transform and grow in the digital landscape."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow"
                  : "glass border border-white/10 text-dark-300 hover:text-white hover:border-primary-500/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl glass border border-white/10"
            whileHover={{ scale: 1.02, borderColor: "rgba(14, 165, 233, 0.3)" }}
          >
            <div className="flex items-center gap-2 text-primary-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">150+ Projects Delivered</span>
            </div>
            <p className="text-dark-400 max-w-md">
              These are just a few highlights. We&apos;ve helped companies across 10+ industries achieve their digital goals.
            </p>
          <motion.a
            href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
          </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
