import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useStatements } from './hooks/useStatements';

// Importação das Páginas
import HomePage from './pages/HomePage';
import StatementsPage from './pages/StatementsPage';
import StatementDetailsPage from './pages/StatementDetailsPage';
import ContributePage from './pages/ContributePage';
import AboutPage from './pages/AboutPage';

/**
 * Componente intermédio para injetar o estado das afirmações no Outlet do Router.
 * Isto permite que todas as páginas filhas utilizem a mesma fonte de dados de forma reativa.
 */
function AppLayout() {
  const statementsData = useStatements();

  return (
    <Layout theme={statementsData.theme} toggleTheme={statementsData.toggleTheme}>
      {/* Outlet partilha o estado com useOutletContext() nas páginas */}
      <Outlet context={statementsData} />
    </Layout>
  );
}

/**
 * Componente Raiz da Aplicação.
 * Configura as rotas e o empacotamento com BrowserRouter.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/afirmacoes" element={<StatementsPage />} />
          <Route path="/afirmacao/:id" element={<StatementDetailsPage />} />
          <Route path="/sugerir" element={<ContributePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          
          {/* Rota Fallback (Redirecionamento se a rota não existir) */}
          <Route
            path="*"
            element={
              <div className="container section" style={{ textAlign: 'center' }}>
                <h1 style={{ marginBottom: '20px' }}>Página não encontrada</h1>
                <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                  A página que procura não existe ou foi movida.
                </p>
                <a href="/" className="btn btn-primary">Voltar ao Início</a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
