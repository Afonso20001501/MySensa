import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ scrolled, openQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-lg'
          : 'bg-slate-950/50 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" className="w-8 h-8" />
            <span className="text-xl font-bold text-white tracking-tight">
              Sensacional
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {[
              ['#home', t.nav.home],
              ['#servico', t.nav.services],
              ['#planos', t.nav.plans],
              ['#portfolio', t.nav.portfolio],
              ['#contacto', t.nav.contact],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="relative text-sm text-gray-300 hover:text-white transition group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}


            {/* CTA BUTTON */}
            <button
              onClick={openQuote}
              className="relative px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold
              hover:from-blue-600 hover:to-indigo-700 transition-all
              shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70
              ring-1 ring-blue-400/30 hover:ring-blue-300/40"
            >
              {t.nav.cta}
            </button>
            
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-3">
          
            {/* MENU */}
            <button
              className="p-2 rounded-full bg-slate-950/50 backdrop-blur-lg text-gray-300 hover:bg-slate-950/70 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 px-4 py-6 space-y-4">
          {[
            ['#home', t.nav.home],
            ['#servico', t.nav.services],
            ['#planos', t.nav.plans],
            ['#portfolio', t.nav.portfolio],
            ['#contacto', t.nav.contact],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white text-base transition"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>

            {/* CTA MOBILE */}
            <button
              onClick={() => {
                setMobileOpen(false);
                openQuote();
              }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium
              hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md shadow-blue-500/40"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
