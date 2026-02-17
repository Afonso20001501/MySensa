import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Marketing", "Branding", "Web"];

const projects = [
  {
    id: 1,
    title: "Campanha Digital – Empresa X",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    description:
      "Estratégia completa de tráfego pago e funil de conversão que aumentou as vendas em 68%.",
  },
  {
    id: 2,
    title: "Rebranding – Marca Y",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Criação de identidade visual e posicionamento estratégico para reposicionamento de mercado.",
  },
  {
    id: 3,
    title: "Website Corporativo – Empresa Z",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Desenvolvimento de site institucional moderno com foco em conversão e experiência do usuário.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projetos que
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Geram Resultados Reais
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que transformaram marcas e impulsionaram negócios.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-wider text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
