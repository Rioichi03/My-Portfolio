
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MousePointer } from "lucide-react";
import { SectionTitle, BackgroundGrid } from "./BackgroundElements";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export default function ExperienceSection() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>();
  
  const experiences: Experience[] = [
    {
      role: "AI Engineer",
      company: "Deep Learning Titans",
      location: "Bengaluru, KA",
      period: "Jan 2025 - May 2025",
      description: [
        "Led the development of a scalable, automated data scraping system, integrating web automation and advanced methods to tackle anti-bot measures.",
        "Fine-tuned FinBERT for sentiment analysis, boosting accuracy from 47% to 85%, later upgrading to gpt-4o model via OpenAI API integration.",
        "Engineered data pipelines to process, filter, and transform unstructured data into actionable intelligence through strategic prompt engineering.",
        "Conducted extensive research and analysis to optimize system performance and had continuous and effective communications with stakeholders."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Torc Infotech",
      location: "Kochi, KL",
      period: "May 2023 - June 2023",
      description: [
        "Designed an E-commerce website for the sale of IOT security systems and devices for customers in Canada.",
        "Used HTML, CSS, ReactJs, NodeJs"
      ]
    },
    {
      role: "Python Developer",
      company: "Camino Infotech",
      location: "Kochi, KL",
      period: "May 2022 - June 2022",
      description: [
        "Built a program which can detect Brain Hemorrhage by processing CT scan images using machine learning models.",
        "Used Python, TensorFlow, Pandas, NumPy, Django"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <BackgroundGrid />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={headerAnimation.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-12"
        >
          <SectionTitle>Professional Experience</SectionTitle>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 dark:bg-background/40 backdrop-blur-sm py-2 px-4 rounded-full border border-border/50 cursor-pointer hover:text-primary transition-colors">
                  <MousePointer className="h-4 w-4" />
                  <span>Hover over cards</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-background/90 backdrop-blur-sm border-primary/20">
                <p>Hover over the cards for a cool 3D tilt effect!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
        
        <div className="space-y-8 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200/50 via-indigo-400/50 to-purple-200/50 dark:from-blue-800/30 dark:via-indigo-700/30 dark:to-purple-800/30 rounded-full"></div>
          {experiences.map((exp, index) => {
            const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ 
              threshold: 0.1,
              rootMargin: "0px 0px -100px 0px",
              delay: index * 100
            });
            
            return (
              <CardWithTilt 
                key={index} 
                index={index} 
                experience={exp} 
                animationRef={ref} 
                isVisible={isVisible} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 3D Tilt Card Component
function CardWithTilt({ index, experience, animationRef, isVisible }: { 
  index: number; 
  experience: Experience; 
  animationRef: React.RefObject<HTMLDivElement>; 
  isVisible: boolean; 
}) {
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt values (max tilt of 15 degrees)
    const tiltX = (y / rect.height - 0.5) * 20;
    const tiltY = -(x / rect.width - 0.5) * 20;
    
    setTiltValues({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTiltValues({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      ref={animationRef}
      className={`relative z-10 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-indigo-400/40 z-30"></div>
      
      <div className="w-full md:w-1/2 flex justify-center md:pb-12 perspective-1000">
        <motion.div
          className="w-full md:max-w-md transform-gpu transition-transform duration-200"
          style={{
            transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg)`,
            transformStyle: "preserve-3d"
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="w-full h-full shadow-xl border-none bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            {/* Reflective highlight effect */}
            <div 
              className="absolute inset-0 w-full h-full opacity-0 hover:opacity-30 bg-gradient-to-tr from-transparent via-white to-transparent rounded-lg transition-opacity duration-300"
              style={{
                transform: "translateZ(20px)",
              }}
            ></div>
            
            <CardContent className="p-6" style={{ transform: "translateZ(10px)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{experience.role}</h3>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{experience.company}</p>
                <div className="flex justify-between items-center mt-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{experience.location}</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none">
                    {experience.period}
                  </Badge>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  >
                    <span className="mt-1 relative flex h-3 w-3 shrink-0">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2"></div>
    </motion.div>
  );
}
