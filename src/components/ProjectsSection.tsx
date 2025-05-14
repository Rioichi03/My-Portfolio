
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar, Brain, Film, CreditCard, Music } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  stats?: { label: string; value: string }[];
  tags: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Epileptic Seizure Classification",
      description: "Implemented CNN, LSTM and other supervised machine learning models to classify epileptic seizures with high accuracy using EEG data.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      stats: [{ label: "Accuracy", value: "97%+" }],
      tags: ["Machine Learning", "CNN", "LSTM", "EEG Data"]
    },
    {
      title: "Parkinson's Disease Predictor",
      description: "Developed a predictive system using SVM to accurately predict the likelihood of having Parkinson's disease using Fundamental Frequency dataset.",
      icon: ChartBar,
      image: "https://pixabay.com/get/gc432e31380701e61adfd79237a84c854b62e46dc8e6664b759f086c169f0365ee1010981fb1832c5ca1f3bb4022d720f7f92a5fe06b50c8839c2313931d9c90f_1280.jpg",
      stats: [{ label: "Accuracy", value: "95%+" }],
      tags: ["SVM", "Predictive Modeling", "Healthcare"]
    },
    {
      title: "Netflix Content Strategy Analysis",
      description: "Analyzed Netflix viewership data to identify optimal content release strategies and viewing patterns.",
      icon: Film,
      image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
      stats: [
        { label: "Viewership Increase", value: "28.5%" },
        { label: "Weekend Engagement", value: "2x" }
      ],
      tags: ["Data Analysis", "Content Strategy", "Viewership"]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Developed a credit card fraud detection system using Random Forest, Logistic Regression, and XGBoost with high accuracy and recall.",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      stats: [
        { label: "Accuracy", value: "98%" },
        { label: "Minority Recall", value: "84%" }
      ],
      tags: ["Fraud Detection", "Random Forest", "XGBoost", "SMOTE"]
    },
    {
      title: "Music Recommendation Engine",
      description: "Built a Music Recommendation Engine using content-based filtering to recommend songs based on genre, artist, and song popularity.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Content-based Filtering", "CountVectorizer", "Cosine Similarity"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Projects
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="bg-primary h-2"></div>
              {project.image && (
                <div className="h-48 w-full overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-primary/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </AspectRatio>
                </div>
              )}
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  {project.description}
                </p>
                
                {project.stats && (
                  <div className="flex flex-wrap gap-4 mb-5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2 border-t border-gray-100 dark:border-gray-800">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-gray-100 dark:bg-gray-800 border-none text-xs">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
