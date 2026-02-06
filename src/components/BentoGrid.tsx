import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Shield, 
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'ROI Garantido',
    description: 'Sites que geram leads reais. Retorno do investimento em até 45 dias.',
  },
  {
    icon: Rocket,
    title: 'Velocidade Máxima',
    description: 'Nota 100/100 no Google. Carregamento em menos de 1 segundo.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'SSL, backups diários e proteção contra ataques inclusos.',
  },
  {
    icon: Headphones,
    title: 'Suporte Vitalício',
    description: 'Atendimento humanizado por WhatsApp, email e telefone.',
  },
];

const BentoGrid = () => {
  return (
    <section id="vantagens" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que a <span className="gradient-text">IGS</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Entregamos máquinas de vendas digitais que trabalham 24/7 para o seu negócio.
          </p>
        </motion.div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
