"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO",
    company: "TechStartup India",
    image: "/testimonials/1.jpg",
    rating: 5,
    quote:
      "CodeMasheen transformed our vision into a stunning reality. Their expertise in both design and development is unmatched. The team delivered beyond our expectations, and our users love the new experience.",
    highlight: "Delivered beyond expectations",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "GlobalTech Solutions",
    image: "/testimonials/2.jpg",
    rating: 5,
    quote:
      "Working with CodeMasheen was an absolute pleasure. They understood our complex requirements and delivered a scalable solution that handles millions of users with ease. Truly exceptional work.",
    highlight: "Handles millions of users",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Founder & CEO",
    company: "InnovatePro",
    image: "/testimonials/3.jpg",
    rating: 5,
    quote:
      "The team's technical prowess and attention to detail is exceptional. They didn't just build an app, they built a foundation for our entire digital ecosystem. Best decision we ever made.",
    highlight: "Foundation for digital ecosystem",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Director of Engineering",
    company: "FinanceFirst",
    image: "/testimonials/4.jpg",
    rating: 5,
    quote:
      "Their DevOps expertise helped us achieve 99.99% uptime. The CI/CD pipeline they implemented reduced our deployment time by 80%. Truly exceptional work that transformed our operations.",
    highlight: "99.99% uptime achieved",
  },
  {
    id: 5,
    name: "David Park",
    role: "VP of Product",
    company: "E-Commerce Giant",
    image: "/testimonials/5.jpg",
    rating: 5,
    quote:
      "From mobile app to cloud infrastructure, CodeMasheen delivered everything. Their holistic approach to digital solutions is exactly what we needed. Revenue increased by 150% post-launch.",
    highlight: "150% revenue increase",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.05, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our partners have to say about working with us."
        />

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote decoration */}
            <motion.div
              className="absolute -top-8 -left-8 opacity-20"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Quote className="w-24 h-24 text-primary-500" />
            </motion.div>

            {/* Progress bar */}
            <div className="absolute -top-4 left-0 right-0 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={activeIndex}
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-8 md:p-12"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-6"
                  >
                    ✨ {testimonials[activeIndex].highlight}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-xl"
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(14, 165, 233, 0)",
                          "0 0 30px rgba(14, 165, 233, 0.3)",
                          "0 0 0 rgba(14, 165, 233, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {testimonials[activeIndex].name.charAt(0)}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-dark-400 text-sm">
                        {testimonials[activeIndex].role} at{" "}
                        <span className="text-primary-400">
                          {testimonials[activeIndex].company}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-primary-500/30 hover:bg-primary-500/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-primary-500 to-accent-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Play/Pause button */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full glass border flex items-center justify-center text-white transition-all ${
                isAutoPlaying
                  ? "border-primary-500/30 bg-primary-500/10"
                  : "border-white/10"
              }`}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-primary-500/30 hover:bg-primary-500/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Grid (smaller cards) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 hover:border-primary-500/30 transition-all cursor-pointer"
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-dark-300 text-sm line-clamp-3 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/50 to-accent-500/50 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-dark-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
