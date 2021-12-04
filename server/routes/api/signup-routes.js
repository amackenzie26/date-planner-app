const router = require('express').Router();

const { createUser } = require('../../controllers/signup-controller');

router.route('/').post(createUser);

module.exports = router;