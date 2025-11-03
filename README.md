
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

## 👨‍💻 Uso Final

### 1️⃣ Cadastro de Usuário
- Acesse a página `cadastro.html`.
- Preencha nome, email e senha.
- Clique em "Cadastrar".
- Após sucesso, será redirecionado para a página de login.

### 2️⃣ Login
- Acesse a página `index.html`.
- Informe email e senha.
- Clique em "Logar".
- O sistema irá autenticar e salvar o token JWT no navegador.

### 3️⃣ Listagem de Cursos
- Após login, acesse `listarCurso.html`.
- O sistema verifica o token JWT.
- Se válido, uma requisição GET é feita para a API.
- Os cursos são exibidos em uma tabela com nome, período e módulo.

### 4️⃣ Adição de Cursos
- Acesse `adicionarCurso.html`.
- Preencha os dados do curso.
- Clique em "Adicionar".
- O curso será enviado via POST para a API com autenticação JWT.
- Uma mensagem de sucesso será exibida.

### 5️⃣ Logout
- Clique no botão "Sair" presente nas páginas protegidas.
- O token será removido e o usuário redirecionado para a página de login.

---

Esse fluxo garante que todas as funcionalidades estejam protegidas por autenticação e que o usuário tenha uma experiência fluida e segura.



Código frontend sendo executado na prática

<img width="1917" height="1066" alt="image" src="https://github.com/user-attachments/assets/617848f7-f9e6-4329-9685-50b59652e4f8" />

O usuário realiza o cadastro preenchendo o nome, e-mail e senha desejada como a imagem abaixo.

<img width="1919" height="1067" alt="image" src="https://github.com/user-attachments/assets/08851f39-37f0-4e39-866a-1dc2ade5a192" />

Voltando na área de Login, você preeenche com os dados cadastrados.

<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/eee18fda-5a2a-4d8b-94bc-18e914269cd1" />

Seleciona na opção de Adicionar curso.

<img width="1919" height="994" alt="image" src="https://github.com/user-attachments/assets/2d1f80ee-5124-4e30-b096-e53ec9be6f4f" />

Após adicionar o curso com as informações desejadas, irá executar o localhost:3000/docs.

<img width="1919" height="1067" alt="image" src="https://github.com/user-attachments/assets/729fa344-5fdd-40e3-83c2-bb213b599099" />

Após inserir o caminho para o Swagger, você irá na parte Api/auth/login 

<img width="1911" height="1066" alt="image" src="https://github.com/user-attachments/assets/ef88301f-1ab8-4912-a4d2-d2881b3afddb" />

você irá preencher com os dados usados para realizar o login e após clicará no "execute"

<img width="1864" height="889" alt="image" src="https://github.com/user-attachments/assets/4b13d5b9-c52a-42ba-9228-ccf2b063e6f2" />

Após pegar o token, abaixo dos dados preenchidos

<img width="1910" height="1002" alt="image" src="https://github.com/user-attachments/assets/68251eac-81fc-4600-9a35-b106d5054a5c" />

Você irá no Api/cursos e clicará em executar e exibirá os cursos cadastrados.
<img width="1909" height="874" alt="image" src="https://github.com/user-attachments/assets/8a239693-51d7-4ca1-a7e7-40dd0f9bf9dd" />






