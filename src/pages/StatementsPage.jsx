import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import StatementCard from '../components/Domain/StatementCard';
import SearchBar from '../components/Reusable/SearchBar';
import CategoryFilter from '../components/Reusable/CategoryFilter';
import { categories } from '../data/statements';

/**
 * Página de Listagem de Afirmações (StatementsPage).
 * Permite filtrar por categoria, pesquisar por termos e exibir favoritos.
 */
export default function StatementsPage() {
  const {
    filteredStatements,
    favoriteStatements,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    toggleFavorite,
    isFavorite
  } = useOutletContext();

  // Estados locais para controlar a tab ativa: 'all' (todas) ou 'favorites' (apenas favoritos)
  const [activeTab, setActiveTab] = useState('all');

  // Filtra as afirmações com base na tab ativa
  const displayedStatements = useMemo(() => {
    if (activeTab === 'favorites') {
      // Se estiver na tab favoritos, filtramos a lista de favoritos pelo termo de pesquisa e categoria
      return favoriteStatements.filter(item => {
        const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
        const cleanQuery = searchQuery.toLowerCase().trim();
        const matchesSearch = !cleanQuery || 
          item.statement.toLowerCase().includes(cleanQuery) ||
          item.verseReference.toLowerCase().includes(cleanQuery) ||
          item.explanation.toLowerCase().includes(cleanQuery);
        return matchesCategory && matchesSearch;
      });
    }
    return filteredStatements;
  }, [activeTab, filteredStatements, favoriteStatements, activeCategory, searchQuery]);

  return (
    <div className="container section fade-in">
      {/* Cabeçalho da Página */}
      <div className="statements-header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Promessas de Deus</h1>
        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          Explore e medite nas verdades das Escrituras. Use a pesquisa e os filtros abaixo 
          para encontrar passagens que falem diretamente ao seu coração.
        </p>
      </div>

      {/* Alternador de Tabs (Todas vs Favoritos) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '32px',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '12px'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          style={{
            padding: '8px 24px',
            fontSize: '1rem',
            fontWeight: '600',
            borderBottom: activeTab === 'all' ? '3px solid var(--color-accent-gold)' : '3px solid transparent',
            color: activeTab === 'all' ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
            transition: 'all var(--transition-fast)'
          }}
        >
          Todas as Afirmações ({activeTab === 'all' ? filteredStatements.length : filteredStatements.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('favorites')}
          style={{
            padding: '8px 24px',
            fontSize: '1rem',
            fontWeight: '600',
            borderBottom: activeTab === 'favorites' ? '3px solid var(--color-accent-gold)' : '3px solid transparent',
            color: activeTab === 'favorites' ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
            transition: 'all var(--transition-fast)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>Os meus Favoritos</span>
          <span style={{
            fontSize: '0.8rem',
            backgroundColor: favoriteStatements.length > 0 ? 'var(--color-accent-terracotta-light)' : 'var(--border-color)',
            color: favoriteStatements.length > 0 ? 'var(--color-accent-terracotta)' : 'var(--color-text-muted)',
            padding: '2px 8px',
            borderRadius: '50px'
          }}>
            {favoriteStatements.length}
          </span>
        </button>
      </div>

      {/* Caixa de Pesquisa e Filtros */}
      <div style={{ marginBottom: '40px' }}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Grelha de Afirmações */}
      {displayedStatements.length > 0 ? (
        <div className="statements-grid">
          {displayedStatements.map((item) => (
            <StatementCard
              key={item.id}
              statementData={item}
              isFav={isFavorite(item.id)}
              onToggleFav={() => toggleFavorite(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          {activeTab === 'favorites' && favoriteStatements.length === 0 ? (
            <div className="favorites-empty fade-in">
              <p>Ainda não guardou nenhuma afirmação nos seus favoritos.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Clique no ícone de coração nos cartões para guardar as suas passagens preferidas aqui.
              </p>
            </div>
          ) : (
            <p>Nenhuma afirmação encontrada para a pesquisa selecionada.</p>
          )}
        </div>
      )}
    </div>
  );
}
