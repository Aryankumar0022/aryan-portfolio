"use client";

import FadeIn from "./motion/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */
type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  link: string;
};

const tabs = ["Education", "Experience", "Achievements"] as const;
type Tab = (typeof tabs)[number];

const tabIcons: Record<Tab, JSX.Element> = {
  Education: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.097" />
    </svg>
  ),
  Experience: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-6.577-.926 2.184 2.184 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3.75 12.739V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 14.25 3h-4.5A2.25 2.25 0 0 0 7.5 5.25v.894" />
    </svg>
  ),
  Achievements: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m6-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
};

const data: Record<Tab, TimelineItem[]> = {
  Education: [
    {
      title: "B.Tech in Computer Science",
      subtitle: "Indian Institute of Technology",
      date: "2021 — 2025",
      description:
        "Focused on machine learning, algorithms, and computer vision. Graduated with distinction.",
      link: "https://example.com/education/btech",
    },
    {
      title: "Higher Secondary (XII)",
      subtitle: "Delhi Public School",
      date: "2019 — 2021",
      description:
        "Science stream with Computer Science. Scored 95% in board examinations.",
      link: "https://example.com/education/school",
    },
    {
      title: "Secondary (X)",
      subtitle: "Delhi Public School",
      date: "2017 — 2019",
      description:
        "Foundation in mathematics and sciences. Scored 94% in board examinations.",
      link: "https://example.com/education/secondary",
    },
  ],
  Experience: [
    {
      title: "ML Engineer Intern",
      subtitle: "Tech Corp Inc.",
      date: "Jun 2024 — Aug 2024",
      description:
        "Built real-time defect detection pipeline using PyTorch and deployed on edge devices.",
      link: "https://example.com/experience/techcorp",
    },
    {
      title: "Research Assistant",
      subtitle: "AI Lab, University",
      date: "Jan 2024 — May 2024",
      description:
        "Contributed to a paper on efficient transformer architectures for on-device NLP.",
      link: "https://example.com/experience/research",
    },
    {
      title: "Full Stack Developer",
      subtitle: "Freelance",
      date: "2022 — 2023",
      description:
        "Designed and shipped 3 production web apps using React, Next.js, and Node.js for startups.",
      link: "https://example.com/experience/freelance",
    },
  ],
  Achievements: [
    {
      title: "Winner — National Hackathon",
      subtitle: "HackIndia 2024",
      date: "Mar 2024",
      description:
        "Built an AI-powered accessibility tool that won first place among 500+ teams.",
      link: "https://example.com/achievements/hackathon",
    },
    {
      title: "Published Research Paper",
      subtitle: "IEEE Conference",
      date: "Dec 2023",
      description:
        "Co-authored a paper on lightweight pose estimation for mobile devices.",
      link: "https://example.com/achievements/paper",
    },
    {
      title: "Open Source Contributor",
      subtitle: "TensorFlow & FastAPI",
      date: "2023 — Present",
      description:
        "Active contributor with 15+ merged PRs across popular ML and backend frameworks.",
      link: "https://example.com/achievements/opensource",
    },
  ],
};

/* ── Component ── */
export default function Qualifications() {
  const [active, setActive] = useState<Tab>("Education");

  return (
    <section id="qualifications" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <div className="text-center mb-12">
          <span className="section-label justify-center">Qualifications</span>
          <h2 className="section-heading">
            My <span className="text-accent italic">journey</span>.
          </h2>
        </div>
      </FadeIn>

      {/* Tab navigation */}
      <FadeIn delay={0.05}>
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`qual-tab ${active === tab ? "qual-tab-active" : ""}`}
            >
              {tabIcons[tab]}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Timeline content */}
      <div className="max-w-[700px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-line" />

              <div className="space-y-8">
                {data[active].map((item, i) => (
                  <FadeIn key={item.title} delay={i * 0.08}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative pl-9">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-accent bg-surface-solid flex items-center justify-center group-hover:bg-accent-light transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>

                        {/* Card */}
                        <div className="glass-card p-5 md:p-6 group-hover:border-accent/30 transition-all duration-300">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="font-serif text-base md:text-lg text-ink leading-tight">
                              {item.title}
                            </h3>
                            <span className="text-[11px] font-medium text-accent whitespace-nowrap shrink-0 mt-1">
                              {item.date}
                            </span>
                          </div>

                          <p className="text-[13px] font-medium text-accent/70 mb-2">
                            {item.subtitle}
                          </p>

                          <p className="text-[13px] leading-[1.7] body-text">
                            {item.description}
                          </p>

                          {/* Arrow indicator */}
                          <div className="flex items-center gap-1 mt-3 text-[11px] text-muted group-hover:text-accent transition-colors duration-300">
                            <span>View details</span>
                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
