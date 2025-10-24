"use client";

import { useEffect, useRef } from "react";

export default function RightSection() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
    <div className="lg:w-1/2 lg:py-24">
      {/* About Section */}
      <section
        id="about"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 text-slate-400 leading-relaxed">
            I'm Yash, a{" "}
            <span className="font-medium text-slate-200">
              full-stack developer
            </span>{" "}
            passionate about creating reliable web and mobile solutions. I work
            with <span className="font-medium text-slate-200">React</span>,{" "}
            <span className="font-medium text-slate-200">Next.js</span>, and{" "}
            <span className="font-medium text-slate-200">React Native</span> to
            build scalable applications that solve real problems. My strength
            lies in understanding both the{" "}
            <span className="font-medium text-slate-200">
              technical and business sides
            </span>{" "}
            of development, allowing me to contribute meaningfully to the
            complete development process while collaborating effectively with
            cross-functional teams.
          </p>
          <p className="mb-4 text-slate-400 leading-relaxed">
            I'm proficient in{" "}
            <span className="font-medium text-slate-200">JavaScript</span>,{" "}
            <span className="font-medium text-slate-200">TypeScript</span>,{" "}
            <span className="font-medium text-slate-200">Node.js</span>, and{" "}
            <span className="font-medium text-slate-200">Redux</span>, with
            hands-on experience in{" "}
            <span className="font-medium text-slate-200">MongoDB</span>,{" "}
            <span className="font-medium text-slate-200">RESTful APIs</span>. In
            my current role, I've contributed to architecting{" "}
            <span className="font-medium text-slate-200">
              enterprise websites
            </span>{" "}
            and <span className="font-medium text-slate-200">HRMS systems</span>
            , taking ownership of features from planning through deployment. I
            enjoy working closely with teams to ensure our solutions perform
            well in production and meet actual Client needs.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I believe in{" "}
            <span className="font-medium text-slate-200">
              continuous learning
            </span>{" "}
            and staying current with technology trends. I've built projects like
            an{" "}
            <span className="font-medium text-slate-200">
              e-commerce platform
            </span>{" "}
            with Stripe integration and a{" "}
            <span className="font-medium text-slate-200">
              project management tool (linear.app)
            </span>{" "}
            with real-time collaboration features. While I'm still growing as a
            developer, I approach each project with attention to{" "}
            <span className="font-medium text-slate-200">
              architectural decisions
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-200">user experience</span>.
            I'm looking for opportunities where I can contribute to meaningful
            solutions while expanding my skills alongside experienced teammates.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://olioglobaladtech.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Senior Frontend Engineer at Upstatement"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Junior Developer ·{" "}
                          <span className="inline-block">
                            Olio Global AdTech
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
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    At Olio Global AdTech, I've been contributing to enterprise
                    solutions while learning from experienced developers. I
                    helped develop websites for RheinMain and Atlas Technology
                    using Next.js, focusing on frontend components and
                    performance optimization. My key contribution was creating 8
                    marketing landing pages that measurably improved campaign
                    engagement rates.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
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
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React Native
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Redux
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        MongoDB
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
              className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group"
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

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>

        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="https://github.com/YashChaudhari-WORKING/Bento"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Bento (Linear.app clone)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Bento (Linear.app Inspired){" "}
                        <span className="inline-block">
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
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Developing a comprehensive project management platform using
                    Next.js and TypeScript with real-time team collaboration,
                    issue tracking, and sprint planning capabilities.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Building features for task assignment, progress tracking,
                    team workflows, and project roadmaps with intuitive
                    drag-and-drop interface and status management.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Express
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Redux
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Pusher.js
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2025 — Present
                </span>
              </div>
            </li>
            {/* Add more project items here */}
          </ul>
        </div>

        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="https://github.com/YashChaudhari-WORKING/MERN-_-E-Com-_-Online-store-"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Bento (Linear.app clone)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        E-Commerce (Online Store) Website{" "}
                        <span className="inline-block">
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
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Built a full-featured e-commerce platform using MERN stack
                    with user authentication, product catalog, shopping cart
                    functionality, and order management system.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Integrated Stripe payment gateway for secure transactions
                    and implemented JWT-based authentication with bcrypt
                    password encryption for enhanced security.
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
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
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Express
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Redux
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Stripe
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2023 - 2024
                </span>
              </div>
            </li>
            {/* Add more project items here */}
          </ul>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        ref={(el) => {
          sectionRefs.current[3] = el;
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
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
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
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
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
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.1)]"></div>
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
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-24 opacity-0 transition-all duration-700"
        aria-label="Contact information"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Contact
          </h2>
        </div>
        <div>
          <p className="mb-4 text-slate-400 leading-relaxed">
            I'm always Open to opportunities to contribute and grow <br />
            happy to connect!
          </p>
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group"
            href="mailto:choudhariyash7890@gmail.com"
          >
            <span>Get in touch</span>
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
