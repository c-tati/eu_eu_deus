import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente do rodapé da plataforma.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Rodapé do Site">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">Eu, Eu e Deus</div>
            <p style={{ marginTop: '8px', fontSize: '0.85rem', maxWidth: '300px', opacity: 0.8 }}>
              Descubra quem você é sob a ótica dAquele que o criou e o ama infinitamente.
            </p>
          </div>
          
          <nav className="footer-links" aria-label="Links úteis do rodapé">
            <Link to="/" className="footer-link">Início</Link>
            <Link to="/afirmacoes" className="footer-link">Afirmações</Link>
            <Link to="/sugerir" className="footer-link">Sugerir</Link>
            <Link to="/sobre" className="footer-link">Sobre</Link>
          </nav>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Eu, Eu e Deus. Fundamentado na Palavra. Feito com amor para a glória de Deus.</p>
        </div>
      </div>
    </footer>
  );
}
