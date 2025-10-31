const { Router } = require('express');
const auth = require('./auth');
const courses = require('./courses');
const { authMiddleware } = require('../middleware/auth');

const router = Router();

router.use('/auth', auth); // rota pública
router.use('/courses', authMiddleware, courses); // rota protegida

module.exports = router;
