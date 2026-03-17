export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CODE ALPHA",
    role: "Artificial Intelligence Intern",
    period: "15-DEC-25 to 15-JAN-26",
    location: "Remote",
    points: [
      "Learned and implemented various machine learning algorithms and techniques to solve real-world problems.",
    ],
  },
  {
    id: 2,
    company: "",
    role: "Coming Soon",
    period: "",
    location: "",
    points: [
      "Lodaing...",
    ],
  },
  
  
];
