import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar, Brain, Film, CreditCard, Music, ExternalLink, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  stats?: { label: string; value: string }[];
  tags: string[];
  link?: string; 
}

export default function ProjectsSection() {
  const headerAnimation = useScrollAnimation<HTMLHeadingElement>();
  
  const projects: Project[] = [
    {
      title: "Epileptic Seizure Classification",
      description: "Implemented CNN, LSTM and other supervised machine learning models to classify epileptic seizures with high accuracy using EEG data.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1738168504702-0fd24e844188?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: [{ label: "Accuracy", value: "97%+" }],
      tags: ["Machine Learning", "CNN", "LSTM", "EEG Data"],
      link: "https://github.com/Rioichi03/Epileptic-Seizure-classification-using-Machine-and-Deep-Learning" 
    },
    {
      title: "Parkinson's Disease Predictor",
      description: "Developed a predictive system using SVM to accurately predict the likelihood of having Parkinson's disease using Fundamental Frequency dataset.",
      icon: ChartBar,
      image: "https://images.unsplash.com/photo-1707901763802-0033b4dd2e37?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: [{ label: "Accuracy", value: "95%+" }],
      tags: ["SVM", "Predictive Modeling", "Healthcare"],
      link: "https://github.com/Rioichi03/Parkinson-s-Disease-Prediction-System"
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
      tags: ["Data Analysis", "Content Strategy", "Viewership"],
      link: "https://github.com/Rioichi03/Netflix-Content-Strategy-Analysis"
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
      tags: ["Fraud Detection", "Random Forest", "XGBoost", "SMOTE"],
      link: "https://github.com/Rioichi03/Credit-Card-Fraud-Detection"
    },
    {
      title: "NASA Battery state Analysis",
      description: "Analyzed battery data from NASA's Mars rovers to predict battery failure and optimize power management. The focus was on identifying trends that align with expected battery degradation behavior.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1636614484105-6b199a1fbdca?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Data Analysis", "Data visualization", "Trend analysis"],
      link: "https://github.com/Rioichi03/NASA-Battery-Dataset-Analysis"
    },
    {
      title: "Music Recommendation Engine",
      description: "Built a Music Recommendation Engine using content-based filtering to recommend songs based on genre, artist, and song popularity.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Content-based Filtering", "CountVectorizer", "Cosine Similarity"],
      link: "https://github.com/Rioichi03/Music-recommendation-System"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          ref={headerAnimation.ref}
          className="text-3xl md:text-5xl font-bold text-center mb-16 font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <span className="title-gradient">Projects</span>
          <div className="flex items-center w-full mt-4 justify-center">
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0 }}
              animate={headerAnimation.isVisible ? { width: '3rem' } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-1 rounded-full"
              initial={{ width: 0 }}
              animate={headerAnimation.isVisible ? { width: '4rem' } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.div>
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-primary via-transparent to-transparent"
              initial={{ width: 0 }}
              animate={headerAnimation.isVisible ? { width: '3rem' } : { width: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            ></motion.div>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ 
              threshold: 0.1,
              rootMargin: "0px 0px -100px 0px"
            });
            
            return (
              <motion.div 
                key={index} 
                ref={ref}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden border-none shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-900/80 rounded-xl hover:bg-white/95 dark:hover:bg-gray-800/95"
                >
                  {project.image && (
                    <div className="h-48 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/30 via-purple-400/30 to-transparent opacity-60 mix-blend-overlay"></div>
                      <AspectRatio ratio={16/9} className="bg-blue-100/30 dark:bg-blue-900/20">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7 }}
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <project.icon className="h-5 w-5" />
                      </motion.div>
                      <motion.h3 
                        className="font-bold text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    <motion.p 
                      className="text-gray-700 dark:text-gray-300 mb-5 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {project.stats && (
                      <motion.div 
                        className="flex flex-wrap gap-4 mb-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        {project.stats.map((stat, i) => (
                          <motion.div 
                            key={i} 
                            className="text-center bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg"
                            whileHover={{ scale: 1.05, y: -3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <p className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    <motion.div 
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="group mt-auto self-end flex items-center">
                          View Details
                          <motion.span
                            animate={{ x: [0, 2, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          >
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </motion.span>
                        </Button>
                      </a>
                    </motion.div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.05 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50 border-none text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
