
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  ChartBar, 
  GraduationCap, 
  Users
} from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    "Python", 
    "SQL", 
    "Machine Learning", 
    "Deep Learning", 
    "Data Science", 
    "HTML", 
    "CSS", 
    "Data Analytics", 
    "Data Visualization", 
    "Generative AI"
  ];

  const softSkills = [
    "Leadership", 
    "Creativity", 
    "Planning", 
    "People Management", 
    "Adaptability", 
    "Vision", 
    "Decisiveness"
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Skills
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card p-6 md:p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-3 py-1 text-sm rounded-full hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-3 py-1 text-sm rounded-full hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Data Engineering</h4>
            <p className="text-gray-600 dark:text-gray-400">Building robust data pipelines and infrastructure</p>
          </div>
          
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <ChartBar className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">AI & ML Applications</h4>
            <p className="text-gray-600 dark:text-gray-400">Developing intelligent systems and predictive models</p>
          </div>
          
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Full Stack Development</h4>
            <p className="text-gray-600 dark:text-gray-400">Creating end-to-end web applications and services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
