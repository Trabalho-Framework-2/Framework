const API_URL = "http://localhost:3000/api";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  try {
    const resposta = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, senha: senha })
    });

    const dados = await resposta.json();

    if (resposta.ok && dados.token) {
      localStorage.setItem("token", dados.token);
      window.location.href = "listarCurso.html";
    } else {
      mensagem.textContent = "❌ Login inválido!";
      mensagem.style.color = "red";
    }
  } catch (err) {
    mensagem.textContent = "❌ Erro de conexão.";
    mensagem.style.color = "red";
  }
});
