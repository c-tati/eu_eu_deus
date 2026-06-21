import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

/**
 * Card de domínio para exibir a síntese de uma afirmação cristã.
 * @param {Object} props
 * @param {Object} props.statementData - Dados da afirmação (id, statement, category, verseReference)
 * @param {boolean} props.isFav - Se a afirmação é favorita
 * @param {Function} props.onToggleFav - Função para alternar favorito
 * @param {string} [props.className='']
 */
export default function StatementCard({
  statementData,
  isFav,
  onToggleFav,
  className = ''
}) {
  const navigate = useNavigate();
  const { id, statement, category, verseReference } = statementData;

  const handleCardClick = () => {
    navigate(`/afirmacao/${id}`);
  };

  return (
    <div
      className={`statement-card ${className}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <span className="card-category">{category}</span>
      <p className="card-text">“{statement}”</p>
      
      <div className="card-footer">
        <span className="card-verse">{verseReference}</span>
        <div className="actions-row">
          <FavoriteButton isFav={isFav} onClick={onToggleFav} />
        </div>
      </div>
    </div>
  );
}
