const { Router } = require('express');
const Auth = require('../controllers/authController');
const router = Router();

router.post('/register', Auth.register);
router.post('/login', Auth.login);

module.exports = router;
