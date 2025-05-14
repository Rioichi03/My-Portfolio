
import { Heart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Jeswin Thomas Mathew. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
