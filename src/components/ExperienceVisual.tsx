
import React from "react";
import { motion } from "framer-motion";

interface ExperienceVisualProps {
  type: "ai" | "web" | "ml";
  isInView: boolean;
  isEven: boolean;
  delay: number;
}

export const ExperienceVisual: React.FC<ExperienceVisualProps> = ({ 
  type, 
  isInView, 
  isEven,
  delay 
}) => {
  const direction = isEven ? 1 : -1;
  const initialX = direction * 50;

  // Shared animation properties
  const containerAnimation = {
    initial: { opacity: 0, x: initialX },
    animate: isInView 
      ? { opacity: 1, x: 0, transition: { duration: 0.7, delay: delay + 0.3 } }
      : { opacity: 0, x: initialX }
  };

  // Choose the appropriate visualization based on the type
  const renderVisual = () => {
    switch (type) {
      case "ai":
        return <AIVisual />;
      case "web":
        return <WebDevVisual />;
      case "ml":
        return <MLVisual />;
      default:
        return <div>No visualization available</div>;
    }
  };

  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center p-4"
      {...containerAnimation}
    >
      {renderVisual()}
    </motion.div>
  );
};

// AI Engineer visualization with neural network effect
const AIVisual: React.FC = () => {
  const nodes = 12;
  const connections = 20;
  
  // Random positions for nodes
  const nodePositions = [...Array(nodes)].map(() => ({
    x: Math.random() * 80 + 10, // 10-90% of container width
    y: Math.random() * 80 + 10, // 10-90% of container height
    size: Math.random() * 8 + 4, // Node sizes between 4-12px
  }));
  
  // Random connections between nodes
  const connectionPairs = [...Array(connections)].map(() => {
    const start = Math.floor(Math.random() * nodes);
    let end = Math.floor(Math.random() * nodes);
    // Ensure start and end are different
    while (end === start) {
      end = Math.floor(Math.random() * nodes);
    }
    return { start, end };
  });
  
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0icmdiYSgwLDAsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-70"></div>
      
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Draw connections between nodes */}
        {connectionPairs.map((pair, index) => {
          const start = nodePositions[pair.start];
          const end = nodePositions[pair.end];
          
          return (
            <motion.line 
              key={`connection-${index}`}
              x1={`${start.x}%`}
              y1={`${start.y}%`}
              x2={`${end.x}%`}
              y2={`${end.y}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              strokeOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.7,
                transition: { 
                  duration: 1.5, 
                  delay: 0.5 + (index * 0.05) 
                } 
              }}
            />
          );
        })}
        
        {/* Defs for gradients */}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Draw nodes */}
        {nodePositions.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#node-gradient)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                type: "spring",
                stiffness: 100,
                delay: 0.2 + (index * 0.1)
              }
            }}
            whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
          />
        ))}
        
        {/* Animated particles */}
        {connectionPairs.map((pair, index) => {
          const start = nodePositions[pair.start];
          const end = nodePositions[pair.end];
          
          return (
            <motion.circle
              key={`particle-${index}`}
              r="2"
              fill="#a5b4fc"
              filter="url(#glow)"
              initial={{ 
                cx: `${start.x}%`, 
                cy: `${start.y}%`,
                opacity: 0 
              }}
              animate={{ 
                cx: [`${start.x}%`, `${end.x}%`],
                cy: [`${start.y}%`, `${end.y}%`],
                opacity: [0, 1, 0],
                transition: { 
                  duration: 4 + (index % 3) * 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }
              }}
            />
          );
        })}
      </svg>
      
      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        AI Engineering
      </div>
    </div>
  );
};

// Web Development visualization
const WebDevVisual: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-gray-50/70 to-blue-50/70 dark:from-gray-900/30 dark:to-blue-900/30 rounded-lg overflow-hidden shadow-inner">
      {/* Code editor background */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-80">
        <div className="flex p-2 bg-gray-200 dark:bg-gray-700">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <div className="p-4 font-mono text-xs md:text-sm overflow-hidden">
          {/* Animated code lines */}
          <AnimatedCodeLine 
            delay={0.2}
            line={`<div className="app-container">`} 
            color="text-purple-600 dark:text-purple-400" 
          />
          <AnimatedCodeLine 
            delay={0.4}
            line={`  <header className="main-header">`} 
            color="text-purple-600 dark:text-purple-400" 
            indent={1}
          />
          <AnimatedCodeLine 
            delay={0.6}
            line={`    <Navigation items={menuItems} />`} 
            color="text-blue-600 dark:text-blue-400" 
            indent={2}
          />
          <AnimatedCodeLine 
            delay={0.8}
            line={`  </header>`} 
            color="text-purple-600 dark:text-purple-400" 
            indent={1}
          />
          <AnimatedCodeLine 
            delay={1.0}
            line={`  <main>`} 
            color="text-purple-600 dark:text-purple-400" 
            indent={1}
          />
          <AnimatedCodeLine 
            delay={1.2}
            line={`    <ProductList`} 
            color="text-blue-600 dark:text-blue-400" 
            indent={2}
          />
          <AnimatedCodeLine 
            delay={1.4}
            line={`      products={data.products}`} 
            color="text-green-600 dark:text-green-400" 
            indent={3}
          />
          <AnimatedCodeLine 
            delay={1.6}
            line={`      loading={isLoading}`} 
            color="text-green-600 dark:text-green-400" 
            indent={3}
          />
          <AnimatedCodeLine 
            delay={1.8}
            line={`      onItemSelect={handleSelection}`} 
            color="text-green-600 dark:text-green-400" 
            indent={3}
          />
          <AnimatedCodeLine 
            delay={2.0}
            line={`    />`} 
            color="text-blue-600 dark:text-blue-400" 
            indent={2}
          />
          <AnimatedCodeLine 
            delay={2.2}
            line={`  </main>`} 
            color="text-purple-600 dark:text-purple-400" 
            indent={1}
          />
          <AnimatedCodeLine 
            delay={2.4}
            line={`</div>`} 
            color="text-purple-600 dark:text-purple-400" 
          />
        </div>
      </div>
      
      {/* Framework logos */}
      <div className="absolute bottom-0 right-0 flex space-x-2 p-2">
        <motion.div 
          className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold text-lg"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            transition: { delay: 2.6, type: "spring" }
          }}
          whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        >
          R
        </motion.div>
        <motion.div 
          className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full font-bold text-lg"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            transition: { delay: 2.8, type: "spring" }
          }}
          whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        >
          N
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        Web Development
      </div>
    </div>
  );
};

interface CodeLineProps {
  line: string;
  color: string;
  indent?: number;
  delay: number;
}

const AnimatedCodeLine: React.FC<CodeLineProps> = ({ line, color, indent = 0, delay }) => {
  return (
    <motion.div 
      className={`${color} my-1`}
      style={{ paddingLeft: `${indent * 1}rem` }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        transition: { 
          duration: 0.5, 
          delay 
        } 
      }}
    >
      {line}
    </motion.div>
  );
};

// Machine Learning visualization
const MLVisual: React.FC = () => {
  // Grid for data points
  const gridSize = 8;
  const dataPoints = [...Array(gridSize * gridSize)].map((_, i) => {
    const x = (i % gridSize) / (gridSize - 1) * 100;
    const y = Math.floor(i / gridSize) / (gridSize - 1) * 100;
    // Assign classes based on position to create a pattern
    const className = (x < 50 && y < 50) || (x >= 50 && y >= 50) ? "class-a" : "class-b";
    return { x, y, className };
  });

  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg overflow-hidden shadow-inner">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      
      <svg width="100%" height="100%">
        {/* Decision boundary */}
        <motion.line
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          stroke="rgba(139, 92, 246, 0.7)"
          strokeWidth="3"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            transition: { duration: 2, delay: 0.5 }
          }}
        />
        
        {/* Data points */}
        {dataPoints.map((point, index) => (
          <motion.circle
            key={`data-point-${index}`}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="4"
            fill={point.className === "class-a" ? "#3b82f6" : "#ec4899"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.8,
              transition: { 
                duration: 0.3,
                delay: 0.1 * (index % 16)
              }
            }}
          />
        ))}
        
        {/* Add axes labels */}
        <text x="5" y="15" className="text-xs fill-gray-600 dark:fill-gray-300">Feature 1</text>
        <text x="5" y="98%" className="text-xs fill-gray-600 dark:fill-gray-300">Feature 2</text>
      </svg>
      
      {/* Python code snippet */}
      <motion.div 
        className="absolute top-2 right-2 bg-gray-800/80 text-white p-3 rounded-md font-mono text-xs max-w-[180px] backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: 2
          } 
        }}
      >
        <div className="text-green-400"># ML model</div>
        <div className="text-blue-300">model = TensorFlow.sequential()</div>
        <div className="text-blue-300">model.fit(X_train, y_train)</div>
      </motion.div>
      
      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        Machine Learning
      </div>
    </div>
  );
};
