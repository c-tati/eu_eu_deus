import React from 'react';
import { useParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
import FavoriteButton from '../components/Domain/FavoriteButton';

/**
 * Página de Detalhe da Afirmação (StatementDetailsPage).
 * Foco na leitura confortável do versículo, devocional, reflexão pessoal e oração.
 */
export default function StatementDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getStatementById,
    getNextStatementId,
    getPrevStatementId,
    toggleFavorite,
    isFavorite
  } = useOutletContext();

  const statementData = getStatementById(id);

  if (!statementData) {
    return (
      <div className="container section fade-in" style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Afirmação não encontrada</h1>
        <p style={{ marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
          A verdade bíblica que procura não existe ou foi removida.
        </p>
        <Link to="/afirmacoes" className="btn btn-primary">
          Voltar às Afirmações
        </Link>
      </div>
    );
  }

  const { statement, category, verseReference, verseText, explanation, reflection, prayer } = statementData;
  const isFav = isFavorite(statementData.id);
  
  const prevId = getPrevStatementId(id);
  const nextId = getNextStatementId(id);

  return (
    <div className="container section fade-in">
      <div className="details-container">
        {/* Link para voltar com seta */}
        <Link to="/afirmacoes" className="back-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar às afirmações
        </Link>

        {/* Ecrã de Leitura Premium */}
        <article className="details-card">
          <div className="details-header">
            <span className="card-category">{category}</span>
            <FavoriteButton isFav={isFav} onClick={() => toggleFavorite(statementData.id)} />
          </div>

          <h1 className="details-statement">“{statement}”</h1>

          {/* O Bloco do Versículo */}
          <blockquote className="verse-block">
            <p>“{verseText}”</p>
            <cite style={{ display: 'block', marginTop: '12px', fontSize: '0.95rem', fontWeight: '600', fontStyle: 'normal', color: 'var(--color-accent-gold-hover)' }}>
              — {verseReference}
            </cite>
          </blockquote>

          {/* O Bloco da Explicação Devocional */}
          <div className="details-devotional">
            <h2 className="devotional-title">O Fundamento Bíblico</h2>
            <p className="devotional-text">{explanation}</p>
          </div>

          {/* O Bloco de Reflexão Pessoal */}
          {reflection && (
            <div className="reflection-box">
              <h2 className="reflection-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-accent-gold)' }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Para Refletir
              </h2>
              <p className="reflection-text">{reflection}</p>
            </div>
          )}

          {/* O Bloco da Oração do Dia */}
          {prayer && (
            <div className="prayer-box">
              <h2 className="prayer-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-accent-olive)' }}
                >
                  <path d="M12 2L2 22h20L12 2z"></path>
                  <path d="M12 6l-6 12h12l-6-12z"></path>
                </svg>
                Momento de Oração
              </h2>
              <p className="prayer-text">“{prayer}”</p>
            </div>
          )}

          {/* Navegação entre Afirmações (Anterior / Próxima) */}
          <div className="details-actions">
            {prevId ? (
              <button
                type="button"
                onClick={() => navigate(`/afirmacao/${prevId}`)}
                className="btn btn-outline"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                &larr; Anterior
              </button>
            ) : (
              <div />
            )}

            {nextId ? (
              <button
                type="button"
                onClick={() => navigate(`/afirmacao/${nextId}`)}
                className="btn btn-outline"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                Próxima &rarr;
              </button>
            ) : (
              <div />
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
