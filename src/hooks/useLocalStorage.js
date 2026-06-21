import { useState, useEffect } from 'react';

/**
 * Hook personalizado para ler e gravar estados persistentes no LocalStorage.
 * @param {string} key - Chave a utilizar no localStorage.
 * @param {*} initialValue - Valor inicial se não houver dados gravados.
 * @returns {[*, Function]} Estado e função de atualização do estado.
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Erro ao ler chave "${key}" do localStorage:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Erro ao gravar chave "${key}" no localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
