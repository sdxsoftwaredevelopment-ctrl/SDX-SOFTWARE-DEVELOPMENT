import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import Features from '@/components/Features';
import Platform from '@/components/Platform';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#07090f] text-[#e6eaf2]">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Platform />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
