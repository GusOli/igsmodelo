import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Start',
    description: 'Template pronto para começar rápido',
    price: '997',
    period: 'único',
    features: [
      'Template profissional do nicho',
      'Personalização de cores e textos',
      'Responsivo para todos dispositivos',
      'Otimização básica de SEO',
      'Formulário de contato',
      'Suporte por 30 dias',
    ],
    cta: 'Começar Agora',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Site 100% personalizado para sua marca',
    price: '2.497',
    period: 'único',
    features: [
      'Design exclusivo do zero',
      'Animações e efeitos premium',
      'SEO avançado + Analytics',
      'Integração com WhatsApp',
      'Blog ou área de conteúdo',
      'Painel administrativo',
      'Domínio + Hospedagem 1 ano',
      'Suporte prioritário 6 meses',
    ],
    cta: 'Quero o Pro',
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Planos <span className="gradient-text">Transparentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sem surpresas, sem mensalidades ocultas. Invista uma vez e tenha seu site para sempre.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white">
                    <Star size={12} fill="currentColor" />
                    Recomendado
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full glass-card p-8 ${
                  plan.popular ? 'pulse-border rounded-2xl' : ''
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className={`font-display text-5xl font-bold ${plan.popular ? 'gradient-text' : ''}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">pagamento {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check size={16} className={plan.popular ? 'text-secondary' : 'text-primary'} />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'glow-button'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          ✨ Parcelamos em até 12x no cartão. Garantia de 7 dias ou seu dinheiro de volta.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
