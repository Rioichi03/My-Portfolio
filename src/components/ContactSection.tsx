
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { SectionTitle, BackgroundGrid } from "./BackgroundElements";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <BackgroundGrid />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-gray-800/50 border-blue-100 dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-900/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-gray-800/50 border-blue-100 dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-900/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] bg-white/50 dark:bg-gray-800/50 border-blue-100 dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-900/30"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 animate-pulse" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-6">
            <Card className="border-none shadow-xl flex-grow bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg text-white transition-transform duration-300 group-hover:scale-105">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:work.jeswin@gmail.com" 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        work.jeswin@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start group">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg text-white transition-transform duration-300 group-hover:scale-105">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <a 
                        href="tel:+918089359683" 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +91 8089359683
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start group">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-lg text-white transition-transform duration-300 group-hover:scale-105">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium">Bangalore, KA, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/Rioichi03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <p className="font-medium text-center">GitHub</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jeswin-mathew-168855287" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-white via-white/90 to-blue-50/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-md rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <p className="font-medium text-center">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
