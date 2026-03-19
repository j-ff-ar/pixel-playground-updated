import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { participations } from "@/data/participations";

const Participations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="participations" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <small>Certifications</small>/<span className="text-primary"><small>Participations</small></span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {participations.map((participation, index) => (
            <motion.div
              key={participation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="github-card p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{participation.title}</h3>
                  <p className="font-mono text-primary text-sm">{participation.organization}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p className="font-mono">{participation.period}</p>
                  <p>{participation.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {participation.points.map((point) => (
                  <li key={point} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participations;
