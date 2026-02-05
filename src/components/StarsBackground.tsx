import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -150]);

  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    layer: Math.floor(Math.random() * 3),
  }));

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-[600px] bg-gradient-to-tl from-secondary/5 via-transparent to-transparent" />
      
      {/* Stars Layer 1 - Slow */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {stars.filter(s => s.layer === 0).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-foreground animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars Layer 2 - Medium */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {stars.filter(s => s.layer === 1).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-secondary animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 0.8}px`,
              height: `${star.size * 0.8}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars Layer 3 - Fast */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {stars.filter(s => s.layer === 2).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-primary animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 1.2}px`,
              height: `${star.size * 1.2}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StarsBackground;
