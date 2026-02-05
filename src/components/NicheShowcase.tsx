import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Stethoscope, Scale, UtensilsCrossed, ExternalLink, X } from 'lucide-react';

const niches = [
  {
    id: 'barbearia',
    name: 'Barbearia',
    icon: Scissors,
    color: 'from-amber-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-amber-900/30 to-orange-900/20',
    description: 'Sites modernos para barbearias e salões',
    features: ['Agendamento Online', 'Galeria de Cortes', 'Preços Dinâmicos'],
    mockupBg: 'bg-gradient-to-br from-amber-900 to-stone-900',
  },
  {
    id: 'saude',
    name: 'Saúde',
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-900/30 to-teal-900/20',
    description: 'Presença digital para clínicas e consultórios',
    features: ['Marcação de Consultas', 'Área do Paciente', 'Telemedicina'],
    mockupBg: 'bg-gradient-to-br from-emerald-900 to-teal-900',
  },
  {
    id: 'advocacia',
    name: 'Advocacia',
    icon: Scale,
    color: 'from-blue-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-blue-900/30 to-indigo-900/20',
    description: 'Sites premium para escritórios de advocacia',
    features: ['Áreas de Atuação', 'Consulta Online', 'Blog Jurídico'],
    mockupBg: 'bg-gradient-to-br from-blue-900 to-indigo-900',
  },
  {
    id: 'gastronomia',
    name: 'Gastronomia',
    icon: UtensilsCrossed,
    color: 'from-red-500 to-rose-600',
    gradient: 'bg-gradient-to-br from-red-900/30 to-rose-900/20',
    description: 'Cardápios digitais e sistemas de delivery',
    features: ['Cardápio Digital', 'Pedidos Online', 'Reservas'],
    mockupBg: 'bg-gradient-to-br from-red-900 to-rose-900',
  },
];

const NicheShowcase = () => {
  const [activeNiche, setActiveNiche] = useState(niches[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="showcase" className="relative py-24 px-4">
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
            Templates profissionais otimizados para cada segmento. Escolha seu nicho e veja a mágica acontecer.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {niches.map((niche) => {
            const Icon = niche.icon;
            const isActive = activeNiche.id === niche.id;
            
            return (
              <motion.button
                key={niche.id}
                onClick={() => setActiveNiche(niche)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'glass-card border-primary/50 text-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-secondary' : ''} />
                <span className="hidden sm:inline">{niche.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Showcase Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNiche.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Info Card */}
            <div className={`glass-card p-8 ${activeNiche.gradient}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${activeNiche.color}`}>
                  <activeNiche.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{activeNiche.name}</h3>
                  <p className="text-muted-foreground">{activeNiche.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {activeNiche.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-button flex items-center gap-2 w-full justify-center"
              >
                <ExternalLink size={18} />
                Ver Preview Ao Vivo
              </motion.button>
            </div>

            {/* Device Mockups */}
            <div className="relative flex justify-center items-end gap-4">
              {/* Desktop Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:block relative w-[400px] h-[250px]"
              >
                <div className="absolute inset-0 glass-card p-2">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-t-lg">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 h-5 bg-muted/50 rounded-md ml-4" />
                  </div>
                  {/* Screen */}
                  <div className={`h-[calc(100%-36px)] ${activeNiche.mockupBg} rounded-b-lg flex items-center justify-center`}>
                    <activeNiche.icon size={48} className="text-white/30" />
                  </div>
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative w-[140px] h-[280px] md:w-[160px] md:h-[320px]"
              >
                <div className="absolute inset-0 glass-card p-2 rounded-[24px]">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-muted rounded-full" />
                  {/* Screen */}
                  <div className={`h-full ${activeNiche.mockupBg} rounded-[18px] flex items-center justify-center`}>
                    <activeNiche.icon size={32} className="text-white/30" />
                  </div>
                </div>
                {/* Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${activeNiche.color} opacity-20 blur-2xl -z-10`} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh] glass-card overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 p-2 glass-card hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>

              {/* Preview Content */}
              <div className={`w-full h-full ${activeNiche.mockupBg} flex flex-col items-center justify-center`}>
                <activeNiche.icon size={80} className="text-white/20 mb-6" />
                <h3 className="font-display text-2xl font-bold text-white/80 mb-2">
                  Preview: {activeNiche.name}
                </h3>
                <p className="text-white/50">Template completo em construção</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NicheShowcase;
