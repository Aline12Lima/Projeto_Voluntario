import { Section } from '../ui/Section';
import img1 from '../../assets/images/new1.webp';
import img2 from '../../assets/images/new2.png';
import img3 from '../../assets/images/new3.png';

export const Testimonials = () => {
  const news = [
    {
      title: "ONG “ANDE Fazendo o Bem” realiza sonhos de 220 crianças em Extrema (MG)",
      image: img1,
      source: "Jornal Extrema Total",
      link: "https://www.instagram.com/p/DSzxmUYEVT1/",
    },
    {
      title: "ONG “Ande – Fazendo o Bem” realiza ação solidária no Natal em Extrema",
      image: img2,
      source: "Site Jornal Extrema",
      link: "https://jornalmaisextrema.com.br/ong-ande-fazendo-o-bem-realiza-acao-solidaria-no-natal-em-extrema/",
    },
    {
      title: "Notirica Jornal + Extrema Dezembro de 2025",
      image: img3,
      source: "Jornal + Extrema",
      link: "https://jornalmaisextrema.com.br/ong-ande-de-extrema-busca-padrinhos-para-adocao-de-cartinhas-de-criancas-e-apoiadores-para-a-entrega-de-marmitas-da-ceia-de-natal/",
    },
  ];

  return (
    <Section id="testimonials" bg="gray" title="O que dizem" subtitle="Notícias Recentes">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 mb-4">Fonte: {item.source}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-semibold hover:underline"
              >
                Ler mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
