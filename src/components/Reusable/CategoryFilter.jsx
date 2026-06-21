import React from 'react';

/**
 * Filtro de categorias em formato de botões de pílula.
 * @param {Object} props
 * @param {string[]} props.categories - Array de strings com os nomes das categorias
 * @param {string} props.activeCategory - Categoria atualmente selecionada
 * @param {Function} props.onSelectCategory - Callback acionado quando se seleciona uma categoria
 * @param {string} [props.className='']
 */
export default function CategoryFilter({
  categories = [],
  activeCategory = 'Todas',
  onSelectCategory,
  className = ''
}) {
  // Adiciona a opção "Todas" no início para permitir desmarcar o filtro
  const allCategories = ['Todas', ...categories];

  return (
    <div className={`category-filter-container ${className}`}>
      {allCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelectCategory(category)}
          className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
