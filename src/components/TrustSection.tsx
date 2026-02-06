import { motion } from 'framer-motion';
import { Users, Clock, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '200+', label: 'Clientes' },
  { icon: Clock, value: '48h', label: 'Entrega' },
  { icon: Award, value: '98%', label: 'Satisfação' },
  { icon: Globe, value: '50M+', label: 'Visitantes' },
];

const TrustSection = () => {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="neon-line mt-16 max-w-md mx-auto opacity-50" />
      </div>
    </section>
  );
};

export default TrustSection;
