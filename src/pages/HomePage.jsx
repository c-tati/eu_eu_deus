import React, { useMemo } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import StatementCard from '../components/Domain/StatementCard';
import Button from '../components/Reusable/Button';

/**
 * Página Inicial (HomePage).
 * Apresenta a plataforma, a sua missão e 3 afirmações em destaque.
 */
export default function HomePage() {
  const navigate = useNavigate();
  const { statements, toggleFavorite, isFavorite } = useOutletContext();

  // Seleciona 3 afirmações específicas e marcantes como destaques fixos para a homepage
  const highlights = useMemo(() => {
    // Escolhemos IDs: 1 (Filho de Deus), 3 (Nada pode me separar do amor), 11 (Espírito de Coragem)
    const featuredIds = [1, 3, 11];
    return statements.filter(item => featuredIds.includes(item.id));
  }, [statements]);

  return (
    <div className="fade-in">
      {/* Secção Hero de Apresentação */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <p className="hero-subtitle">Identidade Cristã nas Escrituras</p>
          <h1 id="hero-title" className="hero-title">Descubra quem você é em Deus</h1>
          <p className="hero-description">
            Vença as mentiras e as dúvidas do quotidiano descobrindo as verdades eternas 
            que o Criador declarou a seu respeito nas Sagradas Escrituras. 
            Uma jornada de paz, acolhimento e fé.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => navigate('/afirmacoes')}>
              Explorar Afirmações
            </Button>
            <Button variant="secondary" onClick={() => navigate('/sobre')}>
              Conhecer o Projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Secção de Destaques */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-card)' }} aria-labelledby="highlights-title">
        <div className="container">
          <div className="section-title-container">
            <h2 id="highlights-title" className="section-title">Palavras para Fortalecer a Alma</h2>
            <p className="section-subtitle">Comece a meditar hoje em verdades que transformam o coração</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <StatementCard
                key={item.id}
                statementData={item}
                isFav={isFavorite(item.id)}
                onToggleFav={() => toggleFavorite(item.id)}
              />
            ))}
          </div>

          <div className="home-cta-container">
            <Button variant="outline" onClick={() => navigate('/afirmacoes')}>
              Ver Todas as Afirmações &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
