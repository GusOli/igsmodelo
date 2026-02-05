import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="IGS Soluções Digitais" className="w-12 h-12 rounded-full" />
              <div>
                <span className="font-display font-bold text-xl gradient-text">IGS</span>
                <p className="text-muted-foreground text-sm">Soluções Digitais</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Transformando negócios locais em marcas digitais de sucesso. 
              Sites premium que convertem visitantes em clientes.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 glass-card hover:border-primary/50 transition-colors"
                >
                  <Icon size={18} className="text-muted-foreground hover:text-foreground" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Modelos', 'Vantagens', 'Processo', 'Preços'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-secondary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-secondary" />
                contato@igs.digital
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-secondary mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} IGS Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
