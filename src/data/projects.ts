export interface Project {
  title: string;
  // year: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  outcome: string;
  gradient: string;
  icon: string;
  image: string;
  github: string;
live?: string;}

export const projects: Project[] = [
  {
    title: "AutoCinema",
    // year: "2026",
    description:
      "AI-powered platform that converts text scripts into fully edited short-form vertical videos.",

    problem:
      "Creating short-form content manually is time-consuming and requires multiple tools.",

    approach:
      "Built an automated pipeline for script understanding, AI image generation, voiceover synthesis, subtitles, and video rendering.",

    tech: [
      "React",
      "Next.js",
      "FastAPI",
      "Python",
      "FFmpeg",
      "SQLite",
    ],

    outcome:
      "Generated complete TikTok/Reels/Shorts videos automatically from simple prompts.",

    gradient: "from-cyan-400/20 to-blue-500/20",

    icon: "🎬",

    image: "/images/Autocinema.png",

    github: "https://github.com/your-username/autocinema",

    // live: "https://autocinema-demo.vercel.app",
  },

  {
    title: "ARIA",
    // year: "2026",

    description:
      "Autonomous AI assistant that manages scheduling, reservations, and personalized planning.",

    problem:
      "Managing appointments and resolving calendar conflicts manually becomes inefficient.",

    approach:
      "Built a conversational AI agent capable of handling task planning, reminders, and recommendations.",

    tech: [
      "TypeScript",
      "Next.js",
      "OpenAI",
      "FastAPI",
      "PostgreSQL",
    ],

    outcome:
      "Delivered a natural-language AI assistant experience for daily life management.",

    gradient: "from-orange-400/20 to-rose-500/20",

    icon: "🧠",

    image: "/images/Aria.png",

    github: "https://github.com/your-username/aria",

    // live: "https://aria-demo.vercel.app",
  },

  {
    title: "ClipMagic",
    // year: "2025",

    description:
      "AI-powered short-form video generator that converts long YouTube videos into engaging clips.",

    problem:
      "Content creators spend hours manually trimming long videos into short viral clips.",

    approach:
      "Automated clipping, caption generation, reframing, and highlight extraction using AI.",

    tech: [
      "Python",
      "FastAPI",
      "FFmpeg",
      "Whisper",
      "React",
    ],

    outcome:
      "Reduced editing workflow from hours to seconds for short-form content creation.",

    gradient: "from-fuchsia-400/20 to-violet-500/20",

    icon: "✂️",

    image: "/images/ClipMagic.png",

    github: "https://github.com/your-username/clipmagic",

    // live: "https://clipmagic-demo.vercel.app",
  },

  {
    title: "Movie Recommender System",
    // year: "2026",

    description:
      "Netflix-style recommendation engine built using collaborative filtering and matrix factorization.",

    problem:
      "Finding relevant movies becomes difficult with large streaming catalogs.",

    approach:
      "Implemented Truncated SVD-based collaborative filtering on the MovieLens dataset.",

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],

    outcome:
      "Generated personalized movie recommendations with optimized RMSE performance.",

    gradient: "from-yellow-400/20 to-red-500/20",

    icon: "🎥",

    image: "/images/MovieRecommender.png",

    github: "https://github.com/your-username/movie-recommender",

    // live: "https://movie-recommender-demo.vercel.app",
  },
];