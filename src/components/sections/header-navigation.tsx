"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "Our Team", href: "/team" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Trust & Security", href: "/trust-security" },
  { name: "Contact", href: "/contact" },
];

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isMenuOpen 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-arkova-gray-200/50" 
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="container-custom py-5" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-8">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
            aria-label="Arkova home"
            onClick={closeMenu}
          >
            <img 
              src="https://eigenjobs.s3.us-east-1.amazonaws.com/arkovabanner.png" 
              alt="Arkova" 
              className="h-16 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 group py-2 whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/signup"
              className="relative text-sm font-medium text-arkova-muted-foreground hover:text-arkova-blue transition-colors duration-300 group py-2 whitespace-nowrap"
            >
              Signup
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-arkova-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button
            className="lg:hidden p-2.5 text-arkova-dark hover:bg-arkova-blue-5 rounded-xl transition-all duration-300 ml-auto"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl h-[calc(100vh-84px)] overflow-y-auto border-t border-arkova-gray-200/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="container-custom py-8 flex flex-col h-full">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-arkova-dark hover:text-arkova-blue hover:bg-arkova-blue-5 px-4 py-4 rounded-xl transition-all duration-300"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/signup"
                className="block text-lg font-medium text-arkova-dark hover:text-arkova-blue hover:bg-arkova-blue-5 px-4 py-4 rounded-xl transition-all duration-300"
                onClick={closeMenu}
                style={{ animationDelay: `${navItems.length * 50}ms` }}
              >
                Signup
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}