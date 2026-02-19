import { Envelope, Phone, MapPin } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vamos Conversar Sobre
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              O Seu Próximo Projecto
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estamos prontos para transformar a sua ideia em resultados reais.
            Entre em contacto connosco e receba uma proposta personalizada.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Digite o seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Digite o seu email"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition-all"
                >
                  <option>Marketing Digital</option>
                  <option>Branding</option>
                  <option>Consultoria Empresarial</option>
                  <option>Desenvolvimento Web</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows="4"
                  placeholder="Conte-nos mais sobre o seu projecto..."
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Enviar Mensagem
              </button>

            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Envelope size={22} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-gray-400">contacto@sensacional.store</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Phone size={22} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Telefone</h4>
                <p className="text-gray-400">+244 952 670 003</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <MapPin size={22} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Localização</h4>
                <p className="text-gray-400">Lubango, Angola</p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl">
              <h4 className="text-xl font-semibold text-white mb-3">
                Resposta em até 24h
              </h4>
              <p className="text-gray-400">
                A nossa equipa analisará o seu pedido e enviará uma proposta estratégica personalizada.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
