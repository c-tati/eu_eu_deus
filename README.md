# 📖 Eu, Eu e Deus

> **"Quem você é já foi definido por Aquele que o criou."**

O **Eu, Eu e Deus** é uma aplicação web interativa e inspiradora construída com **React** e **Vite**. O seu principal propósito é servir como um refúgio e ferramenta digital para reflexão pessoal e fortalecimento espiritual, ajudando os utilizadores a redescobrirem a sua verdadeira identidade em Cristo com base direta nas Sagradas Escrituras.

Em um mundo acelerado e saturado por opiniões, expectativas e ruído externo, a plataforma convida a um momento de pausa para meditar em afirmações de fé fundamentadas biblicamente, promovendo saúde mental, paz interior e conexão espiritual.

---

## ✨ Funcionalidades Principais

- 🔍 **Exploração Dinâmica & Pesquisa**: Filtre afirmações por categorias temáticas ou pesquise termos específicos (como referências, palavras-chave ou versículos) em tempo real.
- 📂 **Categorias de Identidade & Fé**:
  - **Identidade** (Quem somos em Deus)
  - **Amor de Deus** (O amor inabalável e eterno)
  - **Fé**, **Perdão**, **Propósito**, **Chamado**, **Missão**, **Coragem**, **Esperança** e **Santidade**.
- 📖 **Estudo e Meditação Detalhada**:
  - **Passagem Bíblica**: Versículo de apoio com referência exata.
  - **Explicação Contextual**: Tradução prática da verdade bíblica para o quotidiano.
  - **Reflexão Pessoal**: Perguntas profundas para introspeção.
  - **Oração sugerida**: Uma curta oração para guiar a comunhão pessoal.
  - **Navegação Inteligente**: Aceda facilmente à afirmação anterior ou seguinte diretamente na visualização de detalhes.
- ❤️ **Favoritos com Persistência Local**: Guarde as suas afirmações de fé preferidas para aceder rapidamente mais tarde. As preferências são salvas localmente no dispositivo (via LocalStorage).
- 💡 **Sugestões da Comunidade**: Envie as suas próprias verdades baseadas nas Escrituras através de um formulário de sugestão, permitindo que novas ideias sejam guardadas localmente para futuras atualizações.
- 🌓 **Modo Escuro Premium (Dark Mode)**: Tema com contraste ultra-suave e paleta de cores acolhedora (Obsidiana, Castanhos, Linho e Ouro) ideal para meditação noturna sem fadiga visual.
- 🎨 **Design Responsivo & Minimalista**: Visual premium com foco total na leitura, tipografia elegante (Outfit, Playfair Display e Lora) e animações de transição suaves (`fade-in`).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando práticas modernas de desenvolvimento web:

- **React 19** – Biblioteca principal para a interface reativa.
- **React Router Dom 7** – Gestão de rotas e navegação da aplicação.
- **Vite 8** – Ferramenta de build rápida e leve com HMR (Hot Module Replacement).
- **CSS 3 (Vanilla CSS)** – Estilização personalizada, livre de bibliotecas externas complexas, assegurando flexibilidade com variáveis CSS dinâmicas para suporte a temas.
- **LocalStorage API** – Persistência contínua de favoritos, sugestões de afirmações e preferência de tema do utilizador.
- **React Hooks Personalizados** – Encapsulamento de estado reativo e lógica com [useStatements.js](file:///home/ctati/Documents/My_projects/eu_eu_deus/src/hooks/useStatements.js) e [useLocalStorage.js](file:///home/ctati/Documents/My_projects/eu_eu_deus/src/hooks/useLocalStorage.js).

---

## 📂 Estrutura de Pastas do Projeto

```text
eu_eu_deus/
├── public/                 # Recursos públicos e estáticos
├── src/
│   ├── assets/             # Imagens e logótipos (ex: hero.png)
│   ├── components/         # Componentes React reutilizáveis e modulares
│   │   ├── Domain/         # Componentes de negócio (StatementCard, SuggestionForm...)
│   │   ├── Layout/         # Layout geral (Navbar, Footer, Layout wrapper)
│   │   └── Reusable/       # Elementos de UI reutilizáveis (Button, Card, Input...)
│   ├── data/               # Fonte de dados local (statements.js com categorias e dados iniciais)
│   ├── hooks/              # Hooks personalizados (useStatements.js, useLocalStorage.js)
│   ├── pages/              # Páginas da aplicação (Home, Afirmações, Detalhes, Sugerir, Sobre)
│   ├── services/           # Serviços auxiliares (storageService.js para persistência de dados)
│   ├── styles/             # Ficheiros de estilização (variables.css, global.css, main.css)
│   ├── App.jsx             # Componente App central com roteamento
│   └── main.jsx            # Ponto de entrada da aplicação
├── eslint.config.js        # Configuração de linting da aplicação
├── index.html              # Ficheiro HTML raiz
├── package.json            # Dependências e scripts do Node.js
└── vite.config.js          # Configuração de build do Vite
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado no seu computador:
- **Node.js** (versão 18 ou superior recomendada)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório git:
   ```bash
   git clone git@github.com:c-tati/eu_eu_deus.git
   ```

2. Aceda à pasta do projeto:
   ```bash
   cd eu_eu_deus
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução em Desenvolvimento

Inicie o servidor de desenvolvimento local:
```bash
npm run dev
```
A aplicação estará disponível por padrão no endereço `http://localhost:5173`.

### Construção para Produção

Para gerar a build otimizada de produção:
```bash
npm run build
```
Os ficheiros estáticos gerados serão salvos na pasta `/dist`.

Para pré-visualizar a build de produção localmente:
```bash
npm run preview
```

---

## 🗺️ Roadmap / Futuras Melhorias

- [ ] **Notificação Diária**: Alerta diário opcional com a "Afirmação do Dia".
- [ ] **Partilha Social**: Exportação de cartões de afirmação com design gerado para partilhar no Instagram, WhatsApp ou outras redes.
- [ ] **Integração com Backend**: Ligar a aplicação a uma base de dados real para submissões em tempo real.
- [ ] **Multi-idiomas**: Suporte a outros idiomas para além do Português.

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga estes passos para colaborar:

1. Faça um **Fork** do projeto.
2. Crie um ramo para a sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Submeta as suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o push para o seu ramo (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
