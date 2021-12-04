const router = require('express').Router();
const signupRoutes = require('./signup-routes');

router.use('/signup', signupRoutes);

module.exports = router;