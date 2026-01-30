import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Tutor<span className="text-primary">Pro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            onClick={() => window.open("https://wa.me/15550000000", "_blank")}
          >
            Book a Session
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium py-2 px-4 hover:bg-slate-50 rounded-lg text-slate-600"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full bg-primary"
            onClick={() => window.open("https://wa.me/15550000000", "_blank")}
          >
            Book via WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
}
