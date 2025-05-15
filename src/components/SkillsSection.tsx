
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  ChartBar, 
  GraduationCap, 
  Users,
  Star
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
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30 dark:opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-display">
          <span className="title-gradient">Skills</span>
          <div className="flex items-center w-full mt-4 justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-1 rounded-full"></div>
            <div className="h-px w-12 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
          </div>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-white to-gray-100/80 dark:from-gray-800 dark:to-gray-900/80 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl card-highlight border-t border-l border-white/20 dark:border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg text-white">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${
                    index % 4 === 0 ? 'from-blue-500 to-blue-600' :
                    index % 4 === 1 ? 'from-purple-500 to-purple-600' : 
                    index % 4 === 2 ? 'from-indigo-500 to-indigo-600' :
                    'from-sky-500 to-sky-600'
                  } text-white border-none hover:scale-105 transition-transform duration-200 cursor-default skill-badge`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-white to-gray-100/80 dark:from-gray-800 dark:to-gray-900/80 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl card-highlight border-t border-l border-white/20 dark:border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-lg text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-purple-500 to-purple-600' :
                    index % 3 === 1 ? 'from-indigo-500 to-indigo-600' : 
                    'from-violet-500 to-violet-600'
                  } text-white border-none hover:scale-105 transition-transform duration-200 cursor-default skill-badge`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-gradient-to-br from-white via-white/95 to-gray-100/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl card-highlight border-t border-l border-white/20 dark:border-white/5">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white">
              <Database className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Data Engineering</h4>
            <p className="text-gray-600 dark:text-gray-400">Building robust data pipelines and infrastructure</p>
            
            <div className="mt-4 flex justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-gradient-to-br from-white via-white/95 to-gray-100/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl card-highlight border-t border-l border-white/20 dark:border-white/5">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white">
              <ChartBar className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">AI & ML Applications</h4>
            <p className="text-gray-600 dark:text-gray-400">Developing intelligent systems and predictive models</p>
            
            <div className="mt-4 flex justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 text-center backdrop-blur-sm bg-gradient-to-br from-white via-white/95 to-gray-100/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/90 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl card-highlight border-t border-l border-white/20 dark:border-white/5">
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Full Stack Development</h4>
            <p className="text-gray-600 dark:text-gray-400">Creating end-to-end web applications and services</p>
            
            <div className="mt-4 flex justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
