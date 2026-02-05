import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NicheShowcase from '@/components/NicheShowcase';
import BentoGrid from '@/components/BentoGrid';
import ProcessTimeline from '@/components/ProcessTimeline';
import PricingSection from '@/components/PricingSection';
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
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
