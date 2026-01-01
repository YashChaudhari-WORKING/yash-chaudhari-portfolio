"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isLight;
        setIsLight(newTheme);
        document.documentElement.classList.toggle("light");
        localStorage.setItem("theme", newTheme ? "light" : "dark");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isLight]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:scale-110 light:bg-white light:border-slate-300 light:hover:border-teal-500/50 group"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        {isLight ? (
          <Sun className="h-5 w-5 text-slate-400 transition-all duration-300 light:text-slate-700 group-hover:text-teal-300 light:group-hover:text-teal-600" />
        ) : (
          <Moon className="h-5 w-5 text-slate-400 transition-all duration-300 light:text-slate-700 group-hover:text-teal-300 light:group-hover:text-teal-600" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}