import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { floatingCards } from '../data/CodeExamples';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero({ openQuote }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('Marketing');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentFloatingCard = floatingCards[activeTab];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Mouse radial gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Background blobs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">Sua Agência</span>
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block">
                SEJA BEM-VINDO
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block">
                AO NOVO NÍVEL
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                DA SUA EMPRESA
              </span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Nossa agência cria campanhas digitais, branding e soluções estratégicas que elevam a presença da sua marca no mercado e conquistam resultados reais.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
              {/* BOTÃO 1 */}
              <button
                onClick={openQuote}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Peça o seu Orçamento</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* BOTÃO 2 */}
              <button
                onClick={openQuote}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2"
              >
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Solicitou?</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Nossos Serviços</span>
                  </div>
                  <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>

                <div className="p-3 sm:p-4 relative h-full">
                  {/* File Tabs */}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    {['Marketing', 'Branding', 'Consultoria'].map((tab) => (
                      <button
                        key={tab}
                        className={`px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-t-lg border transition-all duration-200 whitespace-nowrap ${
                          activeTab === tab
                            ? 'bg-green-500/30 text-white border-green-400/30'
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Service Content with Image */}
                  <div className="relative overflow-hidden flex flex-col gap-4 text-left">
                    <div className="w-full h-52 sm:h-56 rounded-xl overflow-hidden border border-white/10 relative group">
                      {activeTab === 'Marketing' && (
                        <img
                          src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80"
                          alt="Marketing Digital"
                          className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      )}
                      {activeTab === 'Branding' && (
                        <img
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                          alt="Branding"
                          className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      )}
                      {activeTab === 'Consultoria' && (
                        <img
                          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
                          alt="Consultoria"
                          className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      )}
                      {/* Overlay suave */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                    </div>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      {activeTab === 'Marketing' &&
                        'Campanhas digitais, tráfego pago e estratégias de conversão que posicionam sua marca no mercado.'}
                      {activeTab === 'Branding' &&
                        'Criamos identidades visuais sólidas, design estratégico e posicionamento forte para marcas memoráveis.'}
                      {activeTab === 'Consultoria' &&
                        'Diagnóstico empresarial, análise de mercado e planos estratégicos personalizados para crescimento sustentável.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${
                  floatingCards[activeTab]?.bgColor || 'bg-blue-500/20'
                } backdrop-blur-xl rounded-lg p-4 border border-white/10 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${
                      currentFloatingCard?.iconColor || 'text-white'
                    } flex items-center justify-center text-sm`}
                  >
                    {currentFloatingCard?.icon || '💡'}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      currentFloatingCard?.textColor || 'text-white'
                    }`}
                  >
                    {currentFloatingCard?.title || 'Destaque'}
                  </span>
                </div>
                <div
                  className={`text-sm text-left ${
                    currentFloatingCard?.contentColor || 'text-gray-200'
                  }`}
                >
                  {currentFloatingCard?.content || 'Descrição do serviço.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
