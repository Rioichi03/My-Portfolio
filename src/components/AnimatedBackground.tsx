
import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeProvider";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 100; // Increased for more stars
    const connectionDistance = 150; // Increased connection distance for constellation effect
    
    // Resize canvas to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 5; // Cover the entire page height
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5, // Vary star sizes
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.7 + 0.3, // Higher opacity for stars
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }
    
    let pulseFactor = 0;
    let pulseDirection = 1;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update pulse
      pulseFactor += 0.01 * pulseDirection;
      if (pulseFactor > 1) {
        pulseDirection = -1;
      } else if (pulseFactor < 0) {
        pulseDirection = 1;
      }
      
      // Get current scroll position
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check - wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Calculate if particle is visible in current viewport
        const particleScreenY = particle.y - scrollY;
        const isInView = particleScreenY > -50 && particleScreenY < windowHeight + 50;
        
        if (isInView) {
          // Calculate particle opacity based on position
          const distanceFromCenter = Math.abs(particleScreenY - windowHeight/2) / (windowHeight/2);
          const opacityFactor = 1 - distanceFromCenter * 0.3; // Fade slightly toward edges
          
          // Twinkle effect - each star pulses at its own rate
          const twinkleFactor = Math.sin(Date.now() * particle.pulseSpeed) * 0.3 + 0.7;
          
          // Draw particle (star)
          ctx.beginPath();
          ctx.arc(particle.x, particleScreenY, particle.radius * twinkleFactor, 0, Math.PI * 2);
          
          // Set color based on theme - more starry in dark mode
          const isDarkMode = theme === 'dark';
          
          let color;
          if (isDarkMode) {
            // In dark mode, use blue/white tones for stars
            const hue = Math.random() > 0.8 ? 210 : 0; // Occasionally blue stars
            const saturation = hue === 0 ? '0%' : '70%';
            const lightness = 80 + Math.random() * 20 + '%';
            color = `hsla(${hue}, ${saturation}, ${lightness}, ${particle.opacity * opacityFactor * twinkleFactor})`;
          } else {
            // In light mode, use subtle blue tones
            color = `rgba(59, 130, 246, ${particle.opacity * 0.3 * opacityFactor * twinkleFactor})`;
          }
          
          ctx.fillStyle = color;
          ctx.fill();
          
          // Add glow effect to some stars in dark mode
          if (isDarkMode && particle.radius > 1.3) {
            const gradient = ctx.createRadialGradient(
              particle.x, particleScreenY, 0,
              particle.x, particleScreenY, particle.radius * 5
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.2 * twinkleFactor})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(particle.x, particleScreenY, particle.radius * 5, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }
      });
      
      // Connect particles to form constellations
      if (theme === 'dark') {
        for (let i = 0; i < particles.length - 1; i++) {
          const particleA = particles[i];
          const particleAScreenY = particleA.y - scrollY;
          const isAInView = particleAScreenY > -50 && particleAScreenY < windowHeight + 50;
          
          if (!isAInView) continue;
          
          for (let j = i + 1; j < particles.length; j++) {
            const particleB = particles[j];
            const particleBScreenY = particleB.y - scrollY;
            const isBInView = particleBScreenY > -50 && particleBScreenY < windowHeight + 50;
            
            if (!isBInView) continue;
            
            const dx = particleA.x - particleB.x;
            const dy = particleAScreenY - particleBScreenY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              // Higher brightness for closer stars
              const opacity = Math.max(0.02, 0.15 * (1 - distance/connectionDistance));
              
              ctx.beginPath();
              ctx.moveTo(particleA.x, particleAScreenY);
              ctx.lineTo(particleB.x, particleBScreenY);
              ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`; // Subtle blue-gray
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Re-initialize when theme changes
  
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
  pulseSpeed: number; // For twinkling effect
}
