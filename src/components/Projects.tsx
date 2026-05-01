"use client";

import FadeIn from "./motion/FadeIn";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <span className="section-label">Projects</span>
        <h2 className="section-heading mb-5">
          Things I&apos;ve <span className="text-accent italic">built</span>.
        </h2>
        <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-14">
          A few projects where I went from an idea to something real.
          Each one taught me something I didn&apos;t expect.
        </p>
      </FadeIn>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => {
          const isOpen = expanded === p.title;

          return (
            <FadeIn key={p.title} delay={i * 0.08}>
              <motion.article
                layout
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass-card overflow-hidden"
              >
                {/* Gradient thumbnail */}
                <div
                  className={`relative h-40 md:h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center cursor-pointer`}
                  onClick={() => toggle(p.title)}
                >
                  <span className="text-5xl md:text-6xl opacity-70 group-hover:opacity-100 transition-all duration-500">
                    {p.icon}
                  </span>
                  <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-wider uppercase text-accent bg-surface-solid/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {p.year}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-5 md:p-6">
                  <div
                    className="flex items-start justify-between gap-3 cursor-pointer"
                    onClick={() => toggle(p.title)}
                  >
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg md:text-xl text-ink tracking-tightish mb-2">
                        {p.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7] text-muted">
                        {p.description}
                      </p>
                    </div>

                    {/* Expand chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-1 w-7 h-7 rounded-full bg-warm flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Tech pills (always visible) */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-warm border border-line/40 text-ink/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-line/30 space-y-4 text-[14px] leading-[1.75]">
                          <div>
                            <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-semibold">Problem</span>
                            <p className="text-ink/80 mt-1">{p.problem}</p>
                          </div>
                          <div>
                            <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-semibold">Approach</span>
                            <p className="text-ink/80 mt-1">{p.approach}</p>
                          </div>
                          <div>
                            <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-semibold">Outcome</span>
                            <p className="text-ink/80 mt-1">{p.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
