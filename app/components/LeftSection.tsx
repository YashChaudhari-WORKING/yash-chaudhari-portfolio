"use client";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import BlurText from "./animated/TextBlur";
import { BorderBeam } from "@/components/magicui/border-beam";

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
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <BlurText
          text="Yash Chaudhari"
          className="text-4xl font-bold tracking-tight text-slate-200 light:text-slate-900 sm:text-5xl"
          delay={50}
          animateBy="words"
        />
        <BlurText
          text="Full-Stack Developer"
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 light:text-slate-900 sm:text-xl"
          delay={80}
          animateBy="words"
        />
        <BlurText
          text="I build web and mobile apps across the full stack — frontend, backend, and everything in between."
          className="mt-4 max-w-xs leading-normal text-slate-400 light:text-slate-600"
          delay={30}
          animateBy="words"
        />

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
                        ? "w-16 bg-slate-200 light:bg-slate-900"
                        : "w-8 bg-slate-600 light:bg-slate-400 group-hover:w-16 group-hover:bg-slate-200 light:group-hover:bg-slate-900"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-slate-200 light:text-slate-900"
                        : "text-slate-500 light:text-slate-600 group-hover:text-slate-200 light:group-hover:text-slate-900"
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

      {/* Resume + Social Links */}
      <div className="ml-1 mt-8 flex items-center gap-5">
        <a
          href="/static/Yash_Chaudhari_Full_Stack_Dev_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full bg-teal-400/10 light:bg-teal-400/20 px-5 py-2.5 text-sm font-medium text-teal-300 light:text-teal-700 transition-all duration-300 hover:bg-teal-400/20 light:hover:bg-teal-400/30 overflow-hidden"
        >
          <span>View Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
          <BorderBeam
            size={40}
            duration={4}
            delay={0}
            reverse={false}
            colorFrom="#14b8a6"
            colorTo="#0d9488"
          />
        </a>
      </div>

      {/* Social Links */}
      <ul
        className="ml-1 mt-5 flex items-center gap-5"
        aria-label="Social media"
      >
        <li>
          <a
            href="https://linkedin.com/in/yash-chaudhari-03733a30b"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"
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
            className="text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@choudhariyash7890"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"
          >
            <span className="sr-only">Medium</span>
            <FaMedium size={24} />
          </a>
        </li>
        <li>
          <a
            href="mailto:choudhariyash7890@gmail.com"
            className="text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"
          >
            <span className="sr-only">Email</span>
            <FiMail size={24} />
          </a>
        </li>
        <li>
          <a
            href="tel:+919096842842"
            className="text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"
          >
            <span className="sr-only">Phone</span>
            <FiPhone size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
}
