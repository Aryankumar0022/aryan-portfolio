"use client";

import FadeIn from "./motion/FadeIn";
import { skills } from "@/data/skills";
import type { Proficiency } from "@/data/skills";
import { useState } from "react";

const levelColor: Record<Proficiency, string> = {
  Beginner: "bg-amber-100 text-amber-700 border-amber-200",
  Intermediate: "bg-blue-100 text-blue-700 border-blue-200",
  Advanced: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const levelDot: Record<Proficiency, string> = {
  Beginner: "bg-amber-400",
  Intermediate: "bg-blue-400",
  Advanced: "bg-emerald-500",
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <span className="section-label">Skills & Tools</span>
        <h2 className="section-heading mb-14">
          What I <span className="text-accent italic">work</span> with.
        </h2>
      </FadeIn>

      {/* Bento grid — 2 cols on md, 3 cols on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.06}>
            <div className="glass-card p-6 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-serif text-lg text-ink">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function SkillPill({ name, level }: { name: string; level: Proficiency }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="skill-pill cursor-default">{name}</span>

      {/* Tooltip */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 transition-all duration-200 pointer-events-none ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <div className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-semibold border shadow-lg ${levelColor[level]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${levelDot[level]}`} />
          {level}
        </div>
        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-2 h-2 rotate-45 bg-white border-b border-r border-gray-200 -mt-1" />
        </div>
      </div>
    </div>
  );
}
