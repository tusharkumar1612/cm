"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@codemasheen.in",
    href: "mailto:hello@codemasheen.in",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bangalore, Karnataka, India",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM IST",
    href: "#",
    color: "from-orange-500 to-amber-500",
  },
];

const services = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps & CI/CD",
  "GPU & AI Solutions",
  "Other",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-dark-500 
    transition-all outline-none
    ${focusedField === fieldName 
      ? "border-primary-500/50 ring-2 ring-primary-500/20 bg-white/10" 
      : "border-white/10 hover:border-white/20"
    }
  `;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          tag="Get In Touch"
          title="Let's Build Something Amazing"
          subtitle="Ready to transform your ideas into reality? Let's discuss your project and explore how we can help."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-4 p-5 glass-card group hover:border-primary-500/30 transition-all"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-0.5`}
                    whileHover={{ rotate: 10 }}
                  >
                    <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center group-hover:bg-transparent transition-colors">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <div className="text-sm text-dark-500 mb-1">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-dark-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
              
              <motion.a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 hover:border-primary-500/40 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Schedule a Call</div>
                  <div className="text-sm text-dark-400">Book a 30-min discovery session</div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Live Chat</div>
                  <div className="text-sm text-dark-400">Get instant answers</div>
                </div>
                <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium ml-auto">
                  Online
                </span>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
            >
              <div className="flex items-center gap-2 text-primary-400 mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Why Choose Us?</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Free initial consultation",
                  "Transparent pricing",
                  "Dedicated project manager",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-dark-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(34, 197, 94, 0)",
                        "0 0 40px rgba(34, 197, 94, 0.3)",
                        "0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-dark-400 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("name")}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("email")}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("company")}
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("service")} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-dark-900">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-dark-900">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses("budget")} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-dark-900">Select budget range</option>
                      <option value="<10k" className="bg-dark-900">Less than $10,000</option>
                      <option value="10k-25k" className="bg-dark-900">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-dark-900">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-dark-900">$50,000 - $100,000</option>
                      <option value=">100k" className="bg-dark-900">More than $100,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses("message")} resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold overflow-hidden group disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  {/* Form footer */}
                  <p className="text-center text-dark-500 text-sm">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-primary-400 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
