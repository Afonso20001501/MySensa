function Portfolio() {
  const items = [
    { title: 'Projeto 1', desc: 'Descrição do projeto.', image: 'https://via.placeholder.com/300' },
    // Adicione mais itens
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary">Portfólio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;