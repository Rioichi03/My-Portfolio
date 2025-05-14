
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

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
        "- Led the development of a scalable, automated data scraping system, integrating web automation and advanced methods to tackle anti-bot measures.",
        "- Fine-tuned FinBERT for sentiment analysis, boosting accuracy from 47% to 85%, later upgrading to gpt-4o model via OpenAI API integration.",
        "- Engineered data pipelines to process, filter, and transform unstructured data into actionable intelligence through strategic prompt engineering.",
        "- Conducted extensive research and analysis to optimize system performance and had continuous and effective communications with stakeholders."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Torc Infotech",
      location: "Kochi, KL",
      period: "May 2023 - June 2023",
      description: [
        "- Designed an E-commerce website for the sale of IOT security systems and devices for customers in Canada.",
        "- Used HTML, CSS, ReactJs, NodeJs"
      ]
    },
    {
      role: "Python Developer",
      company: "Camino Infotech",
      location: "Kochi, KL",
      period: "May 2022 - June 2022",
      description: [
        "- Built a program which can detect Brain Hemorrhage by processing CT scan images using machine learning models.",
        "- Used Python, TensorFlow, Pandas, NumPy, Django"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Professional Experience
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="space-y-8 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative z-10 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-10 w-5 h-5 rounded-full bg-primary z-10"></div>
              
              <div className="w-full md:w-1/2 flex justify-center md:pb-12">
                <Card className="w-full md:max-w-md shadow-lg border-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                      <div className="flex justify-between items-center mt-1 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                        <Badge variant="outline" className="bg-primary/10 border-none">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item}
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
