const { Router } = require('express');
const { authMiddleware } = require('../middleware/auth');
const Course = require('../controllers/courseController');

const router = Router();

router.use(authMiddleware); // tudo abaixo exige JWT
router.get('/', Course.list);
router.post('/', Course.create);

module.exports = router;
