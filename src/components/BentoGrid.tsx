import { motion } from 'framer-motion';
import { Rocket, Search, Award, HeartHandshake, Zap, Shield } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const features = [
  {
    icon: Rocket,
    title: 'Velocidade de Foguete',
    description: 'Sites construídos com Next.js e React para carregamento instantâneo e performance máxima.',
  },
  {
    icon: Search,
    title: 'SEO Otimizado',
    description: 'Estrutura pensada para ranquear no Google. Seu negócio no topo das buscas.',
  },
  {
    icon: Award,
    title: 'Design Premiado',
    description: 'Visual único e profissional que destaca sua marca da concorrência.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Humanizado',
    description: 'Atendimento real, sem robôs. Estamos aqui para você a qualquer momento.',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description: 'Seu site pronto em até 48 horas. Agilidade sem perder qualidade.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'HTTPS, proteção contra ataques e backups automáticos inclusos.',
  },
];

const BentoGrid = () => {
  return (
    <section id="vantagens" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que <span className="gradient-text">Nos Escolher</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta aliada a um atendimento excepcional. Veja o que nos diferencia.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
