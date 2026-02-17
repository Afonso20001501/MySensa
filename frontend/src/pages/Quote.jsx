import { useState } from 'react';

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget_estimated: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/budget-request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '', email: '', phone: '', service: '', message: '', budget_estimated: ''
        });
      } else {
        setError(data.detail || 'Ocorreu um erro ao enviar o formulário.');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        Solicitar Orçamento
      </h1>

      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
          <p className="font-bold">Sucesso!</p>
          <p>Sua solicitação foi enviada. Entraremos em contato em breve.</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-blue-900 font-medium mb-2">Nome *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-900 font-medium mb-2">E-mail *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-900 font-medium mb-2">Telefone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-900 font-medium mb-2">Serviço de interesse</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione...</option>
            <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
            <option value="Tráfego Pago">Tráfego Pago</option>
            <option value="Fotografia">Fotografia</option>
            <option value="Vídeo">Vídeo</option>
            <option value="Design Gráfico">Design Gráfico</option>
            <option value="Criação de Website">Criação de Website</option>
            <option value="Suporte Técnico">Suporte Técnico de Informática</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-900 font-medium mb-2">Orçamento estimado (opcional)</label>
          <input
            type="text"
            name="budget_estimated"
            value={formData.budget_estimated}
            onChange={handleChange}
            placeholder="Ex: 50.000 - 150.000 Kz"
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-900 font-medium mb-2">Mensagem / Detalhes do projeto *</label>
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-6 rounded font-bold text-white transition ${
            loading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Solicitação'}
        </button>
      </form>
    </div>
  );
}

export default Quote;