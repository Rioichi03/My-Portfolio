
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
    const particleCount = 150; // Increased for more stars
    const connectionDistance = 180; // Increased connection distance for better constellation effect
    
    // Resize canvas to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Cover the entire page height
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.8, // Vary star sizes more
        speedX: Math.random() * 0.15 - 0.075,
        speedY: Math.random() * 0.15 - 0.075,
        opacity: Math.random() * 0.8 + 0.3, // Higher opacity for stars
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
        
        // Calculate if particle is visible in current viewport (with larger buffer)
        const particleScreenY = particle.y - scrollY;
        const isInView = particleScreenY > -200 && particleScreenY < windowHeight + 200;
        
        if (isInView) {
          // Calculate particle opacity based on position - more gradual fade
          const distanceFromCenter = Math.abs(particleScreenY - windowHeight/2) / (windowHeight/2);
          const opacityFactor = 1 - distanceFromCenter * 0.2; // Less fade toward edges
          
          // Twinkle effect - each star pulses at its own rate
          const twinkleFactor = Math.sin(Date.now() * particle.pulseSpeed) * 0.4 + 0.7;
          
          // Draw particle (star)
          ctx.beginPath();
          ctx.arc(particle.x, particleScreenY, particle.radius * twinkleFactor, 0, Math.PI * 2);
          
          // Set color based on theme - more starry in all modes
          const isDarkMode = theme === 'dark';
          
          let color;
          if (isDarkMode) {
            // In dark mode, use varied star colors for night sky effect
            const colorType = Math.random();
            let hue, saturation, lightness;
            
            if (colorType > 0.96) {
              // Occasionally red/orange stars
              hue = 30 + Math.random() * 20;
              saturation = '70%';
              lightness = 80 + Math.random() * 15 + '%';
            } else if (colorType > 0.92) {
              // Occasionally blue stars
              hue = 210 + Math.random() * 20;
              saturation = '80%';
              lightness = 80 + Math.random() * 15 + '%';
            } else if (colorType > 0.88) {
              // Occasionally yellow stars
              hue = 60 + Math.random() * 10;
              saturation = '80%';
              lightness = 80 + Math.random() * 15 + '%';
            } else {
              // Mostly white/light blue stars
              hue = 200 + Math.random() * 40;
              saturation = Math.random() > 0.7 ? '30%' : '10%';
              lightness = 85 + Math.random() * 15 + '%';
            }
            
            color = `hsla(${hue}, ${saturation}, ${lightness}, ${Math.min(1, particle.opacity * opacityFactor * twinkleFactor * 1.2)})`;
          } else {
            // In light mode, use subtle blue tones with better visibility
            const lightOpacity = particle.opacity * 0.4 * opacityFactor * twinkleFactor;
            color = `rgba(59, 130, 246, ${lightOpacity})`;
          }
          
          ctx.fillStyle = color;
          ctx.fill();
          
          // Add glow effect to some stars in dark mode
          if (isDarkMode && particle.radius > 1.2) {
            const gradient = ctx.createRadialGradient(
              particle.x, particleScreenY, 0,
              particle.x, particleScreenY, particle.radius * 6
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.25 * twinkleFactor})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(particle.x, particleScreenY, particle.radius * 6, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }
      });
      
      // Connect particles to form constellations - always show connections but make them subtle in light mode
      for (let i = 0; i < particles.length - 1; i++) {
        const particleA = particles[i];
        const particleAScreenY = particleA.y - scrollY;
        const isAInView = particleAScreenY > -200 && particleAScreenY < windowHeight + 200;
        
        if (!isAInView) continue;
        
        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j];
          const particleBScreenY = particleB.y - scrollY;
          const isBInView = particleBScreenY > -200 && particleBScreenY < windowHeight + 200;
          
          if (!isBInView) continue;
          
          const dx = particleA.x - particleB.x;
          const dy = particleAScreenY - particleBScreenY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Connection opacity based on distance
            const opacity = isDarkMode ? 
              Math.max(0.05, 0.18 * (1 - distance/connectionDistance)) : 
              Math.max(0.01, 0.06 * (1 - distance/connectionDistance));
            
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleAScreenY);
            ctx.lineTo(particleB.x, particleBScreenY);
            
            // Different connection colors based on theme
            const strokeColor = isDarkMode ? 
              `rgba(148, 163, 184, ${opacity})` : // Blue-gray for dark mode
              `rgba(59, 130, 246, ${opacity})`; // Blue for light mode
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = isDarkMode ? 0.5 : 0.3;
            ctx.stroke();
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
      style={{ opacity: 1 }} // Ensure visibility
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
