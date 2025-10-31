
# 📚 Sistema de Gerenciamento de Cursos — Guia Completo

Este sistema permite que usuários se cadastrem, façam login, visualizem cursos disponíveis e adicionem novos cursos. Ele é composto por três partes principais:

- **Frontend**: Interface web feita com HTML, CSS e JavaScript.
- **Backend**: API desenvolvida com Node.js, Express, Sequelize e MySQL.
- **Infraestrutura**: Containerização com Docker e documentação via Swagger.

---

## ⚙️ Funcionamento do Sistema

### 🔐 Autenticação
- Usuário se cadastra e faz login.
- A API retorna um **token JWT**.
- O token é armazenado no navegador e usado para autenticar requisições.

### 📋 Funcionalidades
1. **Cadastro de Usuário**  
   Envia dados para a API via POST. Redireciona para login após sucesso.

2. **Login**  
   Recebe token JWT da API. Token é salvo no `localStorage`.

3. **Listagem de Cursos**  
   Requisição GET autenticada. Exibe cursos em tabela HTML.

4. **Adição de Cursos**  
   Requisição POST autenticada. Adiciona novo curso à base.

5. **Logout**  
   Remove token e redireciona para login.

---

## 🧰 Programas Necessários

- **Node.js**
- **Docker** e **Docker Compose**
- **Git**
- **Navegador Web**
- **Editor de Código**

---

## 🚀 Passo a Passo para Utilização

### 1️⃣ Clonar o Repositório
```bash
git clone <repo>
cd <repo>
```

### 2️⃣ Subir os Containers
```bash
docker compose up --build
```

### 3️⃣ Executar Migrações
```bash
docker exec -it node_app npx sequelize-cli db:migrate
```

### 4️⃣ Verificar Logs
```bash
docker logs node_app -f
```

### 5️⃣ Acessar a Aplicação
- API: http://localhost:3000
- Swagger: http://localhost:3000/docs

### 6️⃣ Testar Funcionalidades via Swagger
- `POST /api/auth/register` → Cadastrar usuário
- `POST /api/auth/login` → Fazer login
- Clique em **Authorize** e cole o token JWT
- `GET /api/courses` → Listar cursos
- `POST /api/courses` → Criar curso

### 7️⃣ (Opcional) Resetar Ambiente
```bash
docker compose down -v
docker compose up -d --build
docker exec -it node_app npx sequelize-cli db:migrate
```
