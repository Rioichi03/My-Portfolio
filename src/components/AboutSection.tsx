
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "./BackgroundElements";

export default function AboutSection() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>();
  const contentAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const imageAnimation = useScrollAnimation<HTMLDivElement>({ delay: 400 });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={titleAnimation.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={titleAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>
        
        <Card className="border-none shadow-xl bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-gray-800/70 dark:to-gray-900/70 backdrop-blur-md">
          <CardContent className="p-6 md:p-10">
            <div className="grid md:grid-cols-12 gap-8">
              <motion.div 
                ref={contentAnimation.ref}
                className="md:col-span-7"
                initial={{ opacity: 0, x: -30 }}
                animate={contentAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-primary">
                  I'm a BTech graduate in Computer Science with a passion for exploring the intersection of artificial intelligence, 
                  Data Science and Machine learning. My technical journey has equipped me with a diverse skill set and 
                  a deep understanding of cutting-edge technologies.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  As an AI Engineer, I specialize in building data-driven applications, design & develop machine 
                  learning models and build scalable AI business solutions. I thrive on challenges that require analytical thinking and creative 
                  problem-solving, with a particular interest in projects that leverage data science to create meaningful impact.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.div 
                    className="flex flex-col items-center bg-white/50 dark:bg-gray-800/50 px-5 py-3 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={contentAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="text-2xl font-bold text-primary">6+</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Months Experience</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center bg-white/50 dark:bg-gray-800/50 px-5 py-3 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={contentAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="text-2xl font-bold text-primary">7+</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Projects</span>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                ref={imageAnimation.ref}
                className="md:col-span-5 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={imageAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-md -z-10 opacity-30 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="w-full aspect-video md:aspect-square rounded-xl overflow-hidden dark:border-gray-800 shadow-xl">
                      <img src="https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI and Machine Learning" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
