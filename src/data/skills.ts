export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "Python", level: 74, category: "Development" },
  { name: "JavaScript", level: 72, category: "Development" },
  { name: "MySQL and PostgreSQL", level: 75, category: "Development" },
  { name: "C++", level: 70, category: "Development" },
  { name: "Java", level: 70, category: "Development" },
  { name: "Flask", level: 55, category: "AI & Web" },
  { name: "Git/GitHub", level: 60, category: "Tools" },
  { name: "Figma", level: 80, category: "Tools" },
];

export const categories = ["Development", "AI & Web", "Tools"];
