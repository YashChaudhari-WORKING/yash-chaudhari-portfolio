"use client";

interface MobileHeaderProps {
  activeSection: string;
  isVisible: boolean;
}

export default function MobileHeader({
  activeSection,
  isVisible,
}: MobileHeaderProps) {
  const sectionNames: Record<string, string> = {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  };

  return (
    <header
      className={`lg:hidden sticky top-0 z-50 w-full bg-slate-900/75 px-6 py-5 backdrop-blur md:px-12 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        {sectionNames[activeSection] || "About"}
      </h2>
    </header>
  );
}