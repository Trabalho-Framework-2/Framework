const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../middleware/auth');

module.exports = {
  // POST /auth/register
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha) return res.status(400).json({ error: 'Campos obrigatórios: nome, email, senha' });

      const exists = await db.User.findOne({ where: { email } });
      if (exists) return res.status(409).json({ error: 'E-mail já cadastrado' });

      const hash = await bcrypt.hash(senha, 10);
      const user = await db.User.create({ nome, email, senha: hash });

      return res.status(201).json({ id: user.id, nome: user.nome, email: user.email });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao registrar' });
    }
  },

  // POST /auth/login
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      if (!email || !senha) return res.status(400).json({ error: 'Informe email e senha' });

      const user = await db.User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

      const ok = await bcrypt.compare(senha, user.senha);
      if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      return res.json({ token, expiresIn: JWT_EXPIRES_IN });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao autenticar' });
    }
  },
};
