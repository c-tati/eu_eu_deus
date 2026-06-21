import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Barra de navegação do cabeçalho da aplicação.
 * Adaptada para ecrãs de computadores e telemóveis.
 */
export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navegação Principal">
      <div className="container navbar-container">
        <NavLink to="/" className="brand-link" onClick={closeMenu}>
          {/* Símbolo de cruz e brilho elegante em SVG */}
          <svg
            className="brand-symbol"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M6 8h12"></path>
          </svg>
          <span>Eu, Eu e Deus</span>
        </NavLink>

        {/* Controlo de Ações da Navbar (Tema + Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Botão de Tema Claro/Escuro */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            aria-label={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
            title={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
          >
            {theme === 'light' ? (
              // Ícone de Lua (Modo Claro -> Clica para Escuro)
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Ícone de Sol (Modo Escuro -> Clica para Claro)
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Botão de Menu para Dispositivos Móveis */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Abrir menu de navegação"
          >
            {isOpen ? (
              // Ícone Fechar (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Ícone Hambúrguer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Links de navegação */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/afirmacoes"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Afirmações
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sugerir"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sugerir
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
