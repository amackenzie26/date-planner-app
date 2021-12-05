const router = require('express').Router();
const signupRoutes = require('./signup-routes');
const loginRoutes = require('./login-routes');
const suggestionRoutes = require('./suggestion-routes');

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/suggestion', suggestionRoutes);

module.exports = router;