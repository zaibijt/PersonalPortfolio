import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa6";
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/zaibijt", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/zohaib-qasim-7326b1321/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/z.zohaibjutt/", label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center text-xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-[#20b2a6]"
            >
              ZQ<span className="text-[#20b2a6]">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Zohaib Qasim. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground rounded-full px-3 py-1.5 transition-all duration-300 hover:text-[#20b2a6] hover:bg-[#20b2a6]/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20b2a6]/40 hover:bg-[#20b2a6]/10 hover:text-[#20b2a6] hover:shadow-[0_0_15px_rgba(32,178,166,0.25)]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};