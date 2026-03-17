import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Terminal } from "lucide-react";

const roles = ["Project Manager", "Business Analyst", "Technical Product Strategist", "Open Source Maintainer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Generate contribution grid
  const contributionData = Array.from({ length: 52 * 7 }, () =>    Math.random()
  );

  const getContributionColor = (value: number) => {
    if (value < 0.3) return "bg-secondary";
    if (value < 0.5) return "bg-primary/20";
    if (value < 0.7) return "bg-primary/40";
    if (value < 0.85) return "bg-primary/70";
    return "bg-primary";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 github-grid-bg opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse-green" />
              <span className="text-sm font-mono text-muted-foreground">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text-green">Syed Muhammad Jaffar Tayyar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="typing-cursor text-primary">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              I manage products from idea to deployment, translating business needs
              into clear roadmaps, user stories, and high-quality software delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all github-glow-green"
              >
                <GitBranch className="w-4 h-4" />
                View Repositories
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "10+", label: "Projects Delivered" },
                { value: "6", label: "Ongoing Projects" },
                { value: "2+", label: "Years Exp" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Contribution graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="github-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">
                  100+ repositories and global open-source collaborations
                </span>
              </div>
              <div className="flex gap-[3px] overflow-hidden">
                {Array.from({ length: 52 }, (_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }, (_, dayIndex) => {
                      const index = weekIndex * 7 + dayIndex;
                      return (
                        <motion.div
                          key={dayIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.8 + index * 0.001,
                            duration: 0.2,
                          }}
                          className={`contribution-dot ${getContributionColor(contributionData[index])}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 mt-4 justify-end">
                <span className="text-xs text-muted-foreground mr-1">Less</span>
                {[0.1, 0.4, 0.6, 0.8, 0.95].map((v, i) => (
                  <div key={i} className={`contribution-dot ${getContributionColor(v)}`} />
                ))}
                <span className="text-xs text-muted-foreground ml-1">More</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
