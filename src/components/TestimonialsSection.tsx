import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    role: 'Barbearia Clássica',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Meus clientes agora agendam online e meu faturamento aumentou 40%. Entregaram em 48h!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dra. Mariana Santos',
    role: 'Clínica Vida Plena',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    content: 'O site transmite a credibilidade que minha clínica precisava. Pacientes elogiam muito.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chef Amanda Lima',
    role: 'Restaurante Sabor & Arte',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'O cardápio digital revolucionou nosso atendimento. Pedidos online cresceram 60%!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem <span className="gradient-text">Nossos Clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <button
            onClick={() => setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 glass-card hover:bg-primary/20 transition-colors z-10"
          >
            <ChevronLeft size={20} className="text-muted-foreground" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 glass-card hover:bg-primary/20 transition-colors z-10"
          >
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/30"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
