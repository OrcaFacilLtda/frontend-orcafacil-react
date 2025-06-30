
# 🌐 OrçaFácil - Módulo Front-End (React)

Este repositório contém a interface web do projeto **OrçaFácil**, desenvolvida com React. Esta aplicação é responsável por fornecer uma experiência fluida e intuitiva para os usuários acessarem os serviços da plataforma por navegadores modernos.

> ⚠️ Este projeto representa **somente o front-end web** do sistema OrçaFácil.

---

## 🧭 Funcionalidades

- Página de login e registro de usuários
- Cadastro de solicitações de orçamento por tipo de serviço
- Visualização e comparação de propostas recebidas
- Acesso ao perfil de prestadores de serviço
- Área administrativa para gerenciamento de usuários, propostas e categorias
- Interface responsiva e adaptada para dispositivos móveis

---

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular, com separação clara de responsabilidades:

- `orcafacil-frontend/`
  - `public/`
  - `src/`
    - `assets/` – Imagens e ícones
    - `components/` – Componentes reutilizáveis (botões, formulários, etc.)
    - `pages/` – Páginas principais (Home, Login, Dashboard, etc.)
    - `services/` – Integração com APIs
    - `routes/` – Configuração de rotas (React Router)
    - `styles/` – Estilos globais e temas
    - `App.jsx` – Arquivo principal da aplicação
  - `package.json`
  - `README.md`

---

## ⚙️ Como Executar

Para executar este projeto localmente, siga os passos abaixo:

### 🛠 Pré-requisitos

- Node.js 18 ou superior
- npm (ou Yarn, se preferir)

### 📥 Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/databrick/orcafacil-frontend.git
   cd orcafacil-frontend
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` com a URL da API, por exemplo:

   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Execute o projeto**

   ```bash
   npm start
   ```

5. **Acesse no navegador**

   ```
   http://localhost:3000
   ```

> 💡 Certifique-se de que o back-end (`orcafacil-backend`) esteja ativo para o funcionamento completo da aplicação.
``
---

## 🔗 Integração

Este front-end consome dados e interage com os seguintes módulos da plataforma **OrçaFácil**:

- [`orcafacil-backend`](https://github.com/databrick/orcafacil-backend): serviços de API e banco de dados
- [`orcafacil-mobile`](https://github.com/databrick/orcafacil-mobile): versão mobile Android (Kotlin)

---

## 📄 Licença

Distribuído sob a **Licença de Uso Estudantil**. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

> Desenvolvido por **OrçaFacilLtda** – Parte integrante do ecossistema OrçaFácil  
> © 2025 Todos os direitos reservados
