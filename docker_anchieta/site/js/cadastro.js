const API_URL = "http://localhost:3000/api";

document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const mensagem = document.getElementById("mensagem");

  try {
    const resposta = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: nome, email: email, senha: senha })
    });

    if (resposta.ok) {
      mensagem.textContent = "✅ Cadastro realizado com sucesso! Vá para o login.";
      mensagem.style.color = "green";
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
