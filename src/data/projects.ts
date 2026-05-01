export type Project = {
  title: string;
  year: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  outcome: string;
  gradient: string;
  icon: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Vision-based Defect Detection",
    year: "2024",
    description:
      "AI-powered visual inspection system for manufacturing quality assurance on edge hardware.",
    problem:
      "Manual QA on a manufacturing line was slow and inconsistent across shifts.",
    approach:
      "Trained a lightweight CNN on a curated defect dataset and deployed it on edge hardware with a thin inspection UI.",
    tech: ["PyTorch", "ONNX", "FastAPI", "Next.js"],
    outcome:
      "Reduced manual inspection time by ~60% with consistent precision across batches.",
    gradient: "from-emerald-400/20 to-teal-500/20",
    icon: "👁",
  },
  {
    title: "Semantic Search for Research Papers",
    year: "2024",
    description:
      "Natural language search engine for navigating large ML paper libraries using embeddings.",
    problem:
      "Keyword search felt blunt for navigating a personal library of ML papers.",
    approach:
      "Embedded papers with a sentence-transformer model and built a minimal retrieval layer with re-ranking.",
    tech: ["Python", "Sentence-Transformers", "FAISS", "TypeScript"],
    outcome:
      "Sub-second semantic queries across thousands of papers from a clean local UI.",
    gradient: "from-blue-400/20 to-indigo-500/20",
    icon: "🔍",
  },
  {
    title: "Aerodynamics Visualizer",
    year: "2023",
    description:
      "Interactive browser-based CFD solver for visualizing airflow over 2D airfoil profiles.",
    problem:
      "Wanted an intuitive way to study airflow over simple 2D profiles.",
    approach:
      "Implemented a small CFD solver and visualized streamlines and pressure fields in the browser.",
    tech: ["TypeScript", "WebGL", "NumPy"],
    outcome:
      "A teaching tool I still come back to when sketching ideas.",
    gradient: "from-amber-400/20 to-orange-500/20",
    icon: "🌊",
  },
  {
    title: "Real-time Pose Estimation",
    year: "2023",
    description:
      "Lightweight pose detection model optimized for real-time inference on mobile devices.",
    problem:
      "Existing pose estimation models were too heavy for real-time mobile use.",
    approach:
      "Distilled a larger model into a compact architecture and optimized with TensorRT for mobile inference.",
    tech: ["TensorFlow Lite", "Python", "React Native", "MediaPipe"],
    outcome:
      "Achieved 30fps pose tracking on mid-range smartphones with <50ms latency.",
    gradient: "from-purple-400/20 to-pink-500/20",
    icon: "🤸",
  },
];
