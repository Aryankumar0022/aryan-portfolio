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
        <div className="mb-14 text-center">
          <h2 className="section-title">Projects</h2>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-[1060px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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

                      {/* Project Image Header */}
                      <div
                        className={`relative h-40 md:h-52 overflow-hidden bg-gradient-to-br ${p.gradient} cursor-pointer`}
                        onClick={() => toggle(p.title)}
                      >

                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105 object-contain p-0"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Year Badge
                        <span className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                          {p.year}
                        </span> */}

                      </div>

                      {/* Card Content */}
                      <div className="p-5 md:p-6">

                        {/* Title + Expand */}
                        <div
                          className="flex cursor-pointer items-start justify-between gap-2"
                          onClick={() => toggle(p.title)}
                        >

                          <div className="min-w-0">

                            <h3 className="mb-1.5 font-sans text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                              {p.title}
                            </h3>

                            <p className="text-[15px] leading-[1.75] text-muted">
                              {p.description}
                            </p>

                          </div>

                          {/* Chevron */}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm"
                          >
                            <svg
                              className="h-3.5 w-3.5 text-accent"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </motion.div>

                        </div>

                        {/* Tech Stack */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="tech-pill rounded-full border border-line bg-warm px-2.5 py-0.5 text-[11px] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="mt-5 flex items-center gap-4">

                          {/* GitHub */}
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm font-medium text-muted transition hover:text-red-600"
                          >
                            GitHub
                          </a>

                          {/* Live Demo */}
{p.live && (
  <a
    href={p.live}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="text-sm font-medium text-muted transition hover:text-accent"
  >
    Live Demo
  </a>
)}

                        </div>

                        {/* Expandable Content */}
                        <AnimatePresence>

                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >

                              <div className="mt-4 space-y-3 border-t border-line pt-4 text-[14px] leading-[1.75]">

                                <div>
                                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
                                    Problem
                                  </span>

                                  <p className="body-text mt-0.5">
                                    {p.problem}
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
                                    Approach
                                  </span>

                                  <p className="body-text mt-0.5">
                                    {p.approach}
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
                                    Outcome
                                  </span>

                                  <p className="body-text mt-0.5">
                                    {p.outcome}
                                  </p>
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

        {/* View More Button */}
        {hasMore && (
          <FadeIn delay={0.2}>

            <div className="mt-10 text-center">

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

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    View more projects

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
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