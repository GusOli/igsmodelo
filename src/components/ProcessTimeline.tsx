import { motion } from 'framer-motion';
import { MousePointerClick, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Escolha o Modelo',
    description: 'Selecione o template do seu nicho.',
  },
  {
    icon: Palette,
    title: 'Personalizamos',
    description: 'Adaptamos cores, textos e imagens.',
  },
  {
    icon: Rocket,
    title: 'Lançamento 48h',
    description: 'Seu site no ar em tempo recorde.',
  },
];

const ProcessTimeline = () => {
  return (
    <section id="processo" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 md:flex-col md:text-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <div className="md:mt-4">
                  <h3 className="font-display font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow (hidden on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 translate-x-1/2">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
