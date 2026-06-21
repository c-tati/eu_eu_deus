import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Componente Wrapper de Layout estrutural da aplicação.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo principal da página
 */
export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content" id="main-content-area">
        {children}
      </main>
      <Footer />
    </div>
  );
}
