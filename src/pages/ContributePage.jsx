import React from 'react';
import SuggestionForm from '../components/Domain/SuggestionForm';

/**
 * Página de Contribuição (ContributePage).
 * Permite que a comunidade sugira novas verdades baseadas nas Escrituras.
 */
export default function ContributePage() {
  return (
    <div className="container section fade-in">
      <div className="contribute-layout">
        {/* Informação e Diretrizes */}
        <div className="contribute-info">
          <h1>Sugerir Afirmação</h1>
          <p>
            Esta plataforma é construída e enriquecida pela fé. Se encontrou uma verdade bíblica 
            sobre quem somos em Deus que tocou profundamente a sua vida, partilhe-a connosco.
          </p>
          <p>
            As sugestões enviadas são guardadas localmente no seu dispositivo e ajudam-nos a pensar 
            em novos conteúdos para atualizações futuras da plataforma.
          </p>

          <div className="community-guidelines">
            <h3>Diretrizes de Envio</h3>
            <ul>
              <li>
                <strong>Foco na Identidade:</strong> A afirmação deve expressar o que somos, temos 
                ou herdamos em Deus (ex: "Eu sou amado", "Fui redimido").
              </li>
              <li>
                <strong>Fundamentação Bíblica:</strong> Acompanhe sempre com uma referência exata 
                das Escrituras (ex: Efésios 1:7).
              </li>
              <li>
                <strong>Explicação Acolhedora:</strong> Descreva de forma simples como essa verdade 
                se traduz para o dia a dia de um cristão.
              </li>
            </ul>
          </div>
        </div>

        {/* Formulário de Envio */}
        <div>
          <SuggestionForm />
        </div>
      </div>
    </div>
  );
}
