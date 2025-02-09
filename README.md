# Lista de Tarefas – Família Organiza++

Este projeto é uma aplicação web interativa para gerenciar uma lista de tarefas colaborativa, ideal para organizar as compras e pendências de casa.

## Funcionalidades

- **Tela de Autenticação:** Tela inicial com estilo terminal CMD que solicita uma senha (default: `familia`). Sem a senha correta, não é possível acessar a aplicação.
- **Lista de Tarefas Interativa:** Crie, edite, delete e reordene tarefas via drag & drop.
- **Conexão com Banco de Dados:** Configuração dinâmica para conectar via REST API, Firebase ou PHP/MySQL.
- **Marca d'água:** A assinatura "DevFerreiraG" aparece na interface principal.
- **Backend com Node.js:** Servidor Express para servir arquivos estáticos e (possivelmente) endpoints de API.
- **Integração PHP:** Exemplo de script para conexão com banco de dados MySQL.
- **TypeScript & CSS:** Código frontend escrito em TypeScript (compilado para JavaScript) e design responsivo com CSS.

## Estrutura do Projeto

- **/public**
  - `index.html` – Página principal com tela de autenticação e aplicação.
  - **/css**
    - `styles.min.css` – Estilos gerais.
    - `cmd-theme.min.css` – Estilos para a tela de autenticação (tema CMD).
  - **/js**
    - `app.ts` – Código fonte TypeScript.
    - `app.js` – Código compilado (a partir do app.ts).
  - **/php**
    - `db.php` – Script PHP para integração com MySQL.
- **/server**
  - `server.ts` – Servidor Node.js com Express.
- **.vscode**
  - `launch.json` – Configurações do depurador.
  - `settings.json` – Configurações do VS Code.
- **.github/workflows**
  - `ci.yml` – Workflow de CI/CD com GitHub Actions.
- `package.json` – Configura o projeto Node (scripts/dependências).
- `tsconfig.json` – Configura o compilador TypeScript.
- `README.md` – Este arquivo.

## Instalação e Execução

1. **Pré-requisitos:** Certifique-se de ter Node.js, npm e PHP instalados.
2. **Clonar o repositório:**
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
3. **Instalar dependências:**
   ```
   npm install
   ```
4. **Compilar TypeScript:**
   ```
   npm run build
   ```
5. **Iniciar o Servidor:**
   ```
   npm start
   ```
6. **Acessar no Navegador:**  
   Abra http://localhost:3000

## CI/CD

O projeto conta com um workflow no GitHub Actions (arquivo `.github/workflows/ci.yml`) que executa builds e testes (simulados).

## Customização

- **Senha de Acesso:** Altere a variável `authPassword` em `public/js/app.ts` conforme desejar.
- **Banco de Dados:** Configure a conexão pelo painel "Conectar Banco de Dados" ou ajustando o script PHP (`public/php/db.php`).

## Licença

MIT License

---

Desenvolvido por **DevFerreiraG** 