import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SpotlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const SpotlightCard = ({ icon: Icon, title, description, delay = 0 }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group glass-card p-6 overflow-hidden cursor-pointer"
    >
      {/* Spotlight Effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: '300px',
          height: '300px',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          background: 'radial-gradient(circle, hsl(263 70% 50% / 0.15) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border Glow on Hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(187 94% 52% / 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20">
          <Icon 
            size={24} 
            className="text-secondary icon-glow transition-all duration-300 group-hover:text-primary" 
          />
        </div>
        
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
