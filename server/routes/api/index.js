const router = require('express').Router();
const signupRoutes = require('./signup-routes');
const loginRoutes = require('./login-routes');

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;