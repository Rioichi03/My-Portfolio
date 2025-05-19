
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";
import { SectionTitle, BackgroundBlobs } from "./BackgroundElements";

export default function EducationSection() {
  const certifications = [
    "IBM Data Science Professional Certificate",
    "Databases and SQL for Data Science, IBM Coursera",
    "Data Analysis with Python, IBM Coursera",
    "Machine Learning with Python, IBM Coursera",
    "Generative AI Essentials for Data Science, IBM Coursera"
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      <BackgroundBlobs />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle>Education & Certifications</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-3 top-1 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg">BTech in Computer Science and Engineering</h4>
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none">
                        2020 - 2024
                      </Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Christ University, CGPA - 7.5
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2 text-primary">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Artificial Intelligence",
                      "Data Structures & Algorithms",
                      "Statistics",
                      "Simulation & Modeling",
                      "Mathematics",
                      "Computer Networks",
                      "Database Management Systems",
                      "Computer Aided Desicion Support Systems",
                    ].map((course, index) => (
                      <Badge 
                        key={index}
                        className={`bg-white/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors duration-200 ${index % 2 === 0 ? 'text-blue-700 dark:text-blue-300' : 'text-indigo-700 dark:text-indigo-300'}`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Certifications</h3>
              </div>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-1 transition-colors duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Leadership & Activities */}
        <Card className="border-none shadow-xl mt-8 bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leadership & Activities</h3>

            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg h-min text-white transition-transform duration-300 group-hover:scale-105">
                  <Users className="h-5 w-5" />
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg flex-1 border border-blue-100/50 dark:border-gray-700/50 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-700/40">
                  <p className="font-medium">Managed and mentored a team of 4 engineering interns, delegating tasks, tracking progress, and ensuring high-performance execution.</p>
                </div>
              </li>

              <li className="flex gap-4 group">
                <div className="flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg h-min text-white transition-transform duration-300 group-hover:scale-105">
                  <Users className="h-5 w-5" />
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg flex-1 border border-blue-100/50 dark:border-gray-700/50 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-700/40">
                  <p className="font-medium">Spearheaded a team of 6 to build a motion controlled shooting range simulation for the University NCC as part of our service learning project.</p>
                </div>
              </li>

              <li className="flex gap-4 group">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 p-2 rounded-lg h-min text-white transition-transform duration-300 group-hover:scale-105">
                  <Users className="h-5 w-5" />
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg flex-1 border border-blue-100/50 dark:border-gray-700/50 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-700/40">
                  <p className="font-medium">Directed a team of 4 to a relational database management system as part of our coursework.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
