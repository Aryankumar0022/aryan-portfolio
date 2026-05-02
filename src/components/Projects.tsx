"use client";

import FadeIn from "./motion/FadeIn";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const INITIAL_COUNT = 4;

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <div className="text-center mb-14">
          <span className="section-label justify-center">Projects</span>
          <h2 className="section-heading mb-5">
            Things I&apos;ve <span className="text-accent italic">built</span>.
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mx-auto">
            A few projects where I went from an idea to something real.
            Each one taught me something I didn&apos;t expect.
          </p>
        </div>
      </FadeIn>

      {/* Centered 2×2 compact grid */}
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const isOpen = expanded === p.title;

              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <FadeIn delay={i * 0.06}>
                    <motion.article
                      layout
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="glass-card overflow-hidden"
                    >
                      {/* Gradient header */}
                      <div
                        className={`relative h-40 md:h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center cursor-pointer`}
                        onClick={() => toggle(p.title)}
                      >
                        <span className="text-5xl md:text-6xl opacity-70">
                          {p.icon}
                        </span>
                        <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wider uppercase text-accent bg-surface-solid backdrop-blur-sm px-3 py-1 rounded-full">
                          {p.year}
                        </span>
                      </div>

                      {/* Card content */}
                      <div className="p-5 md:p-6">
                        <div
                          className="flex items-start justify-between gap-2 cursor-pointer"
                          onClick={() => toggle(p.title)}
                        >
                          <div className="min-w-0">
                            <h3 className="font-serif text-[15px] md:text-base text-ink tracking-tightish mb-1.5">
                              {p.title}
                            </h3>
                            <p className="text-[12px] leading-[1.6] text-muted">
                              {p.description}
                            </p>
                          </div>

                          {/* Expand chevron */}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-warm flex items-center justify-center"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-accent"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-warm border border-line tech-pill"
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
                              <div className="mt-4 pt-4 border-t border-line space-y-3 text-[13px] leading-[1.7]">
                                <div>
                                  <span className="text-[10px] uppercase tracking-[0.1em] text-accent font-semibold">Problem</span>
                                  <p className="body-text mt-0.5">{p.problem}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase tracking-[0.1em] text-accent font-semibold">Approach</span>
                                  <p className="body-text mt-0.5">{p.approach}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase tracking-[0.1em] text-accent font-semibold">Outcome</span>
                                  <p className="body-text mt-0.5">{p.outcome}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.article>
                  </FadeIn>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More / View Less */}
        {hasMore && (
          <FadeIn delay={0.2}>
            <div className="text-center mt-10">
              <button
                onClick={() => {
                  setShowAll((prev) => !prev);
                  setExpanded(null);
                }}
                className="btn-outline inline-flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    View less
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </>
                ) : (
                  <>
                    View more projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
