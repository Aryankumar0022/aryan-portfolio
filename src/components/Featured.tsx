"use client";

import FadeIn from "./motion/FadeIn";
import Image from "next/image";

/* ── Achievement data — replace images & details with your own ── */
type FeaturedItem = {
  title: string;
  date: string;
  keyword: string;
  image: string;

};

const featured: FeaturedItem[] = [
  {
    title: "Secured 1st position in National Buildathon",
    date: "August 2025",
    keyword: "Buildathon",
    image: "/images/featured-1.jpg",

  },
  {
    title: "Runner-up at AMHacks Hackathon",
    date: "April 2025",
    keyword: "AMHacks",
    image: "/images/featured-2.jpg",

  },
  {
    title: "Published Research Paper at IEEE Conference",
    date: "December 2024",
    keyword: "IEEE Research",
    image: "/images/featured-3.jpg",

  },
  {
    title: "Selected for Google Summer of Code",
    date: "May 2024",
    keyword: "GSoC",
    image: "/images/featured-4.jpg",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="py-10 md:py-14">


      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="section-title">Featured</h2>
        </div>
      </FadeIn>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1060px] mx-auto">
        {featured.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <a

              className="featured-tile group block"
            >
              {/* Image area */}
              <div className="relative h-52 md:h-60 rounded-xl overflow-hidden">
                {/* Placeholder gradient — replace with real images */}
                <div className={`absolute inset-0 ${placeholderGradient(i)}`} />

                {/* Glassmorphic keyword badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="featured-keyword">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span>{item.keyword}</span>
                  </div>
                </div>

                {/* Bookmark icon */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                </div>

                {/* Hover glass overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 z-[5]" />
              </div>

              {/* Text content */}
              <div className="pt-4 px-1">
                <h3 className="font-sans text-lg md:text-xl font-medium text-ink leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[14px] text-muted mt-1.5">{item.date}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* Placeholder gradients for tiles — replace with actual images later */
function placeholderGradient(index: number): string {
  const gradients = [
    "bg-gradient-to-br from-emerald-600/80 via-teal-500/60 to-cyan-400/40",
    "bg-gradient-to-br from-indigo-600/80 via-purple-500/60 to-pink-400/40",
    "bg-gradient-to-br from-amber-600/80 via-orange-500/60 to-rose-400/40",
    "bg-gradient-to-br from-sky-600/80 via-blue-500/60 to-violet-400/40",
  ];
  return gradients[index % gradients.length];
}
