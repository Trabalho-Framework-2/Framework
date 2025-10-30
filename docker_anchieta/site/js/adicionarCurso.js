const API_URL = "http://localhost:3000/api";
const token = localStorage.getItem("token");

if (!token) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "index.html";
}

const mensagem = document.getElementById("mensagem");

document.getElementById("novoCursoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("curso").value;
  const periodo = document.getElementById("periodo").value;
  const modulo = document.getElementById("modulo").value;

  try {
    const resposta = await fetch(`${API_URL}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ nome: nome, periodo: periodo, modulo: modulo })
    });

    if (resposta.ok) {
      mensagem.textContent = "✅ Curso adicionado com sucesso!";
      mensagem.style.color = "green";
      document.getElementById("novoCursoForm").reset();
    } else {
      const erro = await resposta.json();
      mensagem.textContent = "❌ Erro: " + (erro.message || resposta.statusText);
      mensagem.style.color = "red";
    }
  } catch (err) {
    mensagem.textContent = "❌ Falha na conexão com o servidor.";
    mensagem.style.color = "red";
  }
});

document.querySelector('.sair').addEventListener('click', function (e) {
  localStorage.removeItem('token'); // limpa o token
  window.location.href = 'index.html'; // redireciona para a pagina de login
});
