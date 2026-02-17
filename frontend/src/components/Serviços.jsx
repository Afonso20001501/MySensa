import { motion } from "framer-motion";

const services = [
  {
    title: "Marketing Digital Estratégico",
    description:
      "Planejamento orientado por dados, campanhas de alta performance e otimização contínua para gerar crescimento previsível e posicionamento sólido no mercado.",
    highlights: [
      "Gestão de Tráfego Pago",
      "Gestão de Redes Sociais",
      "Análise de Performance (Analytics)",
    ],
    stats: "+120 campanhas geridas",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Branding & Posicionamento",
    description:
      "Desenvolvemos marcas memoráveis através de identidade visual estratégica, posicionamento claro e comunicação alinhada aos objetivos do negócio.",
    highlights: [
      "Identidade Visual Completa",
      "Manual de Marca",
      "Estratégia de Comunicação",
      "Artes para Redes Sociais",
    ],
    stats: "+80 marcas desenvolvidas",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Desenvolvimento Web Profissional",
    description:
      "Criamos websites modernos, responsivos e otimizados para conversão, garantindo performance, segurança e experiência digital diferenciada.",
    highlights: [
      "Planejamento e Arquitetura Web",
      "Design Responsivo e UI/UX",
      "Otimização e Performance",
    ],
    stats: "+60 websites desenvolvidos",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Suporte Técnico Especializado",
    description:
      "Prestamos suporte técnico em TI para garantir estabilidade, segurança e pleno funcionamento dos seus equipamentos e sistemas.",
    highlights: [
      "Instalação de Sistemas Operacionais",
      "Atualização e Otimização de Computadores",
      "Manutenção e Reparação de Software",
    ],
    stats: "+150 intervenções técnicas",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Features() {
  const phone = "244952670003"; // seu número do WhatsApp
  const openWhatsApp = (service) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar informações sobre: ${service}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      id="servico"
      className="py-28 px-6 lg:px-8 relative overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Estratégia. Design.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Crescimento Real.
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Actuamos com visão estratégica, criatividade e tecnologia para
            transformar marcas em referências no seu mercado.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* IMAGE */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-white text-sm font-medium">
                    {service.stats}
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="max-w-xl space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-200"
                      >
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 
                      rounded-lg font-semibold text-white
                      transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    Fale Conosco
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
