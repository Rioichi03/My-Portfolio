
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";

const Index = () => {
  const sections = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "education", name: "Education" },
    { id: "contact", name: "Contact" }
  ];

  // Fade-in animation for page sections
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar sections={sections} />
        <ScrollProgress />
        <motion.main
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
