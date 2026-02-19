import { Mail } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo
} from "@phosphor-icons/react";

const footerLinks = {
  Produto: ["Funcionalidades", "Preços", "Segurança", "Roadmap", "Actualizações"],
  Empresa: ["Sobre Nós", "Blog", "Carreiras", "Contacto"],
  Recursos: ["Central de Ajuda", "Documentação", "Guias"],
  Legal: ["Privacidade", "Termos de Serviço", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Sensacional" className="w-9 h-9" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Sensacional
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Transformamos ideias em experiências digitais de alto impacto.
              Estratégia, design e performance para marcas que querem crescer.
            </p>

            {/* Social */}
            {/* Social */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Mail,
                  link: "mailto:seuemail@dominio.com",
                },
                {
                  icon: FacebookLogo,
                  link: "https://facebook.com/profile.php?id=100063979333202",
                },
                {
                  icon: InstagramLogo,
                  link: "https://instagram.com/sensacional_24/",
                },
                {
                  icon: WhatsappLogo,
                  link: "https://wa.me/244952670003",
                },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-all duration-300 relative group"
                      >
                        {link}
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              Receba novidades e insights exclusivos
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold text-sm hover:scale-105 transition-transform duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Sensacional. Todos os direitos reservados.
          </p>
          <p className="mt-3 sm:mt-0">
            Desenvolvido com foco em performance e experiência.
          </p>
        </div>

      </div>
    </footer>
  );
}
