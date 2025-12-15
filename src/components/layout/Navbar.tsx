"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Kozio<span className="gradient-text">Masheen</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-dark-300 hover:text-white transition-colors group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="primary" size="sm" href="#contact" icon>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-950/80 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-900 border-l border-white/10 p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-2xl font-display font-semibold text-white hover:text-primary-400 transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    href="#contact"
                    className="w-full"
                    icon
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

