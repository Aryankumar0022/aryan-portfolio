"use client";

import FadeIn from "./motion/FadeIn";
import Image from "next/image";
import { useState } from "react";

/* ── Achievement data ── */
type FeaturedItem = {
  title: string;
  date: string;
  keyword: string;
  image: string;
};

const featured: FeaturedItem[] = [
  {
    title: "Secured 1st position in Snap Syntax Verge 2026",
    date: "April 2026",
    keyword: "Coding Challenge",
    image: "/images/Snap-syntax.JPG",
  },

  {
    title: "Secured 2nd position in Innowave Verge 2026",
    date: "April 2026",
    keyword: "Business Challenge",
    image: "/images/Innowave-Verge.JPG.png",
  },

  {
    title: "Participated in Smart India Hackathon 2025",
    date: "September 2025",
    keyword: "Smart India Hackathon",
    image: "/images/Smart-india-Hackathon.png",
  },
];

export default function Featured() {

  const INITIAL_COUNT = 4;

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? featured
    : featured.slice(0, INITIAL_COUNT);

  const hasMore = featured.length > INITIAL_COUNT;

  return (
    <section id="featured" className="py-10 md:py-14">

      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="section-title">Featured</h2>
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-6 md:grid-cols-2">

        {visibleItems.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>

            <a className="featured-tile group block">

              {/* Image Card */}
              <div className="relative h-52 overflow-hidden rounded-xl bg-surface-solid md:h-60">

                {/* Image */}
                {item.image && item.image !== "" ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 ${placeholderGradient(i)}`}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

                {/* Keyword Badge */}
                <div className="absolute bottom-3 left-3 z-10">

                  <div className="featured-keyword">

                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>

                    <span>{item.keyword}</span>

                  </div>

                </div>

                {/* Bookmark Icon */}
                <div className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:bg-white/30">

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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>

                </div>

              </div>

              {/* Text Content */}
              <div className="px-1 pt-4">

                <h3 className="font-sans text-lg font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-accent md:text-xl">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[14px] text-muted">
                  {item.date}
                </p>

              </div>

            </a>

          </FadeIn>
        ))}

      </div>

      {/* View More Button */}
      {hasMore && (
        <FadeIn delay={0.2}>

          <div className="mt-10 text-center">

            <button
              onClick={() => setShowAll((prev) => !prev)}
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
                  View more

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

    </section>
  );
}

/* Placeholder Gradients */
function placeholderGradient(index: number): string {

  const gradients = [
    "bg-gradient-to-br from-emerald-600/80 via-teal-500/60 to-cyan-400/40",

    "bg-gradient-to-br from-indigo-600/80 via-purple-500/60 to-pink-400/40",

    "bg-gradient-to-br from-amber-600/80 via-orange-500/60 to-rose-400/40",

    "bg-gradient-to-br from-sky-600/80 via-blue-500/60 to-violet-400/40",
  ];

  return gradients[index % gradients.length];
}