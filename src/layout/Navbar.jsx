import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", targetId: "about" },
  { href: "#projects", label: "Projects", targetId: "projects" },
  { href: "#experience", label: "Experience", targetId: "experience" },
  { href: "#testimonials", label: "Testimonials", targetId: "testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, offset = 100) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToContact = () => {
    scrollToSection("contact", 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="inline-flex items-center text-xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-[#20b2a6]"
        >
          ZQ<span className="text-[#20b2a6]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.targetId, 100);
                }}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full transition-all duration-300 hover:text-[#20b2a6] hover:bg-[#20b2a6]/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={scrollToContact}
            className="transition-all duration-300 hover:bg-[#20b2a6]/90 hover:shadow-[0_0_20px_rgba(32,178,166,0.35)]"
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToSection(link.targetId, 100);
                }}
                className="text-lg text-muted-foreground py-2 transition-all duration-300 hover:text-[#20b2a6]"
              >
                {link.label}
              </a>
            ))}

            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToContact();
              }}
              className="transition-all duration-300 hover:bg-[#20b2a6]/90 hover:shadow-[0_0_20px_rgba(32,178,166,0.35)]"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};