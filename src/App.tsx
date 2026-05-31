import { useEffect } from 'react'; // Removed unused React import
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact'; // <-- 1. Imported the new component

function App() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // 2. Added pb-14 for mobile to prevent footer overlap, md:pb-0 resets it for desktop
    <div className="min-h-screen pb-14 md:pb-0">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Fleet />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* 3. Added the CTA component so it sits on top of everything */}
      <FloatingContact />
    </div>
  );
}

export default App;