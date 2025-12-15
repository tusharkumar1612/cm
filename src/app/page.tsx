"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Works } from "@/components/sections/Works";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is a page reload or first visit
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    
    if (hasLoaded) {
      setIsLoading(false);
      setShowContent(true);
    } else {
      // First visit - show loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
        setTimeout(() => setShowContent(true), 100);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Custom cursor glow effect */}
            <CursorGlow />

            {/* Hero Section with 3D background */}
            <Hero />

            {/* Services Section */}
            <Services />

            {/* About Section */}
            <About />

            {/* Process Section */}
            <Process />

            {/* Portfolio/Works */}
            <Works />

            {/* Clients & Tech Stack */}
            <Clients />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <CTA />

            {/* Contact Section */}
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
