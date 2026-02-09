import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NicheShowcase from '@/components/NicheShowcase';
import BentoGrid from '@/components/BentoGrid';
import ProcessTimeline from '@/components/ProcessTimeline';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <NicheShowcase />
        <BentoGrid />
        <ProcessTimeline />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
