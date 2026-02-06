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
    answer: 'Templates prontos são entregues em até 48 horas. Projetos personalizados levam de 5 a 10 dias úteis.',
  },
  {
    question: 'O site funciona bem no celular?',
    answer: 'Sim! Todos os sites são 100% responsivos e otimizados para qualquer dispositivo.',
  },
  {
    question: 'Posso editar o conteúdo depois?',
    answer: 'Claro! Você recebe acesso a um painel simples para alterar textos e imagens quando quiser.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'Oferecemos garantia de satisfação. Se não ficar feliz em 7 dias, devolvemos seu dinheiro.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm">
            Ainda tem dúvidas?{' '}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
