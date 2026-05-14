"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledBg = isDark
    ? "bg-[#162b1e]/90 backdrop-blur-xl border-b border-[#2a5e3c]/50 shadow-[0_1px_12px_rgba(0,0,0,0.3)]"
    : "bg-bg/70 backdrop-blur-xl border-b border-line/40 shadow-[0_1px_12px_rgba(45,106,79,0.04)]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? scrolledBg
          : isDark
            ? "bg-transparent border-b border-transparent"
            : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-[1060px] items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tightish text-ink hover:text-accent transition-colors duration-300"
        >
          AK
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-7 text-[15px] text-muted font-medium">
            {["About", "Projects", "Skills", "Qualifications", "Featured", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="link-hover hover:text-ink transition-colors duration-300 py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Availability badge */}
          <div className={`flex items-center gap-2 text-[12px] font-medium px-3 py-1.5 rounded-full border ${isDark
              ? "bg-[#1a3d28] border-[#2a5e3c] text-[#5ee89a]"
              : "bg-accent-light text-muted border-accent/10"
            }`}>
            <span className="status-dot" />
            <span>Available for work</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
