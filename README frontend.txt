Interface web que permite aos usuários se cadastrarem, fazerem login, visualizarem cursos disponíveis e adicionarem novos cursos.

FUNCIONALIDADES
---------------

1. CADASTRO DE USUÁRIO
----------------------
Arquivo: cadastro.html + cadastro.js

- O usuário preenche nome, email e senha.
- Ao clicar em "Cadastrar", os dados são enviados via POST para o endpoint de cadastro da API.
- Se o cadastro for bem-sucedido, o usuário é encaminhado para a página de login.

2. LOGIN COM AUTENTICAÇÃO JWT
-----------------------------
Arquivo: index.html + login.js

- O usuário informa email e senha.
- Ao clicar em "Logar", o frontend envia uma requisição POST para o endpoint de login.
- Se as credenciais forem válidas, a API retorna um token JWT.
- Esse token é salvo no localStorage do navegador.
- O token será usado para autenticar todas as requisições protegidas.

3. VERIFICAÇÃO DE AUTENTICAÇÃO
------------------------------
Arquivo: listarCurso.js (e outros scripts protegidos)

- Ao carregar a página, o script verifica se o token existe.
- Se não existir, o usuário é redirecionado para a página de login com uma mensagem de alerta.

4. LISTAGEM DE CURSOS
---------------------
Arquivo: listarCurso.html + listarCurso.js

- Após verificar o token, o script faz uma requisição GET para o endpoint /courses.
- Os cursos recebidos são exibidos em uma tabela HTML com nome, período e módulo.

5. ADIÇÃO DE NOVOS CURSOS
-------------------------
Arquivo: adicionarCurso.html + adicionarCurso.js

- O usuário preenche os dados do curso (nome, período, módulo).
- Ao clicar em "Adicionar", o script envia uma requisição POST para o endpoint /courses.
- O token JWT é incluído no cabeçalho Authorization para autenticação.
- Se o curso for adicionado com sucesso, uma mensagem de confirmação é exibida.

6. BOTÃO "SAIR"
---------------
- Presente em páginas protegidas como listarCurso.html e adicionarCurso.html.
- Ao clicar, o token é removido e o usuário é redirecionado para a página de login.

ESTRUTURA DE ARQUIVOS
---------------------
- index.html              → Página de login
- cadastro.html           → Página de cadastro
- listarCurso.html        → Página de listagem de cursos
- adicionarCurso.html     → Página para adicionar cursos
- login.js                → Script para fazer login
- cadastro.js             → Script para fazer cadastro
- listarCurso.js          → Script para listar cursos
- adicionarCurso.js       → Script para adicionar cursos
- style.css               → Estilos gerais