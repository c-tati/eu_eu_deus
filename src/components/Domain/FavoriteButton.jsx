import React from 'react';

/**
 * Botão para favoritar afirmações utilizando um ícone de coração.
 * @param {Object} props
 * @param {boolean} props.isFav - Se a afirmação está favoritada
 * @param {Function} props.onClick - Callback de clique
 * @param {string} [props.className='']
 */
export default function FavoriteButton({
  isFav,
  onClick,
  className = ''
}) {
  const handleClick = (e) => {
    // Evita propagação para não abrir a página de detalhe ao favoritar
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fav-btn ${isFav ? 'active' : ''} ${className}`}
      aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={isFav ? "var(--color-accent-terracotta)" : "none"}
        stroke={isFav ? "var(--color-accent-terracotta)" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'transform var(--transition-fast)' }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
}
