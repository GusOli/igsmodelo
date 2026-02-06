import { motion } from 'framer-motion';
import { Award, Users, Clock, ShieldCheck, Zap, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
    description: 'Empresas confiam em nós',
  },
  {
    icon: Clock,
    value: '48h',
    label: 'Entrega Rápida',
    description: 'Templates prontos',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Taxa de Satisfação',
    description: 'Avaliações 5 estrelas',
  },
  {
    icon: Globe,
    value: '50M+',
    label: 'Visitantes Gerados',
    description: 'Para nossos clientes',
  },
];

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

const certifications = [
  { icon: ShieldCheck, label: 'SSL Seguro' },
  { icon: Zap, label: 'Core Web Vitals A+' },
  { icon: Award, label: 'LGPD Compliant' },
];

const TrustSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
            Tecnologias de <span className="gradient-text">Ponta</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Utilizamos as melhores ferramentas do mercado
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 p-3 glass-card flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass-card"
              >
                <Icon size={18} className="text-secondary" />
                <span className="text-sm font-medium text-foreground">{cert.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Neon Divider */}
        <div className="neon-line mt-20 max-w-2xl mx-auto" />
      </div>
    </section>
  );
};

export default TrustSection;
