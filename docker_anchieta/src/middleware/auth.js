const jwt = require('jsonwebtoken');

const JWT_SECRET = 'anchor-super-secret'; // simples pra demo
const JWT_EXPIRES_IN = '1h';

module.exports = {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  authMiddleware: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token ausente' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer' || !parts[1]) {
      return res.status(401).json({ error: 'Token malformado ou ausente' });
    }

    const token = parts[1];

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      req.user = payload; // { id, email }
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
  },
};


