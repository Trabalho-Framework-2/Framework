const jwt = require('jsonwebtoken');

const JWT_SECRET = 'anchor-super-secret'; // simples pra demo
const JWT_EXPIRES_IN = '1h';

module.exports = {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  authMiddleware: (req, res, next) => {
    const auth = req.headers.authorization || '';
    const [, token] = auth.split(' '); // Bearer <token>

    if (!token) return res.status(401).json({ error: 'Token ausente' });

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      req.user = payload; // { id, email }
      return next();
    } catch (e) {
      return res.status(401).json({ error: 'Token inválido/expirado' });
    }
  },
};
