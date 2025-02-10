# Priority Flow - Sistema de Gerenciamento de Tarefas

![CI/CD](https://github.com/FuturoDevJunior/prio/workflows/CI/CD/badge.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

Sistema moderno para gerenciamento colaborativo de tarefas com priorização inteligente, desenvolvido com TypeScript e arquitetura escalável.

## ✨ Funcionalidades

- Autenticação segura com senha mestra
- Priorização dinâmica de tarefas
- Interface responsiva com tema escuro/claro
- Sincronização em tempo real
- Drag & Drop intuitivo
- Dashboard analítico
- Exportação para PDF/CSV
- API RESTful integrada

## 🚀 Tecnologias

- **Backend**: Node.js + Express
- **Frontend**: Vanilla JS + CSS Moderno
- **Banco de Dados**: MongoDB/PostgreSQL (configurável)
- **Infra**: Docker + NGINX
- **CI/CD**: GitHub Actions
- **Testes**: Jest + Supertest

## 📦 Pré-requisitos

- Node.js 18+
- npm 9+
- Docker 24+ (opcional)
- PostgreSQL/MongoDB (opcional)

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/FuturoDevJunior/prio.git
cd prio

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie em modo desenvolvimento
npm run dev
```

## 🔧 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/prio
EDGE_SECRET_KEY=sua_chave_secreta_aqui
```

## 🐳 Docker

```bash
# Build da imagem
docker build -t priority-flow .

# Executar container
docker run -d -p 3000:3000 --env-file .env priority-flow
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨💻 Autor

**DevFerreiraG**  
- GitHub: [@FuturoDevJunior](https://github.com/FuturoDevJunior)  
- LinkedIn: [DevFerreiraG](https://www.linkedin.com/in/DevFerreiraG)

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    ...
  },
  "include": ["server/**/*"]
}
```
