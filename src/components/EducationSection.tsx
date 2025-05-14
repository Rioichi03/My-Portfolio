
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";

export default function EducationSection() {
  const certifications = [
    "IBM Data Science Professional Certificate",
    "Databases and SQL for Data Science, IBM Coursera",
    "Data Analysis with Python, IBM Coursera",
    "Machine Learning with Python, IBM Coursera",
    "Generative AI Essentials for Data Science, IBM Coursera"
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Education & Certifications
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-white to-gray-100/80 dark:from-gray-800 dark:to-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg">BTech in Computer Science</h4>
                    <Badge className="bg-primary/10 text-primary border-none">
                      2020 - 2024
                    </Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Christ University, CGPA - 7.5
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Artificial Intelligence",
                      "Data Structures & Algorithms",
                      "Statistics",
                      "Simulation & Modeling",
                      "CADM"
                    ].map((course, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gray-100 dark:bg-gray-800 border-none"
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
          <Card className="border-none shadow-lg bg-gradient-to-br from-white to-gray-100/80 dark:from-gray-800 dark:to-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-1">
                      <div className="bg-primary w-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Leadership & Activities */}
        <Card className="border-none shadow-lg mt-8 bg-gradient-to-br from-white to-gray-100/80 dark:from-gray-800 dark:to-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Leadership & Activities</h3>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-min">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Managed and mentored a team of 4 engineering interns, delegating tasks, tracking progress, and ensuring high-performance execution.</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-min">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Spearheaded a team of 6 to build a motion controlled shooting range simulation for the University NCC as part of our service learning project.</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-min">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
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
