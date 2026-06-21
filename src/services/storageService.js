const KEYS = {
  FAVORITES: 'eu_eu_deus_favorites',
  SUGGESTIONS: 'eu_eu_deus_suggestions'
};

export const storageService = {
  // --- FAVORITOS ---
  
  /**
   * Obtém a lista de IDs das afirmações favoritas.
   * @returns {number[]} Array de IDs favoritados.
   */
  getFavorites: () => {
    try {
      const favs = localStorage.getItem(KEYS.FAVORITES);
      return favs ? JSON.parse(favs) : [];
    } catch (error) {
      console.error("Erro ao ler favoritos do LocalStorage:", error);
      return [];
    }
  },

  /**
   * Alterna o estado de favorito de um ID de afirmação.
   * @param {number} id - ID da afirmação.
   * @returns {boolean} Novo estado de favorito (true se adicionado, false se removido).
   */
  toggleFavorite: (id) => {
    try {
      const favorites = storageService.getFavorites();
      const index = favorites.indexOf(id);
      let isFav = false;

      if (index === -1) {
        favorites.push(id);
        isFav = true;
      } else {
        favorites.splice(index, 1);
      }

      localStorage.setItem(KEYS.FAVORITES, JSON.stringify(favorites));
      return isFav;
    } catch (error) {
      console.error("Erro ao salvar favoritos no LocalStorage:", error);
      return false;
    }
  },

  /**
   * Verifica se uma afirmação é favorita.
   * @param {number} id - ID da afirmação.
   * @returns {boolean}
   */
  isFavorite: (id) => {
    const favorites = storageService.getFavorites();
    return favorites.includes(id);
  },

  // --- SUGESTÕES DA COMUNIDADE ---

  /**
   * Obtém todas as sugestões enviadas localmente pela comunidade.
   * @returns {Object[]}
   */
  getSuggestions: () => {
    try {
      const suggestions = localStorage.getItem(KEYS.SUGGESTIONS);
      return suggestions ? JSON.parse(suggestions) : [];
    } catch (error) {
      console.error("Erro ao ler sugestões do LocalStorage:", error);
      return [];
    }
  },

  /**
   * Guarda uma nova sugestão enviada pela comunidade.
   * @param {Object} suggestion - Dados da sugestão (statement, verseReference, explanation, name).
   * @returns {Object[]} Lista atualizada de sugestões.
   */
  addSuggestion: (suggestion) => {
    try {
      const suggestions = storageService.getSuggestions();
      const newSuggestion = {
        id: Date.now(), // gera ID único baseado em timestamp
        createdAt: new Date().toISOString(),
        ...suggestion
      };
      
      suggestions.push(newSuggestion);
      localStorage.setItem(KEYS.SUGGESTIONS, JSON.stringify(suggestions));
      return suggestions;
    } catch (error) {
      console.error("Erro ao salvar sugestão no LocalStorage:", error);
      return [];
    }
  }
};
