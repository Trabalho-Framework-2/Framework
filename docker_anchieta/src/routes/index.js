const { Router } = require('express');
const auth = require('./auth');
const courses = require('./courses');

const router = Router();
router.use('/auth', auth);
router.use('/courses', courses);

module.exports = router;
