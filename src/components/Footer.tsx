import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-muted-foreground" />
            <span className="font-mono text-sm text-muted-foreground">
              Jaffar.portfolio © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="w-4 h-4 text-primary mx-1" /> and lots of coffee
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "GitHub", href: "https://github.com/j-ff-ar" },
              { label: "Email", href: "mailto:smjaffarh@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
