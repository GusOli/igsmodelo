import { motion } from 'framer-motion';

const WireframeCube = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] perspective-1000">
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={{ rotateY: 360, rotateX: 15 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 border-2 border-primary/40"
          style={{ transform: 'translateZ(100px)' }}
        >
          <div className="absolute inset-2 border border-secondary/30" />
          <div className="absolute inset-4 border border-primary/20" />
        </div>
        
        {/* Back Face */}
        <div 
          className="absolute inset-0 border-2 border-primary/40"
          style={{ transform: 'translateZ(-100px) rotateY(180deg)' }}
        >
          <div className="absolute inset-2 border border-secondary/30" />
          <div className="absolute inset-4 border border-primary/20" />
        </div>
        
        {/* Right Face */}
        <div 
          className="absolute inset-0 border-2 border-secondary/40"
          style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
        >
          <div className="absolute inset-2 border border-primary/30" />
        </div>
        
        {/* Left Face */}
        <div 
          className="absolute inset-0 border-2 border-secondary/40"
          style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
        >
          <div className="absolute inset-2 border border-primary/30" />
        </div>
        
        {/* Top Face */}
        <div 
          className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: 'rotateX(90deg) translateZ(100px)' }}
        />
        
        {/* Bottom Face */}
        <div 
          className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
        />
        
        {/* Corner Vertices with Glow */}
        {[
          { x: 0, y: 0, z: 100 },
          { x: 100, y: 0, z: 100 },
          { x: 0, y: 100, z: 100 },
          { x: 100, y: 100, z: 100 },
          { x: 0, y: 0, z: -100 },
          { x: 100, y: 0, z: -100 },
          { x: 0, y: 100, z: -100 },
          { x: 100, y: 100, z: -100 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-secondary"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `translate(-50%, -50%) translateZ(${pos.z}px)`,
              boxShadow: '0 0 15px hsl(187 94% 52% / 0.8), 0 0 30px hsl(263 70% 50% / 0.4)',
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
      
      {/* Glow Effect Behind Cube */}
      <div 
        className="absolute inset-0 -z-10 blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle at center, hsl(263 70% 50%), hsl(187 94% 52%), transparent)',
        }}
      />
    </div>
  );
};

export default WireframeCube;
