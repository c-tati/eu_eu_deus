import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página Sobre (AboutPage).
 * Explica o propósito espiritual e teológico do projeto "Eu, Eu e Deus".
 */
export default function AboutPage() {
  return (
    <div className="container section fade-in">
      <div className="about-hero">
        <h1>Sobre o Projeto</h1>
        <p>A verdade sobre quem você é já foi escrita por Aquele que o criou.</p>
      </div>

      <div className="about-content">
        <article className="about-article">
          <div className="about-section-block">
            <h2>O Nosso Propósito</h2>
            <p>
              O projeto <strong>"Eu, Eu e Deus"</strong> nasceu do desejo de criar um refúgio digital 
              onde qualquer pessoa pudesse redescobrir a sua identidade em Cristo. No mundo acelerado 
              e conectado em que vivemos, somos constantemente bombardeados por opiniões, expectativas 
              e rótulos que tentam definir o nosso valor com base na nossa produtividade, aparência ou estatuto.
            </p>
            <p>
              Esta plataforma foi desenhada para contrariar essa corrente, lembrando-nos de que a única voz 
              que tem autoridade para definir a nossa essência é a voz de Deus, revelada na Sua Palavra.
            </p>
          </div>

          <div className="about-section-block">
            <h2>A Importância da Identidade em Deus</h2>
            <p>
              Saber quem somos em Deus muda a forma como vivemos, como nos relacionamos e como enfrentamos 
              as tempestades. Quando as Escrituras dizem que somos "filhos de Deus", "templos do Espírito Santo", 
              ou que fomos "criados para boas obras", isso não são apenas palavras motivacionais ou de autoajuda. 
              São verdades espirituais absolutas, seladas pelo sacrifício de Jesus.
            </p>
            <p>
              Ao meditarmos nessas afirmações acompanhadas dos seus versículos bíblicos fundamentais, treinamos 
              a nossa mente a alinhar-se com os pensamentos do Criador. Isso gera paz profunda, coragem nas 
              tribulações, libertação da culpa e um forte senso de propósito.
            </p>
          </div>

          <div className="about-section-block">
            <h2>Como Contribuir</h2>
            <p>
              Acreditamos que o corpo de Cristo se edifica mutuamente. Por isso, a plataforma inclui uma área 
              onde pode sugerir novas afirmações de fé e versículos de apoio que tenham sido um bálsamo na sua vida.
            </p>
            <p>
              Pode aceder à página de <Link to="/sugerir" style={{ color: 'var(--color-accent-gold-hover)', textDecoration: 'underline', fontWeight: '500' }}>Sugestões</Link> e 
              partilhar a sua verdade bíblica preferida. Juntos, continuaremos a construir um acervo de esperança.
            </p>
          </div>

          <div className="about-author-note">
            “Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.”
            <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: '600', marginTop: '10px', fontStyle: 'normal' }}>
              — Efésios 2:10
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}
