export type Proficiency = "Beginner" | "Intermediate" | "Advanced";

export type Skill = {
  name: string;
  level: Proficiency;
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    icon: "🧠",
    items: [
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "scikit-learn", level: "Advanced" },
      { name: "OpenCV", level: "Advanced" },
      { name: "Transformers", level: "Intermediate" },
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    items: [
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Redis", level: "Beginner" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    category: "Tooling",
    icon: "🛠",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "AWS", level: "Beginner" },
      { name: "Vercel", level: "Advanced" },
    ],
  },
];
