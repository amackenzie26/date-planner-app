const router = require('express').Router();
const signupRoutes = require('./signiup-routes');

router.use('/signup', signupRoutes);

module.exports = router;
