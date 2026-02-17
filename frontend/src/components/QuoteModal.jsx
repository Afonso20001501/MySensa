import { X, BarChart3, Palette, Code2, Headphones } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal({ isOpen, onClose }) {
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  // 🔒 Scroll lock do fundo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // bloqueia fundo
    } else {
      document.body.style.overflow = ""; // libera fundo
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const services = [
    { name: "Marketing Digital Estratégico", icon: BarChart3 },
    { name: "Designe Gráfico & Branding", icon: Palette },
    { name: "Desenvolvimento Web Profissional", icon: Code2 },
    { name: "Suporte Técnico Especializado", icon: Headphones },
  ];

  const validateAndSend = () => {
    if (!service) {
      setError("Selecione um serviço.");
      return;
    }
    if (details.length < 10) {
      setError("Descreva melhor o seu projeto (mínimo 10 caracteres).");
      return;
    }
    if (!budget) {
      setError("Informe o orçamento estimado.");
      return;
    }

    setError("");
    const phone = "244952670003";
    const message =
      `Olá, gostaria de solicitar um orçamento.%0A%0A` +
      `📌 Serviço: ${service}%0A` +
      `💰 Orçamento Estimado: ${budget}%0A` +
      `📝 Detalhes: ${details}`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* CARD */}
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl bg-slate-950 border border-white/10 shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h2 className="text-2xl font-semibold text-white">
                Solicitar Orçamento
              </h2>

              <p className="text-white/80 text-sm mt-2">
                Conte-nos sobre o seu projeto e responderemos via WhatsApp.
              </p>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
              {/* Serviços */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Escolha o Serviço</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setService(item.name)}
                        className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                          service === item.name
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-white/10 bg-white/5 hover:border-white/30"
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-3 text-blue-400" />
                        <span className="text-sm text-white font-medium">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Orçamento */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Orçamento Estimado</p>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 outline-none text-sm text-white"
                >
                  <option value="">Selecione uma faixa</option>
                  <option>Até 500€</option>
                  <option>500€ - 1500€</option>
                  <option>1500€ - 3000€</option>
                  <option>3000€+</option>
                </select>
              </div>

              {/* Detalhes */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Detalhes do Projeto</p>
                <textarea
                  rows="4"
                  placeholder="Descreva objetivos, prazo estimado, referências..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 outline-none text-sm text-white resize-none"
                />
              </div>

              {/* ERRO */}
              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* BOTÃO */}
              <button
                onClick={validateAndSend}
                className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition-all text-white font-semibold"
              >
                Enviar no WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
