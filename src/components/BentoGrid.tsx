import { motion } from 'framer-motion';
import { 
  Rocket, 
  Search, 
  Award, 
  HeartHandshake, 
  Zap, 
  Shield, 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Smartphone, 
  RefreshCw, 
  DollarSign,
  Brain,
  Target,
  Clock,
  Headphones
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const mainFeatures = [
  {
    icon: DollarSign,
    title: 'ROI Garantido',
    description: 'Nossos clientes recuperam o investimento em média em 45 dias. Sites que geram leads reais, não apenas visitas.',
    highlight: true,
  },
  {
    icon: Brain,
    title: 'Copywriting de Conversão',
    description: 'Textos escritos por especialistas em persuasão. Cada palavra foi pensada para transformar visitante em cliente.',
    highlight: true,
  },
  {
    icon: Target,
    title: 'Pixel de Remarketing',
    description: 'Facebook Pixel e Google Tag Manager pré-configurados. Capture leads e faça remarketing desde o dia 1.',
    highlight: false,
  },
];

const features = [
  {
    icon: Rocket,
    title: 'Velocidade 100/100',
    description: 'Nota máxima no Google PageSpeed. Sites que carregam em menos de 1 segundo no 4G.',
  },
  {
    icon: Search,
    title: 'SEO Avançado',
    description: 'Schema markup, sitemap, meta tags e estrutura semântica. Apareça no topo do Google organicamente.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Integrado',
    description: 'Dashboard com métricas em tempo real: visitantes, conversões, origem do tráfego e comportamento.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: '70% do tráfego vem do celular. Seu site será perfeito em qualquer tela, do relógio ao desktop.',
  },
  {
    icon: Palette,
    title: 'Design Exclusivo',
    description: 'Nada de templates genéricos. Cada projeto é único, alinhado à identidade visual da sua marca.',
  },
  {
    icon: BarChart3,
    title: 'A/B Testing',
    description: 'Testamos variações de páginas para descobrir o que converte mais. Otimização contínua.',
  },
  {
    icon: Shield,
    title: 'Segurança Blindada',
    description: 'SSL, firewall, proteção DDoS e backups diários. Seu site e dados dos clientes 100% seguros.',
  },
  {
    icon: RefreshCw,
    title: 'Atualizações Gratuitas',
    description: 'Correções de segurança e melhorias de performance por 12 meses sem custo adicional.',
  },
];

const guarantees = [
  {
    icon: Clock,
    title: '48h ou Grátis',
    description: 'Templates prontos entregues em 48h ou você não paga. Essa é nossa promessa.',
  },
  {
    icon: Headphones,
    title: 'Suporte Vitalício',
    description: 'Dúvidas? Problemas? Nosso time está disponível por WhatsApp, email e telefone. Sempre.',
  },
  {
    icon: Award,
    title: 'Satisfação 100%',
    description: 'Se não ficar satisfeito em 30 dias, devolvemos seu dinheiro. Sem perguntas, sem burocracia.',
  },
];

const BentoGrid = () => {
  return (
    <section id="vantagens" className="relative py-24 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <Award size={18} className="text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Mais de 200 projetos entregues</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que Investir com a <span className="gradient-text">IGS</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não vendemos apenas sites. Entregamos máquinas de vendas digitais que trabalham 24/7 para o seu negócio.
          </p>
        </motion.div>

        {/* Main Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-8 group hover:border-primary/50 transition-all duration-300 ${
                feature.highlight ? 'md:col-span-1' : ''
              }`}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-xs font-bold text-white rounded-full">
                  DIFERENCIAL ÚNICO
                </div>
              )}
              
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <SpotlightCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            Garantias que <span className="gradient-text">Eliminam Seu Risco</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass-card p-6 text-center group overflow-hidden"
              >
                {/* Pulsing Border */}
                <div className="absolute inset-0 rounded-2xl pulse-border opacity-30" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                    <guarantee.icon size={28} className="text-secondary" />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{guarantee.title}</h4>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/5"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            🚀 Junte-se a mais de <span className="gradient-text">200 empresas</span> que já transformaram sua presença digital
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            De pequenos negócios locais a clínicas de renome, ajudamos empreendedores a conquistar mais clientes pela internet.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">+40%</div>
              <div className="text-sm text-muted-foreground">Aumento médio em leads</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary">45 dias</div>
              <div className="text-sm text-muted-foreground">Retorno do investimento</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
