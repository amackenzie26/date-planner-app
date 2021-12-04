const router = require('express').Router();

const { authenticateUser } = require('../../controllers/login-controller');

router.route('/').post(authenticateUser);

module.exports = router;