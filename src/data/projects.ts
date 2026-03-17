export interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  languageColor: string;
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "House Price Predictor",
    description: "An intelligent Web app which can predict the price of houses based on specific features.",
    language: "Flask , PostgreSQL and ML",
    languageColor: "hsl(212, 92%, 67%)",
    tags: ["ML", "DevTools", "FLASK"],
  },
  {
    id: 2,
    title: "Smart Invoice Generator",
    description: "A web application for generating invoices automatically based on user input and predefined data.",
    language: "HTML, CSS and JS and MySQL",
    languageColor: "hsl(73, 66%, 61%)",
    tags: ["Web App", "Invoice", "Automation"],
  },
  {
    id: 3,
    title: "Emergency Routing System",
    description: "A Simple model which can help in emergency situations, works without internet.",
    language: "C++",
    languageColor: "hsl(212, 92%, 67%)",
    tags: ["C++", "Routing", "Emergency Response"],
  },
  {
    id: 4,
    title: "Banking System",
    description: "A simple banking system that allows users to create accounts, perform transactions, and manage their finances securely.",
    language: "Java",
    languageColor: "hsl(19, 94%, 45%)",
    tags: ["JAVA", "Backend", "GUI"],
  },
  
];
