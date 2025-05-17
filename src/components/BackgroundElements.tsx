
import React from 'react';

export const BackgroundGradient: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
    </div>
  );
};

export const BackgroundBlobs: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div 
        className="shape-blob bg-blue-500/5 dark:bg-blue-600/5 w-[500px] h-[500px] top-[-100px] left-[-150px]" 
        style={{ animationDelay: '0s' }}
      ></div>
      <div 
        className="shape-blob bg-purple-500/5 dark:bg-purple-600/5 w-[400px] h-[400px] bottom-[-100px] right-[-100px]" 
        style={{ animationDelay: '3s' }}
      ></div>
      <div 
        className="hidden md:block shape-blob bg-blue-200/5 dark:bg-indigo-900/5 w-[300px] h-[300px] bottom-[20%] left-[20%]" 
        style={{ animationDelay: '6s' }}
      ></div>
    </div>
  );
};

export const BackgroundGrid: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 pattern-grid opacity-20 ${className}`}></div>
  );
};

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative h-24">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
};

export const SectionTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-display">
      <span className="title-gradient">{children}</span>
      <div className="flex items-center w-full mt-4 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-1 rounded-full"></div>
        <div className="h-px w-12 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
      </div>
    </h2>
  );
};
