import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Phone, Linkedin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "", website: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send your message.");
      }

      setSubmitted(true);
      toast.success("Message sent. Check your Gmail inbox.");
      setFormState({ name: "", email: "", message: "", website: "" });
      window.setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send your message.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary mb-2 block"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-primary"></span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm open to project management, business analysis, and technical product roles.
              Reach out if you're building products that need strong delivery execution.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-mono">smjaffarh@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-mono">+92-315-5091391</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-mono">Islamabad, Pakistan</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/j-ff-ar", label: "GitHub" },
                { icon: Mail, href: "mailto:smjaffarh@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/smjaffart", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="github-card p-6 space-y-5"
          >
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <input
              type="text"
              name="website"
              value={formState.website}
              onChange={(e) => setFormState({ ...formState, website: e.target.value })}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all github-glow-green"
            >
              {isSubmitting ? (
                "Sending..."
              ) : submitted ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
