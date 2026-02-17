import { Star, Check } from "@phosphor-icons/react";

const plans = [
  {
    name: "Starter",
    price: "29.990",
    description:
      "Para profissionais e pequenas equipas que desejam iniciar com uma base sólida.",
    features: [
      "Gestão essencial de marketing",
      "Suporte por email",
      "1 utilizador",
      "Relatórios básicos",
      "Até 10GB de armazenamento",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "59.990",
    description:
      "Solução ideal para empresas em crescimento que buscam escala e performance.",
    features: [
      "Gestão completa de marketing",
      "Suporte prioritário",
      "Até 5 utilizadores",
      "Relatórios avançados",
      "Integrações externas",
      "Até 100GB de armazenamento",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description:
      "Para organizações que exigem personalização, suporte dedicado e alta escalabilidade.",
    features: [
      "Soluções totalmente personalizadas",
      "Gestor de conta dedicado",
      "Utilizadores ilimitados",
      "Infraestrutura escalável",
      "Integrações personalizadas",
      "Onboarding exclusivo",
      "Suporte 24/7",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="planos"
      className="py-24 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Planos Estratégicos
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Para Cada Fase do Seu Negócio
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Transparência, flexibilidade e soluções escaláveis para apoiar o
            crescimento sustentável da sua empresa.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500
              ${
                plan.mostPopular
                  ? "border-blue-500 bg-gradient-to-b from-blue-500/10 to-transparent shadow-2xl shadow-blue-500/20 scale-105"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >

              {/* MOST POPULAR BADGE */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-sm font-semibold shadow-lg">
                    <Star size={14} weight="fill" className="text-white" />
                    Mais Escolhido
                  </div>
                </div>
              )}

              {/* PLAN HEADER */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="flex justify-center items-baseline gap-1">
                  {plan.price !== "Sob consulta" && (
                    <span className="text-gray-400 text-sm">kz</span>
                  )}
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== "Sob consulta" && (
                    <span className="text-gray-400 text-sm">/mês</span>
                  )}
                </div>
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  plan.mostPopular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.price === "Sob consulta"
                  ? "Falar com Consultor"
                  : "Começar Agora"}
              </button>

            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Precisa de uma solução personalizada?{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Fale com a nossa equipa comercial
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
