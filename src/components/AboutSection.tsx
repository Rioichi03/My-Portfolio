
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          About Me
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <Card className="border-none shadow-lg bg-white/90 dark:bg-gray-950/90">
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
