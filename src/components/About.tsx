import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, BarChart3, Workflow } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Briefcase, label: "WEB-DEVELOPER", desc: "Learning and Creating responsive and user-friendly web applications" },
    { icon: Users, label: "FLASK DEVELOPER", desc: "Learning and Building Intelligent  Web Applications Integrated with AI" },
    { icon: BarChart3, label: "MySQL, PostgreSQL", desc: "Learning and Managing Database Systems" },
    
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary mb-2 block"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            README<span className="text-primary">.md</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="github-card p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-github-orange" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">about.md</span>
              </div>
              <div className="space-y-4 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary"> </span>
                  <span className="text-foreground font-semibold">Hello, I'm Syed Muhammad Jaffar Tayyar </span>
                </p>
                <p className="text-muted-foreground">
                  4th semester Computer Science student with a strong interest in software development and AI.
                  Skilled in HTML, CSS, JavaScript for front-end development.
                </p>
                <p className="text-muted-foreground">
                  Worked in C++, Java,Flask, MySQL,PostgreSql and ML for problem-solving and application development as a part of my academic journey.
                  
                </p>
                <p className="text-muted-foreground">
                  Delivered <span className="text-primary">4+ projects</span> while managing
                  multiple other acitivities in university,keeping myself mentally and physically fit. 
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="github-card p-5 group cursor-default"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
