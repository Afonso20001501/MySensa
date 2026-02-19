import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Serviços from './components/Serviços';
import Planos from './components/Planos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import QuoteModal from "./components/QuoteModal";
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false); // ✅ Estado global do modal

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <FloatingButtons />

      <Navbar 
        scrolled={scrolled} 
        openQuote={() => setQuoteOpen(true)} 
      />

      <Hero
       scrolled={scrolled} 
        openQuote={() => setQuoteOpen(true)} 
      />
      <Serviços />
      <Planos />
      <Portfolio />
      <Contact />
      <Footer />

      {/* ✅ Modal controlado aqui */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

    </div>
  );
}

export default App;
