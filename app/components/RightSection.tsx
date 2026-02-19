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
            Full-stack developer experienced in independently delivering production{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              web and mobile applications
            </span>
            . Skilled in building CMS-driven platforms, API architectures, SaaS products, and performance-optimized websites using{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Next.js
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              React Native
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Node.js
            </span>
            , and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              MongoDB
            </span>
            .
          </p>
          <p className="mb-4 text-slate-400 light:text-slate-600 leading-relaxed">
            Currently at{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Olio Global AdTech
            </span>
            , where I've independently shipped an EdTech & placement platform, a scholarship discovery engine, enterprise e-commerce sites for international clients, and a complete{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              SaaS HRMS
            </span>{" "}
            with both web dashboard and React Native mobile app.
          </p>
          <p className="mb-4 text-slate-400 light:text-slate-600 leading-relaxed">
            These projects involve{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              SSR, SSG, and ISR
            </span>{" "}
            rendering strategies,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              RESTful API
            </span>{" "}
            design with Express,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Redux
            </span>{" "}
            state management, and background automation through{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              cron jobs
            </span>{" "}
            and scheduled scraping pipelines — along with{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Firebase
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              Docker
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              TypeScript
            </span>
            , and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              CI/CD
            </span>{" "}
            with GitHub Actions.
          </p>
          <p className="text-slate-400 light:text-slate-600 leading-relaxed">
            On the security and data side, I implement{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              JWT + bcrypt authentication
            </span>
            ,{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              role-based access control (RBAC)
            </span>
            , and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              MongoDB indexing
            </span>{" "}
            with query optimization for faster data retrieval. I also handle{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              real-time features
            </span>{" "}
            using WebSockets, build paginated RESTful API architectures, and optimize frontend performance through{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              lazy loading
            </span>
            , code splitting, and{" "}
            <span className="font-medium text-slate-200 light:text-slate-900">
              structured data markup
            </span>{" "}
            for SEO.
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
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  SSR / SSG / ISR
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
              <li>
                <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-4 py-2 text-sm font-medium leading-5 text-teal-300 light:text-teal-700 hover:bg-teal-400/20 transition-colors overflow-hidden">
                  Firebase
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
                  Web Scraping
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

          {/* Database & DevOps */}
          <div className="mb-8">
            <BlurText
              text="Database & DevOps"
              className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200 light:text-slate-900"
              delay={50}
              direction="bottom"
              animateBy="words"
            />
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Database and DevOps tools"
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
                  Mongoose
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
                  Docker
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
                  CI/CD
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
                  Nov 2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 light:text-slate-900">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 light:text-slate-900 group-hover:text-teal-300 light:group-hover:text-teal-600 focus-visible:text-teal-300 light:focus-visible:text-teal-600 group/link text-base"
                        href="https://olioglobaladtech.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Associate Software Developer at Olio Global AdTech"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <BlurText
                          text="Associate Software Developer · Olio Global AdTech"
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
                    Built a CMS-driven platform for iTPreneur managing 20+ dynamic course pages, a blog engine, event calendars, and placement drives — all backend-configurable with zero frontend redeployment. Cut admin turnaround time by 60%.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Built NovoGrad.ai — a scholarship discovery platform aggregating 1,000+ scholarships from 50+ sources via automated scraping pipelines on cron jobs. Captures 2,000+ student enquiries/month through multi-step forms, backed by paginated REST APIs and role-based admin dashboards. Reduced data retrieval latency by 45% through MongoDB indexing.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Architected 2 Next.js platforms for RheinMain and Atlas Technology — 500+ product pages with SSR + SSG and multi-level filtering. Got page load from 3.2s down to 0.9s through lazy loading, image optimization, and code splitting. 90+ Lighthouse scores across the board.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Delivered a full-stack SaaS HRMS with a Next.js web dashboard and React Native mobile app, serving 100+ employees. Geo-location validated check-in/check-out, policy-driven leave and payroll workflows, 5+ cron-based automation jobs, and RBAC with JWT auth — reduced HR reporting time by 40%.
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
                        REST APIs
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
                        Cron Jobs
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
          </ol>

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
                      aria-label="Bento — project management platform"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <BlurText
                        text="Bento"
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
                    A project management tool inspired by Linear.app. Designed the data model around issues, sprints, and team assignments, with real-time sync across clients using Pusher.js WebSockets so multiple people can work on the same board without stepping on each other.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    Built drag-and-drop Kanban boards with optimistic UI updates — the interface feels instant even before the server confirms. Redux handles the client state for complex sprint workflows, and the Express backend exposes a clean RESTful API with MongoDB persistence.
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
                    <li className="mr-1.5 mt-2">
                      <div className="relative flex items-center rounded-full bg-teal-400/10 light:bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 light:text-teal-700 overflow-hidden">
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
                      aria-label="E-Commerce Platform"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <BlurText
                        text="E-Commerce Platform"
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
                    Full-stack e-commerce platform handling the complete purchase flow — browsing, cart, checkout, payment, and order tracking. Built JWT + bcrypt auth from scratch, integrated Stripe for payments, and wired up Nodemailer to send automated order confirmations.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400 light:text-slate-600">
                    The admin side has its own dashboard for managing inventory, processing orders, and viewing user analytics. Designed the MongoDB schema to handle product variants, order states, and user roles cleanly without over-engineering it.
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
                  </ul>
                </div>
                <span className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2023 — 2024
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

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
            text="Have a project in mind, or just want to chat about building something? I'd love to hear from you."
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

    </div>
  );
}
