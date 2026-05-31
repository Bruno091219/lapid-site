import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AnchorPhrase } from './components/AnchorPhrase';
import { BioPage } from './components/BioPage';
import { CRMSection } from './components/CRMSection';
import { FeatureCards } from './components/FeatureCards';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: '#FAFAF8', overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <AnchorPhrase />
        <BioPage />
        <CRMSection />
        <FeatureCards />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
