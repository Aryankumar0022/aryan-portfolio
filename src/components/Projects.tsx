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
    <section id="projects" className="py-10 md:py-14">


      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="section-title">Projects</h2>
        </div>
      </FadeIn>

      {/* Centered 2×2 compact grid */}
      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <span className="absolute top-3 right-3 text-[11px] font-medium tracking-wider uppercase text-accent bg-surface-solid backdrop-blur-sm px-3 py-1 rounded-full">
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
                            <h3 className="font-sans text-lg md:text-xl font-medium text-ink tracking-tight mb-1.5 leading-snug">
                              {p.title}
                            </h3>
                            <p className="text-[15px] leading-[1.75] text-muted">
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
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-warm border border-line tech-pill"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex items-center gap-4 mt-5">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-ink transition-colors"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                          </a>
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-accent transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live View
                          </a>
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
                              <div className="mt-4 pt-4 border-t border-line space-y-3 text-[14px] leading-[1.75]">
                                <div>
                                  <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium">Problem</span>
                                  <p className="body-text mt-0.5">{p.problem}</p>
                                </div>
                                <div>
                                  <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium">Approach</span>
                                  <p className="body-text mt-0.5">{p.approach}</p>
                                </div>
                                <div>
                                  <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium">Outcome</span>
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
