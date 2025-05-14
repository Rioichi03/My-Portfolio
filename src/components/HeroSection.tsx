
import { Button } from "@/components/ui/button";
import { GitHub, Linkedin, Download, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset = -80;
      const y = aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Jeswin</span>
            <span className="block text-primary">Thomas Mathew</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            AI Engineer | Full Stack Developer | Data Scientist
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <GitHub className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/50 flex items-center justify-center animate-fade-in">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span className="text-lg font-medium">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={scrollToNext}
          className="rounded-full h-12 w-12"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
