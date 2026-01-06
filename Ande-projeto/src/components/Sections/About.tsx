import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Voluntários ajudando" 
            className="rounded-lg shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block">
            <p className="text-1xl font-bold">Desde </p>
            <p className="text-sm">2024</p>
            <p className="text-sm">Fazendo História </p>
          </div>
        </div>
        
        <div>
          <span className="text-primary font-bold uppercase tracking-wide">Sobre Nós</span>
          <h2 className="text-4xl font-bold text-secondary mt-2 mb-6">Juntos podemos mudar o mundo, um passo de cada vez.</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Somos uma organização sem fins lucrativos dedicada a transformar vidas.<br/> Um movimento voluntário nascido em Extrema-MG com um único propósito: transformar a realidade de famílias em situação de vulnerabilidade. Acreditamos que a solidariedade não é apenas um ato de caridade, mas uma ferramenta poderosa de mudança social.
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center gap-2">✅ Transparência total nas doações</li>
            <li className="flex items-center gap-2">✅ 100% focado no impacto social</li>
            <li className="flex items-center gap-2">✅ Equipe apaixonada e dedicada</li>
          </ul>
          <Button variant="primary" href="https://wa.me/5535999104624">Faça a sua doação</Button>
        </div>
      </div>
    </Section>
  );
};