
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { SectionTitle, BackgroundGrid } from "./BackgroundElements";
import { ExperienceVisual } from "./ExperienceVisual";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  visualType: "ai" | "web" | "ml"; // Type of visual to show
}

export default function ExperienceSection() {
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
      ],
      visualType: "ai"
    },
    {
      role: "Full Stack Developer",
      company: "Torc Infotech",
      location: "Kochi, KL",
      period: "May 2023 - June 2023",
      description: [
        "Designed an E-commerce website for the sale of IOT security systems and devices for customers in Canada.",
        "Used HTML, CSS, ReactJs, NodeJs"
      ],
      visualType: "web"
    },
    {
      role: "Python Developer",
      company: "Camino Infotech",
      location: "Kochi, KL",
      period: "May 2022 - June 2022",
      description: [
        "Built a program which can detect Brain Hemorrhage by processing CT scan images using machine learning models.",
        "Used Python, TensorFlow, Pandas, NumPy, Django"
      ],
      visualType: "ml"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      <BackgroundGrid />
      
      {/* Animated gradient borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="space-y-24 relative">
          {/* Animated Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200/50 via-indigo-400/50 to-purple-200/50 dark:from-blue-800/30 dark:via-indigo-700/30 dark:to-purple-800/30 rounded-full">
            {/* Timeline progress indicator */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              style={{ 
                height: timelineProgress, 
                backgroundSize: "200% 200%",
                animation: "pulse-glow 2s infinite ease-in-out"
              }}
            />
            
            {/* Floating particles along the timeline */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-white dark:bg-blue-400 rounded-full" 
                style={{
                  top: `${i * 15}%`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0.6,
                  animation: `float ${3 + i % 3}s ease-in-out infinite ${i * 0.5}s`
                }}
              />
            ))}
          </div>
          
          {experiences.map((exp, index) => {
            return (
              <ExperienceCard 
                key={index} 
                experience={exp}
                index={index}
                isAlternating={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isAlternating: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isAlternating }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  const isEven = index % 2 === 0;
  const alignment = isAlternating ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse') : 'md:flex-row';
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative z-10 md:flex ${alignment}`}
    >
      {/* Timeline dot with pulsing effect */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-10 items-center justify-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center z-30 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
          <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center md:pb-24">
        <Card className="w-full md:max-w-md shadow-xl border-none bg-gradient-to-br from-white via-white/95 to-blue-50/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="h-full"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white shadow-md group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Briefcase className="h-5 w-5" />
                </div>
                <motion.h3 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  {experience.role}
                </motion.h3>
              </div>
              
              <div className="mb-4">
                <motion.p 
                  className="text-gray-700 dark:text-gray-300 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {experience.company}
                </motion.p>
                <div className="flex justify-between items-center mt-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{experience.location}</span>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none cursor-pointer group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
                        {experience.period}
                      </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto p-2">
                      <p className="text-xs">{`Duration: ${calculateDuration(experience.period)}`}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 + (i * 0.1) }}
                  >
                    <span className="mt-1 relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </motion.div>
        </Card>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {isAlternating && (
          <div className="hidden md:block w-full h-full max-w-md">
            <ExperienceVisual 
              type={experience.visualType} 
              isInView={isInView} 
              isEven={isEven}
              delay={index * 0.2}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Helper function to calculate duration from period string
function calculateDuration(period: string): string {
  const [start, end] = period.split(" - ");
  
  if (!start || !end) return "Unknown duration";
  
  const [startMonth, startYear] = start.split(" ");
  const [endMonth, endYear] = end.split(" ");
  
  if (!startMonth || !startYear || !endMonth || !endYear) return "Unknown duration";
  
  const startDate = new Date(`${startMonth} 1, ${startYear}`);
  const endDate = new Date(`${endMonth} 1, ${endYear}`);
  
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  if (months === 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }
  
  return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
}
