
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
          alt="Code Background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          About Me
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <Card className="border-none shadow-lg backdrop-blur-sm bg-white/90 dark:bg-gray-950/90">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              I'm a BTech graduate in Computer Science with a passion for exploring the intersection of artificial intelligence, 
              machine learning, and full-stack development. My technical journey has equipped me with a diverse skill set and 
              a deep understanding of cutting-edge technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              As an AI Engineer and Full Stack Developer, I specialize in building data-driven applications, designing machine 
              learning models, and developing web solutions. I thrive on challenges that require analytical thinking and creative 
              problem-solving, with a particular interest in projects that leverage data science to create meaningful impact.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
