
export const CodeExamples = {
    "App.jsx": `
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Pricing from './components/Pricing';
    import Testimonials from './components/Testimonials';
    import Footer from './components/Footer'; 
    import { useState } from 'react';
    import { Menu, X } from 'lucide-react';
    
    function App() {
      return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
         <Navbar />
         <Hero />
         <Features />
         <Pricing />
         <Testimonials />
         <Footer />
      </div>
      ); 
    }
    
    export default App;
    `,    

     "Hero.jsx": `
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Pricing from './components/Pricing';
    import Testimonials from './components/Testimonials';
    import Footer from './components/Footer'; 
    import { useState } from 'react';
    import { Menu, X } from 'lucide-react';
    
    function App() {
      return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
         <Navbar />
         <Hero />
         <Features />
         <Pricing />
         <Testimonials />
         <Footer />
      </div>
      ); 
    }
    
    export default App;
    `, 

     "Navbar.jsx": `
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Pricing from './components/Pricing';
    import Testimonials from './components/Testimonials';
    import Footer from './components/Footer'; 
    import { useState } from 'react';
    import { Menu, X } from 'lucide-react';
    
    function App() {
      return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
         <Navbar />
         <Hero />
         <Features />
         <Pricing />
         <Testimonials />
         <Footer />
      </div>
      ); 
    }
    
    export default App;
    `, 
};


export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400/80",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "SS",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time"
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400/80",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "SS",
    title: "Component Showcase",
    content: "Beautiful, responsive hero sections"
  },

  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400/80",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "SS",
    title: "Navigation Magic",
    content: "Sticky, animated & mobile-friendly navbars"
  }
};



