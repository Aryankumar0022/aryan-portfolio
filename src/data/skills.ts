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
    category: "Languages",
    icon: "💻",
    items: [
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
    ],
  },
  // {
  //   category: "AI / ML",
  //   icon: "🧠",
  //   items: [
  //     { name: "PyTorch", level: "Advanced" },
  //     { name: "TensorFlow", level: "Intermediate" },
  //     { name: "scikit-learn", level: "Advanced" },
  //     { name: "OpenCV", level: "Advanced" },
  //     { name: "Transformers", level: "Intermediate" },
  //   ],
  // },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
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
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Kubernetes", level: "Intermediate" },
    ],
  },
];
