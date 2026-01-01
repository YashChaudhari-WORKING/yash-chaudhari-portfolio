"use client";

import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurText from "./animated/TextBlur";

export default function RightSection() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show thank you message
        setShowThankYou(true);
        // Reset form
        setFormData({ name: "", email: "", message: "" });

        // Hide thank you message and form after 4 seconds
        setTimeout(() => {
          setShowThankYou(false);
          setShowContactForm(false);
        }, 4000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section) => {
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in");
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="lg:w-1/2 md:py-18 lg:py-24">
      {/* About Section */}
      <section
        id="about"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="mb-16 mt-12 sm:mt-0 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 text-slate-400 light:text-slate-600 leading-relaxed">
            I'm Yash, a{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              full-stack developer
            </span>{" "}
            passionate about creating reliable web and mobile solutions. I work
            with{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              React
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Next.js
            </span>
            , and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              React Native
            </span>{" "}
            to build scalable applications that solve real problems. My strength
            lies in understanding both the{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              technical and business sides
            </span>{" "}
            of development, allowing me to contribute meaningfully to the
            complete development process while collaborating effectively with
            cross-functional teams.
          </p>
          <p className="mb-4 text-slate-400 light:text-slate-600 leading-relaxed">
            I'm proficient in{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              JavaScript
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              TypeScript
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Node.js
            </span>
            , and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Redux
            </span>
            , with hands-on experience in{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              MongoDB
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              RESTful APIs
            </span>
            . In my current role, I've contributed to architecting{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              enterprise websites
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              HRMS systems
            </span>
            , taking ownership of features from planning through deployment. I
            enjoy working closely with teams to ensure our solutions perform
            well in production and meet actual Client needs.
          </p>
          <p className="text-slate-400 light:text-slate-600 leading-relaxed">
            I believe in{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              continuous learning
            </span>{" "}
            and staying current with technology trends. I've built projects like
            an{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              e-commerce platform
            </span>{" "}
            with Stripe integration and a{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              project management tool (linear.app)
            </span>{" "}
            with real-time collaboration features. While I'm still growing as a
            developer, I approach each project with attention to{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              architectural decisions
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              user experience
            </span>
            . I'm looking for opportunities where I can contribute to meaningful
            solutions while expanding my skills alongside experienced teammates.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Skills and technologies"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            Skills
          </h2>
        </div>
        <div>
          {/* Frontend Technologies */}
          <div className="mb-8">
            <BlurText
              text="Frontend Technologies"
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200 light:text-slate-900"
              delay={50}
              direction="bottom"
              animateBy="words"
            />
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Frontend technologies"
            >
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  React.js
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Next.js
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  React Native
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Redux
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Tailwind CSS
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Backend Technologies */}
          <div className="mb-8">
            <BlurText
              text="Backend Technologies"
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200 light:text-slate-900"
              delay={50}
              direction="bottom"
              animateBy="words"
            />
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Backend technologies"
            >
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Node.js
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Express.js
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  RESTful APIs
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="mb-8">
            <BlurText
              text="Programming Languages"
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200 light:text-slate-900"
              delay={50}
              direction="bottom"
              animateBy="words"
            />
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Programming languages"
            >
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  JavaScript
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  TypeScript
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Database & Tools */}
          <div className="mb-8">
            <BlurText
              text="Database & Tools"
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200 light:text-slate-900"
              delay={50}
              direction="bottom"
              animateBy="words"
            />
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Database and development tools"
            >
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  MongoDB
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  MySQL
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Git
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  GitHub
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Postman
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Vercel
                  <BorderBeam
                    size={30}
                    duration={4}
                    delay={0}
                    reverse={false}
                    colorFrom="#14b8a6"
                    colorTo="#0d9488"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 light:text-slate-900">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group/link text-base"
                        href="https://olioglobaladtech.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Senior Frontend Engineer at Upstatement"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <BlurText
                          text="Junior Developer · Olio Global AdTech"
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 text-base"
                          delay={50}
                          direction="bottom"
                          animateBy="words"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    At Olio Global AdTech, I've been contributing to enterprise
                    solutions while learning from experienced developers. I
                    helped develop websites for RheinMain and Atlas Technology
                    using Next.js, focusing on frontend components and
                    performance optimization. My key contribution was creating 8
                    marketing landing pages that measurably improved campaign
                    engagement rates.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    I've also contributed to building an HRMS system with React
                    Native, developing mobile app features for leave management
                    that now serve over 100 employees. Currently, I'm working on
                    a real-time PMP Chat application and NovaGrad scholarship
                    platform, gaining valuable experience with state management,
                    data handling, and production deployment while collaborating
                    with senior team members.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        React
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Next.js
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        React Native
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Redux
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Node.js
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        MongoDB
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Add more experience items here */}
          </ol>

          {/* Resume Link */}
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 light:text-slate-900 hover:text-teal-300 light:hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group"
              href="/static/Yash_Chaudhari_Full_Stack_Developer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Full Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Education background"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            Education
          </h2>
        </div>
        <div>
          <ol className="group/list">
            {/* Master's Degree */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  May 2022 — July 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <BlurText
                      text="Master of Science in Computer Science"
                      className="text-base text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600"
                      delay={50}
                      direction="bottom"
                      animateBy="words"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Shri Shivaji Vidya Prasarak Sanstha's Science College,
                    Dhule, Maharashtra, India
                  </p>
                  <div className="mt-3 flex items-start gap-2">
                    <div className="mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-teal-300 light:text-teal-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-teal-300 light:text-teal-600">
                        CGPA: 9.02
                      </p>
                      <p className="mt-1 text-sm leading-normal text-slate-400">
                        Ranked 3rd in MSc Computer Science (2024)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Bachelor's Degree */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  May 2019 — May 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <BlurText
                      text="Bachelor of Science in Computer Science"
                      className="text-base text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600"
                      delay={50}
                      direction="bottom"
                      animateBy="words"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Shri Shivaji Vidya Prasarak Sanstha's Science College,
                    Dhule, Maharashtra, India
                  </p>
                  <div className="mt-3 flex items-start gap-2">
                    <div className="mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-teal-300 light:text-teal-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-teal-300 light:text-teal-600">
                        CGPA: 9.42
                      </p>
                      <p className="mt-1 text-sm leading-normal text-slate-400">
                        Ranked 1st in BSc Computer Science (2022)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            Projects
          </h2>
        </div>

        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group/link text-base"
                      href="https://github.com/YashChaudhari-WORKING/Bento"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Bento (Linear.app clone)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <BlurText
                        text="Bento (Linear.app Inspired)"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 text-base"
                        delay={50}
                        direction="bottom"
                        animateBy="words"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Developing a comprehensive project management platform using
                    Next.js and TypeScript with real-time team collaboration,
                    issue tracking, and sprint planning capabilities.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Building features for task assignment, progress tracking,
                    team workflows, and project roadmaps with intuitive
                    drag-and-drop interface and status management.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Next.js
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Express
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Redux
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Pusher.js
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2025 — Present
                </span>
              </div>
            </li>

            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group/link text-base"
                      href="https://github.com/YashChaudhari-WORKING/MERN-_-E-Com-_-Online-store-"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="E-Commerce Online Store"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <BlurText
                        text="E-Commerce (Online Store) Website"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 text-base"
                        delay={50}
                        direction="bottom"
                        animateBy="words"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Built a full-featured e-commerce platform using MERN stack
                    with user authentication, product catalog, shopping cart
                    functionality, and order management system.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Integrated Stripe payment gateway for secure transactions
                    and implemented JWT-based authentication with bcrypt
                    password encryption for enhanced security.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Developed admin dashboard for inventory management, order
                    tracking, and user management with automated email
                    notifications via Nodemailer for order confirmations and
                    updates.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Next.js
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Express
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Redux
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
                        Stripe
                        <BorderBeam
                          size={30}
                          duration={4}
                          delay={0}
                          reverse={false}
                          colorFrom="#14b8a6"
                          colorTo="#0d9488"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2023 - 2024
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Blog Section - Hidden */}
      {/* <section
        id="blog"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Blog posts"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Blog
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <img
                  alt="Blog post thumbnail"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 48'%3E%3Crect width='200' height='48' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3ENext.js%3C/text%3E%3C/svg%3E"
                />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    2024
                  </div>
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Getting Started with Next.js 15"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Getting Started with Next.js{" "}
                        <span className="inline-block">
                          15
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <img
                  alt="Blog post thumbnail"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 48'%3E%3Crect width='200' height='48' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3ETailwind%3C/text%3E%3C/svg%3E"
                />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    2024
                  </div>
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Mastering Tailwind CSS Animations"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Mastering Tailwind CSS{" "}
                        <span className="inline-block">
                          Animations
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 light:lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <img
                  alt="Blog post thumbnail"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 48'%3E%3Crect width='200' height='48' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'%3EReact%3C/text%3E%3C/svg%3E"
                />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    2024
                  </div>
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Building Accessible React Components"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Building Accessible React{" "}
                        <span className="inline-block">
                          Components
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Contact information"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 light:bg-white/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 light:text-slate-900 lg:sr-only">
            Contact
          </h2>
        </div>
        <div>
          <BlurText
            text="I'm always Open to opportunities to contribute and grow happy to connect!"
            className="mb-4 text-slate-400 light:text-slate-600 leading-relaxed"
            delay={50}
            direction="bottom"
            animateBy="words"
          />
          <button
            onClick={() => setShowContactForm(!showContactForm)}
            className="inline-flex items-center font-medium leading-tight text-slate-200 light:text-slate-900 hover:text-teal-300 light:hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group transition-colors"
          >
            <span>{showContactForm ? "Hide form" : "Get in touch"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none ${
                showContactForm ? "rotate-90" : ""
              }`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Contact Form */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showContactForm && !showThankYou
                ? "max-h-[600px] opacity-100 mt-8"
                : "max-h-0 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-200 light:text-slate-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent text-slate-200 light:text-slate-900 px-0 py-2 border-0 border-b-2 border-slate-600 light:border-slate-300 focus:border-teal-300 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-slate-500 light:placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-200 light:text-slate-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent text-slate-200 light:text-slate-900 px-0 py-2 border-0 border-b-2 border-slate-600 light:border-slate-300 focus:border-teal-300 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-slate-500 light:placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-200 light:text-slate-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-transparent text-slate-200 light:text-slate-900 px-0 py-2 border-0 border-b-2 border-slate-600 light:border-slate-300 focus:border-teal-300 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-slate-500 light:placeholder-slate-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-400/10 light:bg-teal-400/20 hover:bg-teal-400/20 light:hover:bg-teal-400/30 text-teal-300 light:text-teal-700 font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300 light:focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-slate-900 light:focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Thank You Message */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showThankYou ? "max-h-20 opacity-100 mt-8" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-slate-200 light:text-slate-900 text-base leading-relaxed">
              Thanks! I'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </footer> */}
    </div>
  );
}
