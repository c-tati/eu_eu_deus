import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Barra de navegação do cabeçalho da aplicação.
 * Adaptada para ecrãs de computadores e telemóveis.
 */
export default function Navbar() {
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
