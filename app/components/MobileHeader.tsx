"use client";

interface MobileHeaderProps {
  activeSection: string;
}

export default function MobileHeader({ activeSection }: MobileHeaderProps) {
  const sectionNames: Record<string, string> = {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 w-full bg-slate-900/75 px-6 py-5 backdrop-blur md:px-12">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 transition-opacity duration-300">
        {sectionNames[activeSection] || "About"}
      </h2>
    </header>
  );
}