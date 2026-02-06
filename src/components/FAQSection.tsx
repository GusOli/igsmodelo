import { motion } from 'framer-motion';
import { MessageCircleQuestion } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Em quanto tempo meu site fica pronto?',
    answer: 'Para templates prontos, entregamos em até 48 horas após a aprovação do briefing. Projetos personalizados levam de 5 a 10 dias úteis, dependendo da complexidade.',
  },
  {
    question: 'O site é responsivo e funciona em celular?',
    answer: 'Sim! Todos os nossos sites são 100% responsivos e otimizados para qualquer dispositivo: desktop, tablet e smartphone. Garantimos uma experiência perfeita em todas as telas.',
  },
  {
    question: 'Posso editar o conteúdo do site depois?',
    answer: 'Absolutamente! Oferecemos um painel de administração intuitivo onde você pode alterar textos, imagens e informações sem precisar de conhecimento técnico.',
  },
  {
    question: 'O que está incluso no preço?',
    answer: 'Nossos pacotes incluem: design personalizado, hospedagem por 1 ano, certificado SSL, otimização SEO básica, integração com WhatsApp, formulário de contato e suporte técnico.',
  },
  {
    question: 'Vocês fazem integrações com sistemas externos?',
    answer: 'Sim! Integramos com sistemas de agendamento, pagamento online (PagSeguro, Mercado Pago, Stripe), iFood, Google Analytics, redes sociais e muito mais.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'Oferecemos até 3 rodadas de revisão sem custo adicional. Nossa taxa de satisfação é de 98%, mas caso não fique satisfeito, devolvemos seu investimento integralmente.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer: 'Sim! Oferecemos 30 dias de suporte gratuito após a entrega. Também temos planos de manutenção mensal para atualizações contínuas e suporte prioritário.',
  },
  {
    question: 'Como funciona o processo de criação?',
    answer: '1) Reunião de briefing para entender seu negócio. 2) Criação do design para aprovação. 3) Desenvolvimento do site. 4) Revisões e ajustes. 5) Treinamento e entrega final.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <MessageCircleQuestion size={20} className="text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Tire suas dúvidas</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de começar seu projeto conosco.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card border-none px-6 data-[state=open]:bg-primary/5"
                >
                  <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procurava?
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card hover:bg-primary/20 transition-all duration-300 font-medium"
          >
            <MessageCircleQuestion size={18} className="text-secondary" />
            Fale Conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
