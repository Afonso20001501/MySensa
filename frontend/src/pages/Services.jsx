function Services() {
  const services = [
    { name: 'Gestão de Redes Sociais', desc: 'Gerenciamos suas redes para aumentar engajamento.' },
    { name: 'Tráfego Pago', desc: 'Campanhas otimizadas no Google Ads e Facebook Ads.' },
    { name: 'Fotografia', desc: 'Sessões profissionais para produtos e eventos.' },
    { name: 'Vídeo', desc: 'Produção de vídeos promocionais e institucionais.' },
    { name: 'Designer Gráfico', desc: 'Criação de logos, banners e materiais visuais.' },
    { name: 'Criação de Website', desc: 'Desenvolvimento de sites personalizados como este.' },
    { name: 'Suporte Técnico de Informática', desc: 'Assistência em hardware, software e redes.' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary">Nossos Serviços</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {services.map((service, index) => (
          <li key={index} className="bg-white p-4 rounded shadow hover:bg-secondary hover:text-white">
            <h2 className="text-2xl font-semibold">{service.name}</h2>
            <p>{service.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Services;