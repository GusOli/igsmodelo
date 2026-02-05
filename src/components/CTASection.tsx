import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contato" className="relative py-32 px-4 overflow-hidden">
      {/* Black Hole Effect Background */}
      <div className="absolute inset-0">
        {/* Outer Rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-primary/10"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              marginLeft: `-${200 + i * 100}px`,
              marginTop: `-${200 + i * 100}px`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-secondary/5 to-transparent blur-3xl" />
        </div>

        {/* Distortion Effect - Particles being pulled in */}
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 300;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-secondary"
              initial={{
                x: Math.cos(angle) * radius + window.innerWidth / 2,
                y: Math.sin(angle) * radius + 200,
                opacity: 0.8,
              }}
              animate={{
                x: window.innerWidth / 2,
                y: 200,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeIn",
              }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Seu concorrente já está{' '}
            <span className="gradient-text">online</span>.
            <br />
            E você?
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Cada dia sem presença digital é um cliente que você perde. 
            Comece hoje e transforme visitantes em fãs da sua marca.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-lg md:text-xl font-bold rounded-2xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, hsl(263 70% 50%) 0%, hsl(187 94% 52%) 100%)',
              boxShadow: '0 0 50px hsl(263 70% 50% / 0.5), 0 0 100px hsl(187 94% 52% / 0.3)',
            }}
          >
            Iniciar Projeto Agora
            <ArrowRight size={24} />
          </motion.a>

          {/* Urgency Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            ⚡ Resposta em até 2 horas • Sem compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
