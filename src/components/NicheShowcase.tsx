import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Stethoscope, Scale, UtensilsCrossed, ChevronLeft, ChevronRight, X, ExternalLink, Building2, Dumbbell, Sparkles, GraduationCap, Flame, ShoppingBag, Brain } from 'lucide-react';
import tabacariaImg from '@/assets/tabacaria.png';
import roupasImg from '@/assets/roupas.png';
import psicologiaImg from '@/assets/psicologia.png';

const niches = [
  {
    id: 'barbearia',
    name: 'Barbearia',
    icon: Scissors,
    color: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-900/40 via-orange-900/30 to-stone-900/50',
    accentColor: 'amber',
    description: 'Sites modernos para barbearias e salões de beleza masculino',
    features: ['Agendamento Online 24/7', 'Galeria de Cortes', 'Preços Dinâmicos', 'Avaliações de Clientes'],
    mockupImage: 'assets/barbearia.png',
    previewUrl: 'https://modelobarber.vercel.app/',
  },
  {
    id: 'advocacia',
    name: 'Advocacia',
    icon: Scale,
    color: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-900/40 via-indigo-900/30 to-slate-900/50',
    accentColor: 'blue',
    description: 'Sites premium para escritórios de advocacia',
    features: ['Áreas de Atuação', 'Consulta Online', 'Blog Jurídico', 'Portal do Cliente'],
    mockupImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    previewUrl: 'https://advmodelobase.vercel.app/',
  },
  {
    id: 'psicologia',
    name: 'Psicologia',
    icon: Brain,
    color: 'from-teal-400 to-emerald-500',
    bgGradient: 'from-teal-900/40 via-emerald-900/30 to-slate-900/50',
    accentColor: 'teal',
    description: 'Acolhimento e profissionalismo para psicólogos e terapeutas',
    features: ['Agendamento de Sessão', 'Blog de Bem-estar', 'Área do Paciente', 'Recursos Educativos'],
    mockupImage: psicologiaImg,
    previewUrl: 'https://psicomodelo.vercel.app/',
  },
  {
    id: 'tabacaria',
    name: 'Tabacaria',
    icon: Flame,
    color: 'from-amber-600 to-red-700',
    bgGradient: 'from-amber-950/40 via-red-950/30 to-stone-900/50',
    accentColor: 'amber',
    description: 'Elegância e tradição para tabacarias e lounges exclusivos',
    features: ['Catálogo Premium', 'Reserva de Lounge', 'Clube do Charuto', 'Eventos Exclusivos'],
    mockupImage: tabacariaImg,
    previewUrl: 'https://sarrfaff-whatsapp-convert.vercel.app/',
  },
  {
    id: 'moda',
    name: 'Loja de Roupas',
    icon: ShoppingBag,
    color: 'from-rose-400 to-orange-400',
    bgGradient: 'from-rose-900/40 via-orange-900/30 to-slate-900/50',
    accentColor: 'rose',
    description: 'Vitrines digitais modernas para boutiques e marcas de moda',
    features: ['Vitrine Virtual', 'Lookbook Interativo', 'Integração Instagram', 'Provador Virtual'],
    mockupImage: roupasImg,
    previewUrl: 'https://modelodrop.vercel.app/',
  },
  {
    id: 'imobiliaria',
    name: 'Imobiliária',
    icon: Building2,
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-900/40 via-blue-900/30 to-slate-900/50',
    accentColor: 'cyan',
    description: 'Portais imobiliários com busca avançada e tour virtual',
    features: ['Catálogo de Imóveis', 'Busca com Filtros', 'Tour Virtual 360°', 'Simulador de Financiamento'],
    mockupImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    previewUrl: 'https://amethyst-aura-homes.vercel.app/',
  },
  {
    id: 'estetica',
    name: 'Estética',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-900/40 via-rose-900/30 to-slate-900/50',
    accentColor: 'pink',
    description: 'Sites elegantes para clínicas de estética e spas',
    features: ['Catálogo de Serviços', 'Antes e Depois', 'Agendamento Online', 'Pacotes Promocionais'],
    mockupImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    previewUrl: 'https://amethyst-aura-homes-2212.vercel.app/',
  },
  {
    id: 'educacao',
    name: 'Educação',
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-900/40 via-orange-900/30 to-slate-900/50',
    accentColor: 'yellow',
    description: 'Plataformas para escolas, cursos e professores',
    features: ['Área do Aluno', 'Aulas Online', 'Material Didático', 'Certificados Digitais'],
    mockupImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    previewUrl: 'https://future-forge-landing.vercel.app/',
  },
  {
    id: 'gastronomia',
    name: 'Gastronomia',
    icon: UtensilsCrossed,
    color: 'from-red-500 to-rose-600',
    bgGradient: 'from-red-900/40 via-rose-900/30 to-stone-900/50',
    accentColor: 'red',
    description: 'Cardápios digitais e sistemas de delivery completos',
    features: ['Cardápio Digital', 'Pedidos Online', 'Sistema de Reservas', 'Integração iFood'],
    mockupImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    previewUrl: 'https://sensory-bread.vercel.app/',
  },
  {
    id: 'saude',
    name: 'Saúde',
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-900/40 via-teal-900/30 to-slate-900/50',
    accentColor: 'emerald',
    description: 'Presença digital profissional para clínicas e consultórios',
    features: ['Marcação de Consultas', 'Área do Paciente', 'Telemedicina Integrada', 'Prontuário Digital'],
    mockupImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  },
  {
    id: 'fitness',
    name: 'Academia',
    icon: Dumbbell,
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-900/40 via-pink-900/30 to-slate-900/50',
    accentColor: 'purple',
    description: 'Sites energéticos para academias e personal trainers',
    features: ['Planos e Mensalidades', 'Agendamento de Aulas', 'Área do Aluno', 'Treinos Online'],
    mockupImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
];

const NicheShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState(0);

  const activeNiche = niches[currentIndex];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === niches.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? niches.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const handlePreviewClick = () => {
    if (activeNiche.previewUrl) {
      window.open(activeNiche.previewUrl, '_blank');
    } else {
      setShowModal(true);
    }
  };

  return (
    <section id="showcase" className="relative py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br ${activeNiche.color} opacity-10 blur-[120px] transition-all duration-700`} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Modelos por <span className="gradient-text">Nicho</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Templates profissionais otimizados para cada segmento. Navegue e descubra o perfeito para você.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Modelo anterior"
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 glass-card hover:bg-primary/20 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Próximo modelo"
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 glass-card hover:bg-primary/20 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Main Carousel Card */}
          <div
            className="relative h-[600px] md:h-[500px] overflow-hidden mx-8 md:mx-16"
            role="region"
            aria-roledescription="carousel"
            aria-label="Showcase de modelos por nicho"
          >

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeNiche.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className={`h-full glass-card overflow-hidden bg-gradient-to-br ${activeNiche.bgGradient}`}>
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Left: Info */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 mb-6"
                      >
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeNiche.color} shadow-lg`}>
                          <activeNiche.icon size={32} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground uppercase tracking-wider">Template</span>
                          <h3 className="font-display text-3xl md:text-4xl font-bold">{activeNiche.name}</h3>
                        </div>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground mb-8"
                      >
                        {activeNiche.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-3 mb-8"
                      >
                        {activeNiche.features.map((feature, i) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeNiche.color}`} />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        onClick={handlePreviewClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glow-button flex items-center gap-2 w-fit"
                      >
                        <ExternalLink size={18} />
                        Ver Preview Ao Vivo
                      </motion.button>
                    </div>

                    {/* Right: Mockup Preview */}
                    <div className="relative hidden md:flex items-center justify-center p-8">
                      {/* Desktop Mockup */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-full max-w-[400px]"
                        style={{ perspective: '1000px' }}
                      >
                        <div className="relative glass-card p-2 rounded-xl overflow-hidden shadow-2xl">
                          {/* Browser Chrome */}
                          <div className="flex items-center gap-2 px-3 py-2 bg-muted/40 rounded-t-lg">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                            </div>
                            <div className="flex-1 h-5 bg-muted/60 rounded-md ml-4 flex items-center px-3">
                              <span className="text-[10px] text-muted-foreground truncate">
                                {activeNiche.previewUrl ? activeNiche.previewUrl.replace('https://', '') : `www.${activeNiche.id}.com.br`}
                              </span>
                            </div>
                          </div>
                          {/* Screen with Image */}
                          <div className="aspect-[16/10] overflow-hidden rounded-b-lg">
                            <img
                              src={activeNiche.mockupImage}
                              alt={activeNiche.name}
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${activeNiche.color} opacity-20`} />
                          </div>
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute -inset-8 bg-gradient-to-br ${activeNiche.color} opacity-20 blur-3xl -z-10`} />
                      </motion.div>

                      {/* Phone Mockup */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="absolute bottom-4 right-12 w-[100px]"
                      >
                        <div className="glass-card p-1.5 rounded-[20px] overflow-hidden shadow-xl">
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-muted rounded-full z-10" />
                          <div className="aspect-[9/19] rounded-[16px] overflow-hidden">
                            <img
                              src={activeNiche.mockupImage}
                              alt={activeNiche.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {niches.map((niche, index) => (
              <button
                key={niche.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ boxShadow: '0 0 20px hsl(270 100% 60% / 0.6)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Niche Quick Nav */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {niches.map((niche, index) => {
              const Icon = niche.icon;
              const isActive = index === currentIndex;
              return (
                <button
                  key={niche.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? 'glass-card border-primary/50 text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                >
                  <Icon size={16} className={isActive ? 'text-secondary' : ''} />
                  <span className="text-sm font-medium hidden sm:inline">{niche.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal code would go here but we mostly use direct links now */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[85vh] glass-card overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 p-3 glass-card hover:bg-primary/20 transition-colors rounded-full"
              >
                <X size={20} />
              </button>

              {/* Preview Content */}
              <div className={`w-full h-full bg-gradient-to-br ${activeNiche.bgGradient}`}>
                <img
                  src={activeNiche.mockupImage}
                  alt={activeNiche.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
                  <activeNiche.icon size={80} className="text-primary/40 mb-6" />
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    Preview: {activeNiche.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">Template completo em desenvolvimento</p>
                  <a
                    href="#pricing"
                    onClick={() => setShowModal(false)}
                    className="glow-button"
                  >
                    Solicitar Este Modelo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NicheShowcase;
