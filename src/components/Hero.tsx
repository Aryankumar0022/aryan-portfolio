"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="grid md:grid-cols-[1fr_300px] gap-10 md:gap-14 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="section-label mb-6"
          >
            Software Engineer · AI Enthusiast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-[2.8rem] md:text-[3.6rem] leading-[1.1] tracking-tight text-ink"
          >
            Hi, I&apos;m{" "}
            <span
              className={`aryan-word text-accent ${isDark ? "flipped" : ""}`}
              onClick={toggle}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") toggle(); }}
              title={isDark ? "Click to switch to light mode" : "Try clicking me!"}
            >
              Aryan
            </span>
            <br />
            I build things
            <br />
            <span className="text-muted italic">that matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-7 max-w-[480px] text-[15px] text-muted leading-[1.8]"
          >
            Working at the intersection of machine learning, computer vision,
            and thoughtful engineering. I turn complex research into things
            people can actually use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-accent/8 blur-2xl scale-110" />
            {/* Decorative offset */}
            <div className="absolute -inset-1.5 rounded-2xl border border-accent/15 -rotate-2" />
            <Image
              src="/images/aryan-hero.jpg"
              alt="Aryan Kumar"
              width={260}
              height={340}
              className="relative img-frame object-cover w-[220px] h-[290px] md:w-[260px] md:h-[340px] rotate-1"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
