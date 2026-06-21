import React from 'react';

/**
 * Barra de pesquisa reutilizável com um ícone SVG integrado.
 * @param {Object} props
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} [props.placeholder='Pesquisar por afirmação, versículo...']
 * @param {string} [props.className='']
 */
export default function SearchBar({
  value,
  onChange,
  placeholder = 'Pesquisar por afirmação, versículo...',
  className = ''
}) {
  return (
    <div className={`search-bar-wrapper ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="search-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        aria-label="Caixa de pesquisa"
      />
    </div>
  );
}
