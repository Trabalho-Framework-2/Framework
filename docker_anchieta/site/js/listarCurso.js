const API_URL = "http://localhost:3000/api";
const token = localStorage.getItem("token");

if (!token) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "index.html";
}

const tabelaBody = document.querySelector("#tabela-cursos tbody");
const mensagem = document.getElementById("mensagem");

async function carregarCursos() {
  try {
    const resposta = await fetch(`${API_URL}/courses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!resposta.ok) throw new Error("Falha ao carregar cursos");

    const cursos = await resposta.json();
    tabelaBody.innerHTML = "";

    cursos.forEach(curso => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${curso.nome}</td>
        <td>${curso.periodo}</td>
        <td>${curso.modulo}</td>
      `;
      tabelaBody.appendChild(row);
    });
  } catch (err) {
    mensagem.textContent = "❌ Erro ao carregar cursos.";
    mensagem.style.color = "red";
  }
}

carregarCursos();

document.querySelector('.sair').addEventListener('click', function (e) {
  localStorage.removeItem('token'); // limpa o token
  window.location.href = 'index.html'; // redireciona para a pagina de login
});

