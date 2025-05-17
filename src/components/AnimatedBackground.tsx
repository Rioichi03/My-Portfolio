
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 50;
    
    // Resize canvas to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check - wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Set color based on theme
        const isDarkMode = document.documentElement.classList.contains('dark');
        const color = isDarkMode ? 
          `rgba(100, 149, 237, ${particle.opacity})` : 
          `rgba(59, 130, 246, ${particle.opacity})`;
          
        ctx.fillStyle = color;
        ctx.fill();
        
        // Connect particles that are close to each other
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isDarkMode ? 
              `rgba(100, 149, 237, ${0.1 * (1 - distance/100)})` : 
              `rgba(59, 130, 246, ${0.1 * (1 - distance/100)})`;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
}
