
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Check } from "lucide-react";
import { SectionTitle, BackgroundGrid } from "./BackgroundElements";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
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
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      <BackgroundGrid />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="space-y-8 relative">
          {/* Timeline connector */}
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative z-10 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot with pulsing effect */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-indigo-400/40 z-30"></div>
              
              <div className="w-full md:w-1/2 flex justify-center md:pb-12">
                <Card className="w-full md:max-w-md shadow-xl border-none bg-gradient-to-br from-white via-white/95 to-blue-50/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                      <div className="flex justify-between items-center mt-1 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 relative flex h-3 w-3 shrink-0">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-full md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
