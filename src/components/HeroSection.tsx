
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown, Code, Brain } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pattern-grid">
        <div 
          className="shape-blob bg-blue-500 dark:bg-blue-600 w-[500px] h-[500px] top-[-100px] left-[-150px]" 
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="shape-blob bg-purple-500 dark:bg-purple-600 w-[400px] h-[400px] bottom-[-100px] right-[-100px]" 
          style={{ animationDelay: '3s' }}
        ></div>
        <div 
          className="hidden md:block shape-blob bg-blue-200 dark:bg-indigo-900 w-[300px] h-[300px] bottom-[20%] left-[20%]" 
          style={{ animationDelay: '6s' }}
        ></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 order-2 md:order-1 animate-fade-in-up">
          <div>
            <span className="text-sm md:text-base font-semibold text-primary mb-2 block tracking-wider">FULL STACK DEVELOPER</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block font-display">Jeswin</span>
              <span className="title-gradient font-display">Thomas Mathew</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
              AI Engineer | Full Stack Developer | Data Scientist
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Resume
            </Button>
            <Button variant="outline" className="group flex items-center gap-2 border-2 hover:border-primary">
              <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              GitHub
            </Button>
            <Button variant="outline" className="group flex items-center gap-2 border-2 hover:border-primary">
              <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm py-1 px-3 rounded-full">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm">100+ Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm py-1 px-3 rounded-full">
              <Brain className="h-4 w-4 text-accent" />
              <span className="text-sm">AI Expert</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2 relative">
          <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse-glow"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/50 flex items-center justify-center animate-float">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10">
              <AspectRatio ratio={1/1} className="bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="AI Developer" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={scrollToNext}
          className="rounded-full h-12 w-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
