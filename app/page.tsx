"use client";

import { useState, useEffect } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMobileHeader, setShowMobileHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "blog", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check if user has scrolled to the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10; // 10px threshold

      // If at bottom, always set to contact
      if (isAtBottom) {
        setActiveSection("contact");
      } else {
        // Normal section detection
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }

      // Show mobile header only when scrolled past about section
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        const aboutBottom = aboutElement.offsetTop + aboutElement.offsetHeight;
        setShowMobileHeader(window.scrollY > aboutBottom - 100); // 100px before about ends
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative">
      {/* Cursor spotlight effect - Enhanced with dual gradients */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.08), transparent 40%),
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05), transparent 80%)
          `,
        }}
      ></div>

      <div className="min-h-screen relative">
        {/* Mobile Header - only visible on mobile and when scrolled past about */}
        <MobileHeader
          activeSection={activeSection}
          isVisible={showMobileHeader}
        />

        {/* Main Content */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <LeftSection activeSection={activeSection} />
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
