import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointerClick, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'Escolha o Modelo',
    description: 'Selecione o template perfeito para o seu nicho. Temos opções para barbearias, clínicas, escritórios e restaurantes.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Personalizamos sua Marca',
    description: 'Adaptamos cores, textos e imagens para refletir a identidade única do seu negócio.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Lançamento em 48h',
    description: 'Seu site vai ao ar em tempo recorde. Domínio configurado e pronto para receber clientes.',
  },
];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section id="processo" ref={containerRef} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O <span className="gradient-text">Processo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Do primeiro clique ao lançamento em três passos simples.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-muted/30">
            <motion.div
              className="h-full neon-line"
              style={{ width: useTransform(lineProgress, v => `${v}%`) }}
            />
          </div>

          {/* Progress Line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[30px] w-[2px] bg-muted/30">
            <motion.div
              className="w-full neon-line"
              style={{ 
                height: useTransform(lineProgress, v => `${v}%`),
                background: 'linear-gradient(180deg, hsl(263 70% 50%), hsl(187 94% 52%), hsl(263 70% 50%))',
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 md:pl-0"
                >
                  {/* Step Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-0 top-0 w-[60px] h-[60px]">
                    <div className="w-full h-full rounded-full glass-card flex items-center justify-center border-2 border-primary/50">
                      <Icon size={24} className="text-secondary" />
                    </div>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
                  </div>

                  {/* Content */}
                  <div className="md:pt-24 md:text-center">
                    <span className="text-4xl font-display font-bold text-muted/30 mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
