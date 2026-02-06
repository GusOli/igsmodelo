import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    role: 'Proprietário',
    company: 'Barbearia Clássica',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'O site ficou incrível! Meus clientes agora agendam online e meu faturamento aumentou 40%. A equipe entregou em 48h como prometido.',
    rating: 5,
    niche: 'Barbearia',
  },
  {
    id: 2,
    name: 'Dra. Mariana Santos',
    role: 'Cardiologista',
    company: 'Clínica Vida Plena',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    content: 'Profissionalismo impecável. O site transmite a credibilidade que minha clínica precisava. Os pacientes elogiam muito a facilidade de marcar consultas.',
    rating: 5,
    niche: 'Saúde',
  },
  {
    id: 3,
    name: 'Dr. Roberto Almeida',
    role: 'Advogado Sênior',
    company: 'Almeida & Associados',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Finalmente um site à altura do nosso escritório. A área do cliente e o blog jurídico trouxeram muito mais autoridade para nossa marca.',
    rating: 5,
    niche: 'Advocacia',
  },
  {
    id: 4,
    name: 'Chef Amanda Lima',
    role: 'Chef Executiva',
    company: 'Restaurante Sabor & Arte',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'O cardápio digital revolucionou nosso atendimento. Os pedidos online cresceram 60% no primeiro mês. Design espetacular!',
    rating: 5,
    niche: 'Gastronomia',
  },
  {
    id: 5,
    name: 'Lucas Ferreira',
    role: 'CEO',
    company: 'Tech Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'A velocidade de carregamento e o SEO fizeram nosso site aparecer na primeira página do Google em 2 semanas. ROI impressionante.',
    rating: 5,
    niche: 'Tecnologia',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const paginate = (direction: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      if (direction === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que Nossos <span className="gradient-text">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 200 projetos entregues com sucesso. Veja o que falam sobre nós.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 glass-card hover:bg-primary/20 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 glass-card hover:bg-primary/20 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 mx-8 md:mx-0"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote size={80} className="text-primary" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl rounded-full -z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      {testimonials[currentIndex].niche}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? 'glass-card border-primary/50 scale-105'
                  : 'bg-muted/20 hover:bg-muted/40 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="text-sm font-medium text-foreground truncate">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground truncate">{testimonial.niche}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
