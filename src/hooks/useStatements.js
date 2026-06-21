import { useState, useMemo, useEffect } from 'react';
import { initialStatements } from '../data/statements';
import { useLocalStorage } from './useLocalStorage';

/**
 * Hook para centralizar o estado das afirmações, favoritos, pesquisa e filtros de categoria.
 */
export function useStatements() {
  // Estado do tema claro/escuro
  const [theme, setTheme] = useLocalStorage('eu_eu_deus_theme', 'light');

  // Efeito para aplicar o tema no elemento raiz
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Estado dos favoritos armazenado localmente
  const [favorites, setFavorites] = useLocalStorage('eu_eu_deus_favorites', []);
  
  // Lista de afirmações
  const [statements] = useState(initialStatements);
  
  // Filtros ativos
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  // Alterna o estado de favorito de uma afirmação
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Verifica se um id está nos favoritos
  const isFavorite = (id) => favorites.includes(id);

  // Lista filtrada com base na pesquisa e na categoria ativa
  const filteredStatements = useMemo(() => {
    return statements.filter(item => {
      // 1. Filtrar por Categoria
      const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;

      // 2. Filtrar por Pesquisa (Afirmação, Referência, Explicação, Categoria)
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = !cleanQuery || 
        item.statement.toLowerCase().includes(cleanQuery) ||
        item.verseReference.toLowerCase().includes(cleanQuery) ||
        item.explanation.toLowerCase().includes(cleanQuery) ||
        item.category.toLowerCase().includes(cleanQuery);

      return matchesCategory && matchesSearch;
    });
  }, [statements, activeCategory, searchQuery]);

  // Lista de afirmações favoritadas completas
  const favoriteStatements = useMemo(() => {
    return statements.filter(item => favorites.includes(item.id));
  }, [statements, favorites]);

  // Função para obter uma afirmação específica por ID
  const getStatementById = (id) => {
    const numericId = parseInt(id, 10);
    return statements.find(item => item.id === numericId);
  };

  // Função para obter a afirmação seguinte (para navegação na página de detalhe)
  const getNextStatementId = (currentId) => {
    const numericId = parseInt(currentId, 10);
    const index = statements.findIndex(item => item.id === numericId);
    if (index === -1) return null;
    const nextIndex = (index + 1) % statements.length;
    return statements[nextIndex].id;
  };

  // Função para obter a afirmação anterior
  const getPrevStatementId = (currentId) => {
    const numericId = parseInt(currentId, 10);
    const index = statements.findIndex(item => item.id === numericId);
    if (index === -1) return null;
    const prevIndex = (index - 1 + statements.length) % statements.length;
    return statements[prevIndex].id;
  };

  return {
    statements,
    favorites,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    filteredStatements,
    favoriteStatements,
    toggleFavorite,
    isFavorite,
    getStatementById,
    getNextStatementId,
    getPrevStatementId,
    theme,
    toggleTheme
  };
}
