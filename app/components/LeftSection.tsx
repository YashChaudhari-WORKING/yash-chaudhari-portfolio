"use client";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function LeftSection({
  activeSection,
}: {
  activeSection?: string;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Yash Chaudhari
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          React by day, Node.js by night. Turning ideas into production-ready
          apps.
        </p>

        {/* Desktop Navigation */}
        <nav
          className="nav hidden lg:block mt-16"
          aria-label="In-page jump links"
        >
          <ul className="w-max">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`group flex items-center py-3 ${
                    activeSection === section.id ? "active" : ""
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out ${
                      activeSection === section.id
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links using Lucide */}
      <ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        <li>
          <a
            href="https://linkedin.com/in/yash-chaudhari-03733a30b"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YashChaudhari-WORKING"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            <span className="sr-only">Medium</span>
            <FaMedium size={24} />
          </a>
        </li>
        <li>
          <a
            href="mailto:choudhariyash7890@gmail.com"
            className="text-slate-400 hover:text-slate-200"
          >
            <span className="sr-only">Email</span>
            <FiMail size={24} />
          </a>
        </li>
        <li>
          <a
            href="tel:+919096842842"
            className="text-slate-400 hover:text-slate-200"
          >
            <span className="sr-only">Phone</span>
            <FiPhone size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
}
