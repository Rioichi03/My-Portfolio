
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  sections: { id: string; name: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#hero"
          className="font-bold text-xl text-primary hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          JT<span className="text-gray-800 dark:text-gray-200">M</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-6 shadow-lg absolute left-0 right-0 top-full">
          <nav className="flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
