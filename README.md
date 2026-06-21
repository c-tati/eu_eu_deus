# Eu, Eu e Deus

Plataforma cristã para meditar em afirmações bíblicas sobre identidade em Deus. O projeto reúne verdades das Escrituras, organizadas por categoria, com versículo de apoio e uma explicação devocional curta.

## Visão geral

`Eu, Eu e Deus` foi criado como um refúgio digital simples e acolhedor para ajudar pessoas a lembrarem quem são em Cristo. A aplicação permite explorar afirmações de fé, guardar favoritas no navegador e sugerir novas afirmações baseadas na Bíblia.

## Funcionalidades

- Lista de afirmações bíblicas com categoria, referência, versículo e explicação.
- Pesquisa por afirmação, referência bíblica, explicação ou categoria.
- Filtro por categorias como Identidade, Amor de Deus, Fé, Perdão, Propósito, Coragem, Esperança e Santidade.
- Abas para alternar entre todas as afirmações e apenas as favoritas.
- Página de detalhes para leitura focada de cada afirmação.
- Navegação entre afirmações anterior e próxima.
- Favoritos persistidos no `localStorage`.
- Formulário para sugestão de novas afirmações, com validação de campos obrigatórios e gravação local.
- Alternância entre tema claro e escuro, com preferência guardada no navegador.
- Estados de feedback para favoritos vazios, pesquisas sem resultados, sugestão enviada e páginas não encontradas.
- Layout responsivo com navegação adaptada para desktop e mobile.

## Tecnologias

- React 19
- Vite 8
- React Router DOM 7
- ESLint 10
- CSS modularizado por estilos globais, variáveis e componentes
- LocalStorage para persistência local

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial com apresentação do projeto e afirmações em destaque |
| `/afirmacoes` | Lista completa com pesquisa, filtros e favoritos |
| `/afirmacao/:id` | Página de detalhe de uma afirmação |
| `/sugerir` | Formulário para sugerir uma nova afirmação |
| `/sobre` | Explicação sobre o propósito do projeto |
| `*` | Página simples de rota não encontrada |

## Como executar

Clone o repositório:

```bash
git clone git@github.com:c-tati/eu_eu_deus.git
cd eu_eu_deus
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois abra o endereço indicado pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento com hot reload.

```bash
npm run build
```

Gera a versão de produção em `dist/`.

```bash
npm run preview
```

Serve localmente a build de produção.

```bash
npm run lint
```

Executa a análise estática com ESLint.

## Estrutura do projeto

```text
src/
  components/
    Domain/       Componentes ligados ao domínio da aplicação
    Layout/       Navbar, footer e layout geral
    Reusable/     Componentes reutilizáveis de interface
  data/           Afirmações e categorias iniciais
  hooks/          Hooks de estado, filtros e localStorage
  pages/          Páginas principais da aplicação
  services/       Serviço de persistência local
  styles/         Variáveis, estilos globais e estilos principais
```

## Organização da aplicação

O estado principal da aplicação fica centralizado no hook `useStatements`, que disponibiliza para as páginas:

- lista inicial de afirmações;
- pesquisa e categoria ativa;
- lista filtrada;
- favoritos e afirmações favoritas completas;
- navegação por ID entre afirmações;
- tema atual e função para alternar entre claro e escuro.

Esse estado é partilhado pelas rotas através do `Outlet` do React Router em `App.jsx`, evitando que cada página tenha de recriar a mesma lógica.

## Dados locais

A aplicação não usa backend. Os dados iniciais ficam em `src/data/statements.js`.

Os favoritos, sugestões e preferência de tema são guardados no navegador usando as seguintes chaves:

- `eu_eu_deus_favorites`
- `eu_eu_deus_suggestions`
- `eu_eu_deus_theme`

Isso significa que os dados salvos são locais ao dispositivo e navegador usados. As sugestões enviadas pelo formulário não aparecem automaticamente na lista pública de afirmações; elas ficam guardadas localmente para consulta ou futura curadoria.

## Contribuição

Para adicionar novas afirmações diretamente no código, edite `src/data/statements.js` seguindo o formato existente:

```js
{
  id: 17,
  statement: "Eu sou amado(a) por Deus",
  category: "Amor de Deus",
  verseReference: "Romanos 5:8",
  verseText: "Texto do versículo...",
  explanation: "Explicação curta da afirmação."
}
```

Mantenha cada afirmação fundamentada numa referência bíblica clara e com uma explicação simples, acolhedora e alinhada ao propósito do projeto.
